/**
 * Fortschritts-Logik: Freischaltung, Lernpfad-Modell und Empfehlung der nächsten Aktivität.
 * Rein funktional (bekommt Tracks + Zustand übergeben) und damit testbar.
 */
import { CEFR_LEVELS, type Cefr, type Lesson, type Track, type Unit } from '../content/schema'
import type { AppState } from '../state/types'

type ProgressState = Pick<AppState, 'lessons' | 'testedOut' | 'tracks' | 'mistakes' | 'srs' | 'chests' | 'unitReviews'>

export interface PlayableLesson {
  lesson: Lesson
  unit: Unit
}

export function playableLessons(track: Track): PlayableLesson[] {
  return track.units.flatMap((unit) => unit.lessons.map((lesson) => ({ lesson, unit })))
}

export function isLessonDone(s: ProgressState, lessonId: string, unitId: string): boolean {
  return (s.lessons[lessonId]?.completions ?? 0) > 0 || s.testedOut.includes(unitId)
}

export function crownLevel(s: ProgressState, lessonId: string): number {
  return Math.min(5, s.lessons[lessonId]?.completions ?? 0)
}

export type LessonStatus = 'locked' | 'available' | 'done'

/** Status aller spielbaren Lektionen eines Tracks (sequenzielle Freischaltung). */
export function lessonStatuses(s: ProgressState, track: Track): Map<string, LessonStatus> {
  const out = new Map<string, LessonStatus>()
  let prevDone = true
  for (const { lesson, unit } of playableLessons(track)) {
    const done = isLessonDone(s, lesson.id, unit.id)
    out.set(lesson.id, done ? 'done' : prevDone ? 'available' : 'locked')
    prevDone = done
  }
  return out
}

export function isUnitDone(s: ProgressState, unit: Unit): boolean {
  if (s.testedOut.includes(unit.id)) return true
  if (unit.status !== 'ready') return false
  return unit.lessons.every((l) => isLessonDone(s, l.id, unit.id))
}

/** Unit, deren fertige Lektionen alle erledigt sind (auch partial). */
export function isUnitPlayedThrough(s: ProgressState, unit: Unit): boolean {
  return unit.lessons.length > 0 && unit.lessons.every((l) => isLessonDone(s, l.id, unit.id))
}

/** Nächste offene Lektion eines Tracks oder null. */
export function nextLessonInTrack(s: ProgressState, track: Track): PlayableLesson | null {
  const statuses = lessonStatuses(s, track)
  return playableLessons(track).find(({ lesson }) => statuses.get(lesson.id) === 'available') ?? null
}

/** Einstufung → Units unterhalb des Niveaus gelten als bestanden. */
export function unitsBelowLevel(core: Track, level: Cefr): string[] {
  const idx = CEFR_LEVELS.indexOf(level)
  return core.units.filter((u) => CEFR_LEVELS.indexOf(u.cefr) < idx).map((u) => u.id)
}

/** Erste Unit auf oder über dem Niveau (Einstiegspunkt laut Test). */
export function startUnitForLevel(core: Track, level: Cefr): Unit | null {
  const idx = CEFR_LEVELS.indexOf(level)
  return core.units.find((u) => CEFR_LEVELS.indexOf(u.cefr) >= idx) ?? null
}

/** Meilenstein-Unit, die abgeschlossen ist, deren Weggabelung aber noch nicht gezeigt wurde. */
export function pendingFork(s: ProgressState, core: Track): Unit | null {
  return core.units.find((u) => u.milestone && !s.tracks.forksSeen.includes(u.id) && (isUnitDone(s, u) || isUnitPlayedThrough(s, u))) ?? null
}

export const MISTAKE_BOX_FULL = 8
export const DUE_REVIEW_MIN = 6

export type Recommendation =
  | { kind: 'lesson'; lessonId: string; trackId: string; title: string; unitTitle: string }
  | { kind: 'practice'; mode: 'mistakes' | 'due'; count: number }
  | { kind: 'fork' }
  | { kind: 'all-done' }

/**
 * Empfehlung für den großen „WEITER LERNEN“-Button.
 * Reihenfolge: offene Weggabelung → volle Fehlerkiste → nächste Lektion im aktiven Track →
 * andere gewählte Tracks → fällige Wörter → Weggabelung → alles erledigt.
 */
