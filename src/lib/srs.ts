/**
 * Wortbasierte Spaced Repetition (Leitner-System, SM-2-light).
 * Box 0 = neu/falsch (sofort fällig) … Box 5 = sicher (30 Tage).
 */
import { DAY, MINUTE } from './date'

export const INTERVALS = [10 * MINUTE, 1 * DAY, 3 * DAY, 7 * DAY, 14 * DAY, 30 * DAY]
export const MAX_BOX = INTERVALS.length - 1

export interface WordState {
  box: number
  due: number
  seen: number
  correct: number
  wrong: number
  last: number
}

export type SrsMap = Record<string, WordState>

/** Ergebnis einer Abfrage einbuchen. */
export function reviewWord(prev: WordState | undefined, correct: boolean, now: number): WordState {
  const s = prev ?? { box: 0, due: now, seen: 0, correct: 0, wrong: 0, last: now }
  if (correct) {
    const box = Math.min(MAX_BOX, s.box + 1)
    return { ...s, box, due: now + INTERVALS[box], seen: s.seen + 1, correct: s.correct + 1, last: now }
  }
  // Falsch: zurück in Box 0 (nicht unter 0), bald erneut fällig.
  return { ...s, box: 0, due: now + INTERVALS[0], seen: s.seen + 1, wrong: s.wrong + 1, last: now }
}

/** Fällige Wörter, die überfälligsten zuerst. */
export function dueWords(srs: SrsMap, now: number): string[] {
  return Object.entries(srs)
    .filter(([, s]) => s.due <= now)
    .sort((a, b) => a[1].due - b[1].due)
    .map(([id]) => id)
}

/** Schwäche-Score: viele Fehler, niedrige Box, lange nicht gesehen → höher. */
export function weakness(s: WordState, now: number): number {
  const errorRate = s.wrong / Math.max(1, s.correct + s.wrong)
  const staleDays = Math.min(30, (now - s.last) / DAY)
  return errorRate * 3 + (MAX_BOX - s.box) * 0.6 + staleDays * 0.02
}

/** Schwächste Wörter (nur solche mit mindestens einem Fehler oder niedriger Box). */
export function weakWords(srs: SrsMap, now: number, limit = 12): string[] {
  return Object.entries(srs)
    .filter(([, s]) => s.wrong > 0 || s.box <= 1)
    .sort((a, b) => weakness(b[1], now) - weakness(a[1], now))
    .slice(0, limit)
    .map(([id]) => id)
}

/** Stärke 0–1 für Anzeigen. */
export function strength(s: WordState | undefined): number {
  return s ? s.box / MAX_BOX : 0
}
