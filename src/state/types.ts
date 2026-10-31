import type { Cefr, InterestId } from '../content/schema'
import type { HeartsState } from '../lib/hearts'
import type { Quest } from '../lib/quests'
import type { SrsMap } from '../lib/srs'
import type { StreakState } from '../lib/streak'

export const STATE_VERSION = 2

export type Reason = 'career' | 'travel' | 'study' | 'social' | 'curious'

export interface LessonProgress {
  /** Wie oft abgeschlossen (Kronen-Level = min(5, completions)). */
  completions: number
  bestAccuracy: number
  lastAt: number
}

export interface Stats {
  lessons: number
  perfect: number
  practice: number
  listening: number
  bestCombo: number
  timeMs: number
  lessonsByDay: Record<string, number>
  night: number
  early: number
  mistakesFixed: number
}

export interface Settings {
  sound: boolean
  haptics: boolean
  /** Herzen-System aktiv (aus = entspannter Modus ohne Herzverlust). */
  hearts: boolean
  /** „Kann gerade nicht sprechen“: Sprechaufgaben bis zu diesem Zeitpunkt überspringen. */
  speakingOffUntil: number
  /** „Kann gerade nicht zuhören“. */
  listeningOffUntil: number
}

export interface AppState {
  version: typeof STATE_VERSION
  profile: {
    name: string
    reason: Reason | null
    interests: InterestId[]
    /** Tagesziel in XP. */
    dailyGoal: number
    onboarded: boolean
    createdAt: number
  }
  placement: {
    done: boolean
    level: Cefr | null
    at: number | null
  }
  lessons: Record<string, LessonProgress>
  /** Per Einstufungstest übersprungene Units (gelten als bestanden, bleiben spielbar). */
  testedOut: string[]
  /** Geöffnete Truhen (Unit-IDs). */
  chests: string[]
  /** Abgeschlossene Unit-Wiederholungen (Pokal-Knoten). */
  unitReviews: string[]
  tracks: {
    /** Gewählte Spezialisierungen (Reihenfolge = Wahl). */
    chosen: string[]
    /** Track, auf den „Weiter lernen“ zielt. */
    active: string
    /** Bereits angezeigte Weggabelungen (Unit-IDs der Meilensteine). */
    forksSeen: string[]
    /** Antworten auf die Rückfrage je Track. */
    focus: Record<string, string>
  }
  hearts: HeartsState
  gems: number
  xp: { total: number; byDay: Record<string, number> }
  streak: StreakState
  quests: { day: string; items: Quest[] }
  stats: Stats
  /** Freigeschaltete Erfolge: id → Zeitpunkt. */
  achievements: Record<string, number>
  srs: SrsMap
  /** Fehlerkiste: "lessonId::exerciseId" → Infos. */
  mistakes: Record<string, { at: number; count: number }>
  settings: Settings
}
