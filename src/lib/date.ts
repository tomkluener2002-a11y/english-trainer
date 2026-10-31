/** Datums-Helfer auf Basis lokaler Kalendertage im Format YYYY-MM-DD. */

export function dayKey(date: Date = new Date()): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function keyToUtc(key: string): number {
  const [y, m, d] = key.split('-').map(Number)
  return Date.UTC(y, m - 1, d)
}

/** Anzahl Kalendertage von `from` bis `to` (positiv, wenn `to` später ist). */
export function daysBetween(from: string, to: string): number {
  return Math.round((keyToUtc(to) - keyToUtc(from)) / 86_400_000)
}

/** Die letzten `n` Tage inkl. heute, ältester zuerst. */
export function lastDays(n: number, today: Date = new Date()): Date[] {
  return Array.from({ length: n }, (_, i) => {
    const d = new Date(today)
    d.setDate(today.getDate() - (n - 1 - i))
    return d
  })
}

const WEEKDAYS_DE = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']

export function weekdayShort(date: Date): string {
  return WEEKDAYS_DE[date.getDay()]
}
