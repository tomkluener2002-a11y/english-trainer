/** Fisher-Yates-Shuffle, gibt eine neue Liste zurück. */
export function shuffle<T>(items: readonly T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

/** Zufällige Auswahl von `count` Elementen. */
export function sample<T>(items: readonly T[], count: number): T[] {
  return shuffle(items).slice(0, count)
}
