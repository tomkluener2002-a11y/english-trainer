/**
 * Datenmodell für Lektionen und Übungen.
 *
 * Jede Übung hat eine `id`, die innerhalb ihrer Lektion eindeutig sein muss
 * (wird für Fortschritt und Fehlerkiste im localStorage verwendet).
 */

interface BaseExercise {
  /** Eindeutig innerhalb der Lektion, z.B. "phone-03". Nicht nachträglich ändern. */
  id: string
  /** Optionale Erklärung (Deutsch), wird nach dem Beantworten angezeigt. */
  explanation?: string
}

/** Lernkarte: Begriff ansehen, aufdecken, selbst bewerten. */
export interface FlashcardExercise extends BaseExercise {
  type: 'flashcard'
  /** Englischer Begriff / Ausdruck */
  front: string
  /** Deutsche Bedeutung */
  back: string
  /** Englischer Beispielsatz */
  example?: string
}

/** Multiple Choice: eine richtige Antwort aus mehreren Optionen. */
export interface ChoiceExercise extends BaseExercise {
  type: 'choice'
  /** Arbeitsanweisung auf Deutsch, z.B. "Was bedeutet …?" */
  prompt: string
  /** Der eigentliche Begriff / die Frage */
  question: string
  /** Antwortoptionen – werden beim Anzeigen gemischt */
  options: string[]
  /** Index der richtigen Option in `options` */
  correct: number
  /** Frage per Sprachausgabe vorlesbar machen (nur wenn sie Englisch ist) */
  speakQuestion?: boolean
  /** Richtige Antwort im Feedback vorlesbar machen (nur wenn sie Englisch ist) */
  speakAnswer?: boolean
}

/** Lückentext: fehlendes Wort eintippen. */
export interface TypeAnswerExercise extends BaseExercise {
  type: 'type'
  prompt: string
  /** Englischer Satz mit genau einer Lücke `___` */
  sentence: string
  /** Akzeptierte Antworten; die erste gilt als Musterlösung */
  answers: string[]
  /** Deutscher Hinweis, z.B. die Übersetzung des gesuchten Wortes */
  hint?: string
  /** Deutsche Übersetzung des ganzen Satzes */
  translation?: string
}

/** Satzbau: Wörter in die richtige Reihenfolge tippen. */
export interface WordOrderExercise extends BaseExercise {
  type: 'order'
  /** Deutscher Satz, der übersetzt werden soll */
  translation: string
  /** Englische Lösung; Wörter werden an Leerzeichen getrennt (Satzzeichen hängen am Wort) */
  solution: string
  /** Weitere korrekte Lösungen (gleiche Wörter, andere Reihenfolge) */
  alternatives?: string[]
  /** Ablenker-Wörter, die nicht in den Satz gehören */
  extraWords?: string[]
}

/** Hörverständnis: Satz wird vorgelesen, Nutzer tippt ihn ab. */
export interface ListenTypeExercise extends BaseExercise {
  type: 'listen-type'
  /** Englischer Satz, der vorgelesen wird (Zahlen besser ausschreiben) */
  text: string
  /** Deutsche Übersetzung, wird im Feedback gezeigt */
  translation?: string
}

/** Hörverständnis: Satz wird vorgelesen, Nutzer wählt die passende Bedeutung. */
export interface ListenChoiceExercise extends BaseExercise {
  type: 'listen-choice'
  text: string
  /** Frage auf Deutsch, z.B. "Was hast du gehört?" */
  question: string
  options: string[]
  correct: number
}

export type Exercise =
  | FlashcardExercise
  | ChoiceExercise
  | TypeAnswerExercise
  | WordOrderExercise
  | ListenTypeExercise
  | ListenChoiceExercise

export type ExerciseType = Exercise['type']

export interface Lesson {
  /** Eindeutige, stabile ID (wird im localStorage gespeichert) */
  id: string
  /** Englischer Titel */
  title: string
  /** Deutscher Untertitel */
  subtitle: string
  /** Emoji als Icon */
  icon: string
  /** Kurzbeschreibung (Deutsch) */
  description: string
  exercises: Exercise[]
}
