/**
 * Struktureller Content-Validator.
 *
 * Arbeitet bewusst auf `unknown` (nicht auf den TS-Typen), damit er auch rohe JSON-Dateien
 * prüfen kann. Wird von `bun run validate:content` (scripts/validate-content.ts) und vor
 * jedem Build ausgeführt.
 */
import { bankTokens, normalize } from '../lib/answer'
import { CEFR_LEVELS, COLOR_KEYS, EXERCISE_TYPES, INTEREST_IDS } from './schema'

export interface Issue {
  level: 'error' | 'warning'
  path: string
  message: string
}

const ID_RE = /^[a-z0-9][a-z0-9.-]*$/
export const LESSON_MIN = 8
export const LESSON_MAX = 15
const PLACEMENT_TYPES = ['choice', 'fill', 'translate', 'listen-choice', 'type']

type Obj = Record<string, unknown>
const isObj = (v: unknown): v is Obj => typeof v === 'object' && v !== null && !Array.isArray(v)
const isStr = (v: unknown): v is string => typeof v === 'string' && v.trim().length > 0
const isArr = Array.isArray

class Collector {
  issues: Issue[] = []
  error(path: string, message: string) {
    this.issues.push({ level: 'error', path, message })
  }
  warn(path: string, message: string) {
    this.issues.push({ level: 'warning', path, message })
  }
  str(o: Obj, key: string, path: string, optional = false): string | undefined {
    const v = o[key]
    if (v === undefined && optional) return undefined
    if (!isStr(v)) {
      this.error(path, `Feld "${key}" fehlt oder ist kein nicht-leerer String`)
      return undefined
    }
    return v
  }
  id(o: Obj, path: string, seen?: Set<string>): string | undefined {
    const id = this.str(o, 'id', path)
    if (!id) return undefined
    if (!ID_RE.test(id)) this.error(path, `ID "${id}" enthält unerlaubte Zeichen (erlaubt: a-z 0-9 . -)`)
    if (seen) {
      if (seen.has(id)) this.error(path, `Doppelte ID "${id}"`)
      seen.add(id)
    }
    return id
  }
  strArray(o: Obj, key: string, path: string, opts: { optional?: boolean; min?: number } = {}): string[] {
    const v = o[key]
    if (v === undefined && opts.optional) return []
    if (!isArr(v) || !v.every(isStr)) {
      this.error(path, `Feld "${key}" muss ein Array aus nicht-leeren Strings sein`)
      return []
    }
    if (opts.min !== undefined && v.length < opts.min) this.error(path, `"${key}" braucht mindestens ${opts.min} Einträge`)
    return v
  }
}

export interface ValidateInput {
  tracks: unknown[]
  vocab: unknown[]
  placement: unknown[]
}

export interface ContentStats {
  tracks: number
  units: number
  lessons: number
  exercises: number
  vocab: number
  placement: number
}

/** Prüft die gesamte App-Content-Basis. */
export function validateContent(input: ValidateInput): { issues: Issue[]; stats: ContentStats } {
  const c = new Collector()
  const vocabIds = validateVocab(input.vocab, c)
  const ids = new Set<string>()
  const stats: ContentStats = { tracks: 0, units: 0, lessons: 0, exercises: 0, vocab: vocabIds.size, placement: 0 }

  if (!isArr(input.tracks)) c.error('tracks', 'muss ein Array sein')
  else {
    const cores = input.tracks.filter((t) => isObj(t) && t.kind === 'core').length
    if (cores !== 1) c.error('tracks', `Es muss genau einen Track mit kind "core" geben (gefunden: ${cores})`)
    input.tracks.forEach((t, i) => validateTrack(t, `tracks[${i}]`, c, vocabIds, ids, stats))
  }
  validatePlacement(input.placement, c, vocabIds, stats)
  return { issues: c.issues, stats }
}

/** Prüft eine einzelne Unit (z.B. aus einer JSON-Datei) gegen eine Menge bekannter Vokabel-IDs. */
export function validateUnit(unit: unknown, vocabIds: Set<string>, trackId?: string): Issue[] {
  const c = new Collector()
  const stats: ContentStats = { tracks: 0, units: 0, lessons: 0, exercises: 0, vocab: 0, placement: 0 }
  validateUnitObj(unit, 'unit', c, vocabIds, new Set(), stats, trackId)
  return c.issues
}

