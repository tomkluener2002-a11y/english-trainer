import { describe, expect, it } from 'vitest'
import type { Exercise } from '../../content/schema'
import { MAX_RETRIES, advance, currentItem, fixedKeys, isSessionDone, sessionProgress, startSession, submit, type SessionState } from '../session'

const choice = (id: string): Exercise => ({ id, type: 'choice', prompt: 'p', choices: [{ text: 'a', correct: true }, { text: 'b' }] })
const intro = (id: string): Exercise => ({ id, type: 'intro', word: 'core.hello' })
const listen = (id: string): Exercise => ({ id, type: 'listen-choice', audio: 'hello', prompt: 'p', choices: [{ text: 'a', correct: true }, { text: 'b' }] })

const mk = (...exs: Exercise[]) => startSession(exs.map((ex) => ({ key: `l::${ex.id}`, ex })))
const ok = (s: SessionState) => advance(submit(s, { correct: true }))
const bad = (s: SessionState) => advance(submit(s, { correct: false }))

describe('Lektionsablauf', () => {
  it('startet bei der ersten Aufgabe ohne Fortschritt', () => {
    const s = mk(choice('e1'), choice('e2'))
    expect(currentItem(s)?.key).toBe('l::e1')
    expect(s.total).toBe(2)
    expect(sessionProgress(s)).toBe(0)
    expect(isSessionDone(s)).toBe(false)
  })

  it('fehlerfreie Lektion: Fortschritt steigt gleichmäßig und endet bei 1', () => {
    let s = mk(choice('e1'), choice('e2'), choice('e3'), choice('e4'))
    const progress: number[] = []
    while (!isSessionDone(s)) {
      s = ok(s)
      progress.push(sessionProgress(s))
    }
    expect(progress).toEqual([0.25, 0.5, 0.75, 1])
    expect(s).toMatchObject({ mistakes: 0, graded: 4, firstTry: 4, bestCombo: 4 })
    expect(s.wrongKeys).toEqual([])
  })

  it('falsche Aufgabe wird ans Ende gestellt und zählt erst nach richtiger Lösung als gelöst', () => {
    let s = mk(choice('e1'), choice('e2'))
    s = bad(s)
    expect(s.items).toHaveLength(3)
    expect(s.items[2]).toMatchObject({ key: 'l::e1', retry: true })
    expect(s.solved).not.toContain('l::e1')
    expect(sessionProgress(s)).toBe(0)
    s = ok(s) // e2
    expect(isSessionDone(s)).toBe(false)
    expect(currentItem(s)?.key).toBe('l::e1')
    s = ok(s) // Wiederholung
    expect(isSessionDone(s)).toBe(true)
    expect(sessionProgress(s)).toBe(1)
    expect(s.mistakes).toBe(1)
    expect(fixedKeys(s)).toEqual(['l::e1'])
  })

  it('Wiederholungen zählen nicht erneut als bewertete Aufgabe und nicht als Erstversuch', () => {
    let s = mk(choice('e1'), choice('e2'))
    s = bad(s)
    s = ok(s)
    s = ok(s)
    expect(s.graded).toBe(2)
    expect(s.firstTry).toBe(1)
  })

  it('Kombo steigt bei richtig und wird bei Fehler zurückgesetzt; bestCombo bleibt', () => {
    let s = mk(choice('e1'), choice('e2'), choice('e3'), choice('e4'))
    s = ok(s)
    s = ok(s)
    expect(s.combo).toBe(2)
    s = bad(s)
    expect(s.combo).toBe(0)
    expect(s.bestCombo).toBe(2)
  })

  it('nach MAX_RETRIES Fehlversuchen wird die Aufgabe nicht mehr eingereiht, die Lektion endet trotzdem', () => {
    let s = mk(choice('e1'))
    for (let i = 0; i <= MAX_RETRIES; i++) s = bad(s)
    expect(isSessionDone(s)).toBe(true)
    expect(s.items).toHaveLength(1 + MAX_RETRIES)
    expect(s.mistakes).toBe(MAX_RETRIES + 1)
    expect(s.solved).toContain('l::e1')
    expect(sessionProgress(s)).toBe(1)
    expect(fixedKeys(s)).toEqual([])
  })

  it('intro-Karten und übersprungene Aufgaben werden nicht bewertet', () => {
    let s = mk(intro('e1'), choice('e2'))
    s = advance(submit(s, { correct: true }))
    expect(s.graded).toBe(0)
    expect(s.combo).toBe(0)
    expect(s.solved).toContain('l::e1')
    s = advance(submit(s, { correct: false, skipped: true }))
    expect(s.mistakes).toBe(0)
    expect(s.graded).toBe(0)
    expect(isSessionDone(s)).toBe(true)
    expect(sessionProgress(s)).toBe(1)
  })

  it('zählt richtige Höraufgaben', () => {
    let s = mk(listen('e1'), choice('e2'), listen('e3'))
    s = ok(s)
    s = ok(s)
    s = bad(s)
    expect(s.listeningCorrect).toBe(1)
  })

  it('submit ohne aktuelle Aufgabe ändert nichts; submit ist immutable', () => {
    const empty = startSession([])
    expect(submit(empty, { correct: true })).toBe(empty)
    expect(sessionProgress(empty)).toBe(1)
    const s = mk(choice('e1'))
    submit(s, { correct: false })
    expect(s.items).toHaveLength(1)
    expect(s.mistakes).toBe(0)
  })

  it('wrongKeys enthält jeden falschen Schlüssel nur einmal', () => {
    let s = mk(choice('e1'))
    s = bad(s)
    s = bad(s)
    expect(s.wrongKeys).toEqual(['l::e1'])
  })
})
