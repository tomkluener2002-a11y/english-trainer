import { useEffect, useLayoutEffect, useRef, useState } from 'react'

/** Zählt sanft von 0 auf `target` hoch (sofort bei prefers-reduced-motion). */
export function useCountUp(target: number, duration = 900, delay = 0): number {
  const [v, setV] = useState(0)
  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    let raf = 0
    let start = 0
    const t = window.setTimeout(
      () => {
        if (reduce) return setV(target)
        const step = (ts: number) => {
          if (!start) start = ts
          const p = Math.min(1, (ts - start) / duration)
          setV(Math.round(target * (1 - Math.pow(1 - p, 3))))
          if (p < 1) raf = requestAnimationFrame(step)
        }
        raf = requestAnimationFrame(step)
      },
      reduce ? 0 : delay,
    )
    return () => {
      window.clearTimeout(t)
      cancelAnimationFrame(raf)
    }
  }, [target, duration, delay])
  return v
}

/** Immer aktuelle Callback-Referenz für Event-Listener. */
export function useLatest<T>(value: T) {
  const ref = useRef(value)
  useLayoutEffect(() => {
    ref.current = value
  })
  return ref
}

/** Tastenkürzel 1–9 für Auswahl-Aufgaben (nicht in Eingabefeldern). */
export function useNumberKeys(count: number, onPick: (i: number) => void, enabled: boolean) {
  const cb = useLatest(onPick)
  useEffect(() => {
    if (!enabled) return
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement
      if (t?.tagName === 'INPUT' || t?.tagName === 'TEXTAREA') return
      const n = Number(e.key)
      if (n >= 1 && n <= count) {
        e.preventDefault()
        cb.current(n - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [count, enabled, cb])
}
