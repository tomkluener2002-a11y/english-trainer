/** Alle Zustandsänderungen der App an einem Ort. */
import { core } from '../content'
import type { Cefr, Exercise, InterestId } from '../content/schema'
import { type Achievement, newlyUnlocked } from '../lib/achievements'
import { dayKey } from '../lib/date'
import { gainHearts, loseHeart as loseHeartPure, MAX_HEARTS, normalizeHearts } from '../lib/hearts'
import { pendingFork, unitsBelowLevel } from '../lib/progress'
import { applyQuestEvent, generateQuests, isQuestDone, type Quest } from '../lib/quests'
import { INTERVALS, reviewWord } from '../lib/srs'
import { fixedKeys, type SessionState } from '../lib/session'
import { MAX_FREEZES, recordActivity } from '../lib/streak'
import { accuracy, type SessionKind, sessionGems, sessionXp, xpToday } from '../lib/xp'
import { defaultState, getState, replaceState, setState } from './store'
import type { Reason, Settings } from './types'

export const PRICES = { heartsRefill: 350, freeze: 200 } as const

export function completeOnboarding(p: { name: string; reason: Reason | null; interests: InterestId[]; dailyGoal: number }) {
  setState((s) => {
    s.profile = { ...s.profile, ...p, name: p.name.trim().slice(0, 40), onboarded: true }
    s.quests = { day: dayKey(), items: generateQuests(dayKey(), p.dailyGoal) }
  })
}

export function setDailyGoal(xp: number) {
  setState((s) => {
    s.profile.dailyGoal = xp
  })
}

export function updateProfile(p: Partial<{ name: string; interests: InterestId[] }>) {
  setState((s) => {
    s.profile = { ...s.profile, ...p }
  })
}

/** Ergebnis des Einstufungstests übernehmen: Units unter dem Niveau gelten als bestanden. */
export function applyPlacement(level: Cefr) {
  setState((s) => {
    s.placement = { done: true, level, at: Date.now() }
    s.testedOut = unitsBelowLevel(core, level)
    s.tracks.active = 'core'
    // Bereits „übersprungene“ Meilensteine sollen nicht nachträglich die Weggabelung auslösen –
    // außer dem höchsten, damit die Spezialisierung direkt angeboten wird.
    const skippedMilestones = core.units.filter((u) => u.milestone && s.testedOut.includes(u.id)).map((u) => u.id)
    s.tracks.forksSeen = [...new Set([...s.tracks.forksSeen, ...skippedMilestones.slice(0, -1)])]
  })
}

/** „Ganz von vorn anfangen“: keine übersprungenen Units. */
export function startFromScratch() {
  setState((s) => {
    s.testedOut = []
    s.placement = { done: true, level: s.placement.level ?? 'A1', at: s.placement.at ?? Date.now() }
    s.tracks.active = 'core'
  })
}

export function skipPlacement() {
  setState((s) => {
    s.placement = { done: true, level: 'A1', at: Date.now() }
    s.testedOut = []
  })
}

export function chooseTracks(ids: string[], focus: Record<string, string>) {
  setState((s) => {
    for (const id of ids) if (!s.tracks.chosen.includes(id)) s.tracks.chosen.push(id)
    if (ids[0]) s.tracks.active = ids[0]
    s.tracks.focus = { ...s.tracks.focus, ...focus }
    const fork = pendingFork(s, core)
    if (fork) s.tracks.forksSeen.push(fork.id)
  })
}

export function removeTrack(id: string) {
  setState((s) => {
    s.tracks.chosen = s.tracks.chosen.filter((t) => t !== id)
    if (s.tracks.active === id) s.tracks.active = 'core'
  })
}

/** Weggabelung gesehen, aber vertagt („Später“). */
export function dismissFork() {
  setState((s) => {
    const fork = pendingFork(s, core)
    if (fork) s.tracks.forksSeen.push(fork.id)
  })
}

export function setActiveTrack(id: string) {
  if (getState().tracks.active === id) return
  setState((s) => {
    s.tracks.active = id
  })
}

/* ─────────────────────────── Herzen & Shop ─────────────────────────── */

export function loseHeart() {
  setState((s) => {
    if (!s.settings.hearts) return
    s.hearts = loseHeartPure(s.hearts, Date.now())
  })
}

export function refillHeartsWithGems(): boolean {
  const s = getState()
  if (s.gems < PRICES.heartsRefill) return false
  setState((d) => {
    d.gems -= PRICES.heartsRefill
    d.hearts = { count: MAX_HEARTS, updatedAt: Date.now() }
  })
  return true
}

export function buyFreeze(): boolean {
  const s = getState()
  if (s.gems < PRICES.freeze || s.streak.freezes >= MAX_FREEZES) return false
  setState((d) => {
    d.gems -= PRICES.freeze
    d.streak.freezes += 1
  })
  return true
}

export function openChest(unitId: string): number {
  if (getState().chests.includes(unitId)) return 0
  const reward = 15 + Math.floor(Math.random() * 4) * 5
  setState((s) => {
    s.chests.push(unitId)
    s.gems += reward
  })
  return reward
}

export function claimQuest(id: string): number {
  const q = getState().quests.items.find((x) => x.id === id)
  if (!q || q.claimed || !isQuestDone(q)) return 0
  setState((s) => {
    const item = s.quests.items.find((x) => x.id === id)!
    item.claimed = true
    s.gems += item.reward
  })
  return q.reward
}