export function recommend(
  s: ProgressState,
  tracks: Track[],
  opts: { now: number; practicedToday: boolean },
): Recommendation {
  const core = tracks.find((t) => t.kind === 'core')!
  if (pendingFork(s, core)) return { kind: 'fork' }

  const mistakes = Object.keys(s.mistakes).length
  if (mistakes >= MISTAKE_BOX_FULL && !opts.practicedToday) return { kind: 'practice', mode: 'mistakes', count: mistakes }

  const visible = [core, ...s.tracks.chosen.map((id) => tracks.find((t) => t.id === id)).filter((t): t is Track => !!t)]
  const active = visible.find((t) => t.id === s.tracks.active) ?? core
  const order = [active, ...visible.filter((t) => t !== active)]
  for (const track of order) {
    const next = nextLessonInTrack(s, track)
    if (next) return { kind: 'lesson', lessonId: next.lesson.id, trackId: track.id, title: next.lesson.title, unitTitle: next.unit.title }
  }

  const due = Object.values(s.srs).filter((w) => w.due <= opts.now).length
  if (due >= DUE_REVIEW_MIN) return { kind: 'practice', mode: 'due', count: due }
  const unchosen = tracks.filter((t) => t.kind === 'specialization' && !s.tracks.chosen.includes(t.id) && t.units.some((u) => u.lessons.length))
  if (unchosen.length) return { kind: 'fork' }
  return { kind: 'all-done' }
}

/* ─────────────────────────── Lernpfad-Modell ─────────────────────────── */

export type PathNode =
  | { kind: 'lesson'; id: string; lesson: Lesson; status: LessonStatus; crowns: number; current: boolean }
  | { kind: 'planned'; id: string; title: string }
  | { kind: 'chest'; id: string; status: 'locked' | 'available' | 'opened' }
  | { kind: 'trophy'; id: string; status: 'locked' | 'available' | 'done' }
  | { kind: 'fork'; id: string; status: 'locked' | 'available' }

export interface PathUnit {
  unit: Unit
  nodes: PathNode[]
  done: boolean
  testedOut: boolean
}

/** Knotenliste einer Unit: Lektionen, Truhe nach der 2. Lektion, Pokal (Unit-Wiederholung), ggf. Weggabelung. */
export function buildPath(s: ProgressState, track: Track, currentLessonId: string | null): PathUnit[] {
  const statuses = lessonStatuses(s, track)
  return track.units.map((unit) => {
    const nodes: PathNode[] = []
    unit.lessons.forEach((lesson, i) => {
      const status = statuses.get(lesson.id) ?? 'locked'
      nodes.push({ kind: 'lesson', id: lesson.id, lesson, status, crowns: crownLevel(s, lesson.id), current: lesson.id === currentLessonId })
      if (i === 1 && unit.lessons.length >= 3) {
        const before = unit.lessons.slice(0, 2).every((l) => isLessonDone(s, l.id, unit.id))
        nodes.push({ kind: 'chest', id: `${unit.id}:chest`, status: s.chests.includes(unit.id) ? 'opened' : before ? 'available' : 'locked' })
      }
    })
    for (const [i, title] of (unit.plannedLessons ?? []).entries()) nodes.push({ kind: 'planned', id: `${unit.id}:planned:${i}`, title })
    if (unit.lessons.length >= 2) {
      const ready = isUnitPlayedThrough(s, unit)
      nodes.push({ kind: 'trophy', id: `${unit.id}:trophy`, status: s.unitReviews.includes(unit.id) ? 'done' : ready ? 'available' : 'locked' })
    }
    if (unit.milestone) {
      const reached = isUnitDone(s, unit) || isUnitPlayedThrough(s, unit)
      nodes.push({ kind: 'fork', id: `${unit.id}:fork`, status: reached ? 'available' : 'locked' })
    }
    return { unit, nodes, done: isUnitDone(s, unit), testedOut: s.testedOut.includes(unit.id) }
  })
}

/** Spezialisierungs-Vorschläge passend zu den Interessen (beste zuerst). */
export function suggestTracks(tracks: Track[], interests: string[], chosen: string[]): { track: Track; score: number; matched: string[] }[] {
  return tracks
    .filter((t) => t.kind === 'specialization' && !chosen.includes(t.id))
    .map((track) => {
      const matched = track.interests.filter((i) => interests.includes(i))
      // Primäres Interesse (erstes im Track) zählt doppelt, fertige Inhalte geben einen Bonus.
      const score =
        matched.reduce((sum, i) => sum + (i === track.interests[0] ? 2 : 1), 0) + (track.units.some((u) => u.lessons.length) ? 0.5 : 0)
      return { track, score, matched }
    })
    .sort((a, b) => b.score - a.score)
}
