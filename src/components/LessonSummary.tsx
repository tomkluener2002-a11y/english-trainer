import type { SessionOutcome } from '../hooks/useProgress'
import { lessonSession, type Session } from '../lib/session'
import { shuffle } from '../lib/random'
import type { AnsweredItem } from './LessonPlayer'
import { ProgressBar } from './ProgressBar'
import { SpeakButton } from './SpeakButton'

interface Props {
  session: Session
  answered: AnsweredItem[]
  outcome: SessionOutcome
  onExit: () => void
  onStartSession: (session: Session) => void
}

function verdict(pct: number): { emoji: string; title: string; text: string } {
  if (pct === 100) return { emoji: '🏆', title: 'Fehlerfrei!', text: 'Perfekte Runde – das sitzt.' }
  if (pct >= 80) return { emoji: '🎉', title: 'Sehr gut!', text: 'Nur noch Kleinigkeiten – wiederhol kurz die Fehler.' }
  if (pct >= 50) return { emoji: '💪', title: 'Gut gemacht!', text: 'Solide Basis. Mit einer Wiederholung wird es sicher.' }
  return { emoji: '🌱', title: 'Dranbleiben!', text: 'Jeder Fehler ist eine Vokabel, die du morgen kannst.' }
}

export function LessonSummary({ session, answered, outcome, onExit, onStartSession }: Props) {
  const correct = answered.filter((a) => a.result.correct).length
  const total = answered.length
  const pct = total ? Math.round((correct / total) * 100) : 0
  const mistakes = answered.filter((a) => !a.result.correct)
  const v = verdict(pct)

  const repeatMistakes = () =>
    onStartSession({
      title: `${session.title} – Fehler wiederholen`,
      items: shuffle(mistakes.map((m) => m.item)),
    })

  const restart = () => {
    const fresh = session.lessonId ? lessonSession(session.lessonId) : null
    onStartSession(fresh ?? { ...session, items: shuffle(session.items) })
  }

  return (
    <div className="min-h-dvh bg-slate-50">
      <main className="mx-auto max-w-xl space-y-6 px-4 pt-[max(2rem,env(safe-area-inset-top))] pb-12">
        <section className="animate-pop rounded-3xl bg-white p-6 text-center shadow-sm">
          <div className="text-6xl" aria-hidden>
            {v.emoji}
          </div>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900">{v.title}</h1>
          <p className="mt-1 text-slate-600">{v.text}</p>
          <p className="mt-1 text-sm font-semibold text-slate-400">{session.title}</p>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <Stat label="Richtig" value={`${correct}/${total}`} tone="emerald" />
            <Stat label="Quote" value={`${pct} %`} tone="indigo" />
            <Stat label="XP" value={`+${outcome.xpGained}`} tone="amber" />
          </div>
          <div className="mt-5">
            <ProgressBar value={pct} color={pct >= 80 ? 'emerald' : pct >= 50 ? 'amber' : 'indigo'} />
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-2 text-sm font-semibold">
            {outcome.streakIncreased && (
              <span className="rounded-full bg-orange-100 px-3 py-1.5 text-orange-700">
                🔥 {outcome.streak} {outcome.streak === 1 ? 'Tag' : 'Tage'} Streak
              </span>
            )}
            {session.lessonId && outcome.newBest && (
              <span className="rounded-full bg-indigo-100 px-3 py-1.5 text-indigo-700">⭐ Neuer Bestwert</span>
            )}
          </div>
        </section>

        {mistakes.length > 0 && (
          <section className="space-y-3">
            <h2 className="px-1 text-lg font-bold text-slate-900">
              Deine Fehler ({mistakes.length}) – das solltest du dir merken:
            </h2>
            <ul className="space-y-2">
              {mistakes.map(({ item, result }) => (
                <li key={item.key} className="flex items-start gap-3 rounded-2xl border-l-4 border-rose-400 bg-white p-4 shadow-sm">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-slate-500">{describe(item)}</p>
                    <p className="font-semibold text-emerald-700">✓ {result.correctAnswer}</p>
                    {result.userAnswer && (
                      <p className="text-sm text-rose-600 line-through decoration-1">{result.userAnswer}</p>
                    )}
                  </div>
                  {result.speakText && <SpeakButton text={result.speakText} />}
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="space-y-3">
          {mistakes.length > 0 && (
            <button
              type="button"
              onClick={repeatMistakes}
              className="w-full rounded-2xl bg-rose-500 px-6 py-4 text-lg font-bold text-white shadow-[0_4px_0_0_rgb(225,29,72)] transition active:translate-y-1 active:shadow-none"
            >
              🔁 Fehler jetzt wiederholen
            </button>
          )}
          <button
            type="button"
            onClick={onExit}
            className="w-full rounded-2xl bg-indigo-600 px-6 py-4 text-lg font-bold text-white shadow-[0_4px_0_0_rgb(67,56,202)] transition active:translate-y-1 active:shadow-none"
          >
            Zur Übersicht
          </button>
          <button
            type="button"
            onClick={restart}
            className="w-full rounded-2xl border-2 border-slate-200 bg-white px-6 py-3.5 font-bold text-slate-700 transition hover:bg-slate-50"
          >
            Ganze Runde nochmal
          </button>
        </div>
      </main>
    </div>
  )
}

function describe(item: AnsweredItem['item']): string {
  const e = item.exercise
  switch (e.type) {
    case 'flashcard':
      return e.front
    case 'choice':
      return e.question
    case 'type':
      return e.sentence
    case 'order':
      return `„${e.translation}“`
    case 'listen-type':
      return '🎧 Hören & Schreiben'
    case 'listen-choice':
      return `🎧 „${e.text}“`
  }
}

function Stat({ label, value, tone }: { label: string; value: string; tone: 'emerald' | 'indigo' | 'amber' }) {
  const tones = {
    emerald: 'bg-emerald-50 text-emerald-700',
    indigo: 'bg-indigo-50 text-indigo-700',
    amber: 'bg-amber-50 text-amber-700',
  }
  return (
    <div className={`rounded-2xl px-2 py-3 ${tones[tone]}`}>
      <div className="text-2xl font-extrabold tabular-nums">{value}</div>
      <div className="text-xs font-semibold uppercase tracking-wide opacity-75">{label}</div>
    </div>
  )
}
