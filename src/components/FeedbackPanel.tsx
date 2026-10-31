import { useEffect, useRef, useState } from 'react'
import type { AnswerResult } from './exercises/shared'
import { SpeakButton } from './SpeakButton'

interface Props {
  result: AnswerResult
  explanation?: string
  isLast: boolean
  onContinue: () => void
}

const PRAISE = ['Richtig!', 'Super!', 'Genau so!', 'Stark!', 'Perfekt!', 'Sehr gut!']

export function FeedbackPanel({ result, explanation, isLast, onContinue }: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [praise] = useState(() => PRAISE[Math.floor(Math.random() * PRAISE.length)])

  useEffect(() => {
    buttonRef.current?.focus({ preventScroll: true })
  }, [])

  const ok = result.correct
  const title = ok ? (result.nearMiss ? 'Fast perfekt – kleiner Tippfehler' : praise) : 'Leider falsch'

  return (
    <div
      role="status"
      aria-live="polite"
      className={`animate-slide-up fixed inset-x-0 bottom-0 z-20 max-h-[65dvh] overflow-y-auto border-t-2 px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] ${
        ok ? 'border-emerald-200 bg-emerald-50' : 'border-rose-200 bg-rose-50'
      }`}
    >
      <div className="mx-auto max-w-xl space-y-3">
        <div className="flex items-center gap-3">
          <span
            className={`flex size-10 shrink-0 items-center justify-center rounded-full text-xl font-black text-white ${
              ok ? 'bg-emerald-500' : 'bg-rose-500'
            }`}
            aria-hidden
          >
            {ok ? '✓' : '✗'}
          </span>
          <h3 className={`text-xl font-extrabold ${ok ? 'text-emerald-700' : 'text-rose-700'}`}>{title}</h3>
          {result.speakText && <SpeakButton text={result.speakText} className="ml-auto" label="Lösung anhören" />}
        </div>

        {(!ok || result.nearMiss) && (
          <div className={ok ? 'text-emerald-900' : 'text-rose-900'}>
            <p className="text-sm font-semibold opacity-75">Richtige Lösung:</p>
            <p className="text-lg font-bold">{result.correctAnswer}</p>
            {result.userAnswer && (
              <p className="mt-1 text-sm opacity-75">
                Deine Antwort: <span className="line-through decoration-1">{result.userAnswer}</span>
              </p>
            )}
          </div>
        )}

        {result.translation && <p className="text-slate-700">{result.translation}</p>}
        {explanation && (
          <p className="rounded-xl bg-white/70 px-3 py-2 text-sm text-slate-700">
            <span className="font-semibold">💡 </span>
            {explanation}
          </p>
        )}

        <button
          ref={buttonRef}
          type="button"
          onClick={onContinue}
          className={`w-full rounded-2xl px-6 py-4 text-lg font-bold text-white transition active:translate-y-1 active:shadow-none ${
            ok
              ? 'bg-emerald-500 shadow-[0_4px_0_0_rgb(5,150,105)]'
              : 'bg-rose-500 shadow-[0_4px_0_0_rgb(225,29,72)]'
          }`}
        >
          {isLast ? 'Ergebnis ansehen' : 'Weiter'}
        </button>
      </div>
    </div>
  )
}
