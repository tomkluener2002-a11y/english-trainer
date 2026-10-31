/** Antwortprüfung für Tipp-Übungen: tolerant gegenüber Groß-/Kleinschreibung,
 *  Satzzeichen, Kurzformen (I'm / I am) und kleinen Tippfehlern. */

const PRONOUN_IS = ['it', 'that', 'she', 'he', 'there', 'what', 'here', 'who']

/** Kurzformen, die am Handy oft ohne Apostroph getippt werden (nur eindeutige Fälle –
 *  "well", "were", "its" usw. sind echte Wörter und bleiben unverändert). */
const NO_APOSTROPHE: Record<string, string> = {
  im: "i'm",
  ive: "i've",
  ill: "i'll",
  youre: "you're",
  youve: "you've",
  theyre: "they're",
  theyve: "they've",
  weve: "we've",
  thats: "that's",
  whats: "what's",
  lets: "let's",
  dont: "don't",
  doesnt: "doesn't",
  didnt: "didn't",
  isnt: "isn't",
  arent: "aren't",
  wasnt: "wasn't",
  cant: "can't",
  couldnt: "couldn't",
  wouldnt: "wouldn't",
  shouldnt: "shouldn't",
  havent: "haven't",
  hasnt: "hasn't",
}

function expandContractions(s: string): string {
  return s
    .replace(/\b[a-z]+\b/g, (w) => NO_APOSTROPHE[w] ?? w)
    .replace(/\bwon't\b/g, 'will not')
    .replace(/\bcan't\b/g, 'can not')
    .replace(/\bcannot\b/g, 'can not')
    .replace(/\blet's\b/g, 'let us')
    .replace(/n't\b/g, ' not')
    .replace(/'re\b/g, ' are')
    .replace(/'ve\b/g, ' have')
    .replace(/'ll\b/g, ' will')
    .replace(/'m\b/g, ' am')
    .replace(/'d\b/g, ' would')
    .replace(new RegExp(`\\b(${PRONOUN_IS.join('|')})'s\\b`, 'g'), '$1 is')
}

export function normalize(input: string): string {
  let s = input.toLowerCase().trim()
  s = s.replace(/[’‘`´]/g, "'")
  s = expandContractions(s)
  s = s.replace(/[-–—/]/g, ' ')
  s = s.replace(/[.,!?;:"“”()[\]€$%]/g, ' ')
  s = s.replace(/\s+/g, ' ').trim()
  return s
}

/** Editierdistanz (Damerau-Levenshtein, OSA): vertauschte Buchstaben zählen als ein Fehler. */
export function editDistance(a: string, b: string): number {
  if (a === b) return 0
  if (!a.length) return b.length
  if (!b.length) return a.length
  const d: number[][] = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0)),
  )
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost)
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1)
      }
    }
  }
  return d[a.length][b.length]
}

/** Satzvergleich ohne Satzzeichen und Groß-/Kleinschreibung (für Satzbau-Alternativen). */
export function sameSentence(a: string, b: string): boolean {
  const clean = (s: string) => s.replace(/[.,!?;:]/g, '').replace(/\s+/g, ' ').trim().toLowerCase()
  return clean(a) === clean(b)
}

/** Wie viele Tippfehler bei einer Lösung dieser Länge noch als "fast richtig" gelten. */
function tolerance(length: number): number {
  if (length < 5) return 0
  if (length <= 12) return 1
  return Math.min(3, Math.floor(length / 12))
}

export interface TextCheck {
  correct: boolean
  /** Richtig gewertet, aber mit kleinem Tippfehler */
  nearMiss: boolean
}

export function checkText(input: string, accepted: string[]): TextCheck {
  const given = normalize(input)
  if (!given) return { correct: false, nearMiss: false }
  let best = Infinity
  let bestLen = 0
  for (const option of accepted) {
    const target = normalize(option)
    if (given === target) return { correct: true, nearMiss: false }
    const d = editDistance(given, target)
    if (d < best) {
      best = d
      bestLen = target.length
    }
  }
  if (best <= tolerance(bestLen)) return { correct: true, nearMiss: true }
  return { correct: false, nearMiss: false }
}
