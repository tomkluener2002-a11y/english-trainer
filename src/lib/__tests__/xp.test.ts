import { describe, expect, it } from 'vitest'
import { DAILY_GOALS, accuracy, bestDay, sessionGems, sessionXp, weekXp, xpToday } from '../xp'

describe('XP', () => {
  it('fehlerfreie Sessions geben Bonus-XP', () => {
    expect(sessionXp('lesson', 0)).toBeGreaterThan(sessionXp('lesson', 3))
    expect(sessionXp('practice', 0)).toBeGreaterThan(sessionXp('practice', 1))
    expect(sessionXp('unit-review', 0)).toBeGreaterThan(sessionXp('unit-review', 1))
  })

  it('Lektion: 10 XP, +5 perfekt', () => {
    expect(sessionXp('lesson', 2)).toBe(10)
    expect(sessionXp('lesson', 0)).toBe(15)
  })

  it('Unit-Wiederholung gibt mehr XP als Übung', () => {
    expect(sessionXp('unit-review', 1)).toBeGreaterThan(sessionXp('practice', 1))
  })

  it('Gems: Übung immer 2, Lektion 5 (+5 perfekt)', () => {
    expect(sessionGems('practice', 0)).toBe(2)
    expect(sessionGems('practice', 5)).toBe(2)
    expect(sessionGems('lesson', 1)).toBe(5)
    expect(sessionGems('lesson', 0)).toBe(10)
  })

  it('Tagesziele sind aufsteigend', () => {
    const xps = DAILY_GOALS.map((g) => g.xp)
    expect([...xps].sort((a, b) => a - b)).toEqual(xps)
  })

  it('accuracy rundet und ist bei 0 Aufgaben 100', () => {
    expect(accuracy(2, 3)).toBe(67)
    expect(accuracy(0, 5)).toBe(0)
    expect(accuracy(0, 0)).toBe(100)
  })

  it('xpToday, weekXp und bestDay', () => {
    const byDay = { '2026-03-10': 20, '2026-03-12': 50, '2026-03-13': 10 }
    expect(xpToday(byDay, '2026-03-12')).toBe(50)
    expect(xpToday(byDay, '2026-03-11')).toBe(0)
    const week = weekXp(byDay, '2026-03-13')
    expect(week).toHaveLength(7)
    expect(week[0].day).toBe('2026-03-07')
    expect(week[6]).toMatchObject({ day: '2026-03-13', xp: 10 })
    expect(week.map((d) => d.xp)).toEqual([0, 0, 0, 20, 0, 50, 10])
    expect(week[6].label).toBe('Fr')
    expect(bestDay(byDay)).toEqual({ day: '2026-03-12', xp: 50 })
    expect(bestDay({})).toBeNull()
  })
})
