/** Abschluss-Screen: Konfetti, XP-Zähler, Genauigkeit, Zeit, Streak-Update, Erfolge. */
import { type ReactNode, useState } from 'react'
import { dayKey, formatDuration, lastDays, weekdayShort } from '../lib/date'
import { QUEST_ICON, questLabel } from '../lib/quests'
import type { SessionSummary } from '../state/actions'
import { useAppState } from '../state/store'
import { Confetti } from './Confetti'
import { BoltIcon, CheckIcon, FlameIcon, GemIcon, HeartIcon } from './Icons'
import { Mascot } from './Mascot'
import type { SessionSpec } from './sessions'
import { pal } from './theme'
import { useCountUp } from './hooks'
import { ProgressBar } from './ui'

type Page = 'stats' | 'streak' | 'rewards'

export function Celebrate({ spec, summary, onDone }: { spec: SessionSpec; summary: SessionSummary; onDone: () => void }) {
  const pages: Page[] = ['stats']
  if (summary.streakExtended || summary.goalReachedNow) pages.push('streak')
  if (summary.achievements.length || summary.questsCompleted.length) pages.push('rewards')
  const [i, setI] = useState(0)
  const page = pages[i]
  const next = () => (i + 1 < pages.length ? setI(i + 1) : onDone())

  return (
    <div className="safe-top pb-safe-4 flex min-h-dvh flex-col bg-white">
      <div className="mx-auto flex w-full max-w-[480px] flex-1 flex-col items-center justify-center px-5 text-center" key={page}>
        {page === 'stats' && <StatsPage spec={spec} summary={summary} />}
        {page === 'streak' && <StreakPage summary={summary} />}
        {page === 'rewards' && <RewardsPage summary={summary} />}
      </div>
      <div className="mx-auto w-full max-w-[480px] px-4 pt-3">
        <button className="btn w-full" onClick={next} autoFocus>
          Weiter
        </button>
      </div>
    </div>
  )
}

function StatCard({ label, color, icon, value, delay }: { label: string; color: string; icon: ReactNode; value: string; delay: number }) {
  return (
    <div className="flex-1 animate-pop overflow-hidden rounded-2xl border-2" style={{ borderColor: color, background: color, animationDelay: `${delay}ms`, animationFillMode: 'both' }}>
      <div className="py-1 text-[11px] font-black tracking-wider text-white uppercase">{label}</div>
      <div className="m-[2px] mt-0 flex items-center justify-center gap-1.5 rounded-[13px] bg-white py-3 text-xl font-black" style={{ color }}>
        {icon}
        {value}
      </div>
    </div>
  )
}

function StatsPage({ spec, summary }: { spec: SessionSpec; summary: SessionSummary }) {
  const xp = useCountUp(summary.xp, 900, 350)
  const acc = useCountUp(summary.accuracy, 900, 500)
  const title =
    spec.kind === 'unit-review' ? 'Unit gemeistert!' : spec.kind === 'practice' ? 'Übung geschafft!' : summary.perfect ? 'Perfekte Lektion!' : 'Lektion geschafft!'
  return (
    <>
      <Confetti />
      <Mascot mood="celebrate" size={170} />
      <h1 className="mt-4 text-[30px] leading-tight font-black" style={{ color: summary.perfect ? '#FFC800' : '#58CC02' }}>
        {title}
      </h1>
      <p className="mt-1 text-[17px] text-ink-soft">{summary.perfect ? 'Keine Fehler – du bist großartig!' : `„${spec.title}“ ist erledigt. Weiter so!`}</p>
      <div className="mt-8 flex w-full gap-3">
        <StatCard label="XP gesamt" color="#FFC800" icon={<BoltIcon size={22} />} value={`${xp}`} delay={100} />
        <StatCard label={summary.accuracy >= 90 ? 'Stark' : 'Genauigkeit'} color="#58CC02" icon={<span aria-hidden="true">🎯</span>} value={`${acc}%`} delay={250} />
        <StatCard label="Zeit" color="#1CB0F6" icon={<span aria-hidden="true">⏱️</span>} value={formatDuration(summary.durationMs)} delay={400} />
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-[17px] font-extrabold">
        <span className="flex items-center gap-1 text-sky-dark">
          <GemIcon size={22} /> +{summary.gems}
        </span>
        {summary.heartsGained > 0 && (
          <span className="flex items-center gap-1 text-cardinal">
            <HeartIcon size={22} /> +{summary.heartsGained}
          </span>
        )}
      </div>
    </>
  )
}

