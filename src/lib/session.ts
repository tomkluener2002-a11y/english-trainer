import { lessons } from '../content/lessons'
import type { Exercise } from '../content/types'
import { mistakeKey } from '../hooks/useProgress'
import { sample, shuffle } from './random'

export interface SessionItem {
  lessonId: string
  exercise: Exercise
  key: string
}

export interface Session {
  title: string
  /** Gesetzt, wenn es eine komplette Lektion ist */
  lessonId?: string
  items: SessionItem[]
}

function toItem(lessonId: string, exercise: Exercise): SessionItem {
  return { lessonId, exercise, key: mistakeKey(lessonId, exercise.id) }
}

export function lessonSession(lessonId: string): Session | null {
  const lesson = lessons.find((l) => l.id === lessonId)
  if (!lesson) return null
  return {
    title: lesson.title,
    lessonId: lesson.id,
    items: lesson.exercises.map((e) => toItem(lesson.id, e)),
  }
}

/** Gemischtes Training über alle Lektionen (ohne Lernkarten). */
export function quickSession(count = 10): Session {
  const pool = lessons.flatMap((l) =>
    l.exercises.filter((e) => e.type !== 'flashcard').map((e) => toItem(l.id, e)),
  )
  return { title: 'Schnelltraining', items: sample(pool, count) }
}

/** Wiederholung gespeicherter Fehler (unbekannte Keys werden ignoriert). */
export function mistakesSession(keys: string[], max = 15): Session {
  const items: SessionItem[] = []
  for (const key of keys) {
    const [lessonId, exerciseId] = key.split('::')
    const exercise = lessons.find((l) => l.id === lessonId)?.exercises.find((e) => e.id === exerciseId)
    if (exercise) items.push(toItem(lessonId, exercise))
  }
  return { title: 'Fehler wiederholen', items: shuffle(items).slice(0, max) }
}

/** Zählt nur Fehler, die noch zu existierenden Übungen gehören. */
export function countValidMistakes(keys: string[]): number {
  return mistakesSession(keys, Infinity).items.length
}
