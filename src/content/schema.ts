/**
 * Content-Schema der App (Single Source of Truth).
 *
 * Hierarchie:  Track (core | specialization) → Unit → Lesson → Exercise
 * Daneben:     Vokabel-Registry (VocabEntry) – Spaced Repetition arbeitet wortbasiert.
 *
 * Ausführliche Doku mit Beispielen: docs/CONTENT-SCHEMA.md
 * Didaktik-Leitfaden:              docs/CONTENT-GUIDE.md
 * Prüfung:                         `bun run validate:content`
 *
 * Konventionen
 * - Alle IDs sind stabil (werden im localStorage gespeichert) und bestehen aus
 *   Kleinbuchstaben, Ziffern, `-` und `.`. Nie nachträglich ändern.
 * - Lerninhalte sind Englisch, Anweisungen/Erklärungen/Übersetzungen Deutsch.
 * - Keine personenbezogenen Daten (echte Namen, Firmen, Adressen, E-Mails).
 *   Für Beispielpersonen generische Vornamen wie "Anna", "Tom", "Sam" verwenden.
 */

export const CEFR_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'] as const
export type Cefr = (typeof CEFR_LEVELS)[number]

/** Farbpalette der App (siehe src/ui/theme.ts). */
export const COLOR_KEYS = ['green', 'blue', 'purple', 'orange', 'red', 'yellow', 'teal', 'pink'] as const
export type ColorKey = (typeof COLOR_KEYS)[number]

/** Interessen aus dem Onboarding – steuern Spezialisierungs-Vorschläge. */
export const INTEREST_IDS = ['business', 'tech', 'travel', 'health', 'creative', 'career', 'everyday'] as const
export type InterestId = (typeof INTEREST_IDS)[number]

/* ───────────────────────────── Vokabeln ───────────────────────────── */

export type PartOfSpeech = 'noun' | 'verb' | 'adj' | 'adv' | 'phrase' | 'pron' | 'prep' | 'num' | 'other'

export interface VocabEntry {
  /** Global eindeutig, Präfix = Track-Kürzel, z.B. "core.hello", "fin.liquidity", "travel.passport". */
  id: string
  /** Englisches Wort / Ausdruck (so wie es gelernt werden soll). */
  en: string
  /** Deutsche Bedeutung (kurz). */
  de: string
  /** Emoji als Bild für Karten (optional, aber für konkrete Begriffe empfohlen). */
  emoji?: string
  pos?: PartOfSpeech
  /** Englischer Beispielsatz. */
  example?: string
  /** Deutsche Übersetzung des Beispielsatzes. */
  exampleDe?: string
  /** Weitere akzeptierte englische Schreibweisen ("e-mail", "email"). */
  altEn?: string[]
  /** Weitere akzeptierte deutsche Bedeutungen. */
  altDe?: string[]
  /** Kurzer Hinweis (Deutsch), z.B. Aussprache oder Falscher Freund. */
  note?: string
}

/* ───────────────────────────── Aufgaben ───────────────────────────── */

interface ExerciseBase {
  /** Eindeutig innerhalb der Lektion, z.B. "e01". */
  id: string
  /** Kurze Erklärung auf Deutsch – erscheint im Feedback-Sheet. */
  explanation?: string
  /** Vokabel-IDs, die mit dieser Aufgabe geübt werden (für Spaced Repetition). */
  words?: string[]
}

/** Antwortoption für Auswahl-Aufgaben. Genau eine Option hat `correct: true`. */
export interface Choice {
  text: string
  emoji?: string
  correct?: boolean
}

/** (i) Neue-Wort-Karte: Wort + Bild + Audio, bevor es abgefragt wird. Keine Bewertung. */
export interface IntroExercise extends ExerciseBase {
  type: 'intro'
  /** Vokabel-ID aus der Registry. */
  word: string
}

/** (a) Wortbank-Übersetzung: Wörter antippen und ordnen. */
export interface TranslateExercise extends ExerciseBase {
  type: 'translate'
  /** de-en: deutscher Satz → englische Wortbank; en-de: umgekehrt. */
  direction: 'de-en' | 'en-de'
  /** Ausgangssatz (in der Ausgangssprache). */
  prompt: string
  /** Musterlösung. Ihre Wörter (ohne Satzzeichen) bilden die Wortbank. */
  answer: string
  /** Weitere korrekte Lösungen (Groß/Klein und Satzzeichen werden ohnehin ignoriert). */
  accepted?: string[]
  /** Falsche Zusatzwörter für die Wortbank (2–5 empfohlen). */
  distractors: string[]
}

/** (b) Multiple Choice, optional mit Bild-/Emoji-Karten. */
export interface ChoiceExercise extends ExerciseBase {
  type: 'choice'
  /** Arbeitsanweisung auf Deutsch, z.B. "Welches Bild zeigt „der Apfel“?" */
  prompt: string
  /** Optionaler Frage-Text (Wort/Satz), wird groß angezeigt. */
  question?: string
  /** Sprache von `question` – "en" macht sie per Lautsprecher vorlesbar. */
  questionLang?: 'en' | 'de'
  /** 2–4 Optionen. Emojis → Kartenraster. */
  choices: Choice[]
}

/** (c) Hören & Antworten: englisches Audio, dann Auswahl. */
export interface ListenChoiceExercise extends ExerciseBase {
  type: 'listen-choice'
  /** Englischer Text, der per TTS vorgelesen wird (Zahlen ausschreiben). */
  audio: string
  /** Anweisung, z.B. "Was hast du gehört?" */
  prompt: string
  choices: Choice[]
}

