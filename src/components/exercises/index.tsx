import { ChoiceExercise } from './ChoiceExercise'
import { DialogueExercise } from './DialogueExercise'
import { FillExercise } from './FillExercise'
import { IntroExercise } from './IntroExercise'
import { ListenChoiceExercise } from './ListenChoiceExercise'
import { ListenTypeExercise } from './ListenTypeExercise'
import { MatchExercise } from './MatchExercise'
import { SpeakExercise } from './SpeakExercise'
import { TranslateExercise } from './TranslateExercise'
import { TypeExercise } from './TypeExercise'
import type { ExerciseProps } from './types'

export type { CheckResult, ExerciseProps } from './types'

export function ExerciseView(props: ExerciseProps) {
  const { ex } = props
  switch (ex.type) {
    case 'intro':
      return <IntroExercise {...props} ex={ex} />
    case 'translate':
      return <TranslateExercise {...props} ex={ex} />
    case 'choice':
      return <ChoiceExercise {...props} ex={ex} />
    case 'listen-choice':
      return <ListenChoiceExercise {...props} ex={ex} />
    case 'listen-type':
      return <ListenTypeExercise {...props} ex={ex} />
    case 'match':
      return <MatchExercise {...props} ex={ex} />
    case 'fill':
      return <FillExercise {...props} ex={ex} />
    case 'type':
      return <TypeExercise {...props} ex={ex} />
    case 'speak':
      return <SpeakExercise {...props} ex={ex} />
    case 'dialogue':
      return <DialogueExercise {...props} ex={ex} />
  }
}
