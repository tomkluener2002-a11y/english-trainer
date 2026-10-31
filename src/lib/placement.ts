/**
 * Adaptiver Einstufungstest.
 *
 * - Start bei A2 (Index 1), Schätzwert `theta` auf der Skala 0 (A1) … 4 (C1).
 * - Richtig → theta steigt, falsch/„Ich weiß es nicht“ → theta sinkt; die Schrittweite nimmt ab.
 * - Nächste Frage kommt vom Niveau round(theta).
 * - Ende nach MIN_QUESTIONS, sobald die letzten Fragen stabil in einem Band von zwei Niveaus liegen,
 *   spätestens nach MAX_QUESTIONS.
 * - Ergebnis: höchstes Niveau mit ≥ 2 Antworten und ≥ 60 % Trefferquote; Fallback round(theta).
 */
import { CEFR_LEVELS, type Cefr, type PlacementQuestion } from '../content/schema'
import type { Rng } from './rng'

export const START_LEVEL = 1
export const MIN_QUESTIONS = 15
export const MAX_QUESTIONS = 25
const MAX_INDEX = CEFR_LEVELS.length - 1

export interface PlacementAnswer {
  id: string
  level: number
  correct: boolean
}

export interface PlacementState {
  theta: number
  answers: PlacementAnswer[]
}

export function startPlacement(): PlacementState {
  return { theta: START_LEVEL, answers: [] }
}

export function stepSize(answered: number): number {
  return Math.max(0.35, 1 * Math.pow(0.82, answered))
}

export function currentLevel(s: PlacementState): number {
  return Math.min(MAX_INDEX, Math.max(0, Math.round(s.theta)))
}

export function answerPlacement(s: PlacementState, q: { id: string; level: number }, correct: boolean): PlacementState {
  const step = stepSize(s.answers.length)
  const theta = Math.min(MAX_INDEX + 0.4, Math.max(-0.4, s.theta + (correct ? step : -step)))
  return { theta, answers: [...s.answers, { id: q.id, level: q.level, correct }] }
}

export function isFinished(s: PlacementState): boolean {
  const n = s.answers.length
  if (n >= MAX_QUESTIONS) return true
  if (n < MIN_QUESTIONS) return false
  const recent = s.answers.slice(-6).map((a) => a.level)
  return Math.max(...recent) - Math.min(...recent) <= 1
}

/** Wählt die nächste ungestellte Frage – bevorzugt auf dem aktuellen Niveau, sonst das nächstgelegene. */
export function nextQuestion(bank: PlacementQuestion[], s: PlacementState, rng: Rng): PlacementQuestion | null {
  const asked = new Set(s.answers.map((a) => a.id))
  const target = currentLevel(s)
  const order = [0, 1, -1, 2, -2, 3, -3, 4, -4].map((d) => target + d).filter((l) => l >= 0 && l <= MAX_INDEX)
  for (const level of order) {
    const pool = bank.filter((q) => !asked.has(q.id) && CEFR_LEVELS.indexOf(q.cefr) === level)
    if (pool.length) return pool[Math.floor(rng() * pool.length)]
  }
  return null
}

export function levelStats(s: PlacementState): { level: number; asked: number; correct: number }[] {
  return CEFR_LEVELS.map((_, level) => {
    const at = s.answers.filter((a) => a.level === level)
    return { level, asked: at.length, correct: at.filter((a) => a.correct).length }
  })
}

export function placementResult(s: PlacementState): Cefr {
  let best = -1
  for (const st of levelStats(s)) {
    if (st.asked >= 2 && st.correct / st.asked >= 0.6) best = st.level
  }
  if (best < 0) best = currentLevel(s)
  // Nicht mehr als ein Niveau über dem Schätzwert landen (Glückstreffer abfangen).
  best = Math.min(best, currentLevel(s) + 1)
  return CEFR_LEVELS[Math.max(0, Math.min(MAX_INDEX, best))]
}

/** Grober Fortschritt 0–1 für den Balken. */
export function placementProgress(s: PlacementState): number {
  const n = s.answers.length
  if (isFinished(s)) return 1
  if (n < MIN_QUESTIONS) return (n / MIN_QUESTIONS) * 0.85
  return 0.85 + ((n - MIN_QUESTIONS) / (MAX_QUESTIONS - MIN_QUESTIONS)) * 0.15
}
