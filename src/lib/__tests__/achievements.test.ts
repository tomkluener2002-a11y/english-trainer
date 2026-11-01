import { describe, expect, it } from 'vitest'
import { defaultState } from '../../state/store'
import type { AppState } from '../../state/types'
import { ACHIEVEMENTS, newlyUnlocked } from '../achievements'

const ids = (s: AppState) => newlyUnlocked(s).map((a) => a.id)
const fresh = () => defaultState(1_800_000_000_000)

describe('Erfolge', () => {
  it('IDs sind eindeutig und Ziele positiv', () => {
    expect(new Set(ACHIEVEMENTS.map((a) => a.id)).size).toBe(ACHIEVEMENTS.length)
    for (const a of ACHIEVEMENTS) expect(a.target).toBeGreaterThan(0)
  })

  it('ein frischer Zustand schaltet nichts frei', () => {
    expect(ids(fresh())).toEqual([])
  })

  it('erste Lektion → "first-lesson", ab 10 auch "lessons-10"', () => {
    const s = fresh()
    s.stats.lessons = 1
    expect(ids(s)).toEqual(['first-lesson'])
    s.stats.lessons = 10
    expect(ids(s)).toEqual(expect.arrayContaining(['first-lesson', 'lessons-10']))
    expect(ids(s)).not.toContain('lessons-50')
  })

  it('bereits freigeschaltete Erfolge werden nicht erneut gemeldet', () => {
    const s = fresh()
    s.stats.lessons = 1
    s.achievements['first-lesson'] = 123
    expect(ids(s)).toEqual([])
  })

  it('Streak-Erfolge nutzen den längsten Streak', () => {
    const s = fresh()
    s.streak.longest = 7
    expect(ids(s)).toEqual(expect.arrayContaining(['streak-3', 'streak-7']))
    expect(ids(s)).not.toContain('streak-30')
  })

  it('XP-Erfolge', () => {
    const s = fresh()
    s.xp.total = 99
    expect(ids(s)).not.toContain('xp-100')
    s.xp.total = 100
    expect(ids(s)).toContain('xp-100')
  })

  it('Wortschatz zählt nur Wörter ab Box 2', () => {
    const s = fresh()
    for (let i = 0; i < 30; i++) s.srs[`w${i}`] = { box: i < 24 ? 2 : 1, due: 0, seen: 1, correct: 1, wrong: 0, last: 0 }
    expect(ids(s)).not.toContain('words-25')
    s.srs.w24.box = 2
    expect(ids(s)).toContain('words-25')
  })

  it('Marathon: 5 Lektionen an einem Tag', () => {
    const s = fresh()
    s.stats.lessonsByDay = { '2026-01-01': 3, '2026-01-02': 5 }
    expect(ids(s)).toContain('marathon')
    s.stats.lessonsByDay = { '2026-01-01': 4 }
    expect(ids(s)).not.toContain('marathon')
  })

  it('Einstufung, Spezialisierung und Entdecker', () => {
    const s = fresh()
    s.placement.done = true
    s.tracks.chosen = ['treasury']
    expect(ids(s)).toEqual(expect.arrayContaining(['placement', 'specialist']))
    expect(ids(s)).not.toContain('explorer')
    s.tracks.chosen = ['treasury', 'travel']
    expect(ids(s)).toContain('explorer')
  })
})
