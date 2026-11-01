/** Erfolge/Badges: werden nach jeder Session geprüft. */
import type { AppState } from '../state/types'

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  color: 'green' | 'blue' | 'purple' | 'orange' | 'red' | 'yellow' | 'teal' | 'pink'
  target: number
  value: (s: AppState) => number
}

const lessonsDone = (s: AppState) => s.stats.lessons
const wordsLearned = (s: AppState) => Object.values(s.srs).filter((w) => w.box >= 2).length
const unitsDone = (s: AppState) => s.unitReviews.length
const maxLessonsPerDay = (s: AppState) => Math.max(0, ...Object.values(s.stats.lessonsByDay))

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first-lesson', title: 'Erster Schritt', description: 'Schließe deine erste Lektion ab.', icon: '🐣', color: 'green', target: 1, value: lessonsDone },
  { id: 'lessons-10', title: 'Fleißig', description: 'Schließe 10 Lektionen ab.', icon: '📚', color: 'blue', target: 10, value: lessonsDone },
  { id: 'lessons-50', title: 'Bücherwurm', description: 'Schließe 50 Lektionen ab.', icon: '🐛', color: 'purple', target: 50, value: lessonsDone },
  { id: 'streak-3', title: 'Warmgelaufen', description: 'Halte einen Streak von 3 Tagen.', icon: '🔥', color: 'orange', target: 3, value: (s) => s.streak.longest },
  { id: 'streak-7', title: 'Wochenheld', description: 'Halte einen Streak von 7 Tagen.', icon: '🗓️', color: 'orange', target: 7, value: (s) => s.streak.longest },
  { id: 'streak-30', title: 'Unaufhaltsam', description: 'Halte einen Streak von 30 Tagen.', icon: '🏔️', color: 'red', target: 30, value: (s) => s.streak.longest },
  { id: 'xp-100', title: 'XP-Sammler', description: 'Sammle 100 XP.', icon: '⚡', color: 'yellow', target: 100, value: (s) => s.xp.total },
  { id: 'xp-1000', title: 'XP-Profi', description: 'Sammle 1.000 XP.', icon: '💫', color: 'yellow', target: 1000, value: (s) => s.xp.total },
  { id: 'perfect-1', title: 'Makellos', description: 'Schließe eine Lektion ohne Fehler ab.', icon: '🎯', color: 'green', target: 1, value: (s) => s.stats.perfect },
  { id: 'perfect-10', title: 'Scharfschütze', description: 'Schließe 10 Lektionen ohne Fehler ab.', icon: '🏹', color: 'teal', target: 10, value: (s) => s.stats.perfect },
  { id: 'combo-15', title: 'Lauf', description: '15 richtige Antworten in Folge.', icon: '🌊', color: 'blue', target: 15, value: (s) => s.stats.bestCombo },
  { id: 'words-25', title: 'Wortschatz', description: 'Lerne 25 Wörter sicher.', icon: '🧠', color: 'pink', target: 25, value: wordsLearned },
  { id: 'words-100', title: 'Wandelndes Wörterbuch', description: 'Lerne 100 Wörter sicher.', icon: '📖', color: 'purple', target: 100, value: wordsLearned },
  { id: 'placement', title: 'Standortbestimmung', description: 'Mache den Einstufungstest.', icon: '🧭', color: 'teal', target: 1, value: (s) => (s.placement.done ? 1 : 0) },
  { id: 'specialist', title: 'Spezialist', description: 'Wähle eine Spezialisierung.', icon: '🛤️', color: 'blue', target: 1, value: (s) => s.tracks.chosen.length },
  { id: 'explorer', title: 'Entdecker', description: 'Lerne zwei Spezialisierungen parallel.', icon: '🗺️', color: 'green', target: 2, value: (s) => s.tracks.chosen.length },
  { id: 'unit-1', title: 'Unit gemeistert', description: 'Bestehe eine Unit-Wiederholung.', icon: '🏆', color: 'yellow', target: 1, value: unitsDone },
  { id: 'listener', title: 'Gutes Gehör', description: 'Löse 50 Höraufgaben richtig.', icon: '🎧', color: 'purple', target: 50, value: (s) => s.stats.listening },
  { id: 'fixer', title: 'Aus Fehlern lernen', description: 'Korrigiere 20 Fehler aus der Fehlerkiste.', icon: '🔧', color: 'orange', target: 20, value: (s) => s.stats.mistakesFixed },
  { id: 'practice-5', title: 'Trainingsfleiß', description: 'Mache 5 Übungseinheiten.', icon: '🏋️', color: 'red', target: 5, value: (s) => s.stats.practice },
  { id: 'night-owl', title: 'Nachteule', description: 'Lerne nach 22 Uhr.', icon: '🦉', color: 'purple', target: 1, value: (s) => s.stats.night },
  { id: 'early-bird', title: 'Frühaufsteher', description: 'Lerne vor 7 Uhr.', icon: '🌅', color: 'yellow', target: 1, value: (s) => s.stats.early },
  { id: 'marathon', title: 'Marathon', description: 'Schließe 5 Lektionen an einem Tag ab.', icon: '🏃', color: 'teal', target: 5, value: maxLessonsPerDay },
]

/** Erfolge, die laut Zustand erreicht, aber noch nicht freigeschaltet sind. */
export function newlyUnlocked(s: AppState): Achievement[] {
  return ACHIEVEMENTS.filter((a) => !s.achievements[a.id] && a.value(s) >= a.target)
}
