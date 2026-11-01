/** Synthetische Sounds (WebAudio, keine Audiodateien) und Haptik. */
import { onFirstGesture } from '../lib/audioUnlock'
import { getState } from '../state/store'

let ctx: AudioContext | null = null

function prime() {
  try {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!AC) return
    if (!ctx) ctx = new AC()
    if (ctx.state !== 'running') void ctx.resume()
  } catch {
    /* nicht unterstützt */
  }
}
if (typeof window !== 'undefined') onFirstGesture(prime)

function audio(): AudioContext | null {
  if (!getState().settings.sound) return null
  try {
    if (!ctx) {
      const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
      if (!AC) return null
      ctx = new AC()
    }
    if (ctx.state === 'suspended') void ctx.resume()
    return ctx
  } catch {
    return null
  }
}

function tone(freq: number, start: number, dur: number, opts: { type?: OscillatorType; gain?: number; slideTo?: number } = {}) {
  const c = audio()
  if (!c) return
  const t0 = c.currentTime + start
  const osc = c.createOscillator()
  const g = c.createGain()
  osc.type = opts.type ?? 'sine'
  osc.frequency.setValueAtTime(freq, t0)
  if (opts.slideTo) osc.frequency.exponentialRampToValueAtTime(opts.slideTo, t0 + dur)
  const peak = opts.gain ?? 0.18
  g.gain.setValueAtTime(0.0001, t0)
  g.gain.exponentialRampToValueAtTime(peak, t0 + 0.015)
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur)
  osc.connect(g).connect(c.destination)
  osc.start(t0)
  osc.stop(t0 + dur + 0.05)
}

function vibrate(pattern: number | number[]) {
  if (!getState().settings.haptics) return
  try {
    navigator.vibrate?.(pattern)
  } catch {
    /* nicht unterstützt */
  }
}

export const sfx = {
  /** Für den Ton-Test im Profil: ignoriert den Sound-Schalter nicht, startet aber den Kontext neu. */
  prime,
  click() {
    tone(660, 0, 0.06, { type: 'triangle', gain: 0.07 })
    vibrate(8)
  },
  correct() {
    tone(784, 0, 0.12, { type: 'triangle', gain: 0.16 })
    tone(1175, 0.09, 0.22, { type: 'triangle', gain: 0.16 })
    vibrate(20)
  },
  wrong() {
    tone(220, 0, 0.18, { type: 'square', gain: 0.06, slideTo: 170 })
    tone(165, 0.14, 0.24, { type: 'square', gain: 0.06, slideTo: 120 })
    vibrate([40, 40, 40])
  },
  heart() {
    tone(520, 0, 0.12, { type: 'sine', gain: 0.12, slideTo: 260 })
  },
  complete() {
    const notes = [523, 659, 784, 1047]
    notes.forEach((n, i) => tone(n, i * 0.11, 0.25, { type: 'triangle', gain: 0.15 }))
    tone(1319, 0.48, 0.5, { type: 'sine', gain: 0.12 })
    vibrate([30, 60, 30, 60, 80])
  },
  reward() {
    tone(988, 0, 0.1, { type: 'sine', gain: 0.12 })
    tone(1319, 0.08, 0.16, { type: 'sine', gain: 0.12 })
    tone(1760, 0.16, 0.24, { type: 'sine', gain: 0.1 })
    vibrate(25)
  },
}
