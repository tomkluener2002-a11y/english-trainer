import { lessons } from '../content/lessons'
import { currentStreak, type ProgressState } from '../hooks/useProgress'
import { dayKey, daysBetween, lastDays, weekdayShort } from '../lib/date'
import { countValidMistakes, lessonSession, mistakesSession, quickSession, type Session } from '../lib/session'
import { ProgressBar } from './ProgressBar'
import { StreakBadge } from './StreakBadge'

interface Props {
  progress: ProgressState
  onStart: (session: Session) => void
  onReset: () => void
}

/** Kurze Tipps, die täglich wechseln – praxisnah für den Finance-Alltag. */
const DAILY_TIPS = [
  'Bereite vor einem wichtigen Gespräch 3 Kernsätze vor, die du sicher sagen willst. Der Rest ergibt sich.',
  '"Could you say that again, please?" ist kein Zeichen von Schwäche – Muttersprachler fragen ständig nach.',
  'Lies Beträge immer laut mit "point": €1.25m = "one point two five million euros".',
  'Formuliere eine echte Mail von heute einmal komplett auf Englisch.',
  'Erklär in 60 Sekunden auf Englisch, woran du heute gearbeitet hast.',
  'Lerne Wendungen statt Einzelwörter: "draw down a facility", "waive a fee", "extend the terms".',
  'Achtung False Friends: provision = Rückstellung, billion = Milliarde, eventually = schließlich.',
  'Zeit gewinnen: "Bear with me a second – let me just pull that up."',
]

function motivation(practicedToday: boolean, streak: number): string {
  if (practicedToday && streak >= 7) return `Eine ganze Woche am Stück – Respekt! 🚀`
  if (practicedToday && streak >= 3) return `${streak} Tage in Folge – du bist im Flow!`
  if (practicedToday) return 'Tagesziel erreicht ✓ – eine Runde extra schadet nie.'
  if (streak > 0) return `Halte deinen ${streak}-Tage-Streak: eine Runde (≈ 3 Min.) reicht.`
  return 'Starte heute deinen Streak – eine Lektion dauert nur ein paar Minuten.'
}

