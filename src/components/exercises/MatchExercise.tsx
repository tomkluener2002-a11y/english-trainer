import { useEffect, useMemo, useRef, useState } from 'react'
import type { MatchExercise as MatchEx } from '../../content/schema'
import { shuffle } from '../../lib/rng'
import { speak } from '../../lib/speech'
import { sfx } from '../sfx'
import type { ExerciseProps } from './types'

type Side = 'en' | 'de'

/** Paare zuordnen: links Englisch, rechts Deutsch. Fertig = automatisch richtig. */
export function MatchExercise({ ex, locked, submit }: ExerciseProps<MatchEx>) {
  const left = useMemo(() => shuffle(ex.pairs.map((p, i) => ({ i, text: p.en }))), [ex.pairs])
  const right = useMemo(() => shuffle(ex.pairs.map((p, i) => ({ i, text: p.de }))), [ex.pairs])
  const [sel, setSel] = useState<{ side: Side; i: number } | null>(null)
  const [done, setDone] = useState<number[]>([])
  const [flash, setFlash] = useState<{ kind: 'ok' | 'bad'; en: number; de: number } | null>(null)
  const finished = useRef(false)

  useEffect(() => {
    if (done.length === ex.pairs.length && !finished.current) {
      finished.current = true
      const t = window.setTimeout(() => submit({ correct: true, solution: ex.pairs.map((p) => `${p.en} = ${p.de}`).join(' · ') }), 350)
      return () => window.clearTimeout(t)
    }
  }, [done, ex.pairs, submit])

  const tap = (side: Side, i: number) => {
    if (locked || done.includes(i) || flash) return
    if (side === 'en') speak(ex.pairs[i].en)
    else sfx.click()
    if (!sel || sel.side === side) {
      setSel({ side, i })
      return
    }
    const en = side === 'en' ? i : sel.i
    const de = side === 'de' ? i : sel.i
    setSel(null)
    if (en === de) {
      setFlash({ kind: 'ok', en, de })
      window.setTimeout(() => {
        setDone((d) => [...d, en])
        setFlash(null)
      }, 260)
    } else {
      sfx.wrong()
      setFlash({ kind: 'bad', en, de })
      window.setTimeout(() => setFlash(null), 600)
    }
  }

  const stateOf = (side: Side, i: number) => {
    if (done.includes(i)) return 'disabled'
    if (flash && (side === 'en' ? flash.en : flash.de) === i) return flash.kind === 'ok' ? 'correct' : 'wrong'
    if (sel && sel.side === side && sel.i === i) return 'selected'
    return undefined
  }

  const col = (side: Side, items: { i: number; text: string }[]) => (
    <div className="flex flex-col gap-3">
      {items.map(({ i, text }) => {
        const st = stateOf(side, i)
        return (
          <button
            key={i}
            type="button"
            disabled={locked || done.includes(i)}
            data-state={st}
            aria-pressed={st === 'selected'}
            onClick={() => tap(side, i)}
            lang={side}
            className={`card3d flex min-h-[64px] items-center justify-center px-3 py-3 text-center text-[17px] font-bold ${
              st === 'wrong' ? 'animate-shake' : st === 'correct' ? 'animate-pop' : ''
            }`}
          >
            {text}
          </button>
        )
      })}
    </div>
  )

  return (
    <div className="grid grid-cols-2 gap-3">
      {col('en', left)}
      {col('de', right)}
    </div>
  )
}
