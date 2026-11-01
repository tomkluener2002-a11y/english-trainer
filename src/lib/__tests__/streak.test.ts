import { describe, expect, it } from 'vitest'
import { addDays, dayKey, daysBetween } from '../date'
import { MAX_FREEZES, type StreakState, doneToday, effectiveStreak, emptyStreak, recordActivity } from '../streak'

const base = (over: Partial<StreakState> = {}): StreakState => ({ ...emptyStreak(), ...over })

describe('Streak', () => {
  it('erste Aktivität startet bei 1', () => {
    const r = recordActivity(emptyStreak(), '2026-03-10')
    expect(r.extended).toBe(true)
    expect(r.state).toMatchObject({ current: 1, longest: 1, lastDay: '2026-03-10', activeDays: ['2026-03-10'] })
  })

  it('zweite Aktivität am selben Tag verändert nichts', () => {
    const s = recordActivity(emptyStreak(), '2026-03-10').state
    const r = recordActivity(s, '2026-03-10')
    expect(r.extended).toBe(false)
    expect(r.state).toBe(s)
    expect(doneToday(s, '2026-03-10')).toBe(true)
    expect(doneToday(s, '2026-03-11')).toBe(false)
  })

  it('aufeinanderfolgende Tage verlängern den Streak und aktualisieren longest', () => {
    let s = emptyStreak()
    for (const d of ['2026-03-10', '2026-03-11', '2026-03-12']) s = recordActivity(s, d).state
    expect(s.current).toBe(3)
    expect(s.longest).toBe(3)
  })

  it('ein verpasster Tag ohne Freeze setzt den Streak auf 1 zurück, longest bleibt', () => {
    const s = base({ current: 5, longest: 5, lastDay: '2026-03-10' })
    const r = recordActivity(s, '2026-03-12')
    expect(r.state.current).toBe(1)
    expect(r.state.longest).toBe(5)
    expect(r.usedFreezes).toBe(0)
  })

  it('Freeze überbrückt einen verpassten Tag und wird verbraucht', () => {
    const s = base({ current: 5, longest: 5, lastDay: '2026-03-10', freezes: 2 })
    const r = recordActivity(s, '2026-03-12')
    expect(r.state.current).toBe(6)
    expect(r.state.freezes).toBe(1)
    expect(r.usedFreezes).toBe(1)
    expect(r.state.frozenDays).toEqual(['2026-03-11'])
  })

  it('zu wenige Freezes für die Lücke: Streak reißt, Freezes bleiben erhalten', () => {
    const s = base({ current: 5, longest: 5, lastDay: '2026-03-10', freezes: 1 })
    const r = recordActivity(s, '2026-03-13')
    expect(r.state.current).toBe(1)
    expect(r.state.freezes).toBe(1)
  })

  it('MAX_FREEZES ist 2', () => {
    expect(MAX_FREEZES).toBe(2)
  })

  it('effectiveStreak zeigt gerissene Streaks als 0', () => {
    const s = base({ current: 4, longest: 4, lastDay: '2026-03-10' })
    expect(effectiveStreak(s, '2026-03-10')).toBe(4)
    expect(effectiveStreak(s, '2026-03-11')).toBe(4) // gestern gelernt, heute noch Zeit
    expect(effectiveStreak(s, '2026-03-12')).toBe(0)
    expect(effectiveStreak(base({ current: 4, lastDay: '2026-03-10', freezes: 1 }), '2026-03-12')).toBe(4)
    expect(effectiveStreak(emptyStreak(), '2026-03-12')).toBe(0)
  })

  it('Uhr zurückgestellt: Streak geht nicht verloren', () => {
    const s = base({ current: 4, longest: 4, lastDay: '2026-03-10' })
    const r = recordActivity(s, '2026-03-09')
    expect(r.state.current).toBe(4)
  })

  it('begrenzt die Historie', () => {
    let s = emptyStreak()
    for (let i = 0; i < 450; i++) s = recordActivity(s, addDays('2025-01-01', i)).state
    expect(s.activeDays.length).toBe(400)
    expect(s.current).toBe(450)
  })
})

describe('Tageswechsel / Zeitzone', () => {
  it('dayKey nutzt die lokale Zeit (23:59 und 00:01 liegen an verschiedenen Tagen)', () => {
    expect(dayKey(new Date(2026, 5, 10, 23, 59))).toBe('2026-06-10')
    expect(dayKey(new Date(2026, 5, 11, 0, 1))).toBe('2026-06-11')
  })

  it('Streak läuft über Mitternacht weiter', () => {
    const late = dayKey(new Date(2026, 5, 10, 23, 59))
    const early = dayKey(new Date(2026, 5, 11, 0, 1))
    const s = recordActivity(emptyStreak(), late).state
    expect(recordActivity(s, early).state.current).toBe(2)
  })

  it('Sommerzeitumstellung (Europe/Berlin) erzeugt weder Lücke noch Doppeltag', () => {
    expect(daysBetween('2026-03-28', '2026-03-29')).toBe(1)
    expect(daysBetween('2026-03-29', '2026-03-30')).toBe(1)
    expect(daysBetween('2026-10-24', '2026-10-26')).toBe(2)
    expect(addDays('2026-03-28', 2)).toBe('2026-03-30')
    expect(addDays('2026-10-25', 1)).toBe('2026-10-26')
    let s = emptyStreak()
    for (const d of ['2026-03-28', '2026-03-29', '2026-03-30']) s = recordActivity(s, d).state
    expect(s.current).toBe(3)
  })

  it('Monats- und Jahreswechsel', () => {
    expect(addDays('2026-12-31', 1)).toBe('2027-01-01')
    expect(addDays('2028-02-28', 1)).toBe('2028-02-29')
    expect(daysBetween('2026-12-30', '2027-01-02')).toBe(3)
  })
})
