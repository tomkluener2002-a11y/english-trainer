/**
 * Lektions-Engine (rein funktional): Warteschlange, Wiederholung falscher Aufgaben am Ende,
 * Fortschritt, Kombo und Auswertung.
 */
import type { Exercise } from '../content/schema'

/** Wie oft eine falsch beantwortete Aufgabe maximal erneut gestellt wird. */
export const MAX_RETRIES = 2

export interface SessionItem {
  /** Stabiler Schlüssel, z.B. "core.a1u1.l1::e03" (Fehlerkiste) oder "gen::r4". */
  key: string
  ex: Exercise
  retry: boolean
}

export interface SessionState {
  items: SessionItem[]
  index: number
  /** Anzahl ursprünglicher Aufgaben (Basis für den Fortschrittsbalken). */
  total: number
  solved: string[]
  /** Bewertete Erstversuche (ohne intro/übersprungen). */
  graded: number
  firstTry: number
  mistakes: number
  attempts: Record<string, number>
  combo: number
  bestCombo: number
  listeningCorrect: number
  /** Schlüssel, die mindestens einmal falsch waren. */
  wrongKeys: string[]
  /** Schlüssel, die (irgendwann) richtig gelöst wurden. */
  correctKeys: string[]
}

export function startSession(items: { key: string; ex: Exercise }[]): SessionState {
  return {
    items: items.map((i) => ({ ...i, retry: false })),
    index: 0,
    total: items.length,
    solved: [],
    graded: 0,
    firstTry: 0,
    mistakes: 0,
    attempts: {},
    combo: 0,
    bestCombo: 0,
    listeningCorrect: 0,
    wrongKeys: [],
    correctKeys: [],
  }
}

export function currentItem(s: SessionState): SessionItem | null {
  return s.items[s.index] ?? null
}

export interface Submission {
  correct: boolean
  /** Übersprungen ohne Strafe (z.B. Sprechen nicht möglich). */
  skipped?: boolean
}

export function submit(s: SessionState, sub: Submission): SessionState {
  const item = currentItem(s)
  if (!item) return s
  const { key, ex, retry } = item
  const solved = s.solved.includes(key) ? s.solved : [...s.solved, key]
  if (sub.skipped || ex.type === 'intro') return { ...s, solved }

  const graded = retry ? s.graded : s.graded + 1
  if (sub.correct) {
    const combo = s.combo + 1
    return {
      ...s,
      solved,
      graded,
      firstTry: !retry && !s.attempts[key] ? s.firstTry + 1 : s.firstTry,
      combo,
      bestCombo: Math.max(s.bestCombo, combo),
      listeningCorrect: s.listeningCorrect + (ex.type === 'listen-choice' || ex.type === 'listen-type' ? 1 : 0),
      correctKeys: s.correctKeys.includes(key) ? s.correctKeys : [...s.correctKeys, key],
    }
  }
  const tries = (s.attempts[key] ?? 0) + 1
  const requeue = tries <= MAX_RETRIES
  return {
    ...s,
    graded,
    mistakes: s.mistakes + 1,
    combo: 0,
    attempts: { ...s.attempts, [key]: tries },
    wrongKeys: s.wrongKeys.includes(key) ? s.wrongKeys : [...s.wrongKeys, key],
    items: requeue ? [...s.items, { key, ex, retry: true }] : s.items,
    // Nach zu vielen Fehlversuchen gilt die Aufgabe als erledigt, damit die Lektion endet.
    solved: requeue ? s.solved : solved,
  }
}

export function advance(s: SessionState): SessionState {
  return { ...s, index: s.index + 1 }
}

export function isSessionDone(s: SessionState): boolean {
  return s.index >= s.items.length
}

export function sessionProgress(s: SessionState): number {
  return s.total ? Math.min(1, s.solved.length / s.total) : 1
}

/** Falsch beantwortete Aufgaben, die später doch richtig gelöst wurden. */
export function fixedKeys(s: SessionState): string[] {
  return s.wrongKeys.filter((k) => s.correctKeys.includes(k))
}
