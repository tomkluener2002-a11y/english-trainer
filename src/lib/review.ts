/**
 * Erzeugt Wiederholungs-Aufgaben automatisch aus der Vokabel-Registry
 * (für Spaced Repetition, „Schwache Wörter“ und Unit-Wiederholungen).
 */
import type { Choice, Exercise, VocabEntry } from '../content/schema'
import { type Rng, shuffle } from './rng'

type Kind = 'en-de' | 'de-en' | 'listen' | 'gap' | 'picture'

function distractors(word: VocabEntry, pool: VocabEntry[], field: 'en' | 'de', rng: Rng, n = 3): VocabEntry[] {
  const prefix = word.id.split('.')[0]
  const seen = new Set([word[field].toLowerCase()])
  const candidates = shuffle(
    pool.filter((v) => v.id !== word.id),
    rng,
  ).sort((a, b) => Number(b.id.startsWith(prefix + '.')) - Number(a.id.startsWith(prefix + '.')))
  const out: VocabEntry[] = []
  for (const c of candidates) {
    const key = c[field].toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)
    out.push(c)
    if (out.length >= n) break
  }
  return out
}

function gapSentence(w: VocabEntry): string | null {
  if (!w.example) return null
  const escaped = w.en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const re = new RegExp(`\\b${escaped}\\b`, 'i')
  if (!re.test(w.example)) return null
  return w.example.replace(re, '___')
}

function kindsFor(w: VocabEntry, listening: boolean): Kind[] {
  const kinds: Kind[] = ['en-de', 'de-en']
  if (listening) kinds.push('listen')
  if (gapSentence(w)) kinds.push('gap')
  if (w.emoji) kinds.push('picture')
  return kinds
}

export function exerciseForWord(w: VocabEntry, pool: VocabEntry[], kind: Kind, rng: Rng, id: string): Exercise {
  const base = { id, words: [w.id], explanation: w.note }
  switch (kind) {
    case 'en-de': {
      const choices: Choice[] = [{ text: w.de, correct: true }, ...distractors(w, pool, 'de', rng).map((d) => ({ text: d.de }))]
      return { ...base, type: 'choice', prompt: 'Was bedeutet das?', question: w.en, questionLang: 'en', choices }
    }
    case 'de-en': {
      const choices: Choice[] = [{ text: w.en, correct: true }, ...distractors(w, pool, 'en', rng).map((d) => ({ text: d.en }))]
      return { ...base, type: 'choice', prompt: 'Wie heißt das auf Englisch?', question: w.de, questionLang: 'de', choices }
    }
    case 'listen': {
      const choices: Choice[] = [{ text: w.de, correct: true }, ...distractors(w, pool, 'de', rng).map((d) => ({ text: d.de }))]
      return { ...base, type: 'listen-choice', audio: w.en, prompt: 'Was bedeutet das Wort, das du hörst?', choices }
    }
    case 'gap':
      return {
        ...base,
        type: 'type',
        sentence: gapSentence(w)!,
        accepted: [w.en, ...(w.altEn ?? [])],
        hint: w.de,
        translation: w.exampleDe,
      }
    case 'picture': {
      const others = distractors(
        w,
        pool.filter((v) => v.emoji),
        'en',
        rng,
      )
      if (others.length < 2) return exerciseForWord(w, pool, 'de-en', rng, id)
      const choices: Choice[] = shuffle([{ text: w.en, emoji: w.emoji, correct: true }, ...others.map((d) => ({ text: d.en, emoji: d.emoji }))], rng)
      return { ...base, type: 'choice', prompt: `Welches Bild passt zu „${w.de}“?`, choices }
    }
  }
}

/**
 * Baut eine Übungseinheit aus Vokabel-IDs. Mischt Aufgabentypen und fügt bei genug Wörtern
 * eine Paare-Aufgabe ein.
 */
export function generateReview(
  wordIds: string[],
  vocab: Map<string, VocabEntry>,
  rng: Rng,
  opts: { count?: number; listening?: boolean } = {},
): Exercise[] {
  const count = opts.count ?? 10
  const pool = [...vocab.values()]
  const words = wordIds.map((id) => vocab.get(id)).filter((w): w is VocabEntry => !!w)
  if (!words.length) return []
  const out: Exercise[] = []
  let i = 0
  // Paare-Aufgabe mit bis zu 4 Wörtern an zweiter Stelle
  const matchWords = words.slice(0, 4)
  const wantMatch = words.length >= 4
  while (out.length < count) {
    if (wantMatch && out.length === 1) {
      out.push({
        id: `r${out.length}`,
        type: 'match',
        pairs: matchWords.map((w) => ({ en: w.en, de: w.de })),
        words: matchWords.map((w) => w.id),
      })
      continue
    }
    const w = words[i % words.length]
    const kinds = kindsFor(w, opts.listening !== false)
    const kind = kinds[(i + Math.floor(rng() * kinds.length)) % kinds.length]
    out.push(exerciseForWord(w, pool, kind, rng, `r${out.length}`))
    i++
    if (i >= words.length * 2) break
  }
  return out
}
