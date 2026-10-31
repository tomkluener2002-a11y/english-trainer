import { speak, speechSupported } from '../lib/speech'

interface Props {
  text: string
  slow?: boolean
  size?: 'sm' | 'lg'
  label?: string
  className?: string
}

/** Lautsprecher-Button, liest englischen Text über die Web Speech API vor. */
export function SpeakButton({ text, slow, size = 'sm', label, className = '' }: Props) {
  if (!speechSupported) return null

  if (size === 'lg') {
    return (
      <button
        type="button"
        onClick={() => speak(text, { slow })}
        className={`flex flex-col items-center justify-center gap-1 rounded-3xl bg-sky-500 text-white shadow-[0_5px_0_0_rgb(2,132,199)] transition active:translate-y-1 active:shadow-none ${
          slow ? 'size-20 text-3xl' : 'size-28 text-5xl'
        } ${className}`}
        aria-label={label ?? (slow ? 'Langsam vorlesen' : 'Vorlesen')}
      >
        <span aria-hidden>{slow ? '🐢' : '🔊'}</span>
        {label && <span className="text-xs font-semibold">{label}</span>}
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation()
        speak(text, { slow })
      }}
      className={`inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-lg text-sky-700 transition hover:bg-sky-200 active:scale-95 ${className}`}
      aria-label={label ?? 'Vorlesen'}
      title={label ?? 'Vorlesen'}
    >
      🔊
    </button>
  )
}
