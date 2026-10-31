import type { Lesson } from './types'

/**
 * Prüft die Lektionsdaten auf typische Tippfehler beim Ergänzen neuer Inhalte.
 * Läuft automatisch im Dev-Modus (siehe main.tsx) und gibt Probleme in der Browser-Konsole aus.
 */
export function validateLessons(lessons: Lesson[]): string[] {
  const problems: string[] = []
  const lessonIds = new Set<string>()

  for (const lesson of lessons) {
    if (lessonIds.has(lesson.id)) problems.push(`Doppelte Lektions-ID "${lesson.id}"`)
    lessonIds.add(lesson.id)
    if (lesson.exercises.length === 0) problems.push(`${lesson.id}: keine Übungen`)

    const exerciseIds = new Set<string>()
    for (const ex of lesson.exercises) {
      const where = `${lesson.id}/${ex.id}`
      if (exerciseIds.has(ex.id)) problems.push(`${where}: doppelte Übungs-ID`)
      exerciseIds.add(ex.id)

      switch (ex.type) {
        case 'choice':
        case 'listen-choice':
          if (ex.options.length < 2) problems.push(`${where}: weniger als 2 Optionen`)
          if (ex.correct < 0 || ex.correct >= ex.options.length) problems.push(`${where}: "correct" außerhalb der Optionen`)
          if (new Set(ex.options).size !== ex.options.length) problems.push(`${where}: doppelte Optionen`)
          break
        case 'type':
          if (ex.sentence.split('___').length !== 2) problems.push(`${where}: Satz braucht genau eine Lücke "___"`)
          if (ex.answers.length === 0) problems.push(`${where}: keine Antworten`)
          break
        case 'order': {
          const bag = (s: string) => s.replace(/[.,!?;:]/g, '').toLowerCase().split(' ').sort().join(' ')
          const words = bag(ex.solution)
          for (const alt of ex.alternatives ?? []) {
            if (bag(alt) !== words)
              problems.push(`${where}: Alternative "${alt}" nutzt andere Wörter als die Lösung`)
          }
          break
        }
        case 'listen-type':
          if (/\d/.test(ex.text)) problems.push(`${where}: Zahlen im Hörtext bitte ausschreiben`)
          break
        case 'flashcard':
          break
      }
    }
  }
  return problems
}
