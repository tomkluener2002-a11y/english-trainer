import { useState } from 'react'
import type { FillExercise as FillEx } from '../../content/schema'
import { ChoiceList } from './ChoiceList'
import { correctChoice, type ExerciseProps, fillBlank } from './types'

/** Lückentext mit Wortauswahl: die gewählte Option erscheint direkt in der Lücke. */
export function FillExercise({ ex, locked, result, setCheck }: ExerciseProps<FillEx>) {
  const [picked, setPicked] = useState<string | null>(null)
  const [before, after] = ex.sentence.split('___')
  const color = !locked || !result ? '#1899D6' : result.correct ? '#58A700' : '#EA2B2B'
  return (
    <div className="flex flex-col gap-8">
      <p className="text-[22px] leading-[1.9] font-bold" lang="en">
        {before}
        <span
          className="mx-1 inline-block min-w-[88px] border-b-[3px] px-2 text-center"
          style={{ borderColor: picked ? color : '#AFAFAF', color }}
          aria-label={picked ? `Lücke: ${picked}` : 'Lücke'}
        >
          {picked ?? ' '}
        </span>
        {after}
      </p>
      <ChoiceList
        choices={ex.choices}
        locked={locked}
        result={result}
        setCheck={setCheck}
        solution={fillBlank(ex.sentence, correctChoice(ex.choices))}
        layout="chips"
        onSelect={(c) => setPicked(c.text)}
      />
      {locked && ex.translation && <p className="text-center text-ink-soft">{ex.translation}</p>}
    </div>
  )
}
