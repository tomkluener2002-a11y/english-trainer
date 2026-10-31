import { useEffect, useRef, useState } from 'react'
import type { TypeAnswerExercise } from '../../content/types'
import { checkText } from '../../lib/answer'
import { ActionBar, CheckButton, Prompt, type ExerciseProps } from './shared'

export function TypeAnswer({ exercise, locked, onAnswer }: ExerciseProps<TypeAnswerExercise>) {
  const [value, setValue] = useState('')
  const [showHint, setShowHint] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [before, after = ''] = exercise.sentence.split('___')

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const check = () => {
    if (!value.trim()) return
    const { correct, nearMiss } = checkText(value, exercise.answers)
    const solution = exercise.answers[0]
    onAnswer({
      correct,
      nearMiss,
      correctAnswer: solution,
      userAnswer: value.trim(),
      speakText: exercise.sentence.replace('___', solution),
      translation: exercise.translation,
    })
  }

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault()
        if (!locked) check()
      }}
    >
      <Prompt>{exercise.prompt}</Prompt>

      <p className="text-xl leading-relaxed font-medium text-slate-900 sm:text-2xl">
        {before}
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={locked}
          autoCapitalize="off"
          autoCorrect="off"
          autoComplete="off"
          spellCheck={false}
          enterKeyHint="done"
          aria-label="Fehlendes Wort"
          size={Math.max(6, exercise.answers[0].length + 2)}
          className="mx-1 inline-block max-w-full rounded-lg border-b-4 border-indigo-400 bg-indigo-50 px-2 py-1 text-center font-bold text-indigo-900 outline-none focus:border-indigo-600 disabled:opacity-80"
        />
        {after}
      </p>

      {exercise.hint && (
        <div>
          {showHint || locked ? (
            <p className="rounded-xl bg-amber-50 px-4 py-3 text-amber-900">
              💡 <span className="font-medium">Hinweis:</span> {exercise.hint}
            </p>
          ) : (
            <button
              type="button"
              onClick={() => setShowHint(true)}
              className="rounded-xl px-3 py-2 text-sm font-semibold text-amber-700 hover:bg-amber-50"
            >
              💡 Hinweis anzeigen
            </button>
          )}
        </div>
      )}

      {!locked && (
        <ActionBar>
          <CheckButton disabled={!value.trim()} onClick={check} />
        </ActionBar>
      )}
    </form>
  )
}