export function LessonOverview({ progress, onStart, onReset }: Props) {
  const today = dayKey()
  const streak = currentStreak(progress, today)
  const practicedToday = progress.lastPracticeDay === today
  const practiced = new Set(progress.practiceDays)
  const week = lastDays(7)
  const mistakeCount = countValidMistakes(progress.mistakes)
  const mastered = lessons.filter((l) => (progress.lessons[l.id]?.bestScore ?? 0) >= 90).length
  const tip = DAILY_TIPS[daysBetween('2026-01-01', today) % DAILY_TIPS.length]

  return (
    <div className="min-h-dvh bg-slate-50">
      <header className="mx-auto flex max-w-xl items-center justify-between px-4 pt-[max(1.25rem,env(safe-area-inset-top))] pb-2">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
            English <span className="text-indigo-600">Trainer</span>
          </h1>
          <p className="text-sm text-slate-500">Business English für Treasury & Finance</p>
        </div>
        <StreakBadge streak={streak} practicedToday={practicedToday} />
      </header>

      <main className="mx-auto max-w-xl space-y-6 px-4 pt-2 pb-12">
        {/* Motivation & Woche */}
        <section className="rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-5 text-white shadow-lg shadow-indigo-200">
          <p className="text-lg font-bold">Hi 👋</p>
          <p className="mt-1 text-indigo-100">{motivation(practicedToday, streak)}</p>

          <div className="mt-4 flex justify-between gap-1">
            {week.map((d) => {
              const key = dayKey(d)
              const done = practiced.has(key)
              const isToday = key === today
              return (
                <div key={key} className="flex flex-1 flex-col items-center gap-1">
                  <span className={`text-xs font-semibold ${isToday ? 'text-white' : 'text-indigo-200'}`}>
                    {weekdayShort(d)}
                  </span>
                  <span
                    className={`flex size-8 items-center justify-center rounded-full text-sm ${
                      done ? 'bg-orange-400 text-white' : isToday ? 'border-2 border-white/80' : 'bg-white/15'
                    }`}
                    aria-label={done ? 'geübt' : 'nicht geübt'}
                  >
                    {done ? '🔥' : ''}
                  </span>
                </div>
              )
            })}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            <MiniStat value={progress.xp} label="XP gesamt" />
            <MiniStat value={`${mastered}/${lessons.length}`} label="gemeistert" />
            <MiniStat value={progress.longestStreak} label="Rekord-Streak" />
          </div>
        </section>

        {/* Schnellstart */}
        <section className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => onStart(quickSession(10))}
            className="flex min-h-24 flex-col items-start justify-between rounded-2xl border-2 border-slate-200 bg-white p-4 text-left transition hover:border-indigo-300 active:scale-[0.98]"
          >
            <span className="text-2xl" aria-hidden>
              ⚡
            </span>
            <span>
              <span className="block font-bold text-slate-900">Schnelltraining</span>
              <span className="text-sm text-slate-500">10 gemischte Karten</span>
            </span>
          </button>
          <button
            type="button"
            onClick={() => onStart(mistakesSession(progress.mistakes))}
            disabled={mistakeCount === 0}
            className="flex min-h-24 flex-col items-start justify-between rounded-2xl border-2 border-slate-200 bg-white p-4 text-left transition enabled:hover:border-rose-300 enabled:active:scale-[0.98] disabled:opacity-50"
          >
            <span className="text-2xl" aria-hidden>
              🔁
            </span>
            <span>
              <span className="block font-bold text-slate-900">Fehler wiederholen</span>
              <span className="text-sm text-slate-500">
                {mistakeCount === 0 ? 'Keine offenen Fehler 🎉' : `${mistakeCount} offene ${mistakeCount === 1 ? 'Karte' : 'Karten'}`}
              </span>
            </span>
          </button>
        </section>

        {/* Lektionen */}
        <section className="space-y-3">
          <h2 className="px-1 text-lg font-bold text-slate-900">Lektionen</h2>
          {lessons.map((lesson) => {
            const p = progress.lessons[lesson.id]
            const best = p?.bestScore ?? 0
            const status = !p
              ? 'Noch nicht gestartet'
              : best >= 90
                ? `Gemeistert ⭐ · ${best} %`
                : `Bestwert ${best} % · ${p.completions}× geübt`
            return (
              <button
                key={lesson.id}
                type="button"
                onClick={() => {
                  const s = lessonSession(lesson.id)
                  if (s) onStart(s)
                }}
                className="flex w-full items-center gap-4 rounded-2xl border-2 border-slate-200 bg-white p-4 text-left transition hover:border-indigo-300 active:scale-[0.99]"
              >
                <span
                  className={`flex size-14 shrink-0 items-center justify-center rounded-2xl text-3xl ${
                    best >= 90 ? 'bg-amber-100' : p ? 'bg-indigo-50' : 'bg-slate-100'
                  }`}
                  aria-hidden
                >
                  {lesson.icon}
                </span>
                <span className="min-w-0 flex-1 space-y-1.5">
                  <span className="block leading-tight font-bold text-slate-900">{lesson.title}</span>
                  <span className="block text-sm text-slate-500">
                    {lesson.subtitle} · {lesson.exercises.length} Karten
                  </span>
                  <ProgressBar
                    value={best}
                    size="sm"
                    color={best >= 90 ? 'amber' : 'indigo'}
                    label={`Bestwert ${lesson.title}`}
                  />
                  <span className="block text-xs font-semibold text-slate-400">{status}</span>
                </span>
                <span className="text-xl text-slate-300" aria-hidden>
                  ›
                </span>
              </button>
            )
          })}
        </section>

        {/* Tipp des Tages */}
        <section className="rounded-2xl bg-amber-50 p-4 text-amber-900">
          <p className="text-sm font-bold">💡 Tipp des Tages</p>
          <p className="mt-1">{tip}</p>
        </section>

        <footer className="pt-2 text-center text-xs text-slate-400">
          <p>Fortschritt wird nur lokal in diesem Browser gespeichert.</p>
          <button
            type="button"
            onClick={() => {
              if (window.confirm('Wirklich den gesamten Fortschritt (Streak, XP, Bestwerte, Fehler) löschen?')) onReset()
            }}
            className="mt-2 rounded-lg px-3 py-2 font-semibold underline hover:text-rose-500"
          >
            Fortschritt zurücksetzen
          </button>
        </footer>
      </main>
    </div>
  )
}

function MiniStat({ value, label }: { value: number | string; label: string }) {
  return (
    <div className="rounded-xl bg-white/15 px-2 py-2">
      <div className="text-lg font-extrabold tabular-nums">{value}</div>
      <div className="text-[11px] font-semibold uppercase tracking-wide text-indigo-100">{label}</div>
    </div>
  )
}
