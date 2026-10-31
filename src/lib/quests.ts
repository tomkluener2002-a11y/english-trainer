/** Tägliche Quests: drei pro Tag, deterministisch aus dem Datum erzeugt. */
import { seeded, shuffle } from './rng'

export type QuestKind = 'xp' | 'lessons' | 'perfect' | 'listening' | 'combo' | 'practice' | 'goal'

export interface Quest {
  id: string
  kind: QuestKind
  target: number
  progress: number
  reward: number
  claimed: boolean
}

const SECONDARY: { kind: QuestKind; targets: number[]; reward: number }[] = [
  { kind: 'lessons', targets: [2, 3], reward: 15 },
  { kind: 'perfect', targets: [1], reward: 20 },
  { kind: 'listening', targets: [5, 8], reward: 15 },
  { kind: 'combo', targets: [8, 12], reward: 15 },
  { kind: 'practice', targets: [1], reward: 15 },
  { kind: 'goal', targets: [1], reward: 10 },
]

export function generateQuests(day: string, dailyGoal: number): Quest[] {
  const rng = seeded('quests:' + day)
  const xpTarget = Math.max(20, Math.round((dailyGoal * 1.5) / 5) * 5)
  const first: Quest = { id: `${day}:xp`, kind: 'xp', target: xpTarget, progress: 0, reward: 10, claimed: false }
  const others = shuffle(SECONDARY, rng)
    .slice(0, 2)
    .map((q) => ({
      id: `${day}:${q.kind}`,
      kind: q.kind,
      target: q.targets[Math.floor(rng() * q.targets.length)],
      progress: 0,
      reward: q.reward,
      claimed: false,
    }))
  return [first, ...others]
}

export function questLabel(q: Pick<Quest, 'kind' | 'target'>): string {
  switch (q.kind) {
    case 'xp':
      return `Sammle ${q.target} XP`
    case 'lessons':
      return `Schließe ${q.target} Lektionen ab`
    case 'perfect':
      return 'Schaffe eine Lektion ohne Fehler'
    case 'listening':
      return `Löse ${q.target} Höraufgaben richtig`
    case 'combo':
      return `${q.target} richtige Antworten in Folge`
    case 'practice':
      return 'Mache eine Übungseinheit'
    case 'goal':
      return 'Erreiche dein Tagesziel'
  }
}

export const QUEST_ICON: Record<QuestKind, string> = {
  xp: '⚡',
  lessons: '📘',
  perfect: '🎯',
  listening: '🎧',
  combo: '🔥',
  practice: '🏋️',
  goal: '🏁',
}

export interface ActivityEvent {
  xp: number
  lesson: boolean
  perfect: boolean
  listening: number
  combo: number
  practice: boolean
  goalReached: boolean
}

export function applyQuestEvent(items: Quest[], ev: ActivityEvent): Quest[] {
  return items.map((q) => {
    let p = q.progress
    switch (q.kind) {
      case 'xp':
        p += ev.xp
        break
      case 'lessons':
        if (ev.lesson) p += 1
        break
      case 'perfect':
        if (ev.lesson && ev.perfect) p += 1
        break
      case 'listening':
        p += ev.listening
        break
      case 'combo':
        p = Math.max(p, ev.combo)
        break
      case 'practice':
        if (ev.practice) p += 1
        break
      case 'goal':
        if (ev.goalReached) p = 1
        break
    }
    return { ...q, progress: Math.min(q.target, p) }
  })
}

export const isQuestDone = (q: Quest) => q.progress >= q.target
