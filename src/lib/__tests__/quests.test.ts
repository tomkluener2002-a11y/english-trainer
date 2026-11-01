import { describe, expect, it } from 'vitest'
import { type ActivityEvent, type Quest, applyQuestEvent, generateQuests, isQuestDone, questLabel } from '../quests'

const ev = (over: Partial<ActivityEvent> = {}): ActivityEvent => ({
  xp: 0,
  lesson: false,
  perfect: false,
  listening: 0,
  combo: 0,
  practice: false,
  goalReached: false,
  ...over,
})
const quest = (kind: Quest['kind'], target: number, progress = 0): Quest => ({ id: 'q', kind, target, progress, reward: 10, claimed: false })

describe('generateQuests', () => {
  it('erzeugt je Tag drei deterministische Quests, die erste ist die XP-Quest', () => {
    const a = generateQuests('2026-05-01', 20)
    expect(a).toHaveLength(3)
    expect(a[0].kind).toBe('xp')
    expect(generateQuests('2026-05-01', 20)).toEqual(a)
  })

  it('Quest-Arten eines Tages sind verschieden; Start-Fortschritt 0, nicht eingelöst', () => {
    for (let d = 1; d <= 28; d++) {
      const qs = generateQuests(`2026-05-${String(d).padStart(2, '0')}`, 20)
      expect(new Set(qs.map((q) => q.kind)).size).toBe(3)
      expect(new Set(qs.map((q) => q.id)).size).toBe(3)
      for (const q of qs) expect(q).toMatchObject({ progress: 0, claimed: false })
      for (const q of qs) expect(q.target).toBeGreaterThan(0)
    }
  })

  it('verschiedene Tage ergeben nicht immer dieselben Quests', () => {
    const kinds = new Set<string>()
    for (let d = 1; d <= 28; d++) kinds.add(generateQuests(`2026-05-${String(d).padStart(2, '0')}`, 20).map((q) => q.kind).join())
    expect(kinds.size).toBeGreaterThan(1)
  })

  it('XP-Ziel skaliert mit dem Tagesziel (mindestens 20)', () => {
    expect(generateQuests('2026-05-01', 10)[0].target).toBe(20)
    expect(generateQuests('2026-05-01', 30)[0].target).toBe(45)
    expect(generateQuests('2026-05-01', 50)[0].target).toBe(75)
  })
})

describe('applyQuestEvent', () => {
  it('XP summiert sich und wird am Ziel gedeckelt', () => {
    let items = [quest('xp', 30)]
    items = applyQuestEvent(items, ev({ xp: 20 }))
    expect(items[0].progress).toBe(20)
    expect(isQuestDone(items[0])).toBe(false)
    items = applyQuestEvent(items, ev({ xp: 20 }))
    expect(items[0].progress).toBe(30)
    expect(isQuestDone(items[0])).toBe(true)
  })

  it('Lektionen zählen nur bei abgeschlossener Lektion', () => {
    const items = [quest('lessons', 2)]
    expect(applyQuestEvent(items, ev({ practice: true }))[0].progress).toBe(0)
    expect(applyQuestEvent(items, ev({ lesson: true }))[0].progress).toBe(1)
  })

  it('perfect braucht Lektion UND fehlerfrei', () => {
    const items = [quest('perfect', 1)]
    expect(applyQuestEvent(items, ev({ perfect: true }))[0].progress).toBe(0)
    expect(applyQuestEvent(items, ev({ lesson: true }))[0].progress).toBe(0)
    expect(applyQuestEvent(items, ev({ lesson: true, perfect: true }))[0].progress).toBe(1)
  })

  it('combo nimmt das Maximum statt zu addieren', () => {
    let items = [quest('combo', 12)]
    items = applyQuestEvent(items, ev({ combo: 5 }))
    items = applyQuestEvent(items, ev({ combo: 3 }))
    expect(items[0].progress).toBe(5)
    items = applyQuestEvent(items, ev({ combo: 20 }))
    expect(items[0].progress).toBe(12)
  })

  it('listening, practice und goal', () => {
    const items = [quest('listening', 5), quest('practice', 1), quest('goal', 1)]
    const out = applyQuestEvent(items, ev({ listening: 3, practice: true, goalReached: true }))
    expect(out.map((q) => q.progress)).toEqual([3, 1, 1])
  })

  it('ändert Eingabe-Quests nicht', () => {
    const items = [quest('xp', 30)]
    applyQuestEvent(items, ev({ xp: 10 }))
    expect(items[0].progress).toBe(0)
  })

  it('questLabel nennt das Ziel', () => {
    expect(questLabel({ kind: 'xp', target: 40 })).toContain('40')
    expect(questLabel({ kind: 'combo', target: 8 })).toContain('8')
  })
})
