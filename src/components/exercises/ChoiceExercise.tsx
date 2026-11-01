import type { ChoiceExercise as ChoiceEx } from '../../content/schema'
import { MascotSays } from '../Mascot'
import { AudioButtons } from '../ui'
import { ChoiceList } from './ChoiceList'
import { correctChoice, type ExerciseProps } from './types'

/** Multiple Choice – mit Bildkarten, wenn alle Optionen ein Emoji haben. */
export function ChoiceExercise({ ex, locked, result, setCheck }: ExerciseProps<ChoiceEx>) {
  return (
    <div className="flex flex-col gap-6">
      {ex.question &&
        (ex.questionLang === 'en' ? (
          <MascotSays size={84} mood="neutral">
            <div className="flex items-center gap-3">
              <AudioButtons text={ex.question} size="sm" autoPlay />
              <span lang="en">{ex.question}</span>
            </div>
          </MascotSays>
        ) : (
          <MascotSays size={84} mood="thinking">
            <span lang={ex.questionLang ?? 'de'}>{ex.question}</span>
          </MascotSays>
        ))}
      <ChoiceList choices={ex.choices} locked={locked} result={result} setCheck={setCheck} solution={correctChoice(ex.choices)} />
    </div>
  )
}
