import { useEffect, useRef, useState } from 'react'
import type { SpeakExercise as SpeakEx } from '../../content/schema'
import { wordOverlap } from '../../lib/answer'
import { stopSpeaking } from '../../lib/speech'
import { MicIcon } from '../Icons'
import { MascotSays } from '../Mascot'
import { AudioButtons } from '../ui'
import type { ExerciseProps } from './types'

interface Recognition {
  lang: string
  interimResults: boolean
  maxAlternatives: number
  continuous: boolean
  start(): void
  stop(): void
  abort(): void
  onresult: ((e: { results: ArrayLike<ArrayLike<{ transcript: string }> & { isFinal?: boolean }> }) => void) | null
  onerror: ((e: { error: string }) => void) | null
  onend: (() => void) | null
}
type RecognitionCtor = new () => Recognition

function recognitionCtor(): RecognitionCtor | null {
  if (typeof window === 'undefined') return null
  const w = window as unknown as { SpeechRecognition?: RecognitionCtor; webkitSpeechRecognition?: RecognitionCtor }
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null
}

export const recognitionSupported = !!recognitionCtor()

/** Sprechen: Satz anhören, nachsprechen, Spracherkennung prüft (≥ 70 % der Wörter). */
export function SpeakExercise({ ex, locked, submit, setCheck }: ExerciseProps<SpeakEx>) {
  const [listening, setListening] = useState(false)
  const [heard, setHeard] = useState('')
  const [tries, setTries] = useState(0)
  const [error, setError] = useState('')
  const rec = useRef<Recognition | null>(null)

  useEffect(() => {
    if (!recognitionSupported) setCheck(() => ({ correct: true, skipped: true, silent: true }))
    return () => rec.current?.abort()
  }, [setCheck])

  const start = () => {
    const Ctor = recognitionCtor()
    if (!Ctor || locked) return
    if (listening) {
      rec.current?.stop()
      return
    }
    stopSpeaking()
    setError('')
    setHeard('')
    const r = new Ctor()
    r.lang = 'en-US'
    r.interimResults = true
    r.maxAlternatives = 3
    r.continuous = false
    let final = ''
    r.onresult = (e) => {
      const parts: string[] = []
      for (let i = 0; i < e.results.length; i++) parts.push(e.results[i][0].transcript)
      final = parts.join(' ')
      setHeard(final)
    }
    r.onerror = (e) => {
      setError(e.error === 'not-allowed' ? 'Kein Zugriff aufs Mikrofon. Erlaube den Zugriff oder überspringe die Aufgabe.' : 'Ich konnte dich nicht verstehen.')
    }
    r.onend = () => {
      setListening(false)
      if (!final) return
      const score = wordOverlap(final, ex.text)
      if (score >= 0.7) submit({ correct: true, solution: ex.text })
      else {
        const n = tries + 1
        setTries(n)
        if (n >= 2) submit({ correct: true, skipped: true, solution: ex.text, note: 'Das war noch nicht ganz verständlich – übe den Satz später noch einmal. Kein Herz verloren.' })
        else setError('Fast! Versuch es noch einmal – sprich langsam und deutlich.')
      }
    }
    rec.current = r
    try {
      r.start()
      setListening(true)
    } catch {
      setError('Die Spracherkennung konnte nicht gestartet werden.')
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <MascotSays size={84}>
        <div className="flex items-center gap-3">
          <AudioButtons text={ex.text} size="sm" autoPlay />
          <span lang="en">{ex.text}</span>
        </div>
        {ex.translation && <div className="mt-1 text-[15px] font-semibold text-ink-soft">{ex.translation}</div>}
      </MascotSays>

      {recognitionSupported ? (
        <div className="flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={start}
            disabled={locked}
            className={`btn w-full gap-3 ${listening ? 'btn-red' : 'btn-white'}`}
            style={listening ? undefined : { color: '#1CB0F6' }}
            aria-label={listening ? 'Aufnahme beenden' : 'Zum Sprechen tippen'}
          >
            <span className="relative flex">
              {listening && <span className="absolute inset-0 animate-pulse-ring rounded-full bg-white" />}
              <MicIcon size={26} color={listening ? '#fff' : '#1CB0F6'} />
            </span>
            {listening ? 'Ich höre zu …' : 'Zum Sprechen tippen'}
          </button>
          {heard && (
            <p className="text-center text-ink-soft" lang="en" aria-live="polite">
              „{heard}“
            </p>
          )}
          {error && (
            <p className="text-center font-bold text-cardinal-dark" role="alert">
              {error}
            </p>
          )}
        </div>
      ) : (
        <p className="rounded-2xl bg-snow p-4 text-center text-ink-soft">
          Die Spracherkennung ist in diesem Browser nicht verfügbar. Sprich den Satz laut nach und tippe dann auf <b>Weiter</b> – ohne Bewertung.
        </p>
      )}
    </div>
  )
}
