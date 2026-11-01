import { describe, expect, it } from 'vitest'
import { CEFR_LEVELS, type PlacementQuestion } from '../../content/schema'
import { placementBank } from '../../content/index'
import {
  MAX_QUESTIONS,
  MIN_QUESTIONS,
  START_LEVEL,
  answerPlacement,
  currentLevel,
  isFinished,
  levelStats,
  nextQuestion,
  placementProgress,
  placementResult,
  startPlacement,
  stepSize,
  type PlacementState,
} from '../placement'
import { seeded } from '../rng'

/** Synthetische Bank: 12 Fragen je Niveau. */
function makeBank(perLevel = 12): PlacementQuestion[] {
  return CEFR_LEVELS.flatMap((cefr, l) =>
    Array.from({ length: perLevel }, (_, i) => ({
      id: `t.${cefr.toLowerCase()}.${i}`,
      cefr,
      exercise: { id: `x${l}${i}`, type: 'choice' as const, prompt: 'p', choices: [{ text: 'a', correct: true }, { text: 'b' }] },
    })),
  )
}

/** Spielt einen kompletten Test mit einer Antwortfunktion durch. */
function run(bank: PlacementQuestion[], answer: (level: number, n: number) => boolean, seed = 1) {
  const rng = seeded(seed)
  let s = startPlacement()
  let guard = 0
  while (!isFinished(s) && guard++ < 100) {
    const q = nextQuestion(bank, s, rng)
    if (!q) break
    s = answerPlacement(s, { id: q.id, level: CEFR_LEVELS.indexOf(q.cefr) }, answer(CEFR_LEVELS.indexOf(q.cefr), s.answers.length))
  }
  return s
}

describe('Einstufungstest: Schätzwert', () => {
  it('startet bei A2', () => {
    const s = startPlacement()
    expect(s.theta).toBe(START_LEVEL)
    expect(CEFR_LEVELS[currentLevel(s)]).toBe('A2')
    expect(s.answers).toEqual([])
  })

  it('steigt bei richtiger und sinkt bei falscher Antwort', () => {
    const s0 = startPlacement()
    const up = answerPlacement(s0, { id: 'a', level: 1 }, true)
    const down = answerPlacement(s0, { id: 'a', level: 1 }, false)
    expect(up.theta).toBeGreaterThan(s0.theta)
    expect(down.theta).toBeLessThan(s0.theta)
    expect(down.answers[0]).toEqual({ id: 'a', level: 1, correct: false })
  })

  it('Schrittweite nimmt ab, hat aber eine Untergrenze', () => {
    expect(stepSize(1)).toBeLessThan(stepSize(0))
    expect(stepSize(100)).toBe(0.35)
  })

  it('bleibt in den Grenzen der Niveauskala', () => {
    let s = startPlacement()
    for (let i = 0; i < 30; i++) s = answerPlacement(s, { id: String(i), level: 4 }, true)
    expect(currentLevel(s)).toBe(CEFR_LEVELS.length - 1)
    for (let i = 0; i < 60; i++) s = answerPlacement(s, { id: 'w' + i, level: 0 }, false)
    expect(currentLevel(s)).toBe(0)
  })

  it('verändert den vorherigen Zustand nicht (immutable)', () => {
    const s0 = startPlacement()
    answerPlacement(s0, { id: 'a', level: 1 }, true)
    expect(s0.answers).toHaveLength(0)
  })
})

describe('Einstufungstest: nextQuestion', () => {
  const bank = makeBank()

  it('wählt eine Frage vom aktuellen Niveau', () => {
    const q = nextQuestion(bank, startPlacement(), seeded(3))!
    expect(q.cefr).toBe('A2')
  })

  it('stellt keine Frage doppelt', () => {
    let s: PlacementState = startPlacement()
    const seen = new Set<string>()
    const rng = seeded(5)
    for (let i = 0; i < 25; i++) {
      const q = nextQuestion(bank, s, rng)!
      expect(seen.has(q.id)).toBe(false)
      seen.add(q.id)
      s = answerPlacement(s, { id: q.id, level: CEFR_LEVELS.indexOf(q.cefr) }, i % 2 === 0)
    }
  })

  it('weicht auf das nächstgelegene Niveau aus, wenn eins leer ist', () => {
    const noA2 = bank.filter((q) => q.cefr !== 'A2')
    const q = nextQuestion(noA2, startPlacement(), seeded(1))!
    expect(['A1', 'B1']).toContain(q.cefr)
  })

  it('liefert null, wenn die Bank erschöpft ist', () => {
    const tiny = makeBank(1).slice(0, 1)
    const s = answerPlacement(startPlacement(), { id: tiny[0].id, level: 0 }, true)
    expect(nextQuestion(tiny, s, seeded(1))).toBeNull()
  })
})

