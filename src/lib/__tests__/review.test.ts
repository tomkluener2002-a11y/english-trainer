import { describe, expect, it } from 'vitest'
import type { VocabEntry } from '../../content/schema'
import { exerciseForWord, generateReview } from '../review'
import { seeded } from '../rng'

const words: VocabEntry[] = [
  { id: 'core.apple', en: 'apple', de: 'Apfel', emoji: '🍎', example: 'I eat an apple.', exampleDe: 'Ich esse einen Apfel.' },
  { id: 'core.bread', en: 'bread', de: 'Brot', emoji: '🍞', example: 'The bread is fresh.', exampleDe: 'Das Brot ist frisch.' },
  { id: 'core.milk', en: 'milk', de: 'Milch', emoji: '🥛', example: 'I like milk.', exampleDe: 'Ich mag Milch.' },
  { id: 'core.water', en: 'water', de: 'Wasser', emoji: '💧' },
  { id: 'core.house', en: 'house', de: 'Haus', emoji: '🏠', altEn: ['home'] },
  { id: 'fin.cash', en: 'cash', de: 'Bargeld' },
]
const vocab = new Map(words.map((w) => [w.id, w]))

describe('Wiederholungs-Generator', () => {
  it('liefert [] für unbekannte oder leere Wortlisten', () => {
    expect(generateReview([], vocab, seeded(1))).toEqual([])
    expect(generateReview(['nope.x'], vocab, seeded(1))).toEqual([])
  })

  it('ist mit gleichem Seed deterministisch', () => {
    const ids = words.map((w) => w.id)
    const a = generateReview(ids, vocab, seeded(42), { count: 8 })
    const b = generateReview(ids, vocab, seeded(42), { count: 8 })
    expect(a).toEqual(b)
  })

  it('erzeugt höchstens `count` Aufgaben mit eindeutigen IDs', () => {
    const out = generateReview(words.map((w) => w.id), vocab, seeded(2), { count: 6 })
    expect(out.length).toBeGreaterThan(0)
    expect(out.length).toBeLessThanOrEqual(6)
    expect(new Set(out.map((e) => e.id)).size).toBe(out.length)
  })

  it('fügt ab 4 Wörtern eine Paare-Aufgabe an zweiter Stelle ein', () => {
    const out = generateReview(words.map((w) => w.id), vocab, seeded(3), { count: 8 })
    expect(out[1].type).toBe('match')
    const none = generateReview(['core.apple', 'core.bread'], vocab, seeded(3), { count: 4 })
    expect(none.some((e) => e.type === 'match')).toBe(false)
  })

  it('jede Auswahl-Aufgabe hat genau eine richtige Option, keine doppelten Texte', () => {
    for (let seed = 1; seed <= 10; seed++) {
      for (const ex of generateReview(words.map((w) => w.id), vocab, seeded(seed), { count: 12 })) {
        if (ex.type === 'choice' || ex.type === 'listen-choice') {
          expect(ex.choices.filter((c) => c.correct)).toHaveLength(1)
          const texts = ex.choices.map((c) => c.text.toLowerCase())
          expect(new Set(texts).size).toBe(texts.length)
        }
      }
    }
  })

  it('ohne Hören keine listen-choice-Aufgaben', () => {
    const out = generateReview(words.map((w) => w.id), vocab, seeded(4), { count: 12, listening: false })
    expect(out.some((e) => e.type === 'listen-choice')).toBe(false)
  })

  it('Aufgaben referenzieren das geübte Wort (für SRS)', () => {
    const out = generateReview(['core.apple'], vocab, seeded(5), { count: 2 })
    for (const ex of out) expect(ex.words).toContain('core.apple')
  })
})

describe('exerciseForWord', () => {
  const pool = words
  it('en-de: Frage ist das englische Wort, richtige Antwort die deutsche Bedeutung', () => {
    const ex = exerciseForWord(words[0], pool, 'en-de', seeded(1), 'x')
    expect(ex.type).toBe('choice')
    if (ex.type === 'choice') {
      expect(ex.question).toBe('apple')
      expect(ex.choices.find((c) => c.correct)?.text).toBe('Apfel')
    }
  })

  it('gap: ersetzt das Wort im Beispielsatz durch ___ und akzeptiert Varianten', () => {
    const ex = exerciseForWord(words[0], pool, 'gap', seeded(1), 'x')
    expect(ex.type).toBe('type')
    if (ex.type === 'type') {
      expect(ex.sentence).toBe('I eat an ___.')
      expect(ex.accepted).toEqual(['apple'])
    }
  })

  it('picture mit zu wenig Emoji-Ablenkern fällt auf de-en zurück', () => {
    const ex = exerciseForWord(words[0], [words[0], words[5]], 'picture', seeded(1), 'x')
    expect(ex.type).toBe('choice')
    if (ex.type === 'choice') expect(ex.question).toBe('Apfel')
  })
})