/** Prüft eine einzelne Vokabelliste (z.B. JSON). */
export function validateVocabList(vocab: unknown[]): { issues: Issue[]; ids: Set<string> } {
  const c = new Collector()
  const ids = validateVocab(vocab, c)
  return { issues: c.issues, ids }
}

function validateVocab(vocab: unknown, c: Collector): Set<string> {
  const seen = new Set<string>()
  if (!isArr(vocab)) {
    c.error('vocab', 'muss ein Array sein')
    return seen
  }
  vocab.forEach((v, i) => {
    const p = `vocab[${i}]`
    if (!isObj(v)) return c.error(p, 'kein Objekt')
    const id = c.id(v, p, seen)
    const path = id ? `vocab:${id}` : p
    if (id && !id.includes('.')) c.error(path, 'Vokabel-IDs brauchen ein Track-Präfix, z.B. "core.hello"')
    c.str(v, 'en', path)
    c.str(v, 'de', path)
    for (const k of ['emoji', 'example', 'exampleDe', 'note', 'pos']) c.str(v, k, path, true)
    c.strArray(v, 'altEn', path, { optional: true })
    c.strArray(v, 'altDe', path, { optional: true })
    if (isStr(v.example) && !isStr(v.exampleDe)) c.warn(path, 'Beispielsatz ohne deutsche Übersetzung (exampleDe)')
  })
  return seen
}

function validateTrack(t: unknown, p: string, c: Collector, vocabIds: Set<string>, ids: Set<string>, stats: ContentStats) {
  if (!isObj(t)) return c.error(p, 'kein Objekt')
  const id = c.id(t, p, ids)
  const path = id ? `track:${id}` : p
  stats.tracks++
  if (t.kind !== 'core' && t.kind !== 'specialization') c.error(path, 'kind muss "core" oder "specialization" sein')
  for (const k of ['title', 'subtitle', 'description', 'icon']) c.str(t, k, path)
  c.str(t, 'pitch', path, true)
  if (!COLOR_KEYS.includes(t.color as never)) c.error(path, `Unbekannte Farbe "${String(t.color)}"`)
  if (t.minCefr !== undefined && !CEFR_LEVELS.includes(t.minCefr as never)) c.error(path, 'minCefr ungültig')
  const interests = c.strArray(t, 'interests', path)
  for (const i of interests) if (!INTEREST_IDS.includes(i as never)) c.error(path, `Unbekanntes Interesse "${i}"`)
  if (t.kind === 'specialization') {
    if (!isObj(t.sample) || !isStr(t.sample.en) || !isStr(t.sample.de)) c.warn(path, 'Spezialisierung ohne Beispielsatz (sample)')
    if (!interests.length) c.warn(path, 'Spezialisierung ohne interests – wird nie vorgeschlagen')
  }
  if (t.followUp !== undefined) {
    if (!isObj(t.followUp)) c.error(path, 'followUp muss ein Objekt sein')
    else {
      c.str(t.followUp, 'question', `${path}.followUp`)
      const opts = t.followUp.options
      if (!isArr(opts) || opts.length < 2) c.error(`${path}.followUp`, 'mindestens 2 options')
      else opts.forEach((o, i) => isObj(o) ? (c.str(o, 'id', `${path}.followUp.options[${i}]`), c.str(o, 'label', `${path}.followUp.options[${i}]`)) : c.error(path, 'Option kein Objekt'))
    }
  }
  if (!isArr(t.units) || !t.units.length) return c.error(path, 'units muss ein nicht-leeres Array sein')
  t.units.forEach((u, i) => validateUnitObj(u, `${path}.units[${i}]`, c, vocabIds, ids, stats, id))
}

