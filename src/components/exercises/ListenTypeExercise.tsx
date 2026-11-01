import { useEffect, useState } from 'react'
import type { ListenTypeExercise as ListenTypeEx } from '../../content/schema'
import { checkText } from '../../lib/answer'
import { AudioButtons } from '../ui'
import type { ExerciseProps } from './types'

/** Hören & Tippen: Audio anhören (🐢 langsam möglich) und abtippen. */
export function ListenTypeExercise({ ex, locked, result, setCheck }: ExerciseProps<ListenTypeEx>) {
  const [value, setValue] = useState('')

  useEffect(() => {
    if (!value.trim()) return setCheck(null)
    setCheck(() => {
      const r = checkText(value, [ex.audio, ...(ex.accepted ?? [])])
      return { correct: r.correct, nearMiss: r.nearMiss ? r.closest : undefined, solution: ex.audio }
    })
  }, [value, ex, setCheck])

  const border = !locked || !result ? '#E5E5E5' : result.correct ? '#A5ED6E' : '#FFB2B2'
  return (
    <div className="flex flex-col gap-8">
      <div className="py-2">
        <AudioButtons text={ex.audio} autoPlay />
      </div>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
        disabled={locked}
        rows={3}
        lang="en"
        autoCapitalize="sentences"
        autoCorrect="off"
        spellCheck={false}
        placeholder="Tippe auf Englisch, was du hörst"
        aria-label="Deine Antwort"
        className="w-full resize-none rounded-2xl border-2 bg-snow p-4 text-lg font-bold outline-none placeholder:text-mute focus:border-sky"
        style={{ borderColor: border }}
      />
      {locked && ex.translation && <p className="text-center text-ink-soft">{ex.translation}</p>}
    </div>
  )
}