describe('Einstufungstest: Abbruch und Ergebnis', () => {
  const bank = makeBank()

  it('endet nie vor MIN_QUESTIONS und spätestens bei MAX_QUESTIONS', () => {
    const s = startPlacement()
    expect(isFinished(s)).toBe(false)
    const alternating = run(bank, (_l, n) => n % 2 === 0)
    expect(alternating.answers.length).toBeGreaterThanOrEqual(MIN_QUESTIONS)
    expect(alternating.answers.length).toBeLessThanOrEqual(MAX_QUESTIONS)
  })

  it('ist bei MAX_QUESTIONS immer beendet', () => {
    let s = startPlacement()
    for (let i = 0; i < MAX_QUESTIONS; i++) s = answerPlacement(s, { id: String(i), level: i % 5 }, i % 2 === 0)
    expect(isFinished(s)).toBe(true)
  })

  it('"Ich weiß nicht" (= falsch) für alles ergibt A1', () => {
    const s = run(bank, () => false)
    expect(placementResult(s)).toBe('A1')
    expect(s.answers.every((a) => !a.correct)).toBe(true)
  })

  it('alles richtig ergibt C1', () => {
    expect(placementResult(run(bank, () => true))).toBe('C1')
  })

  it.each(CEFR_LEVELS.map((c, i) => [c, i] as const))('Idealer Lerner mit Niveau %s wird korrekt eingestuft', (cefr, ability) => {
    const s = run(bank, (level) => level <= ability)
    expect(placementResult(s)).toBe(cefr)
    expect(s.answers.length).toBeLessThanOrEqual(MAX_QUESTIONS)
  })

  it('Lerner mit Rauschen landet höchstens ein Niveau daneben', () => {
    for (const ability of [0, 1, 2, 3, 4]) {
      for (const seed of [1, 2, 3, 4, 5]) {
        const noise = seeded(seed * 100 + ability)
        const s = run(bank, (level) => (level <= ability ? noise() < 0.9 : noise() < 0.1), seed)
        const got = CEFR_LEVELS.indexOf(placementResult(s))
        expect(Math.abs(got - ability)).toBeLessThanOrEqual(1)
      }
    }
  })

  it('Glückstreffer einzelner schwerer Fragen heben das Ergebnis nicht weit an', () => {
    // Stark unten, zwei zufällige C1-Treffer
    let s = startPlacement()
    for (let i = 0; i < 12; i++) s = answerPlacement(s, { id: 'a' + i, level: 0 }, i < 4 ? true : false)
    s = answerPlacement(s, { id: 'c1', level: 4 }, true)
    s = answerPlacement(s, { id: 'c2', level: 4 }, true)
    expect(CEFR_LEVELS.indexOf(placementResult(s))).toBeLessThanOrEqual(currentLevel(s) + 1)
  })

  it('levelStats zählt je Niveau', () => {
    let s = startPlacement()
    s = answerPlacement(s, { id: 'a', level: 2 }, true)
    s = answerPlacement(s, { id: 'b', level: 2 }, false)
    expect(levelStats(s)[2]).toEqual({ level: 2, asked: 2, correct: 1 })
    expect(levelStats(s)).toHaveLength(CEFR_LEVELS.length)
  })

  it('Fortschritt wächst monoton von 0 bis 1', () => {
    expect(placementProgress(startPlacement())).toBe(0)
    let s = startPlacement()
    let prev = 0
    for (let i = 0; i < MAX_QUESTIONS; i++) {
      s = answerPlacement(s, { id: String(i), level: i % 5 }, i % 3 === 0)
      const p = placementProgress(s)
      expect(p).toBeGreaterThanOrEqual(prev)
      prev = p
    }
    expect(prev).toBe(1)
  })
})

describe('Einstufungstest mit echter Fragenbank', () => {
  it('terminiert für Lerner aller Niveaus und liefert das richtige Niveau', () => {
    CEFR_LEVELS.forEach((cefr, ability) => {
      const s = run(placementBank, (level) => level <= ability, 7)
      expect(isFinished(s)).toBe(true)
      expect(placementResult(s)).toBe(cefr)
    })
  })
})
