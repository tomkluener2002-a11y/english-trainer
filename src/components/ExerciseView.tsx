import type { Exercise } from '../content/types'
import { Flashcard } from './exercises/Flashcard'
import { ListenChoice, ListenType } from './exercises/ListeningExercise'
import { MultipleChoice } from './exercises/MultipleChoice'
import type { AnswerResult } from './exercises/shared'
import { TypeAnswer } from './exercises/TypeAnswer'
import { WordOrder } from './exercises/WordOrder'

interface Props {
  exercise: Exercise
  locked: boolean
  onAnswer: (result: AnswerResult) => void
}

/** Wählt anhand des Übungstyps die passende Komponente. */
export function ExerciseView({ exercise, locked, onAnswer }: Props) {
  switch (exercise.type) {
    case 'flashcard':
      return <Flashcard exercise={exercise} locked={locked} onAnswer={onAnswer} />
    case 'choice':
      return <MultipleChoice exercise={exercise} locked={locked} onAnswer={onAnswer} />
    case 'type':
      return <TypeAnswer exercise={exercise} locked={locked} onAnswer={onAnswer} />
    case 'order':
      return <WordOrder exercise={exercise} locked={locked} onAnswer={onAnswer} />
    case 'listen-type':
      return <ListenType exercise={exercise} locked={locked} onAnswer={onAnswer} />
    case 'listen-choice':
      return <ListenChoice exercise={exercise} locked={locked} onAnswer={onAnswer} />
  }
}
