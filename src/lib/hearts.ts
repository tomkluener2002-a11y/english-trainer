/** Herzen: max. 5, verlieren bei Fehlern, regenerieren 1 pro 30 Minuten. */
import { MINUTE } from './date'

export const MAX_HEARTS = 5
export const REGEN_MS = 30 * MINUTE

export interface HeartsState {
  count: number
  /** Bezugszeitpunkt für die Regeneration. */
  updatedAt: number
}

/** Rechnet die Regeneration bis `now` ein. */
export function normalizeHearts(h: HeartsState, now: number): HeartsState {
  if (h.count >= MAX_HEARTS) return { count: MAX_HEARTS, updatedAt: now }
  const elapsed = Math.max(0, now - h.updatedAt)
  const gained = Math.floor(elapsed / REGEN_MS)
  const count = Math.min(MAX_HEARTS, h.count + gained)
  if (count >= MAX_HEARTS) return { count: MAX_HEARTS, updatedAt: now }
  return { count, updatedAt: h.updatedAt + gained * REGEN_MS }
}

export function currentHearts(h: HeartsState, now: number): { count: number; nextAt: number | null } {
  const n = normalizeHearts(h, now)
  return { count: n.count, nextAt: n.count >= MAX_HEARTS ? null : n.updatedAt + REGEN_MS }
}

export function loseHeart(h: HeartsState, now: number): HeartsState {
  const n = normalizeHearts(h, now)
  if (n.count <= 0) return n
  // War das Konto voll, startet der Regenerations-Timer jetzt.
  return { count: n.count - 1, updatedAt: n.count >= MAX_HEARTS ? now : n.updatedAt }
}

export function gainHearts(h: HeartsState, amount: number, now: number): HeartsState {
  const n = normalizeHearts(h, now)
  const count = Math.min(MAX_HEARTS, n.count + amount)
  return { count, updatedAt: count >= MAX_HEARTS ? now : n.updatedAt }
}
