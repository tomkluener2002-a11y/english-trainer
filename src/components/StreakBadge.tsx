interface Props {
  streak: number
  practicedToday: boolean
}

export function StreakBadge({ streak, practicedToday }: Props) {
  const active = streak > 0
  return (
    <div
      className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-base font-bold ${
        active && practicedToday
          ? 'bg-orange-100 text-orange-600'
          : active
            ? 'bg-orange-50 text-orange-400'
            : 'bg-slate-100 text-slate-400'
      }`}
      title={
        practicedToday
          ? `${streak} ${streak === 1 ? 'Tag' : 'Tage'} in Folge geübt`
          : active
            ? 'Heute noch üben, um den Streak zu halten!'
            : 'Noch kein Streak – starte heute!'
      }
    >
      <span className={active ? '' : 'grayscale'} aria-hidden>
        🔥
      </span>
      <span>{streak}</span>
      <span className="sr-only">Tage in Folge</span>
    </div>
  )
}
