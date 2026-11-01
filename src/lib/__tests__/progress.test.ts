import { describe, expect, it } from 'vitest'
import type { Exercise, Lesson, Track, Unit } from '../../content/schema'
import { defaultState } from '../../state/store'
import type { AppState } from '../../state/types'
import {
  DUE_REVIEW_MIN,
  MISTAKE_BOX_FULL,
  buildPath,
  crownLevel,
  isUnitDone,
  lessonStatuses,
  nextLessonInTrack,
  pendingFork,
  recommend,
  startUnitForLevel,
  suggestTracks,
  unitsBelowLevel,
} from '../progress'

const NOW = 1_800_000_000_000
const ex: Exercise = { id: 'e1', type: 'speak', text: 'hi' }
const lesson = (id: string): Lesson => ({ id, title: id, exercises: [ex] })
const unit = (id: string, n: number, over: Partial<Unit> = {}): Unit => ({
  id,
  title: id,
  description: '',
  cefr: 'A1',
  color: 'green',
  icon: '📘',
  topics: ['x'],
  status: 'ready',
  lessons: Array.from({ length: n }, (_, i) => lesson(`${id}.l${i + 1}`)),
  ...over,
})
const track = (id: string, kind: Track['kind'], units: Unit[], over: Partial<Track> = {}): Track => ({
  id,
  kind,
  title: id,
  subtitle: '',
  description: '',
  icon: '🎓',
  color: 'blue',
  interests: [],
  units,
  ...over,
})

const core = track('core', 'core', [
  unit('core.a1u1', 3),
  unit('core.a1u2', 3, { milestone: true }),
  unit('core.a2u1', 3, { cefr: 'A2' }),
  unit('core.b1u1', 3, { cefr: 'B1' }),
])
const fin = track('fin', 'specialization', [unit('fin.u1', 3)], { interests: ['business', 'career'] })
const travel = track('travel', 'specialization', [unit('travel.u1', 3)], { interests: ['travel'] })
const tracks = [core, fin, travel]

const done = (s: AppState, ...ids: string[]) => {
  for (const id of ids) s.lessons[id] = { completions: 1, bestAccuracy: 100, lastAt: NOW }
}
const fresh = (): AppState => defaultState(NOW)
const rec = (s: AppState, practicedToday = false) => recommend(s, tracks, { now: NOW, practicedToday })

describe('Lektions-Freischaltung', () => {
  it('nur die erste Lektion ist anfangs verfügbar, der Rest gesperrt', () => {
    const st = lessonStatuses(fresh(), core)
    expect(st.get('core.a1u1.l1')).toBe('available')
    expect(st.get('core.a1u1.l2')).toBe('locked')
    expect(st.get('core.a1u2.l1')).toBe('locked')
  })

  it('schaltet sequenziell frei', () => {
    const s = fresh()
    done(s, 'core.a1u1.l1', 'core.a1u1.l2')
    const st = lessonStatuses(s, core)
    expect(st.get('core.a1u1.l1')).toBe('done')
    expect(st.get('core.a1u1.l3')).toBe('available')
    expect(st.get('core.a1u2.l1')).toBe('locked')
  })

  it('per Einstufung übersprungene Units (testedOut) zählen als erledigt', () => {
    const s = fresh()
    s.testedOut = ['core.a1u1']
    expect(lessonStatuses(s, core).get('core.a1u1.l3')).toBe('done')
    expect(lessonStatuses(s, core).get('core.a1u2.l1')).toBe('available')
    expect(isUnitDone(s, core.units[0])).toBe(true)
  })

  it('nextLessonInTrack und Kronen', () => {
    const s = fresh()
    expect(nextLessonInTrack(s, core)?.lesson.id).toBe('core.a1u1.l1')
    done(s, 'core.a1u1.l1')
    expect(nextLessonInTrack(s, core)?.lesson.id).toBe('core.a1u1.l2')
    s.lessons['core.a1u1.l1'].completions = 9
    expect(crownLevel(s, 'core.a1u1.l1')).toBe(5)
    expect(crownLevel(s, 'unknown')).toBe(0)
  })

  it('nextLessonInTrack ist null, wenn alles erledigt ist', () => {
    const s = fresh()
    s.testedOut = core.units.map((u) => u.id)
    expect(nextLessonInTrack(s, core)).toBeNull()
  })

  it('partial/planned-Unit gilt nicht als erledigt, auch wenn alle fertigen Lektionen gespielt sind', () => {
    const u = unit('x.u1', 2, { status: 'partial', plannedLessons: ['Mehr'] })
    const s = fresh()
    done(s, 'x.u1.l1', 'x.u1.l2')
    expect(isUnitDone(s, u)).toBe(false)
  })
})

describe('Einstufung → Startpunkt', () => {
  it('unitsBelowLevel liefert Units unterhalb des Niveaus', () => {
    expect(unitsBelowLevel(core, 'A1')).toEqual([])
    expect(unitsBelowLevel(core, 'A2')).toEqual(['core.a1u1', 'core.a1u2'])
    expect(unitsBelowLevel(core, 'B1')).toEqual(['core.a1u1', 'core.a1u2', 'core.a2u1'])
  })

  it('startUnitForLevel: erste Unit auf/über Niveau; null, wenn es keine gibt', () => {
    expect(startUnitForLevel(core, 'A2')?.id).toBe('core.a2u1')
    expect(startUnitForLevel(core, 'C1')).toBeNull()
  })

  it('nach Einstufung B1 empfiehlt der Pfad die erste B1-Lektion', () => {
    const s = fresh()
    s.testedOut = unitsBelowLevel(core, 'B1')
    expect(nextLessonInTrack(s, core)?.lesson.id).toBe('core.b1u1.l1')
  })
})

