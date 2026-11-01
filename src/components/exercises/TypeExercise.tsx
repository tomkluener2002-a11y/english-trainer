import { useEffect, useState } from 'react'
import type { TypeExercise as TypeEx } from '../../content/schema'
import { checkText } from '../../lib/answer'
import { type ExerciseProps, fillBlank } from './types'

/** Lückentext zum Tippen – das Eingabefeld sitzt direkt in der Lücke. */
export function TypeExercise({ ex, locked, result, setCheck }: ExerciseProps<TypeEx>) {
  const [value, setValue] = useState('')
  const [before, after] = ex.sentence.split('___')

  useEffect(() => {
    if (!value.trim()) return setCheck(null)
    setCheck(() => {
      const r = checkText(value, ex.accepted)
      return { correct: r.correct, nearMiss: r.nearMiss ? r.closest : undefined, solution: fillBlank(ex.sentence, ex.accepted[0]) }
    })
  }, [value, ex, setCheck])

  const color = !locked || !result ? '#1899D6' : result.correct ? '#58A700' : '#EA2B2B'
  return (
    <div className="flex flex-col gap-6">
      <p className="text-[22px] leading-[2.1] font-bold" lang="en">
        {before}
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={locked}
          autoFocus
          autoCapitalize="off"
          autoCorrect="off"
          autoComplete="off"
          spellCheck={false}
          aria-label="Fehlendes Wort"
          className="mx-1 inline-block max-w-full rounded-none border-0 border-b-[3px] bg-transparent px-1 text-center font-bold outline-none focus:bg-sky-light/40"
          style={{ borderColor: color, color, width: `${Math.max(6, ex.accepted[0].length + 3)}ch` }}
        />
        {after}
      </p>
      {ex.hint && (
        <p className="inline-flex items-center gap-2 self-start rounded-xl bg-snow px-3 py-2 text-ink-soft">
          <span aria-hidden="true">💡</span> Tipp: <span className="font-extrabold text-ink">{ex.hint}</span>
        </p>
      )}
      {locked && ex.translation && <p className="text-ink-soft">{ex.translation}</p>}
    </div>
  )
}
