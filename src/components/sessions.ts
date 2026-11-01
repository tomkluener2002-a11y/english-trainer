/** Baut Lern-Sessions (Lektion, Übung, Unit-Wiederholung) aus Content und Zustand. */
import { core, lessonById, unitById, unitWords, vocabById } from '../content'
import type { ColorKey, Exercise } from '../content/schema'
import { generateReview } from '../lib/review'
import { dueWords, weakWords } from '../lib/srs'
import type { SessionKind } from '../lib/xp'
import type { AppState } from '../state/types'

export interface SessionSpec {
  kind: SessionKind
  title: string
  color: ColorKey
  items: { key: string; ex: Exercise }[]
  usesHearts: boolean
  lessonId?: string
  unitId?: string
}

export type PracticeMode = 'mistakes' | 'weak' | 'due' | 'unit' | 'heal'

const isListen = (ex: Exercise) => ex.type === 'listen-choice' || ex.type === 'listen-type'

function filterPaused(items: { key: string; ex: Exercise }[], s: AppState, now: number) {
  return items.filter(({ ex }) => {
    if (ex.type === 'speak' && s.settings.speakingOffUntil > now) return false
    if (isListen(ex) && s.settings.listeningOffUntil > now) return false
    return true
  })
}

export function lessonSession(lessonId: string, s: AppState, now: number): SessionSpec | null {
  const ref = lessonById.get(lessonId)
  if (!ref) return null
  const items = ref.lesson.exercises.map((ex) => ({ key: `${lessonId}::${ex.id}`, ex }))
  return {
    kind: 'lesson',
    title: ref.lesson.title,
    color: ref.unit.color,
    items: filterPaused(items, s, now),
    usesHearts: true,
    lessonId,
    unitId: ref.unit.id,
  }
}

/** Gelernte Wörter, schwächste zuerst – mit Auffüllung aus fälligen und übrigen Wörtern. */
export function practiceWords(s: AppState, now: number, mode: 'weak' | 'due', limit = 10): string[] {
  const first = mode === 'weak' ? weakWords(s.srs, now, limit) : dueWords(s.srs, now).slice(0, limit)
  const rest = Object.entries(s.srs)
    .sort((a, b) => a[1].box - b[1].box || a[1].due - b[1].due)
    .map(([id]) => id)
  const out = [...new Set([...first, ...rest])].filter((id) => vocabById.has(id))
  return out.slice(0, limit)
}

export function mistakeItems(s: AppState): { key: string; ex: Exercise }[] {
  const out: { key: string; ex: Exercise }[] = []
  const keys = Object.entries(s.mistakes).sort((a, b) => b[1].count - a[1].count || b[1].at - a[1].at)
  for (const [key] of keys) {
    const [lessonId, exId] = key.split('::')
    const ex = lessonById.get(lessonId)?.lesson.exercises.find((e) => e.id === exId)
    if (ex && ex.type !== 'intro') out.push({ key, ex })
  }
  return out
}

export function practiceSession(mode: PracticeMode, s: AppState, now: number, unitId?: string): SessionSpec | null {
  const listening = s.settings.listeningOffUntil <= now
  const gen = (ids: string[], count: number) =>
    generateReview(ids, vocabById, Math.random, { count, listening }).map((ex) => ({ key: `gen::${ex.id}`, ex }))

  if (mode === 'unit' && unitId) {
    const ref = unitById.get(unitId)
    if (!ref) return null
    const items = gen(unitWords(ref.unit), 12)
    if (!items.length) return null
    return { kind: 'unit-review', title: `Wiederholung: ${ref.unit.title}`, color: ref.unit.color, items: filterPaused(items, s, now), usesHearts: true, unitId }
  }

  if (mode === 'mistakes') {
    const items = filterPaused(mistakeItems(s), s, now).slice(0, 12)
    if (items.length) return { kind: 'practice', title: 'Fehlerkiste', color: 'red', items, usesHearts: false }
  }

  let words = practiceWords(s, now, mode === 'due' ? 'due' : 'weak')
  if (!words.length) {
    // Noch nichts gelernt: Wörter der ersten Unit als sanfter Einstieg.
    const first = core.units.find((u) => u.lessons.length)
    words = first ? unitWords(first).slice(0, 6) : []
  }
  const items = gen(words, 10)
  if (!items.length) return null
  return {
    kind: 'practice',
    title: mode === 'due' ? 'Wiederholung' : mode === 'heal' ? 'Herzen auffüllen' : 'Schwache Wörter',
    color: 'blue',
    items: filterPaused(items, s, now),
    usesHearts: false,
  }
}
