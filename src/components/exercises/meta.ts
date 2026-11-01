import type { Exercise } from '../../content/schema'

/** Überschrift über der Aufgabe. */
export function exerciseTitle(ex: Exercise): string {
  switch (ex.type) {
    case 'intro':
      return 'Neues Wort'
    case 'translate':
      return 'Übersetze diesen Satz'
    case 'choice':
      return ex.prompt
    case 'listen-choice':
      return ex.prompt
    case 'listen-type':
      return 'Tippe, was du hörst'
    case 'match':
      return 'Finde die Paare'
    case 'fill':
      return 'Fülle die Lücke'
    case 'type':
      return 'Ergänze den Satz'
    case 'speak':
      return 'Sprich diesen Satz'
    case 'dialogue':
      return ex.title ? `Dialog: ${ex.title}` : 'Lies den Dialog'
  }
}
