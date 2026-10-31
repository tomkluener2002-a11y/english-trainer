import type { ReactNode } from 'react'

export interface AnswerResult {
  correct: boolean
  /** Richtig gewertet, aber mit kleinem Tippfehler */
  nearMiss?: boolean
  /** Musterlösung zur Anzeige */
  correctAnswer: string
  /** Was der Nutzer geantwortet hat */
  userAnswer?: string
  /** Englischer Text, der im Feedback vorgelesen werden kann */
  speakText?: string
  /** Deutsche Übersetzung zur Anzeige im Feedback */
  translation?: string
}

export interface ExerciseProps<T> {
  exercise: T
  /** true, sobald eine Antwort abgegeben wurde */
  locked: boolean
  onAnswer: (result: AnswerResult) => void
}

export function Prompt({ children }: { children: ReactNode }) {
  return <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{children}</p>
}

export function CheckButton({
  disabled,
  onClick,
  children = 'Prüfen',
}: {
  disabled?: boolean
  onClick: () => void
  children?: ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="w-full rounded-2xl bg-indigo-600 px-6 py-4 text-lg font-bold text-white shadow-[0_4px_0_0_rgb(67,56,202)] transition active:translate-y-1 active:shadow-none disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
    >
      {children}
    </button>
  )
}

/** Fester Bereich unten für den Prüfen-Button (wird im Feedback-Zustand ausgeblendet). */
export function ActionBar({ children }: { children: ReactNode }) {
  return (
    <div className="fixed inset-x-0 bottom-0 border-t border-slate-200 bg-white/95 px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] backdrop-blur">
      <div className="mx-auto max-w-xl">{children}</div>
    </div>
  )
}

type OptionState = 'idle' | 'selected' | 'correct' | 'wrong' | 'dimmed'

const optionStyles: Record<OptionState, string> = {
  idle: 'border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/50',
  selected: 'border-indigo-500 bg-indigo-50 ring-2 ring-indigo-200',
  correct: 'border-emerald-500 bg-emerald-50 text-emerald-900',
  wrong: 'border-rose-500 bg-rose-50 text-rose-900 animate-shake',
  dimmed: 'border-slate-200 bg-white opacity-50',
}

/** Liste von Antwortoptionen (für Multiple Choice und Hör-Auswahl). */
export function OptionList({
  options,
  order,
  selected,
  correct,
  locked,
  onSelect,
}: {
  options: string[]
  /** Anzeige-Reihenfolge (Indizes in `options`) */
  order: number[]
  selected: number | null
  correct: number
  locked: boolean
  onSelect: (index: number) => void
}) {
  return (
    <div className="grid gap-3">
      {order.map((idx, pos) => {
        let state: OptionState = 'idle'
        if (locked) {
          if (idx === correct) state = 'correct'
          else if (idx === selected) state = 'wrong'
          else state = 'dimmed'
        } else if (idx === selected) {
          state = 'selected'
        }
        return (
          <button
            key={idx}
            type="button"
            disabled={locked}
            onClick={() => onSelect(idx)}
            className={`flex min-h-14 w-full items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left text-base font-medium transition ${optionStyles[state]}`}
          >
            <span className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-current/20 text-sm font-bold opacity-60">
              {pos + 1}
            </span>
            <span>{options[idx]}</span>
          </button>
        )
      })}
    </div>
  )
}
