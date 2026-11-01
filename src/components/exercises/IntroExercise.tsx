import { useEffect } from 'react'
import { vocabById } from '../../content'
import type { IntroExercise as IntroEx } from '../../content/schema'
import { speak } from '../../lib/speech'
import { AudioButtons } from '../ui'
import type { ExerciseProps } from './types'

const POS: Record<string, string> = {
  noun: 'Nomen',
  verb: 'Verb',
  adj: 'Adjektiv',
  adv: 'Adverb',
  phrase: 'Redewendung',
  pron: 'Pronomen',
  prep: 'Präposition',
  num: 'Zahl',
  other: 'Wort',
}

/** Einführungskarte für ein neues Wort: Bild, Wort, Audio, Bedeutung, Beispiel. */
export function IntroExercise({ ex, setCheck }: ExerciseProps<IntroEx>) {
  const w = vocabById.get(ex.word)
  useEffect(() => {
    setCheck(() => ({ correct: true, silent: true }))
  }, [setCheck])
  if (!w) return <p className="text-ink-soft">Wort nicht gefunden.</p>
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="relative w-full animate-pop rounded-3xl border-2 border-b-4 border-line bg-white px-6 pt-8 pb-6 text-center">
        <span className="absolute top-4 left-4 rounded-full bg-beetle/15 px-3 py-1 text-xs font-extrabold tracking-wider text-beetle-dark uppercase">
          Neues Wort
        </span>
        {w.emoji && <div className="mb-2 text-[88px] leading-none">{w.emoji}</div>}
        <button type="button" onClick={() => speak(w.en)} className="group inline-flex items-center gap-3" aria-label={`${w.en} anhören`}>
          <span className="text-[34px] font-black text-ink decoration-sky decoration-dotted decoration-2 underline-offset-8 group-hover:underline" lang="en">
            {w.en}
          </span>
        </button>
        <div className="mt-1 text-sm font-bold text-mute">{POS[w.pos ?? 'other']}</div>
        <div className="mt-4 text-[22px] font-extrabold text-feather-dark">{w.de}</div>
        <div className="mt-5 flex justify-center">
          <AudioButtons text={w.en} size="lg" autoPlay slow />
        </div>
      </div>
      {w.example && (
        <div className="w-full rounded-2xl bg-snow p-4">
          <div className="flex items-start gap-3">
            <AudioButtons text={w.example} size="sm" />
            <div>
              <p className="text-[17px] font-bold text-ink" lang="en">
                {w.example}
              </p>
              {w.exampleDe && <p className="mt-1 text-ink-soft">{w.exampleDe}</p>}
            </div>
          </div>
        </div>
      )}
      {w.note && (
        <p className="w-full rounded-2xl border-2 border-bee/50 bg-bee/10 p-3 text-[15px] text-ink">
          <span aria-hidden="true">💡 </span>
          {w.note}
        </p>
      )}
    </div>
  )
}
