import type { ListenChoiceExercise as ListenChoiceEx } from '../../content/schema'
import { AudioButtons } from '../ui'
import { ChoiceList } from './ChoiceList'
import { correctChoice, type ExerciseProps } from './types'

/** Hören & Auswählen: englisches Audio (TTS), dann die passende Option wählen. */
export function ListenChoiceExercise({ ex, locked, result, setCheck }: ExerciseProps<ListenChoiceEx>) {
  return (
    <div className="flex flex-col gap-8">
      <div className="py-2">
        <AudioButtons text={ex.audio} autoPlay />
      </div>
      <ChoiceList choices={ex.choices} locked={locked} result={result} setCheck={setCheck} solution={correctChoice(ex.choices)} />
      {locked && (
        <p className="text-center text-ink-soft" lang="en">
          „{ex.audio}“
        </p>
      )}
    </div>
  )
}
