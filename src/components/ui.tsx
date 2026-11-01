/** Kleine, wiederverwendbare UI-Bausteine. */
import { type ReactNode, useEffect, useRef } from 'react'
import { speak, speechSupported } from '../lib/speech'
import { SpeakerIcon, TurtleIcon, XIcon } from './Icons'
import { sfx } from './sfx'

export function ProgressBar({ value, color = '#58CC02', height = 16, label }: { value: number; color?: string; height?: number; label?: string }) {
  const pct = Math.round(Math.max(0, Math.min(1, value)) * 100)
  return (
    <div
      className="relative w-full overflow-hidden rounded-full bg-line"
      style={{ height }}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={pct}
      aria-label={label ?? 'Fortschritt'}
    >
      <div
        className="relative h-full rounded-full transition-[width] duration-500 ease-out"
        style={{ width: `${Math.max(pct, pct > 0 ? 6 : 0)}%`, background: color }}
      >
        <div className="absolute top-[22%] right-2 left-2 h-[26%] rounded-full bg-white/30" />
      </div>
    </div>
  )
}

/** Zentrierter Dialog mit Overlay. */
export function Modal({ open, onClose, children, label }: { open: boolean; onClose?: () => void; children: ReactNode; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!open) return
    const prev = document.activeElement as HTMLElement | null
    ref.current?.querySelector<HTMLElement>('button, [href], input')?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose?.()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      prev?.focus?.()
    }
  }, [open, onClose])
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/45 p-4 sm:items-center" onClick={onClose} role="presentation">
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className="pb-safe-4 w-full max-w-[420px] animate-slide-up rounded-3xl bg-white p-6 sm:animate-pop"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

/** Bottom-Sheet für Infos (z.B. Unit-Tipps). */
export function Sheet({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/45 animate-fade-in" onClick={onClose} role="presentation">
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="pb-safe-4 flex max-h-[85dvh] w-full max-w-[520px] animate-slide-up flex-col rounded-t-3xl bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b-2 border-line px-5 py-4">
          <h2 className="text-xl font-extrabold">{title}</h2>
          <button onClick={onClose} className="rounded-xl p-2 text-mute hover:bg-snow" aria-label="Schließen">
            <XIcon size={22} />
          </button>
        </div>
        <div className="overflow-y-auto px-5 py-4">{children}</div>
      </div>
    </div>
  )
}

/** Großer blauer Lautsprecher-Button (+ optional Schildkröte für langsam). */
export function AudioButtons({ text, size = 'lg', autoPlay = false, slow = true }: { text: string; size?: 'lg' | 'sm'; autoPlay?: boolean; slow?: boolean }) {
  useEffect(() => {
    if (autoPlay) {
      const t = window.setTimeout(() => speak(text), 250)
      return () => window.clearTimeout(t)
    }
  }, [text, autoPlay])
  if (size === 'sm') {
    return (
      <button
        type="button"
        onClick={() => speak(text)}
        className="btn btn-blue h-10 min-h-0 w-10 shrink-0 rounded-xl p-0"
        aria-label="Vorlesen"
        disabled={!speechSupported}
      >
        <SpeakerIcon size={20} />
      </button>
    )
  }
  return (
    <div className="flex items-end justify-center gap-4">
      <button
        type="button"
        onClick={() => speak(text)}
        className="btn btn-blue h-24 w-24 rounded-3xl p-0"
        aria-label="Anhören"
        disabled={!speechSupported}
      >
        <SpeakerIcon size={44} />
      </button>
      {slow && (
        <button
          type="button"
          onClick={() => speak(text, { slow: true })}
          className="btn btn-white h-16 w-16 rounded-2xl p-0"
          aria-label="Langsam anhören"
          disabled={!speechSupported}
        >
          <TurtleIcon size={34} />
        </button>
      )}
    </div>
  )
}

/** Auswahl-Chip (Onboarding, Rückfragen). */
export function Chip({ selected, onClick, children, emoji }: { selected: boolean; onClick: () => void; children: ReactNode; emoji?: string }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      data-state={selected ? 'selected' : undefined}
      onClick={() => {
        sfx.click()
        onClick()
      }}
      className="card3d flex items-center gap-3 px-4 py-3 text-left text-[17px] font-bold"
    >
      {emoji && <span className="text-2xl leading-none">{emoji}</span>}
      <span>{children}</span>
    </button>
  )
}
