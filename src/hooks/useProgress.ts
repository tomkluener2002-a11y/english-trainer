import { useCallback, useEffect, useState } from 'react'
import { dayKey, daysBetween } from '../lib/date'

const STORAGE_KEY = 'english-trainer:progress:v1'
const MAX_PRACTICE_DAYS = 120

export interface LessonProgress {
  /** Bestes Ergebnis in Prozent (0–100) */
  bestScore: number
  /** Wie oft die Lektion komplett durchgespielt wurde */
  completions: number
  /** Letzter Übungstag (YYYY-MM-DD) */
  lastPlayed: string
}

export interface ProgressState {
  lessons: Record<string, LessonProgress>
  /** Tage in Folge geübt (Stand am `lastPracticeDay`) */
  streak: number
  longestStreak: number
  lastPracticeDay: string | null
  /** Alle Tage, an denen geübt wurde (für die Wochenansicht) */
  practiceDays: string[]
  xp: number
  /** Falsch beantwortete Karten ("lessonId::exerciseId"), bis sie richtig beantwortet wurden */
  mistakes: string[]
}

export interface SessionResult {
  /** Gesetzt, wenn eine komplette Lektion gespielt wurde (zählt für Bestwert) */
  lessonId?: string
  answers: { key: string; correct: boolean }[]
}

export interface SessionOutcome {
  xpGained: number
  streak: number
  streakIncreased: boolean
  newBest: boolean
}

const initialState: ProgressState = {
  lessons: {},
  streak: 0,
  longestStreak: 0,
  lastPracticeDay: null,
  practiceDays: [],
  xp: 0,
  mistakes: [],
}

function load(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return initialState
    const parsed = JSON.parse(raw) as Partial<ProgressState>
    return { ...initialState, ...parsed }
  } catch {
    return initialState
  }
}

export const XP_PER_CORRECT = 10
export const XP_LESSON_BONUS = 20

/** Streak, wie er heute angezeigt wird: verfällt, wenn gestern nicht geübt wurde. */
export function currentStreak(state: ProgressState, today = dayKey()): number {
  if (!state.lastPracticeDay) return 0
  const gap = daysBetween(state.lastPracticeDay, today)
  return gap <= 1 ? state.streak : 0
}

export function mistakeKey(lessonId: string, exerciseId: string): string {
  return `${lessonId}::${exerciseId}`
}

/** Reine Funktion, damit sie leicht testbar ist. */
export function applySession(
  state: ProgressState,
  result: SessionResult,
  today = dayKey(),
): { state: ProgressState; outcome: SessionOutcome } {
  const correctCount = result.answers.filter((a) => a.correct).length
  const total = result.answers.length

  // Streak
  let streak = state.streak
  let streakIncreased = false
  if (state.lastPracticeDay !== today) {
    const gap = state.lastPracticeDay ? daysBetween(state.lastPracticeDay, today) : Infinity
    streak = gap === 1 ? state.streak + 1 : 1
    streakIncreased = true
  }

  // Fehlerkiste: falsche hinzufügen, richtige entfernen
  const mistakes = new Set(state.mistakes)
  for (const a of result.answers) {
    if (a.correct) mistakes.delete(a.key)
    else mistakes.add(a.key)
  }

  // Lektionsfortschritt
  const lessonsProgress = { ...state.lessons }
  let newBest = false
  let xpGained = correctCount * XP_PER_CORRECT
  if (result.lessonId && total > 0) {
    const score = Math.round((correctCount / total) * 100)
    const prev = lessonsProgress[result.lessonId]
    newBest = !prev || score > prev.bestScore
    lessonsProgress[result.lessonId] = {
      bestScore: Math.max(prev?.bestScore ?? 0, score),
      completions: (prev?.completions ?? 0) + 1,
      lastPlayed: today,
    }
    xpGained += XP_LESSON_BONUS
  }

  const practiceDays = state.practiceDays.includes(today)
    ? state.practiceDays
    : [...state.practiceDays, today].slice(-MAX_PRACTICE_DAYS)

  return {
    state: {
      lessons: lessonsProgress,
      streak,
      longestStreak: Math.max(state.longestStreak, streak),
      lastPracticeDay: today,
      practiceDays,
      xp: state.xp + xpGained,
      mistakes: [...mistakes],
    },
    outcome: { xpGained, streak, streakIncreased, newBest },
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>(load)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    } catch {
      // Privater Modus / Speicher voll – App funktioniert trotzdem, nur ohne Persistenz.
    }
  }, [progress])

  // Änderungen aus anderen Tabs übernehmen
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setProgress(load())
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const recordSession = useCallback(
    (result: SessionResult): SessionOutcome => {
      const { state, outcome } = applySession(progress, result)
      setProgress(state)
      return outcome
    },
    [progress],
  )

  const resetProgress = useCallback(() => setProgress(initialState), [])

  return { progress, recordSession, resetProgress }
}
