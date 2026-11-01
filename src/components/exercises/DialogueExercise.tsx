import { useEffect, useState } from 'react'
import type { DialogueExercise as DialogueEx } from '../../content/schema'
import { speak } from '../../lib/speech'
import { SpeakerIcon } from '../Icons'
import { ChoiceList } from './ChoiceList'
import { correctChoice, type ExerciseProps } from './types'

/** Mini-Dialog: Zeilen erscheinen nacheinander, Antippen liest vor und zeigt die Übersetzung. */
export function DialogueExercise({ ex, locked, result, setCheck }: ExerciseProps<DialogueEx>) {
  const [shown, setShown] = useState(1)
  const [open, setOpen] = useState<number[]>([])
  const all = shown >= ex.lines.length

  useEffect(() => {
    if (all) return
    const t = window.setTimeout(() => setShown((n) => n + 1), 900)
    return () => window.clearTimeout(t)
  }, [shown, all])

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        {ex.lines.slice(0, shown).map((l, i) => {
          const right = l.speaker === 'b'
          const name = l.name ?? (right ? 'B' : 'A')
          return (
            <div key={i} className={`flex animate-pop items-end gap-2 ${right ? 'flex-row-reverse' : ''}`}>
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base font-black text-white"
                style={{ background: right ? '#CE82FF' : '#1CB0F6' }}
                aria-hidden="true"
              >
                {name.slice(0, 1)}
              </div>
              <button
                type="button"
                onClick={() => {
                  speak(l.en)
                  setOpen((o) => (o.includes(i) ? o.filter((x) => x !== i) : [...o, i]))
                }}
                className={`max-w-[80%] rounded-2xl border-2 border-line px-4 py-2.5 text-left ${right ? 'rounded-br-md bg-beetle/10' : 'rounded-bl-md bg-white'}`}
                aria-label={`${name}: ${l.en}. Antippen zum Anhören und Übersetzen.`}
              >
                <span className="mb-0.5 flex items-center gap-1.5 text-xs font-extrabold tracking-wide text-mute uppercase">
                  {name} <SpeakerIcon size={14} color="#AFAFAF" />
                </span>
                <span className="block text-[17px] font-bold" lang="en">
                  {l.en}
                </span>
                {open.includes(i) && l.de && <span className="mt-1 block text-[15px] text-ink-soft">{l.de}</span>}
              </button>
            </div>
          )
        })}
        {!all && (
          <button type="button" onClick={() => setShown(ex.lines.length)} className="self-center text-sm font-extrabold tracking-wide text-sky uppercase">
            Alles zeigen
          </button>
        )}
      </div>
      {all && (
        <div className="flex animate-slide-in flex-col gap-4 border-t-2 border-line pt-5">
          <h3 className="text-lg font-extrabold">{ex.question}</h3>
          <ChoiceList choices={ex.choices} locked={locked} result={result} setCheck={setCheck} solution={correctChoice(ex.choices)} />
        </div>
      )}
    </div>
  )
}
