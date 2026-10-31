/** Sprachausgabe über die kostenlose Web Speech API (window.speechSynthesis). */

export const speechSupported = typeof window !== 'undefined' && 'speechSynthesis' in window

let cachedVoice: SpeechSynthesisVoice | null | undefined

/** Bevorzugt britische, dann amerikanische Stimmen – hochwertige ("Enhanced", "Premium", "Google") zuerst. */
function pickVoice(): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith('en'))
  if (!voices.length) return null
  const score = (v: SpeechSynthesisVoice) => {
    let s = 0
    const lang = v.lang.toLowerCase().replace('_', '-')
    if (lang === 'en-gb') s += 30
    else if (lang === 'en-us') s += 20
    if (/premium|enhanced|natural|neural/i.test(v.name)) s += 15
    if (/google|daniel|serena|kate|samantha|arthur|martha/i.test(v.name)) s += 8
    if (v.localService) s += 2
    return s
  }
  return [...voices].sort((a, b) => score(b) - score(a))[0]
}

if (speechSupported) {
  window.speechSynthesis.addEventListener?.('voiceschanged', () => {
    cachedVoice = pickVoice()
  })
}

export function speak(text: string, options: { slow?: boolean } = {}): void {
  if (!speechSupported) return
  const synth = window.speechSynthesis
  if (cachedVoice === undefined) cachedVoice = pickVoice()
  synth.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = cachedVoice?.lang ?? 'en-GB'
  if (cachedVoice) utterance.voice = cachedVoice
  utterance.rate = options.slow ? 0.65 : 0.95
  // Chrome verschluckt gelegentlich Ausgaben direkt nach cancel() – kurze Pause hilft.
  window.setTimeout(() => synth.speak(utterance), 60)
}

export function stopSpeaking(): void {
  if (speechSupported) window.speechSynthesis.cancel()
}
