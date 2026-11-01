import { describe, expect, it } from 'vitest'
import type { Exercise, Lesson, Track, Unit } from '../../content/schema'
import { defaultState } from '../../state/store'
import type { AppState } from '../../state/types'
import { buildCurriculum, CHAPTER_EVERY, curriculumStatuses, nextLessonInCurriculum, recommend } from '../progress'

const NOW = 1_800_000_000_000
const ex: Exercise = { id: 'e1', type: 'speak', text: 'hi' }
const lesson = (id: string): Lesson => ({ id, title: id, exercises: [ex] })
const unit = (id: string, n: number): Unit => ({
  id,
  title: id,
  description: '',
  cefr: 'A1',
  color: 'green',
  icon: '📘',
  topics: ['x'],
  status: n ? 'ready' : 'planned',
  lessons: Array.from({ length: n }, (_, i) => lesson(`${id}.l${i + 1}`)),
})
const track = (id: string, kind: Track['kind'], units: Unit[]): Track => ({
  id,
  kind,
  title: id,
  subtitle: '',
  description: '',
  icon: '🎓',
  color: 'blue',
  interests: [],
  units,
})

const core = track('core', 'core', [unit('c1', 2), unit('c2', 2), unit('c3', 2), unit('c4', 2), unit('c5', 0)])
const fin = track('fin', 'specialization', [unit('f1', 2), unit('f2', 2)])
const travel = track('travel', 'specialization', [unit('t1', 2)])
const all = [core, fin, travel]
const withState = (over: Partial<AppState> = {}): AppState => ({ ...defaultState(), ...over })
const ids = (cur: ReturnType<typeof buildCurriculum>) => cur.map((e) => e.unit.id)

describe('buildCurriculum', () => {
  it('ohne Spezialisierung nur der Basiskurs', () => {
    expect(ids(buildCurriculum(all, []))).toEqual(['c1', 'c2', 'c3', 'c4', 'c5'])
  })

  it('setzt nach je CHAPTER_EVERY Basis-Units ein Kapitel ein', () => {
    expect(CHAPTER_EVERY).toBe(2)
    expect(ids(buildCurriculum(all, ['fin']))).toEqual(['c1', 'c2', 'f1', 'c3', 'c4', 'f2', 'c5'])
  })

  it('wechselt reihum zwischen mehreren gewählten Tracks', () => {
    expect(ids(buildCurriculum(all, ['fin', 'travel']))).toEqual(['c1', 'c2', 'f1', 'c3', 'c4', 't1', 'c5', 'f2'])
  })

  it('markiert Kapitel und lässt keine Spezialisierungs-Unit verloren gehen', () => {
    const cur = buildCurriculum(all, ['fin', 'travel'])
    expect(cur.filter((e) => e.chapter).map((e) => e.unit.id).sort()).toEqual(['f1', 'f2', 't1'])
    expect(cur.filter((e) => !e.chapter).every((e) => e.track.kind === 'core')).toBe(true)
  })

  it('ignoriert unbekannte Tracks und Tracks ohne fertige Lektionen', () => {
    const empty = track('empty', 'specialization', [unit('e1', 0)])
    expect(ids(buildCurriculum([core, empty], ['empty', 'gibtsnicht']))).toEqual(['c1', 'c2', 'c3', 'c4', 'c5'])
  })
})

describe('curriculumStatuses & nextLessonInCurriculum', () => {
  const cur = buildCurriculum(all, ['fin'])

  it('Kapitel bleibt gesperrt, bis die davor liegende Basis-Unit fertig ist', () => {
    const st = curriculumStatuses(withState(), cur)
    expect(st.get('f1.l1')).toBe('locked')
    expect(st.get('c1.l1')).toBe('available')
  })

  it('nach Basis-Unit 2 wird das Kapitel freigeschaltet und zuerst empfohlen', () => {
    const s = withState({
      lessons: {
        'c1.l1': { completions: 1 }, 'c1.l2': { completions: 1 }, 'c2.l1': { completions: 1 }, 'c2.l2': { completions: 1 },
      } as unknown as AppState['lessons'],
    })
    const next = nextLessonInCurriculum(s, cur)
    expect(next?.lesson.id).toBe('f1.l1')
    expect(next?.chapter).toBe(true)
  })

  it('Kapitel blockiert den Basiskurs nie (Basis-Lektionen hängen nur an der Basis)', () => {
    const s = withState({
      lessons: {
        'c1.l1': { completions: 1 }, 'c1.l2': { completions: 1 }, 'c2.l1': { completions: 1 }, 'c2.l2': { completions: 1 },
      } as unknown as AppState['lessons'],
    })
    expect(curriculumStatuses(s, cur).get('c3.l1')).toBe('available')
  })

  it('innerhalb des Kapitels sequentiell', () => {
    const s = withState({
      lessons: {
        'c1.l1': { completions: 1 }, 'c1.l2': { completions: 1 }, 'c2.l1': { completions: 1 }, 'c2.l2': { completions: 1 }, 'f1.l1': { completions: 1 },
      } as unknown as AppState['lessons'],
    })
    const st = curriculumStatuses(s, cur)
    expect(st.get('f1.l2')).toBe('available')
    expect(st.get('f2.l1')).toBe('locked')
  })

  it('recommend nutzt die Pfad-Reihenfolge inklusive Kapitel', () => {
    const s = withState({
      tracks: { ...defaultState().tracks, chosen: ['fin'], forksSeen: ['c2'] },
      lessons: {
        'c1.l1': { completions: 1 }, 'c1.l2': { completions: 1 }, 'c2.l1': { completions: 1 }, 'c2.l2': { completions: 1 },
      } as unknown as AppState['lessons'],
    })
    const rec = recommend(s, all, { now: NOW, practicedToday: true })
    expect(rec).toMatchObject({ kind: 'lesson', lessonId: 'f1.l1', trackId: 'fin' })
  })
})
