import { useState } from 'react'
import type { ChoiceExercise } from '../../content/types'
import { shuffle } from '../../lib/random'
import { SpeakButton } from '../SpeakButton'
import { ActionBar, CheckButton, OptionList, Prompt, type ExerciseProps } from './shared'

export function MultipleChoice({ exercise, locked, onAnswer }: ExerciseProps<ChoiceExercise>) {
  const [order] = useState(() => shuffle(exercise.options.map((_, i) => i)))
  const [selected, setSelected] = useState<number | null>(null)

  const check = () => {
    if (selected === null) return
    const correctAnswer = exercise.options[exercise.correct]
    onAnswer({
      correct: selected === exercise.correct,
      correctAnswer,
      userAnswer: exercise.options[selected],
      speakText: exercise.speakAnswer
        ? correctAnswer
        : exercise.speakQuestion
          ? exercise.question
          : undefined,
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Prompt>{exercise.prompt}</Prompt>
        <div className="flex items-center gap-3">
          {exercise.speakQuestion && <SpeakButton text={exercise.question} />}
          <h2 className="text-2xl font-bold text-slate-900">{exercise.question}</h2>
        </div>
      </div>

      <OptionList
        options={exercise.options}
        order={order}
        selected={selected}
        correct={exercise.correct}
        locked={locked}
        onSelect={setSelected}
      />

      {!locked && (
        <ActionBar>
          <CheckButton disabled={selected === null} onClick={check} />
        </ActionBar>
      )}
    </div>
  )
}
