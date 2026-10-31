/** Streak-Berechnung mit Streak-Freeze. */
import { addDays, daysBetween } from './date'

export const MAX_FREEZES = 2

export interface StreakState {
  current: number
  longest: number
  /** Letzter Tag mit abgeschlossener Lektion. */
  lastDay: string | null
  /** Ausgerüstete Streak-Freezes. */
  freezes: number
  activeDays: string[]
  frozenDays: string[]
}

export function emptyStreak(): StreakState {
  return { current: 0, longest: 0, lastDay: null, freezes: 0, activeDays: [], frozenDays: [] }
}

/** Streak, wie er heute angezeigt wird (0, wenn er gerissen ist und Freezes nicht reichen). */
export function effectiveStreak(s: StreakState, today: string): number {
  if (!s.lastDay) return 0
  const gap = daysBetween(s.lastDay, today)
  if (gap <= 1) return s.current
  return s.freezes >= gap - 1 ? s.current : 0
}

/** Ist der Streak für heute schon gesichert? */
export function doneToday(s: StreakState, today: string): boolean {
  return s.lastDay === today
}

export interface ActivityResult {
  state: StreakState
  /** Streak wurde heute erstmals verlängert. */
  extended: boolean
  usedFreezes: number
}

/** Bucht eine Lern-Aktivität für `today`. */
export function recordActivity(s: StreakState, today: string): ActivityResult {
  if (s.lastDay === today) return { state: s, extended: false, usedFreezes: 0 }
  let current = 1
  let freezes = s.freezes
  let usedFreezes = 0
  const frozenDays = [...s.frozenDays]
  if (s.lastDay) {
    const gap = daysBetween(s.lastDay, today)
    if (gap === 1) current = s.current + 1
    else if (gap > 1) {
      const missed = gap - 1
      if (freezes >= missed) {
        freezes -= missed
        usedFreezes = missed
        for (let i = 1; i <= missed; i++) frozenDays.push(addDays(s.lastDay, i))
        current = s.current + 1
      }
    } else current = Math.max(1, s.current) // Uhr zurückgestellt: nichts verlieren
  }
  const activeDays = [...s.activeDays, today].slice(-400)
  return {
    state: {
      current,
      longest: Math.max(s.longest, current),
      lastDay: today,
      freezes,
      activeDays,
      frozenDays: frozenDays.slice(-100),
    },
    extended: true,
    usedFreezes,
  }
}
