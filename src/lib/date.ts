/** Datums-Helfer. Tage werden als lokale Schlüssel "YYYY-MM-DD" gespeichert. */

export const MINUTE = 60_000
export const HOUR = 60 * MINUTE
export const DAY = 24 * HOUR

export function dayKey(d: Date | number = new Date()): string {
  const date = typeof d === 'number' ? new Date(d) : d
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${date.getFullYear()}-${m}-${day}`
}

/** Mittags-Zeitstempel eines Tagesschlüssels (robust gegen Sommerzeit). */
export function parseDay(key: string): Date {
  const [y, m, d] = key.split('-').map(Number)
  return new Date(y, m - 1, d, 12)
}

/** Ganze Kalendertage von a nach b (b später → positiv). */
export function daysBetween(a: string, b: string): number {
  return Math.round((parseDay(b).getTime() - parseDay(a).getTime()) / DAY)
}

export function addDays(key: string, n: number): string {
  const d = parseDay(key)
  d.setDate(d.getDate() + n)
  return dayKey(d)
}

/** Die letzten n Tage bis einschließlich `today`, ältester zuerst. */
export function lastDays(today: string, n: number): string[] {
  return Array.from({ length: n }, (_, i) => addDays(today, i - n + 1))
}

const WEEKDAYS = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
export function weekdayShort(key: string): string {
  return WEEKDAYS[parseDay(key).getDay()]
}

export function formatDuration(ms: number): string {
  const s = Math.max(0, Math.round(ms / 1000))
  const m = Math.floor(s / 60)
  return `${m}:${String(s % 60).padStart(2, '0')}`
}