describe('Empfehlung "Weiter lernen"', () => {
  it('Neuling: erste Lektion des Basiskurses', () => {
    expect(rec(fresh())).toMatchObject({ kind: 'lesson', lessonId: 'core.a1u1.l1', trackId: 'core' })
  })

  it('folgt dem Fortschritt', () => {
    const s = fresh()
    done(s, 'core.a1u1.l1')
    expect(rec(s)).toMatchObject({ kind: 'lesson', lessonId: 'core.a1u1.l2' })
  })

  it('Weggabelung hat Vorrang, sobald der Meilenstein durchgespielt ist – einmalig', () => {
    const s = fresh()
    done(s, 'core.a1u1.l1', 'core.a1u1.l2', 'core.a1u1.l3', 'core.a1u2.l1', 'core.a1u2.l2', 'core.a1u2.l3')
    expect(pendingFork(s, core)?.id).toBe('core.a1u2')
    expect(rec(s)).toEqual({ kind: 'fork' })
    s.tracks.forksSeen.push('core.a1u2')
    expect(pendingFork(s, core)).toBeNull()
    expect(rec(s)).toMatchObject({ kind: 'lesson', lessonId: 'core.a2u1.l1' })
  })

  it('volle Fehlerkiste → Fehler-Übung, aber nur einmal pro Tag', () => {
    const s = fresh()
    for (let i = 0; i < MISTAKE_BOX_FULL; i++) s.mistakes[`k${i}`] = { at: NOW, count: 1 }
    expect(rec(s)).toEqual({ kind: 'practice', mode: 'mistakes', count: MISTAKE_BOX_FULL })
    expect(rec(s, true).kind).toBe('lesson')
  })

  it('Spezialisierung kommt als Kapitel in Pfad-Reihenfolge, der aktive Track wird nicht mehr bevorzugt', () => {
    const s = fresh()
    s.tracks.chosen = ['fin']
    s.tracks.active = 'fin'
    // Frisch gestartet: zuerst der Basiskurs, das Kapitel ist noch gesperrt.
    expect(rec(s)).toMatchObject({ kind: 'lesson', trackId: 'core' })
  })

  it('ungewählte Tracks werden nicht empfohlen', () => {
    const s = fresh()
    s.tracks.active = 'travel'
    expect(rec(s)).toMatchObject({ trackId: 'core' })
  })

  describe('alles gespielt', () => {
    const allDone = () => {
      const s = fresh()
      s.testedOut = core.units.map((u) => u.id)
      s.tracks.chosen = ['fin', 'travel']
      s.testedOut.push('fin.u1', 'travel.u1')
      s.tracks.forksSeen = core.units.map((u) => u.id)
      return s
    }

    it('fällige Wörter ab Schwelle → Übung', () => {
      const s = allDone()
      for (let i = 0; i < DUE_REVIEW_MIN; i++) s.srs[`w${i}`] = { box: 1, due: NOW - 1, seen: 1, correct: 1, wrong: 0, last: NOW }
      expect(rec(s)).toEqual({ kind: 'practice', mode: 'due', count: DUE_REVIEW_MIN })
    })

    it('sonst: alles erledigt', () => {
      expect(rec(allDone())).toEqual({ kind: 'all-done' })
    })

    it('ungewählte Spezialisierung mit Inhalten → Weggabelung statt "alles erledigt"', () => {
      const s = allDone()
      s.tracks.chosen = ['fin']
      expect(rec(s)).toEqual({ kind: 'fork' })
    })
  })
})

describe('Lernpfad-Modell', () => {
  it('enthält Lektionen, Truhe nach der 2. Lektion, Pokal und bei Meilenstein eine Gabel', () => {
    const [u1, u2] = buildPath(fresh(), core, null)
    expect(u1.nodes.map((n) => n.kind)).toEqual(['lesson', 'lesson', 'chest', 'lesson', 'trophy'])
    expect(u2.nodes.map((n) => n.kind).at(-1)).toBe('fork')
  })

  it('Truhe und Pokal werden nach Fortschritt verfügbar', () => {
    const s = fresh()
    done(s, 'core.a1u1.l1', 'core.a1u1.l2')
    let nodes = buildPath(s, core, null)[0].nodes
    expect(nodes.find((n) => n.kind === 'chest')).toMatchObject({ status: 'available' })
    expect(nodes.find((n) => n.kind === 'trophy')).toMatchObject({ status: 'locked' })
    done(s, 'core.a1u1.l3')
    s.chests.push('core.a1u1')
    nodes = buildPath(s, core, null)[0].nodes
    expect(nodes.find((n) => n.kind === 'chest')).toMatchObject({ status: 'opened' })
    expect(nodes.find((n) => n.kind === 'trophy')).toMatchObject({ status: 'available' })
  })

  it('markiert die aktuelle Lektion', () => {
    const nodes = buildPath(fresh(), core, 'core.a1u1.l1')[0].nodes
    expect(nodes[0]).toMatchObject({ kind: 'lesson', current: true, status: 'available' })
  })
})

describe('Spezialisierungs-Vorschläge', () => {
  it('sortiert nach Interessen-Treffern; Gewählte fehlen', () => {
    const out = suggestTracks(tracks, ['travel'], [])
    expect(out.map((o) => o.track.id)).toEqual(['travel', 'fin'])
    expect(out[0].matched).toEqual(['travel'])
    expect(suggestTracks(tracks, ['travel'], ['travel']).map((o) => o.track.id)).toEqual(['fin'])
  })

  it('primäres Interesse zählt mehr als sekundäres', () => {
    const [first] = suggestTracks(tracks, ['career'], [])
    const [firstBiz] = suggestTracks(tracks, ['business'], [])
    expect(firstBiz.score).toBeGreaterThan(first.score)
  })
})
