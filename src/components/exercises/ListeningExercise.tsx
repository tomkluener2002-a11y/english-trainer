import { useEffect, useRef, useState } from 'react'
import type { ListenChoiceExercise, ListenTypeExercise } from '../../content/types'
import { checkText } from '../../lib/answer'
import { shuffle } from '../../lib/random'
import { speak, speechSupported, stopSpeaking } from '../../lib/speech'
import { SpeakButton } from '../SpeakButton'
import { ActionBar, CheckButton, OptionList, Prompt, type ExerciseProps } from './shared'

function Player({ text }: { text: string }) {
  const [showText, setShowText] = useState(false)

  // Beim Öffnen einmal automatisch abspielen (wird von manchen Browsern ohne Klick blockiert –
  // dann einfach den großen Button antippen).
  useEffect(() => {
    const t = window.setTimeout(() => speak(text), 350)
    return () => {
      window.clearTimeout(t)
      stopSpeaking()
    }
  }, [text])

  if (!speechSupported) {
    return (
      <div className="space-y-3 rounded-2xl bg-amber-50 p-4 text-amber-900">
        <p>🔇 Dein Browser unterstützt keine Sprachausgabe. Du kannst den Text stattdessen lesen.</p>
        {showText ? (
          <p className="font-semibold">„{text}“</p>
        ) : (
          <button type="button" onClick={() => setShowText(true)} className="font-semibold underline">
            Text anzeigen
          </button>
        )}
      </div>
    )
  }

  return (
    <div className="flex items-end justify-center gap-4 py-2">
      <SpeakButton text={text} size="lg" label="Anhören" />
      <SpeakButton text={text} size="lg" slow label="Langsam" />
    </div>
  )
}

export function ListenType({ exercise, locked, onAnswer }: ExerciseProps<ListenTypeExercise>) {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const check = () => {
    if (!value.trim()) return
    const { correct, nearMiss } = checkText(value, [exercise.text])
    onAnswer({
      correct,
      nearMiss,
      correctAnswer: exercise.text,
      userAnswer: value.trim(),
      speakText: exercise.text,
      translation: exercise.translation,
    })
  }

  return (
    <div className="space-y-6">
      <Prompt>Hör zu und schreib auf, was du hörst</Prompt>
      <Player text={exercise.text} />
      <textarea
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            if (!locked) check()
          }
        }}
        disabled={locked}
        rows={3}
        autoCapitalize="sentences"
        autoCorrect="off"
        autoComplete="off"
        spellCheck={false}
        enterKeyHint="done"
        placeholder="Auf Englisch eintippen …"
        aria-label="Gehörter Satz"
        className="w-full resize-none rounded-2xl border-2 border-slate-200 bg-white p-4 text-lg outline-none focus:border-indigo-500 disabled:bg-slate-50"
      />
      {!locked && (
        <ActionBar>
          <CheckButton disabled={!value.trim()} onClick={check} />
        </ActionBar>
      )}
    </div>
  )
}

export function ListenChoice({ exercise, locked, onAnswer }: ExerciseProps<ListenChoiceExercise>) {
  const [order] = useState(() => shuffle(exercise.options.map((_, i) => i)))
  const [selected, setSelected] = useState<number | null>(null)

  const check = () => {
    if (selected === null) return
    onAnswer({
      correct: selected === exercise.correct,
      correctAnswer: exercise.options[exercise.correct],
      userAnswer: exercise.options[selected],
      speakText: exercise.text,
      translation: `Gehört: „${exercise.text}“`,
    })
  }

  return (
    <div className="space-y-6">
      <Prompt>Hörverständnis</Prompt>
      <Player text={exercise.text} />
      <h2 className="text-xl font-bold text-slate-900">{exercise.question}</h2>
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