/** (d) Hören & Tippen: englisches Audio abtippen. */
export interface ListenTypeExercise extends ExerciseBase {
  type: 'listen-type'
  audio: string
  /** Weitere akzeptierte Schreibweisen. `audio` selbst ist immer korrekt. */
  accepted?: string[]
  /** Deutsche Übersetzung – erscheint im Feedback. */
  translation?: string
}

/** (e) Paare zuordnen (3–5 Paare). */
export interface MatchExercise extends ExerciseBase {
  type: 'match'
  pairs: { en: string; de: string }[]
}

/** (f) Lückentext mit Wortauswahl. Der Satz enthält genau einmal `___`. */
export interface FillExercise extends ExerciseBase {
  type: 'fill'
  sentence: string
  choices: Choice[]
  /** Deutsche Übersetzung des vollständigen Satzes. */
  translation?: string
}

/** Lückentext zum Eintippen (genau ein `___`). */
export interface TypeExercise extends ExerciseBase {
  type: 'type'
  sentence: string
  /** Akzeptierte Antworten; die erste ist die Musterlösung. */
  accepted: string[]
  /** Deutscher Hinweis, z.B. die Übersetzung des gesuchten Wortes. */
  hint?: string
  translation?: string
}

/** (g) Sprechen: Satz vorlesen (Spracherkennung, falls verfügbar – sonst übersprungen). */
export interface SpeakExercise extends ExerciseBase {
  type: 'speak'
  text: string
  translation?: string
}

/** (h) Mini-Dialog mit Verständnisfrage. */
export interface DialogueExercise extends ExerciseBase {
  type: 'dialogue'
  /** Kurzer Kontext auf Deutsch, z.B. "Im Café". */
  title?: string
  /** 2–8 Zeilen. Sprecher "a" links, "b" rechts. */
  lines: { speaker: 'a' | 'b'; name?: string; en: string; de?: string }[]
  /** Verständnisfrage (Deutsch oder Englisch). */
  question: string
  choices: Choice[]
}

export type Exercise =
  | IntroExercise
  | TranslateExercise
  | ChoiceExercise
  | ListenChoiceExercise
  | ListenTypeExercise
  | MatchExercise
  | FillExercise
  | TypeExercise
  | SpeakExercise
  | DialogueExercise

export type ExerciseType = Exercise['type']

export const EXERCISE_TYPES: readonly ExerciseType[] = [
  'intro',
  'translate',
  'choice',
  'listen-choice',
  'listen-type',
  'match',
  'fill',
  'type',
  'speak',
  'dialogue',
]

/* ───────────────────────── Lektion / Unit / Track ───────────────────────── */

export interface Lesson {
  /** Global eindeutig, z.B. "core.a1u1.l1". */
  id: string
  /** Deutscher Titel, kurz (z.B. "Begrüßen"). */
  title: string
  /** Optionaler Untertitel/Beschreibung (Deutsch). */
  description?: string
  /** Vokabel-IDs, die hier neu eingeführt werden (je mit einer intro-Aufgabe). */
  introduces?: string[]
  /** 8–15 Aufgaben. */
  exercises: Exercise[]
}

/** Grammatik-/Lerntipp, im Unit-Header über „Tipps“ abrufbar. */
export interface UnitTip {
  title: string
  /** Erklärung auf Deutsch. */
  text: string
  /** Beispiele: Englisch + Deutsch. */
  examples?: { en: string; de: string }[]
}

export interface Unit {
  /** Global eindeutig, z.B. "core.a1u1". */
  id: string
  title: string
  description: string
  cefr: Cefr
  color: ColorKey
  /** Emoji. */
  icon: string
  /** Geplante bzw. behandelte Themen (Deutsch) – werden auch bei Gerüst-Units angezeigt. */
  topics: string[]
  /** "ready": Inhalte vollständig; "partial": einige Lektionen fertig; "planned": nur Gerüst. */
  status: 'ready' | 'partial' | 'planned'
  /** Fertige Lektionen. */
  lessons: Lesson[]
  /** Geplante Lektionstitel, die noch fehlen (erscheinen als „Bald verfügbar“). */
  plannedLessons?: string[]
  tips?: UnitTip[]
  /** Nach Abschluss dieser Unit erscheint die Spezialisierungs-Weggabelung. */
  milestone?: boolean
}

/** Rückfrage im Spezialisierungs-Dialog („Eher Telefonate oder Präsentationen?“). */
export interface TrackFollowUp {
  question: string
  options: { id: string; label: string; emoji?: string }[]
}

export interface Track {
  /** "core" oder Spezialisierungs-ID wie "treasury". */
  id: string
  kind: 'core' | 'specialization'
  title: string
  /** Kurzer Untertitel für Karten. */
  subtitle: string
  description: string
  icon: string
  color: ColorKey
  /** Empfohlenes Einstiegsniveau. */
  minCefr?: Cefr
  /** Passt zu diesen Onboarding-Interessen (für Vorschläge). */
  interests: InterestId[]
  /** Begründungstext-Baustein für den Vorschlag, z.B. "Business & Finance". */
  pitch?: string
  /** Beispielsatz für die Auswahlkarte. */
  sample?: { en: string; de: string }
  followUp?: TrackFollowUp
  units: Unit[]
}

/* ───────────────────────────── Einstufungstest ───────────────────────────── */

/** Im Einstufungstest erlaubte Aufgabentypen. */
export type PlacementExercise = ChoiceExercise | FillExercise | TranslateExercise | ListenChoiceExercise | TypeExercise

export interface PlacementQuestion {
  /** Global eindeutig, z.B. "pt.b1.03". */
  id: string
  cefr: Cefr
  exercise: PlacementExercise
}