/* ─────────────────────────── Antworten & Sessions ─────────────────────────── */

const isLessonKey = (key: string) => key.includes('::') && !key.startsWith('gen::')

/** Live während einer Session: Spaced Repetition und Fehlerkiste aktualisieren. */
export function recordAnswer(key: string, ex: Exercise, correct: boolean) {
  const now = Date.now()
  setState((s) => {
    if (ex.type === 'intro') {
      if (!s.srs[ex.word]) s.srs[ex.word] = { box: 0, due: now + INTERVALS[0], seen: 0, correct: 0, wrong: 0, last: now }
      return
    }
    for (const w of ex.words ?? []) s.srs[w] = reviewWord(s.srs[w], correct, now)
    if (!isLessonKey(key)) return
    if (correct) {
      if (s.mistakes[key]) {
        delete s.mistakes[key]
        s.stats.mistakesFixed += 1
      }
    } else {
      const prev = s.mistakes[key]
      s.mistakes[key] = { at: now, count: (prev?.count ?? 0) + 1 }
    }
  })
}

export interface SessionSummary {
  xp: number
  gems: number
  accuracy: number
  durationMs: number
  perfect: boolean
  streak: number
  streakExtended: boolean
  usedFreezes: number
  goalReachedNow: boolean
  xpToday: number
  dailyGoal: number
  achievements: Achievement[]
  questsCompleted: Quest[]
  heartsGained: number
}

export function finishSession(p: {
  kind: SessionKind
  session: SessionState
  durationMs: number
  lessonId?: string
  unitId?: string
}): SessionSummary {
  const now = Date.now()
  const today = dayKey(now)
  const before = getState()
  const perfect = p.session.mistakes === 0
  const xp = sessionXp(p.kind, p.session.mistakes)
  const gems = sessionGems(p.kind, p.session.mistakes)
  const acc = accuracy(p.session.firstTry, p.session.graded)
  const goal = before.profile.dailyGoal
  const xpBefore = xpToday(before.xp.byDay, today)
  const goalReachedNow = xpBefore < goal && xpBefore + xp >= goal
  const streakRes = recordActivity(before.streak, today)
  const hour = new Date(now).getHours()
  let unlocked: Achievement[] = []
  let questsCompleted: Quest[] = []
  const heartsGained = p.kind === 'practice' && before.settings.hearts ? 1 : 0

  setState((s) => {
    s.xp.total += xp
    s.xp.byDay[today] = (s.xp.byDay[today] ?? 0) + xp
    s.gems += gems
    s.streak = streakRes.state
    s.stats.timeMs += p.durationMs
    s.stats.bestCombo = Math.max(s.stats.bestCombo, p.session.bestCombo)
    s.stats.listening += p.session.listeningCorrect
    if (hour >= 22) s.stats.night += 1
    if (hour < 7) s.stats.early += 1
    if (p.kind === 'practice') {
      s.stats.practice += 1
      if (heartsGained) s.hearts = gainHearts(s.hearts, heartsGained, now)
    } else {
      s.stats.lessons += 1
      s.stats.lessonsByDay[today] = (s.stats.lessonsByDay[today] ?? 0) + 1
      if (perfect) s.stats.perfect += 1
    }
    if (p.kind === 'lesson' && p.lessonId) {
      const prev = s.lessons[p.lessonId]
      s.lessons[p.lessonId] = { completions: (prev?.completions ?? 0) + 1, bestAccuracy: Math.max(prev?.bestAccuracy ?? 0, acc), lastAt: now }
    }
    if (p.kind === 'unit-review' && p.unitId && !s.unitReviews.includes(p.unitId)) s.unitReviews.push(p.unitId)
    s.hearts = normalizeHearts(s.hearts, now)

    const before = s.quests.items.map((q) => isQuestDone(q))
    s.quests.items = applyQuestEvent(s.quests.items, {
      xp,
      lesson: p.kind !== 'practice',
      perfect,
      listening: p.session.listeningCorrect,
      combo: p.session.bestCombo,
      practice: p.kind === 'practice',
      goalReached: (s.xp.byDay[today] ?? 0) >= goal,
    })
    questsCompleted = s.quests.items.filter((q, i) => isQuestDone(q) && !before[i])

    unlocked = newlyUnlocked(s)
    for (const a of unlocked) s.achievements[a.id] = now
  })
  void fixedKeys

  return {
    xp,
    gems,
    accuracy: acc,
    durationMs: p.durationMs,
    perfect,
    streak: streakRes.state.current,
    streakExtended: streakRes.extended,
    usedFreezes: streakRes.usedFreezes,
    goalReachedNow,
    xpToday: xpBefore + xp,
    dailyGoal: goal,
    achievements: unlocked,
    questsCompleted,
    heartsGained,
  }
}

/* ─────────────────────────── Einstellungen ─────────────────────────── */

export function updateSettings(p: Partial<Settings>) {
  setState((s) => {
    s.settings = { ...s.settings, ...p }
  })
}

export function resetAll() {
  replaceState(defaultState())
}

/** Nur für Entwicklung/QA: Herzen leeren. */
export function debugSetHearts(count: number) {
  setState((s) => {
    s.hearts = { count, updatedAt: Date.now() }
  })
}
