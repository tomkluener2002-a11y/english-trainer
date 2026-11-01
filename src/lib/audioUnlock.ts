/**
 * iOS/Safari erlauben Audio und Sprachausgabe erst nach einer Nutzergeste und blenden WebAudio
 * bei aktivem Stumm-Schalter aus. Beim ersten Tippen wird deshalb alles freigeschaltet:
 * Audio-Sitzung auf "playback", WebAudio-Kontext starten, Sprachausgabe einmal lautlos anstoßen.
 */
import { speechSupported } from './speech'

type Unlocker = () => void
const listeners = new Set<Unlocker>()
let unlocked = false

/** Registriert Aktionen, die bei der ersten Nutzergeste laufen (z.B. WebAudio-Kontext starten). */
export function onFirstGesture(fn: Unlocker): void {
  if (unlocked) fn()
  else listeners.add(fn)
}

// Winzige stille WAV-Datei (≈ 0,1 s) – hält die Audio-Sitzung auf "Wiedergabe".
const SILENT_WAV = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAABErAAABAAgAZGF0YQAAAAA='

function unlock() {
  if (unlocked) return
  unlocked = true
  try {
    const nav = navigator as Navigator & { audioSession?: { type: string } }
    if (nav.audioSession) nav.audioSession.type = 'playback'
  } catch {
    /* nicht unterstützt */
  }
  try {
    const el = new Audio(SILENT_WAV)
    el.setAttribute('playsinline', '')
    el.volume = 0.01
    void el.play().catch(() => undefined)
  } catch {
    /* nicht unterstützt */
  }
  if (speechSupported) {
    try {
      const u = new SpeechSynthesisUtterance(' ')
      u.volume = 0
      window.speechSynthesis.speak(u)
    } catch {
      /* nicht unterstützt */
    }
  }
  listeners.forEach((fn) => fn())
  listeners.clear()
  window.removeEventListener('pointerdown', unlock, true)
  window.removeEventListener('touchend', unlock, true)
  window.removeEventListener('keydown', unlock, true)
}

export function installAudioUnlock(): void {
  if (typeof window === 'undefined') return
  window.addEventListener('pointerdown', unlock, true)
  window.addEventListener('touchend', unlock, true)
  window.addEventListener('keydown', unlock, true)
}
