import { describe, expect, it } from 'vitest'
import { MINUTE } from '../date'
import { MAX_HEARTS, REGEN_MS, currentHearts, gainHearts, loseHeart, normalizeHearts } from '../hearts'

const T0 = 1_800_000_000_000

describe('Herzen', () => {
  it('Maximum ist 5, Regeneration 30 Minuten pro Herz', () => {
    expect(MAX_HEARTS).toBe(5)
    expect(REGEN_MS).toBe(30 * MINUTE)
  })

  it('voll: Verlust senkt um 1 und startet den Timer jetzt', () => {
    const h = loseHeart({ count: 5, updatedAt: T0 - 999_999 }, T0)
    expect(h).toEqual({ count: 4, updatedAt: T0 })
  })

  it('teilweise leer: Verlust ändert den laufenden Timer nicht', () => {
    const h = loseHeart({ count: 3, updatedAt: T0 - 10 * MINUTE }, T0)
    expect(h).toEqual({ count: 2, updatedAt: T0 - 10 * MINUTE })
  })

  it('geht nie unter 0', () => {
    let h = { count: 1, updatedAt: T0 }
    for (let i = 0; i < 5; i++) h = loseHeart(h, T0)
    expect(h.count).toBe(0)
  })

  it('regeneriert 1 Herz pro 30 Minuten und behält den Rest-Fortschritt', () => {
    const n = normalizeHearts({ count: 2, updatedAt: T0 }, T0 + 75 * MINUTE)
    expect(n.count).toBe(4)
    expect(n.updatedAt).toBe(T0 + 60 * MINUTE)
  })

  it('nach 29 Minuten noch kein neues Herz', () => {
    expect(normalizeHearts({ count: 2, updatedAt: T0 }, T0 + 29 * MINUTE).count).toBe(2)
  })

  it('wird nie über das Maximum regeneriert', () => {
    const n = normalizeHearts({ count: 0, updatedAt: T0 }, T0 + 100 * 60 * MINUTE)
    expect(n).toEqual({ count: MAX_HEARTS, updatedAt: T0 + 100 * 60 * MINUTE })
  })

  it('Uhr zurückgestellt: keine negativen Herzen oder Gewinne', () => {
    expect(normalizeHearts({ count: 2, updatedAt: T0 }, T0 - 5 * 60 * MINUTE).count).toBe(2)
  })

  it('currentHearts liefert den Zeitpunkt des nächsten Herzens bzw. null bei vollen Herzen', () => {
    expect(currentHearts({ count: 3, updatedAt: T0 }, T0 + 10 * MINUTE)).toEqual({ count: 3, nextAt: T0 + 30 * MINUTE })
    expect(currentHearts({ count: 5, updatedAt: T0 }, T0)).toEqual({ count: 5, nextAt: null })
  })

  it('Verlust nach teilweiser Regeneration rechnet zuerst die Regeneration ein', () => {
    const h = loseHeart({ count: 1, updatedAt: T0 }, T0 + 35 * MINUTE)
    expect(h.count).toBe(1) // 1 + 1 regeneriert − 1
    expect(h.updatedAt).toBe(T0 + 30 * MINUTE)
  })

  it('gainHearts deckelt beim Maximum', () => {
    expect(gainHearts({ count: 3, updatedAt: T0 }, 10, T0).count).toBe(MAX_HEARTS)
    expect(gainHearts({ count: 1, updatedAt: T0 }, 2, T0).count).toBe(3)
  })
})
