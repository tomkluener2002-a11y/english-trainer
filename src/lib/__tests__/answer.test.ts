import { describe, expect, it } from 'vitest'
import { bankTokens, checkText, editDistance, normalize, typoTolerance, wordOverlap } from '../answer'

describe('normalize', () => {
  it('ignoriert Groß-/Kleinschreibung, Satzzeichen und überzählige Leerzeichen', () => {
    expect(normalize('  Hello,   WORLD!  ')).toBe('hello world')
    expect(normalize('How are you?')).toBe('how are you')
  })

  it('löst Kurzformen auf (englisch)', () => {
    expect(normalize("I'm happy")).toBe('i am happy')
    expect(normalize("She doesn't know")).toBe('she does not know')
    expect(normalize("They've got it")).toBe('they have got it')
    expect(normalize("It's late")).toBe('it is late')
    expect(normalize("I won't go")).toBe('i will not go')
    expect(normalize("Let's go")).toBe('let us go')
  })

  it('behandelt typografische Apostrophe wie gerade', () => {
    expect(normalize('I’m here')).toBe(normalize("I'm here"))
  })

  it('akzeptiert Kurzformen ohne Apostroph (Handy-Eingabe)', () => {
    expect(normalize('im ready')).toBe('i am ready')
    expect(normalize('dont worry')).toBe(normalize("don't worry"))
    expect(normalize('cant wait')).toBe(normalize("can't wait"))
  })

  it('lässt echte Wörter wie "well" und "its" unverändert', () => {
    expect(normalize('well')).toBe('well')
    expect(normalize('its')).toBe('its')
  })

  it('behandelt Bindestriche wie Leerzeichen', () => {
    expect(normalize('well-known')).toBe('well known')
  })

  it('deutsch: ß = ss, keine Kurzform-Auflösung', () => {
    expect(normalize('Straße', 'de')).toBe('strasse')
    expect(normalize("don't", 'de')).toBe("don't")
  })
})

describe('editDistance / typoTolerance', () => {
  it('berechnet Levenshtein-Distanz', () => {
    expect(editDistance('kitten', 'sitting')).toBe(3)
    expect(editDistance('', 'abc')).toBe(3)
    expect(editDistance('same', 'same')).toBe(0)
  })

  it('zählt vertauschte Nachbarbuchstaben als einen Fehler', () => {
    expect(editDistance('ab', 'ba')).toBe(1)
    expect(editDistance('recieve', 'receive')).toBe(1)
  })

  it('Toleranz wächst mit der Wortlänge', () => {
    expect(typoTolerance(3)).toBe(0)
    expect(typoTolerance(8)).toBe(1)
    expect(typoTolerance(24)).toBe(2)
    expect(typoTolerance(200)).toBe(3)
  })
})

describe('checkText', () => {
  it('exakte Treffer sind richtig und keine Beinahe-Fehler', () => {
    expect(checkText('Hello', ['hello'])).toEqual({ correct: true, nearMiss: false, closest: 'hello' })
  })

  it('akzeptiert Varianten und gibt die getroffene zurück', () => {
    const r = checkText('e-mail', ['email', 'e-mail'])
    expect(r.correct).toBe(true)
    expect(r.closest).toBe('e-mail')
  })

  it('akzeptiert Kurzform gegen ausgeschriebene Lösung und umgekehrt', () => {
    expect(checkText("I'm fine", ['I am fine']).correct).toBe(true)
    expect(checkText('I am fine', ["I'm fine"]).correct).toBe(true)
  })

  it('kleine Tippfehler bei längeren Wörtern: richtig, aber nearMiss', () => {
    const r = checkText('recieve', ['receive'])
    expect(r).toMatchObject({ correct: true, nearMiss: true, closest: 'receive' })
  })

  it('kurze Wörter erlauben keinen Tippfehler', () => {
    expect(checkText('cut', ['cat']).correct).toBe(false)
  })

  it('typos:false verlangt exakte Treffer', () => {
    expect(checkText('recieve', ['receive'], { typos: false }).correct).toBe(false)
  })

  it('falsche und leere Eingaben sind falsch; closest ist die Musterlösung', () => {
    expect(checkText('banana', ['apple'])).toEqual({ correct: false, nearMiss: false, closest: 'apple' })
    expect(checkText('   ', ['apple'])).toEqual({ correct: false, nearMiss: false, closest: 'apple' })
    expect(checkText('!?', ['apple']).correct).toBe(false)
  })

  it('wählt bei mehreren Optionen die nächstliegende als closest', () => {
    const r = checkText('colur', ['color', 'colour'])
    expect(r.correct).toBe(true)
    expect(r.closest).toBe('color')
  })
})

describe('bankTokens / wordOverlap', () => {
  it('trennt Wörter, entfernt Randsatzzeichen, behält Apostrophe', () => {
    expect(bankTokens("Hello, I'm Anna.")).toEqual(['Hello', "I'm", 'Anna'])
    expect(bankTokens('  ')).toEqual([])
  })

  it('wordOverlap misst den Anteil getroffener Zielwörter', () => {
    expect(wordOverlap('i like tea', 'I like tea.')).toBe(1)
    expect(wordOverlap('i like', 'I like green tea')).toBe(0.5)
    expect(wordOverlap('anything', '')).toBe(0)
  })
})