function validateUnitObj(
  u: unknown,
  p: string,
  c: Collector,
  vocabIds: Set<string>,
  ids: Set<string>,
  stats: ContentStats,
  trackId?: string,
) {
  if (!isObj(u)) return c.error(p, 'kein Objekt')
  const id = c.id(u, p, ids)
  const path = id ? `unit:${id}` : p
  stats.units++
  if (id && trackId && !id.startsWith(trackId + '.')) c.error(path, `Unit-ID muss mit "${trackId}." beginnen`)
  for (const k of ['title', 'description', 'icon']) c.str(u, k, path)
  if (!CEFR_LEVELS.includes(u.cefr as never)) c.error(path, `cefr ungültig: ${String(u.cefr)}`)
  if (!COLOR_KEYS.includes(u.color as never)) c.error(path, `Unbekannte Farbe "${String(u.color)}"`)
  c.strArray(u, 'topics', path, { min: 1 })
  const planned = c.strArray(u, 'plannedLessons', path, { optional: true })
  if (!isArr(u.lessons)) return c.error(path, 'lessons muss ein Array sein (ggf. leer)')
  const status = u.status
  if (status === 'ready') {
    if (u.lessons.length < 3) c.error(path, 'status "ready" braucht mindestens 3 Lektionen')
    else if (u.lessons.length < 4 || u.lessons.length > 6) c.warn(path, `Empfohlen sind 4–6 Lektionen pro Unit (hat ${u.lessons.length})`)
    if (planned.length) c.error(path, 'status "ready" darf keine plannedLessons haben')
  } else if (status === 'partial') {
    if (!u.lessons.length) c.error(path, 'status "partial" braucht mindestens eine fertige Lektion')
    if (!planned.length) c.error(path, 'status "partial" braucht plannedLessons')
  } else if (status === 'planned') {
    if (u.lessons.length) c.error(path, 'status "planned" darf keine Lektionen enthalten')
    if (!planned.length) c.error(path, 'status "planned" braucht plannedLessons (sonst erscheint ein leerer Abschnitt)')
  } else c.error(path, 'status muss "ready", "partial" oder "planned" sein')
  if (u.tips !== undefined) {
    if (!isArr(u.tips)) c.error(path, 'tips muss ein Array sein')
    else
      u.tips.forEach((t, i) => {
        if (!isObj(t)) return c.error(`${path}.tips[${i}]`, 'kein Objekt')
        c.str(t, 'title', `${path}.tips[${i}]`)
        c.str(t, 'text', `${path}.tips[${i}]`)
      })
  }
  u.lessons.forEach((l, i) => validateLesson(l, `${path}.lessons[${i}]`, c, vocabIds, ids, stats, id))
}

function validateLesson(
  l: unknown,
  p: string,
  c: Collector,
  vocabIds: Set<string>,
  ids: Set<string>,
  stats: ContentStats,
  unitId?: string,
) {
  if (!isObj(l)) return c.error(p, 'kein Objekt')
  const id = c.id(l, p, ids)
  const path = id ? `lesson:${id}` : p
  stats.lessons++
  if (id && unitId && !id.startsWith(unitId + '.')) c.error(path, `Lektions-ID muss mit "${unitId}." beginnen`)
  c.str(l, 'title', path)
  c.str(l, 'description', path, true)
  const introduces = c.strArray(l, 'introduces', path, { optional: true })
  for (const w of introduces) if (!vocabIds.has(w)) c.error(path, `introduces: unbekannte Vokabel "${w}"`)
  if (!isArr(l.exercises)) return c.error(path, 'exercises muss ein Array sein')
  const n = l.exercises.length
  if (n < LESSON_MIN || n > LESSON_MAX) c.error(path, `Lektion braucht ${LESSON_MIN}–${LESSON_MAX} Aufgaben (hat ${n})`)
  const exIds = new Set<string>()
  const types = new Set<string>()
  const introduced = new Set<string>()
  l.exercises.forEach((e, i) => {
    const ep = `${path}.exercises[${i}]`
    if (!isObj(e)) return c.error(ep, 'kein Objekt')
    const exId = c.id(e, ep, exIds)
    const exPath = exId ? `${path}#${exId}` : ep
    stats.exercises++
    types.add(String(e.type))
    validateExercise(e, exPath, c, vocabIds)
    if (e.type === 'intro' && isStr(e.word)) introduced.add(e.word)
    else if (isArr(e.words)) {
      for (const w of e.words) if (introduces.includes(w as string) && !introduced.has(w as string)) c.warn(exPath, `Wort "${String(w)}" wird abgefragt, bevor seine intro-Karte kommt`)
    }
  })
  for (const w of introduces) if (!introduced.has(w)) c.error(path, `Wort "${w}" steht in introduces, hat aber keine intro-Aufgabe`)
  for (const w of introduced) if (!introduces.includes(w)) c.warn(path, `intro-Karte für "${w}", aber nicht in introduces gelistet`)
  if (n >= LESSON_MIN && types.size < 3) c.warn(path, 'Weniger als 3 verschiedene Aufgabentypen – abwechslungsreicher gestalten')
}

