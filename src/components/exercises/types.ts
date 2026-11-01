import type { Choice, Exercise } from '../../content/schema'

export interface CheckResult {
  correct: boolean
  /** Musterlösung für das Feedback-Sheet. */
  solution?: string
  /** Richtig gewertet, aber mit Tippfehler – korrekte Schreibweise. */
  nearMiss?: string
  /** Ohne Bewertung übersprungen (z.B. Sprechen nicht möglich). */
  skipped?: boolean
  /** Kein Feedback-Sheet zeigen, direkt weiter (Einführungskarten, Überspringen). */
  silent?: boolean
  /** Hinweistext statt Erklärung (z.B. bei übersprungener Sprechaufgabe). */
  note?: string
}

export interface ExerciseProps<E extends Exercise = Exercise> {
  ex: E
  /** Nach dem Prüfen: Eingabe gesperrt, Ergebnis wird eingefärbt. */
  locked: boolean
  result: CheckResult | null
  /** Registriert die Prüffunktion, sobald eine Antwort vorliegt (null = PRÜFEN deaktiviert). */
  setCheck: (fn: (() => CheckResult) | null) => void
  /** Sofortiges Ergebnis ohne PRÜFEN (Paare fertig, Spracherkennung). */
  submit: (r: CheckResult) => void
  mode: 'lesson' | 'placement'
}

export const correctChoice = (choices: Choice[]) => choices.find((c) => c.correct)?.text ?? ''

export const fillBlank = (sentence: string, word: string) => sentence.replace('___', word)

export type ChoiceState = 'selected' | 'correct' | 'wrong' | 'disabled' | undefined

export function choiceState(i: number, selected: number | null, locked: boolean, result: CheckResult | null): ChoiceState {
  if (selected !== i) return undefined
  if (!locked || !result) return 'selected'
  return result.correct ? 'correct' : 'wrong'
}
