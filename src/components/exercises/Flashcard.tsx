import { useState } from 'react'
import type { FlashcardExercise } from '../../content/types'
import { SpeakButton } from '../SpeakButton'
import { ActionBar, CheckButton, Prompt, type ExerciseProps } from './shared'

/** Lernkarte: Begriff ansehen, aufdecken und selbst einschätzen. */
export function Flashcard({ exercise, locked, onAnswer }: ExerciseProps<FlashcardExercise>) {
  const [revealed, setRevealed] = useState(false)

  const grade = (knewIt: boolean) =>
    onAnswer({
      correct: knewIt,
      correctAnswer: exercise.back,
      speakText: exercise.example ?? exercise.front,
    })

  return (
    <div className="space-y-6">
      <Prompt>Lernkarte – kennst du die Bedeutung?</Prompt>

      {/* div statt button, weil die Karte selbst Vorlese-Buttons enthält */}
      <div
        role="button"
        tabIndex={revealed ? -1 : 0}
        aria-expanded={revealed}
        onClick={() => setRevealed(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setRevealed(true)
          }
        }}
        className={`w-full rounded-3xl border-2 border-slate-200 bg-white p-6 text-left shadow-sm transition ${
          revealed ? '' : 'cursor-pointer hover:border-indigo-300'
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-3xl font-bold text-slate-900">{exercise.front}</h2>
          <SpeakButton text={exercise.front} />
        </div>

        {revealed ? (
          <div className="mt-5 space-y-4 border-t border-slate-100 pt-5">
            <p className="text-lg font-semibold text-indigo-700">{exercise.back}</p>
            {exercise.example && (
              <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                <p className="flex-1 text-slate-700 italic">{exercise.example}</p>
                <SpeakButton text={exercise.example} />
              </div>
            )}
          </div>
        ) : (
          <p className="mt-6 text-sm font-semibold text-slate-400">Tippen zum Aufdecken 👆</p>
        )}
      </div>

      {!locked && (
        <ActionBar>
          {revealed ? (
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => grade(false)}
                className="rounded-2xl border-2 border-rose-200 bg-rose-50 px-4 py-4 text-lg font-bold text-rose-700 transition active:scale-[0.98]"
              >
                ✗ Nicht gewusst
              </button>
              <button
                type="button"
                onClick={() => grade(true)}
                className="rounded-2xl bg-emerald-500 px-4 py-4 text-lg font-bold text-white shadow-[0_4px_0_0_rgb(5,150,105)] transition active:translate-y-1 active:shadow-none"
              >
                ✓ Gewusst
              </button>
            </div>
          ) : (
            <CheckButton onClick={() => setRevealed(true)}>Aufdecken</CheckButton>
          )}
        </ActionBar>
      )}
    </div>
  )
}
