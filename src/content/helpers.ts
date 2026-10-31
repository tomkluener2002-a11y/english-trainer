import type { Cefr, ColorKey, Unit } from './schema'

/** Gerüst-Unit ohne fertige Lektionen (erscheint im Pfad mit „Bald verfügbar“). */
export function plannedUnit(u: {
  id: string
  title: string
  description: string
  cefr: Cefr
  color: ColorKey
  icon: string
  topics: string[]
  plannedLessons?: string[]
  milestone?: boolean
}): Unit {
  return {
    ...u,
    status: 'planned',
    lessons: [],
    plannedLessons: u.plannedLessons ?? [...u.topics.slice(0, 4), 'Wiederholung'],
  }
}