function StreakPage({ summary }: { summary: SessionSummary }) {
  const s = useAppState()
  const n = useCountUp(summary.streak, 700, 200)
  const today = dayKey()
  const days = lastDays(today, 7)
  const active = new Set([...s.streak.activeDays, ...s.streak.frozenDays])
  return (
    <>
      {summary.streakExtended ? (
        <>
          <div className="relative animate-pop">
            <FlameIcon size={150} />
          </div>
          <div className="-mt-2 text-[64px] leading-none font-black text-fox">{n}</div>
          <h1 className="mt-1 text-[26px] font-black text-fox">{summary.streak === 1 ? 'Tag Streak!' : 'Tage Streak!'}</h1>
          <p className="mt-2 text-ink-soft">
            {summary.usedFreezes > 0 ? `Dein Streak-Freeze hat deinen Streak gerettet!` : summary.streak === 1 ? 'Der erste Tag ist geschafft. Komm morgen wieder!' : 'Lerne jeden Tag, damit er weiterwächst.'}
          </p>
          <div className="mt-6 flex w-full justify-between rounded-2xl border-2 border-line p-4">
            {days.map((d) => {
              const on = active.has(d)
              return (
                <div key={d} className="flex flex-col items-center gap-1.5">
                  <span className={`text-sm font-extrabold ${d === today ? 'text-fox' : 'text-mute'}`}>{weekdayShort(d)}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full" style={{ background: on ? '#FF9600' : '#E5E5E5' }}>
                    {on && <CheckIcon size={18} color="#fff" />}
                  </span>
                </div>
              )
            })}
          </div>
        </>
      ) : (
        <Mascot mood="happy" size={150} />
      )}
      <div className="mt-6 w-full rounded-2xl border-2 border-line p-4 text-left">
        <div className="mb-2 flex items-center justify-between font-extrabold">
          <span>{summary.goalReachedNow ? '🎉 Tagesziel erreicht!' : 'Tagesziel'}</span>
          <span className="text-mute">
            {Math.min(summary.xpToday, summary.dailyGoal)}/{summary.dailyGoal} XP
          </span>
        </div>
        <ProgressBar value={summary.xpToday / summary.dailyGoal} color="#FFC800" label="Tagesziel" />
      </div>
    </>
  )
}

function RewardsPage({ summary }: { summary: SessionSummary }) {
  return (
    <>
      <Mascot mood="happy" size={130} />
      <h1 className="mt-3 text-[26px] font-black">Neue Belohnungen!</h1>
      <div className="mt-5 flex w-full flex-col gap-3 text-left">
        {summary.achievements.map((a) => (
          <div key={a.id} className="flex animate-pop items-center gap-4 rounded-2xl border-2 border-line p-3">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-3xl" style={{ background: pal(a.color).light }}>
              {a.icon}
            </span>
            <div>
              <div className="text-xs font-black tracking-wider text-beetle-dark uppercase">Erfolg freigeschaltet</div>
              <div className="text-lg font-black">{a.title}</div>
              <div className="text-sm text-ink-soft">{a.description}</div>
            </div>
          </div>
        ))}
        {summary.questsCompleted.map((q) => (
          <div key={q.id} className="flex animate-pop items-center gap-4 rounded-2xl border-2 border-line p-3">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-bee/20 text-3xl">{QUEST_ICON[q.kind]}</span>
            <div>
              <div className="text-xs font-black tracking-wider text-fox uppercase">Quest erfüllt</div>
              <div className="text-lg font-black">{questLabel(q)}</div>
              <div className="text-sm text-ink-soft">Hol dir deine Belohnung im Quests-Tab.</div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
