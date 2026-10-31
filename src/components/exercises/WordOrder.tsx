import { useState } from 'react'
import type { WordOrderExercise } from '../../content/types'
import { sameSentence } from '../../lib/answer'
import { shuffle } from '../../lib/random'
import { ActionBar, CheckButton, Prompt, type ExerciseProps } from './shared'

interface Token {
  id: number
  text: string
}

function buildTokens(exercise: WordOrderExercise): Token[] {
  const words = [...exercise.solution.split(' '), ...(exercise.extraWords ?? [])]
  const tokens = words.map((text, id) => ({ id, text }))
  // Sicherstellen, dass die Wörter nicht zufällig schon richtig sortiert sind
  for (let attempt = 0; attempt < 10; attempt++) {
    const mixed = shuffle(tokens)
    if (mixed.map((t) => t.text).join(' ') !== exercise.solution) return mixed
  }
  return tokens.reverse()
}

export function WordOrder({ exercise, locked, onAnswer }: ExerciseProps<WordOrderExercise>) {
  const [bank] = useState(() => buildTokens(exercise))
  const [picked, setPicked] = useState<number[]>([])

  const byId = new Map(bank.map((t) => [t.id, t]))
  const sentence = picked.map((id) => byId.get(id)!.text).join(' ')

  const toggle = (id: number) => {
    if (locked) return
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]))
  }

  const check = () => {
    const accepted = [exercise.solution, ...(exercise.alternatives ?? [])]
    onAnswer({
      correct: accepted.some((s) => sameSentence(s, sentence)),
      correctAnswer: exercise.solution,
      userAnswer: sentence,
      speakText: exercise.solution,
      translation: exercise.translation,
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Prompt>Bilde den Satz auf Englisch</Prompt>
        <h2 className="text-2xl font-bold text-slate-900">„{exercise.translation}“</h2>
      </div>

      {/* Antwortzeile */}
      <div className="flex min-h-28 flex-wrap content-start gap-2 rounded-2xl border-2 border-dashed border-slate-300 bg-white p-3">
        {picked.length === 0 && (
          <span className="self-center px-2 text-slate-400">Tippe die Wörter in der richtigen Reihenfolge an …</span>
        )}
        {picked.map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => toggle(id)}
            disabled={locked}
            className="rounded-xl border-2 border-indigo-200 bg-indigo-50 px-3 py-2 text-lg font-medium text-indigo-900 shadow-[0_2px_0_0_rgb(199,210,254)] transition active:scale-95"
          >
            {byId.get(id)!.text}
          </button>
        ))}
      </div>

      {/* Wortbank */}
      <div className="flex flex-wrap justify-center gap-2">
        {bank.map((token) => {
          const used = picked.includes(token.id)
          return (
            <button
              key={token.id}
              type="button"
              onClick={() => toggle(token.id)}
              disabled={locked || used}
              className={`rounded-xl border-2 px-3 py-2 text-lg font-medium transition active:scale-95 ${
                used
                  ? 'border-slate-200 bg-slate-100 text-transparent shadow-none'
                  : 'border-slate-200 bg-white text-slate-800 shadow-[0_2px_0_0_rgb(226,232,240)] hover:border-indigo-300'
              }`}
            >
              {token.text}
            </button>
          )
        })}
      </div>

      {!locked && (
        <ActionBar>
          <CheckButton disabled={picked.length === 0} onClick={check} />
        </ActionBar>
      )}
    </div>
  )
}
