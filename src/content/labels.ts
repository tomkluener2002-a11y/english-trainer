import type { Exercise } from './types'

export const exerciseTypeLabel: Record<Exercise['type'], string> = {
  flashcard: 'Lernkarte',
  choice: 'Multiple Choice',
  type: 'Lückentext',
  order: 'Satzbau',
  'listen-type': 'Hören & Schreiben',
  'listen-choice': 'Hörverständnis',
}
