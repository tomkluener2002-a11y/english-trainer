interface Props {
  /** 0–100 */
  value: number
  color?: 'indigo' | 'emerald' | 'amber'
  size?: 'sm' | 'md'
  label?: string
}

const colors = {
  indigo: 'bg-indigo-500',
  emerald: 'bg-emerald-500',
  amber: 'bg-amber-400',
}

export function ProgressBar({ value, color = 'indigo', size = 'md', label }: Props) {
  const pct = Math.max(0, Math.min(100, value))
  return (
    <div
      className={`w-full overflow-hidden rounded-full bg-slate-200 ${size === 'sm' ? 'h-2' : 'h-3.5'}`}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pct)}
      aria-label={label}
    >
      <div
        className={`h-full rounded-full transition-[width] duration-500 ease-out ${colors[color]}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}
