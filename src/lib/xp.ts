/** XP, Gems, Tagesziel. */
import { lastDays, weekdayShort } from './date'

export const DAILY_GOALS = [
  { xp: 10, label: 'Locker', minutes: 5 },
  { xp: 20, label: 'Normal', minutes: 10 },
  { xp: 30, label: 'Ernsthaft', minutes: 15 },
  { xp: 50, label: 'Intensiv', minutes: 20 },
] as const

export type SessionKind = 'lesson' | 'practice' | 'unit-review'

/** XP für eine abgeschlossene Session. */
export function sessionXp(kind: SessionKind, mistakes: number): number {
  const perfect = mistakes === 0
  switch (kind) {
    case 'lesson':
      return 10 + (perfect ? 5 : 0)
    case 'practice':
      return 6 + (perfect ? 2 : 0)
    case 'unit-review':
      return 15 + (perfect ? 5 : 0)
  }
}

/** Gems für eine abgeschlossene Session. */
export function sessionGems(kind: SessionKind, mistakes: number): number {
  if (kind === 'practice') return 2
  return 5 + (mistakes === 0 ? 5 : 0)
}

/** Genauigkeit in Prozent: beim ersten Versuch richtig / bewertete Aufgaben. */
export function accuracy(firstTryCorrect: number, graded: number): number {
  if (graded <= 0) return 100
  return Math.round((firstTryCorrect / graded) * 100)
}

export function xpToday(byDay: Record<string, number>, today: string): number {
  return byDay[today] ?? 0
}

export function weekXp(byDay: Record<string, number>, today: string): { day: string; label: string; xp: number }[] {
  return lastDays(today, 7).map((day) => ({ day, label: weekdayShort(day), xp: byDay[day] ?? 0 }))
}

export function bestDay(byDay: Record<string, number>): { day: string; xp: number } | null {
  let best: { day: string; xp: number } | null = null
  for (const [day, xp] of Object.entries(byDay)) if (!best || xp > best.xp) best = { day, xp }
  return best
}
