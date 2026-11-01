/**
 * Content-Registry: bündelt alle Tracks, Vokabeln und die Einstufungs-Fragenbank
 * und stellt Lookup-Tabellen bereit. Neue Tracks/Vokabellisten hier registrieren.
 */
import { draftUnits, draftVocab } from './drafts'
import { placementQuestions } from './placement/questions'
import type { Cefr, Lesson, PlacementQuestion, Track, Unit, VocabEntry } from './schema'
import { careerTrack } from './tracks/career'
import { coreTrack } from './tracks/core'
import { vocab as coreA1u1 } from './tracks/core/vocab-a1u1'
import { vocab as coreA1u2 } from './tracks/core/vocab-a1u2'
import { vocab as coreA2u1 } from './tracks/core/vocab-a2u1'
import { everydayTrack } from './tracks/everyday'
import { healthTrack } from './tracks/health'
import { techTrack } from './tracks/tech'
import { travelTrack } from './tracks/travel'
import { vocab as travelVocab } from './tracks/travel/vocab'
import { treasuryTrack } from './tracks/treasury'
import { vocab as treasuryVocab } from './tracks/treasury/vocab'

/** Ersetzt Gerüst-Units (ohne Lektionen) durch fertige Entwürfe gleicher ID; Meilenstein-Flag bleibt erhalten. */
const draftById = new Map(draftUnits.map((u) => [u.id, u]))
const withDrafts = (t: Track): Track => ({
  ...t,
  units: t.units.map((u) => {
    const d = u.lessons.length === 0 ? draftById.get(u.id) : undefined
    return d ? { ...d, milestone: u.milestone ?? d.milestone } : u
  }),
})

export const tracks: Track[] = [coreTrack, treasuryTrack, travelTrack, techTrack, careerTrack, everydayTrack, healthTrack].map(withDrafts)
export const vocabulary: VocabEntry[] = [...coreA1u1, ...coreA1u2, ...coreA2u1, ...treasuryVocab, ...travelVocab, ...draftVocab]
export const placementBank: PlacementQuestion[] = placementQuestions

export const core = coreTrack
export const specializations = tracks.filter((t) => t.kind === 'specialization')

export interface LessonRef {
  lesson: Lesson
  unit: Unit
  track: Track
  /** Position der Lektion innerhalb der Unit (0-basiert). */
  index: number
}

export const trackById = new Map(tracks.map((t) => [t.id, t]))
export const vocabById = new Map(vocabulary.map((v) => [v.id, v]))
export const unitById = new Map<string, { unit: Unit; track: Track }>()
export const lessonById = new Map<string, LessonRef>()
for (const track of tracks) {
  for (const unit of track.units) {
    unitById.set(unit.id, { unit, track })
    unit.lessons.forEach((lesson, index) => lessonById.set(lesson.id, { lesson, unit, track, index }))
  }
}

/** Alle Vokabel-IDs einer Unit (eingeführt oder in Aufgaben geübt). */
export function unitWords(unit: Unit): string[] {
  const set = new Set<string>()
  for (const l of unit.lessons) {
    for (const w of l.introduces ?? []) set.add(w)
    for (const e of l.exercises) {
      if (e.type === 'intro') set.add(e.word)
      for (const w of e.words ?? []) set.add(w)
    }
  }
  return [...set].filter((w) => vocabById.has(w))
}

export function cefrIndex(c: Cefr): number {
  return ['A1', 'A2', 'B1', 'B2', 'C1'].indexOf(c)
}
