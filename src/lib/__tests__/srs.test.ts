import { describe, expect, it } from 'vitest'
import { DAY, MINUTE } from '../date'
import { INTERVALS, MAX_BOX, type SrsMap, type WordState, dueWords, reviewWord, strength, weakWords, weakness } from '../srs'

const T0 = 1_800_000_000_000

describe('reviewWord', () => {
  it('neues Wort, richtig: Box 1, Intervall 1 Tag', () => {
    const s = reviewWord(undefined, true, T0)
    expect(s).toMatchObject({ box: 1, seen: 1, correct: 1, wrong: 0, last: T0 })
    expect(s.due).toBe(T0 + INTERVALS[1])
  })

  it('neues Wort, falsch: Box 0, in 10 Minuten wieder fällig', () => {
    const s = reviewWord(undefined, false, T0)
    expect(s).toMatchObject({ box: 0, seen: 1, correct: 0, wrong: 1 })
    expect(s.due).toBe(T0 + 10 * MINUTE)
  })

  it('Intervalle wachsen mit jeder richtigen Antwort', () => {
    let s: WordState | undefined
    const gaps: number[] = []
    for (let i = 0; i < MAX_BOX; i++) {
      s = reviewWord(s, true, T0)
      gaps.push(s.due - T0)
    }
    expect(gaps).toEqual(INTERVALS.slice(1))
    expect([...gaps].sort((a, b) => a - b)).toEqual(gaps)
  })

  it('bleibt in der höchsten Box (30 Tage)', () => {
    let s: WordState | undefined
    for (let i = 0; i < 12; i++) s = reviewWord(s, true, T0)
    expect(s!.box).toBe(MAX_BOX)
    expect(s!.due - T0).toBe(30 * DAY)
  })

  it('ein Fehler wirft das Wort zurück in Box 0 und zählt mit', () => {
    let s = reviewWord(undefined, true, T0)
    s = reviewWord(s, true, T0)
    s = reviewWord(s, false, T0 + DAY)
    expect(s.box).toBe(0)
    expect(s.correct).toBe(2)
    expect(s.wrong).toBe(1)
    expect(s.seen).toBe(3)
  })

  it('verändert den Eingabezustand nicht', () => {
    const prev = reviewWord(undefined, true, T0)
    const copy = { ...prev }
    reviewWord(prev, false, T0 + 1)
    expect(prev).toEqual(copy)
  })
})

describe('dueWords', () => {
  const mk = (due: number): WordState => ({ box: 1, due, seen: 1, correct: 1, wrong: 0, last: T0 })

  it('liefert nur fällige Wörter, überfälligste zuerst', () => {
    const srs: SrsMap = { late: mk(T0 - 5 * DAY), now: mk(T0), future: mk(T0 + 1), older: mk(T0 - 10 * DAY) }
    expect(dueWords(srs, T0)).toEqual(['older', 'late', 'now'])
  })

  it('leere Map → leere Liste', () => {
    expect(dueWords({}, T0)).toEqual([])
  })

  it('frisch falsch beantwortetes Wort ist nach 10 Minuten wieder fällig, vorher nicht', () => {
    const srs = { w: reviewWord(undefined, false, T0) }
    expect(dueWords(srs, T0 + 9 * MINUTE)).toEqual([])
    expect(dueWords(srs, T0 + 10 * MINUTE)).toEqual(['w'])
  })
})

describe('weakness / weakWords / strength', () => {
  const st = (over: Partial<WordState>): WordState => ({ box: 3, due: T0, seen: 4, correct: 4, wrong: 0, last: T0, ...over })

  it('mehr Fehler und niedrigere Box → höhere Schwäche', () => {
    expect(weakness(st({ wrong: 3, correct: 1, box: 0 }), T0)).toBeGreaterThan(weakness(st({}), T0))
  })

  it('sortiert schwächste zuerst und respektiert das Limit', () => {
    const srs: SrsMap = {
      strong: st({ box: 5 }),
      weak: st({ box: 0, wrong: 4, correct: 1 }),
      mid: st({ box: 1, wrong: 1, correct: 3 }),
    }
    expect(weakWords(srs, T0)).toEqual(['weak', 'mid'])
    expect(weakWords(srs, T0, 1)).toEqual(['weak'])
  })

  it('strength skaliert Box auf 0–1', () => {
    expect(strength(undefined)).toBe(0)
    expect(strength(st({ box: MAX_BOX }))).toBe(1)
  })
})
