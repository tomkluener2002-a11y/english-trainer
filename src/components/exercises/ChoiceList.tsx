import { useEffect, useMemo, useState } from 'react'
import type { Choice } from '../../content/schema'
import { shuffle } from '../../lib/rng'
import { sfx } from '../sfx'
import { useNumberKeys } from '../hooks'
import { type CheckResult, choiceState } from './types'

/** Auswahl-Liste bzw. Bildkarten-Raster mit Tastenkürzeln. Meldet die gewählte Option über setCheck. */
export function ChoiceList({
  choices,
  locked,
  result,
  setCheck,
  solution,
  layout = 'auto',
  onSelect,
}: {
  choices: Choice[]
  locked: boolean
  result: CheckResult | null
  setCheck: (fn: (() => CheckResult) | null) => void
  solution: string
  layout?: 'auto' | 'chips'
  onSelect?: (c: Choice) => void
}) {
  const order = useMemo(() => shuffle(choices), [choices])
  const [sel, setSel] = useState<number | null>(null)
  const pictures = order.every((c) => c.emoji)

  useEffect(() => {
    if (sel === null) setCheck(null)
    else {
      const ok = !!order[sel].correct
      setCheck(() => ({ correct: ok, solution }))
    }
  }, [sel, order, setCheck, solution])

  const pick = (i: number) => {
    if (locked) return
    sfx.click()
    setSel(i)
    onSelect?.(order[i])
  }
  useNumberKeys(order.length, pick, !locked)

  if (pictures) {
    return (
      <div className="grid grid-cols-2 gap-3" role="radiogroup">
        {order.map((c, i) => (
          <button
            key={c.text}
            type="button"
            role="radio"
            aria-checked={sel === i}
            disabled={locked}
            data-state={choiceState(i, sel, locked, result)}
            onClick={() => pick(i)}
            className={`card3d relative flex aspect-[4/5] flex-col items-center justify-center gap-3 p-3 ${
              locked && sel === i && result && !result.correct ? 'animate-shake' : ''
            }`}
          >
            <span className="text-[64px] leading-none">{c.emoji}</span>
            <span className="text-lg font-bold">{c.text}</span>
            <span className="absolute top-2 left-2 hidden rounded-lg border-2 border-line px-1.5 text-xs text-mute sm:block">{i + 1}</span>
          </button>
        ))}
      </div>
    )
  }

  const chips = layout === 'chips' && order.every((c) => c.text.length <= 18)
  if (chips) {
    return (
      <div className="flex flex-wrap justify-center gap-3" role="radiogroup">
        {order.map((c, i) => (
          <button
            key={c.text}
            type="button"
            role="radio"
            aria-checked={sel === i}
            disabled={locked}
            data-state={choiceState(i, sel, locked, result)}
            onClick={() => pick(i)}
            className={`card3d min-w-[84px] px-5 py-3 text-lg font-bold ${locked && sel === i && result && !result.correct ? 'animate-shake' : ''}`}
          >
            {c.text}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3" role="radiogroup">
      {order.map((c, i) => (
        <button
          key={c.text}
          type="button"
          role="radio"
          aria-checked={sel === i}
          disabled={locked}
          data-state={choiceState(i, sel, locked, result)}
          onClick={() => pick(i)}
          className={`card3d flex items-center gap-4 px-4 py-3.5 text-left text-[17px] font-bold ${
            locked && sel === i && result && !result.correct ? 'animate-shake' : ''
          }`}
        >
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 text-sm"
            style={{ borderColor: 'currentColor', opacity: sel === i ? 1 : 0.45 }}
            aria-hidden="true"
          >
            {i + 1}
          </span>
          {c.emoji && <span className="text-2xl">{c.emoji}</span>}
          <span>{c.text}</span>
        </button>
      ))}
    </div>
  )
}
