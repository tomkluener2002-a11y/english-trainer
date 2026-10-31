import { useState } from 'react'
import type { SessionOutcome, SessionResult } from '../hooks/useProgress'
import type { Session, SessionItem } from '../lib/session'
import { stopSpeaking } from '../lib/speech'
import { exerciseTypeLabel } from '../content/labels'
import { ExerciseView } from './ExerciseView'
import type { AnswerResult } from './exercises/shared'
import { FeedbackPanel } from './FeedbackPanel'
import { LessonSummary } from './LessonSummary'
import { ProgressBar } from './ProgressBar'

export interface AnsweredItem {
  item: SessionItem
  result: AnswerResult
}

interface Props {
  session: Session
  onExit: () => void
  onRecord: (result: SessionResult) => SessionOutcome
  onStartSession: (session: Session) => void
}

export function LessonPlayer({ session, onExit, onRecord, onStartSession }: Props) {
  const [index, setIndex] = useState(0)
  const [current, setCurrent] = useState<AnswerResult | null>(null)
  const [answered, setAnswered] = useState<AnsweredItem[]>([])
  const [outcome, setOutcome] = useState<SessionOutcome | null>(null)

  const total = session.items.length
  const item = session.items[index]

  if (outcome) {
    return (
      <LessonSummary
        session={session}
        answered={answered}
        outcome={outcome}
        onExit={onExit}
        onStartSession={onStartSession}
      />
    )
  }

  if (!item) {
    return (
      <div className="mx-auto max-w-xl p-6 text-center">
        <p className="mb-4 text-slate-600">Diese Runde enthält keine Übungen.</p>
        <button type="button" onClick={onExit} className="font-semibold text-indigo-600 underline">
          Zur Übersicht
        </button>
      </div>
    )
  }

  const handleAnswer = (result: AnswerResult) => {
    if (current) return
    setCurrent(result)
    setAnswered((a) => [...a, { item, result }])
  }

  const handleContinue = () => {
    stopSpeaking()
    if (index + 1 < total) {
      setIndex(index + 1)
      setCurrent(null)
      window.scrollTo({ top: 0 })
      return
    }
    const answers = answered.map((a) => ({ key: a.item.key, correct: a.result.correct }))
    setOutcome(onRecord({ lessonId: session.lessonId, answers }))
    window.scrollTo({ top: 0 })
  }

  const handleExit = () => {
    const started = index > 0 || current !== null
    if (!started || window.confirm('Runde abbrechen? Der Fortschritt dieser Runde wird nicht gespeichert.')) {
      stopSpeaking()
      onExit()
    }
  }

  const progress = ((index + (current ? 1 : 0)) / total) * 100

  return (
    <div className="min-h-dvh bg-slate-50">
      <header className="sticky top-0 z-10 bg-slate-50/95 backdrop-blur">
        <div className="mx-auto flex max-w-xl items-center gap-3 px-4 pt-[max(0.75rem,env(safe-area-inset-top))] pb-3">
          <button
            type="button"
            onClick={handleExit}
            className="flex size-10 shrink-0 items-center justify-center rounded-full text-2xl text-slate-400 hover:bg-slate-200 hover:text-slate-600"
            aria-label="Runde beenden"
          >
            ✕
          </button>
          <ProgressBar value={progress} color="emerald" label="Fortschritt in dieser Runde" />
          <span className="shrink-0 text-sm font-semibold text-slate-500 tabular-nums">
            {index + 1}/{total}
          </span>
        </div>
        <p className="mx-auto max-w-xl truncate px-4 pb-2 text-xs font-semibold text-slate-400">{session.title} · {exerciseTypeLabel[item.exercise.type]}
        </p>
      </header>

      <main className={`mx-auto max-w-xl px-4 pt-4 ${current ? 'pb-[28rem]' : 'pb-40'}`}>
        <ExerciseView
          key={`${index}-${item.key}`}
          exercise={item.exercise}
          locked={current !== null}
          onAnswer={handleAnswer}
        />
      </main>

      {current && (
        <FeedbackPanel
          key={index}
          result={current}
          explanation={item.exercise.explanation}
          isLast={index + 1 >= total}
          onContinue={handleContinue}
        />
      )}
    </div>
  )
}
