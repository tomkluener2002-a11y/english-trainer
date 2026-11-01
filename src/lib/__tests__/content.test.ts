import { describe, expect, it } from 'vitest'
import { lessonById, placementBank, trackById, tracks, unitById, vocabById, vocabulary } from '../../content/index'
import { CEFR_LEVELS, type Exercise } from '../../content/schema'
import { LESSON_MAX, LESSON_MIN, validateContent } from '../../content/validate'
import { checkText } from '../answer'

const lessons = [...lessonById.values()]
const allExercises = (): { where: string; ex: Exercise }[] =>
  lessons.flatMap(({ lesson }) => lesson.exercises.map((ex) => ({ where: `${lesson.id}#${ex.id}`, ex })))

describe('Content: Konsistenz', () => {
  it('der Validator meldet keine Fehler', () => {
    const { issues } = validateContent({ tracks, vocab: vocabulary, placement: placementBank })
    expect(issues.filter((i) => i.level === 'error').map((i) => `${i.path}: ${i.message}`)).toEqual([])
  })

  it('es gibt genau einen Basiskurs und mehrere Spezialisierungen', () => {
    expect(tracks.filter((t) => t.kind === 'core')).toHaveLength(1)
    expect(tracks.filter((t) => t.kind === 'specialization').length).toBeGreaterThan(1)
  })

  it('Track-, Unit- und Lektions-IDs sind global eindeutig', () => {
    const trackIds = tracks.map((t) => t.id)
    expect(new Set(trackIds).size).toBe(trackIds.length)
    const unitIds = tracks.flatMap((t) => t.units.map((u) => u.id))
    expect(new Set(unitIds).size).toBe(unitIds.length)
    expect(unitById.size).toBe(unitIds.length)
    const lessonIds = tracks.flatMap((t) => t.units.flatMap((u) => u.lessons.map((l) => l.id)))
    expect(new Set(lessonIds).size).toBe(lessonIds.length)
    expect(lessonById.size).toBe(lessonIds.length)
    expect(trackById.size).toBe(tracks.length)
  })

  it('Vokabel-IDs sind eindeutig und haben ein Track-Präfix', () => {
    const ids = vocabulary.map((v) => v.id)
    expect(new Set(ids).size).toBe(ids.length)
    expect(vocabById.size).toBe(ids.length)
    for (const id of ids) expect(id).toMatch(/^[a-z0-9]+\.[a-z0-9.-]+$/)
  })

  it('Aufgaben-IDs sind innerhalb jeder Lektion eindeutig', () => {
    for (const { lesson } of lessons) {
      const ids = lesson.exercises.map((e) => e.id)
      expect(new Set(ids).size, lesson.id).toBe(ids.length)
    }
  })

  it(`jede Lektion hat ${LESSON_MIN}–${LESSON_MAX} Aufgaben`, () => {
    expect(lessons.length).toBeGreaterThan(0)
    for (const { lesson } of lessons) {
      expect(lesson.exercises.length, lesson.id).toBeGreaterThanOrEqual(LESSON_MIN)
      expect(lesson.exercises.length, lesson.id).toBeLessThanOrEqual(LESSON_MAX)
    }
  })

  it('alle referenzierten Vokabel-IDs existieren', () => {
    const missing: string[] = []
    for (const { lesson } of lessons) {
      for (const w of lesson.introduces ?? []) if (!vocabById.has(w)) missing.push(`${lesson.id} introduces ${w}`)
    }
    for (const { where, ex } of allExercises()) {
      for (const w of ex.words ?? []) if (!vocabById.has(w)) missing.push(`${where} words ${w}`)
      if (ex.type === 'intro' && !vocabById.has(ex.word)) missing.push(`${where} intro ${ex.word}`)
    }
    for (const q of placementBank) for (const w of q.exercise.words ?? []) if (!vocabById.has(w)) missing.push(`${q.id} words ${w}`)
    expect(missing).toEqual([])
  })

  it('jedes "introduces" hat eine intro-Aufgabe in derselben Lektion', () => {
    for (const { lesson } of lessons) {
      const introduced = new Set(lesson.exercises.flatMap((e) => (e.type === 'intro' ? [e.word] : [])))
      for (const w of lesson.introduces ?? []) expect(introduced.has(w), `${lesson.id}: ${w}`).toBe(true)
    }
  })

  it('Auswahl-Aufgaben haben genau eine richtige Option', () => {
    for (const { where, ex } of allExercises()) {
      if ('choices' in ex) expect(ex.choices.filter((c) => c.correct), where).toHaveLength(1)
    }
  })

  it('Lückentexte enthalten genau eine Lücke', () => {
    for (const { where, ex } of allExercises()) {
      if (ex.type === 'fill' || ex.type === 'type') expect(ex.sentence.split('___').length - 1, where).toBe(1)
    }
  })

  it('Musterlösungen werden von der Antwortprüfung akzeptiert', () => {
    for (const { where, ex } of allExercises()) {
      if (ex.type === 'translate') {
        const accepted = [ex.answer, ...(ex.accepted ?? [])]
        const lang = ex.direction === 'de-en' ? 'en' : 'de'
        for (const a of accepted) expect(checkText(a, accepted, { lang }).correct, where).toBe(true)
      }
      if (ex.type === 'type') expect(checkText(ex.accepted[0], ex.accepted).correct, where).toBe(true)
      if (ex.type === 'listen-type') expect(checkText(ex.audio, [ex.audio, ...(ex.accepted ?? [])]).correct, where).toBe(true)
    }
  })

  it('Unit-Status passt zu den Lektionen', () => {
    for (const { unit } of unitById.values()) {
      if (unit.status === 'planned') expect(unit.lessons, unit.id).toHaveLength(0)
      else expect(unit.lessons.length, unit.id).toBeGreaterThan(0)
    }
  })
})

describe('Content: Einstufungsfragen', () => {
  it('IDs eindeutig, ≥ 8 Fragen je Niveau, nur erlaubte Typen', () => {
    const ids = placementBank.map((q) => q.id)
    expect(new Set(ids).size).toBe(ids.length)
    for (const lvl of CEFR_LEVELS) expect(placementBank.filter((q) => q.cefr === lvl).length, lvl).toBeGreaterThanOrEqual(8)
    for (const q of placementBank) expect(['choice', 'fill', 'translate', 'listen-choice', 'type']).toContain(q.exercise.type)
  })
})