function validateChoices(e: Obj, path: string, c: Collector, min = 2, max = 4) {
  const choices = e.choices
  if (!isArr(choices)) return c.error(path, 'choices fehlt')
  if (choices.length < min || choices.length > max) c.error(path, `${min}–${max} choices erwartet (hat ${choices.length})`)
  let correct = 0
  const texts = new Set<string>()
  choices.forEach((ch, i) => {
    if (!isObj(ch)) return c.error(path, `choices[${i}] kein Objekt`)
    const t = c.str(ch, 'text', `${path}.choices[${i}]`)
    c.str(ch, 'emoji', `${path}.choices[${i}]`, true)
    if (ch.correct === true) correct++
    if (t) {
      const key = normalize(t, 'de')
      if (texts.has(key)) c.error(path, `Option "${t}" kommt doppelt vor (Distraktor = richtige Antwort?)`)
      texts.add(key)
    }
  })
  if (correct !== 1) c.error(path, `Genau eine Option braucht correct: true (gefunden: ${correct})`)
  const withEmoji = choices.filter((ch) => isObj(ch) && isStr(ch.emoji)).length
  if (withEmoji && withEmoji !== choices.length) c.warn(path, 'Entweder alle oder keine Option mit Emoji versehen')
}

function blanks(s: string) {
  return s.split('___').length - 1
}

function validateExercise(e: Obj, path: string, c: Collector, vocabIds: Set<string>) {
  if (!EXERCISE_TYPES.includes(e.type as never)) return c.error(path, `Unbekannter Aufgabentyp "${String(e.type)}"`)
  c.str(e, 'explanation', path, true)
  const words = c.strArray(e, 'words', path, { optional: true })
  for (const w of words) if (!vocabIds.has(w)) c.error(path, `words: unbekannte Vokabel "${w}"`)
  switch (e.type) {
    case 'intro': {
      const w = c.str(e, 'word', path)
      if (w && !vocabIds.has(w)) c.error(path, `intro: unbekannte Vokabel "${w}"`)
      break
    }
    case 'translate': {
      if (e.direction !== 'de-en' && e.direction !== 'en-de') c.error(path, 'direction muss "de-en" oder "en-de" sein')
      c.str(e, 'prompt', path)
      const answer = c.str(e, 'answer', path)
      const accepted = c.strArray(e, 'accepted', path, { optional: true })
      const distractors = c.strArray(e, 'distractors', path)
      if (!answer) break
      const tokens = bankTokens(answer)
      if (tokens.length < 2) c.warn(path, 'Wortbank-Lösung mit nur einem Wort – besser choice verwenden')
      if (tokens.length > 12) c.warn(path, 'Sehr lange Wortbank-Lösung (>12 Wörter)')
      const lower = new Set(tokens.map((t) => t.toLowerCase()))
      const seenD = new Set<string>()
      for (const d of distractors) {
        const k = d.toLowerCase()
        if (lower.has(k)) c.error(path, `Distraktor "${d}" ist Teil der richtigen Antwort`)
        if (seenD.has(k)) c.error(path, `Distraktor "${d}" doppelt`)
        if (/\s/.test(d.trim())) c.error(path, `Distraktor "${d}" muss ein einzelnes Wort sein`)
        seenD.add(k)
      }
      if (!distractors.length) c.warn(path, 'Keine Distraktoren – die Wortbank ist dann trivial')
      const bank = new Set([...lower, ...seenD])
      for (const a of accepted) {
        const missing = bankTokens(a).filter((t) => !bank.has(t.toLowerCase()))
        if (missing.length) c.warn(path, `accepted "${a}" ist mit der Wortbank nicht baubar (fehlt: ${missing.join(', ')}) – nur per Tastatur erreichbar`)
      }
      break
    }
    case 'choice':
      c.str(e, 'prompt', path)
      c.str(e, 'question', path, true)
      if (e.questionLang !== undefined && e.questionLang !== 'en' && e.questionLang !== 'de') c.error(path, 'questionLang muss "en" oder "de" sein')
      validateChoices(e, path, c)
      break
    case 'listen-choice':
      c.str(e, 'audio', path)
      c.str(e, 'prompt', path)
      validateChoices(e, path, c)
      break
    case 'listen-type':
      c.str(e, 'audio', path)
      c.strArray(e, 'accepted', path, { optional: true })
      c.str(e, 'translation', path, true)
      if (isStr(e.audio) && /\d/.test(e.audio)) c.warn(path, 'Zahlen im Hörtext besser ausschreiben')
      break
    case 'match': {
      const pairs = e.pairs
      if (!isArr(pairs) || pairs.length < 3 || pairs.length > 5) {
        c.error(path, 'match braucht 3–5 pairs')
        break
      }
      const en = new Set<string>()
      const de = new Set<string>()
      pairs.forEach((pr, i) => {
        if (!isObj(pr)) return c.error(path, `pairs[${i}] kein Objekt`)
        const a = c.str(pr, 'en', `${path}.pairs[${i}]`)
        const b = c.str(pr, 'de', `${path}.pairs[${i}]`)
        if (a) {
          if (en.has(a.toLowerCase())) c.error(path, `Paar-Begriff "${a}" doppelt`)
          en.add(a.toLowerCase())
        }
        if (b) {
          if (de.has(b.toLowerCase())) c.error(path, `Paar-Bedeutung "${b}" doppelt`)
          de.add(b.toLowerCase())
        }
      })
      break
    }
    case 'fill': {
      const s = c.str(e, 'sentence', path)
      if (s && blanks(s) !== 1) c.error(path, 'sentence muss genau eine Lücke "___" enthalten')
      c.str(e, 'translation', path, true)
      validateChoices(e, path, c)
      break
    }
    case 'type': {
      const s = c.str(e, 'sentence', path)
      if (s && blanks(s) !== 1) c.error(path, 'sentence muss genau eine Lücke "___" enthalten')
      c.strArray(e, 'accepted', path, { min: 1 })
      c.str(e, 'hint', path, true)
      c.str(e, 'translation', path, true)
      break
    }
    case 'speak':
      c.str(e, 'text', path)
      c.str(e, 'translation', path, true)
      break
    case 'dialogue': {
      c.str(e, 'title', path, true)
      c.str(e, 'question', path)
      const lines = e.lines
      if (!isArr(lines) || lines.length < 2 || lines.length > 8) c.error(path, 'dialogue braucht 2–8 lines')
      else
        lines.forEach((ln, i) => {
          if (!isObj(ln)) return c.error(path, `lines[${i}] kein Objekt`)
          if (ln.speaker !== 'a' && ln.speaker !== 'b') c.error(`${path}.lines[${i}]`, 'speaker muss "a" oder "b" sein')
          c.str(ln, 'en', `${path}.lines[${i}]`)
          c.str(ln, 'de', `${path}.lines[${i}]`, true)
          c.str(ln, 'name', `${path}.lines[${i}]`, true)
        })
      validateChoices(e, path, c)
      break
    }
  }
}

function validatePlacement(bank: unknown, c: Collector, vocabIds: Set<string>, stats: ContentStats) {
  if (!isArr(bank)) return c.error('placement', 'muss ein Array sein')
  const seen = new Set<string>()
  const perLevel: Record<string, number> = {}
  bank.forEach((q, i) => {
    const p = `placement[${i}]`
    if (!isObj(q)) return c.error(p, 'kein Objekt')
    const id = c.id(q, p, seen)
    const path = id ? `placement:${id}` : p
    stats.placement++
    if (!CEFR_LEVELS.includes(q.cefr as never)) c.error(path, 'cefr ungültig')
    else perLevel[q.cefr as string] = (perLevel[q.cefr as string] ?? 0) + 1
    if (!isObj(q.exercise)) return c.error(path, 'exercise fehlt')
    if (!PLACEMENT_TYPES.includes(q.exercise.type as string)) c.error(path, `Typ "${String(q.exercise.type)}" ist im Einstufungstest nicht erlaubt`)
    if (!isStr(q.exercise.id)) c.error(path, 'exercise.id fehlt')
    validateExercise(q.exercise, path, c, vocabIds)
  })
  if (bank.length < 60) c.error('placement', `Fragenbank braucht mindestens 60 Fragen (hat ${bank.length})`)
  for (const lvl of CEFR_LEVELS) {
    const n = perLevel[lvl] ?? 0
    if (n < 8) c.error('placement', `Zu wenige ${lvl}-Fragen (${n}, mindestens 8)`)
  }
}
