/**
 * Zentraler App-Store: unveränderliche Zustands-Snapshots, localStorage-Persistenz,
 * Versionierung/Migration und ein React-Hook (useSyncExternalStore).
 */
import { useSyncExternalStore } from 'react'
import { dayKey } from '../lib/date'
import { MAX_HEARTS } from '../lib/hearts'
import { generateQuests } from '../lib/quests'
import { emptyStreak } from '../lib/streak'
import { type AppState, STATE_VERSION } from './types'

export const STORAGE_KEY = 'english-trainer:v2'
/** Schlüssel älterer App-Versionen – werden beim Start entfernt. */
const LEGACY_KEYS = ['english-trainer:progress:v1']

export function defaultState(now = Date.now()): AppState {
  const today = dayKey(now)
  return {
    version: STATE_VERSION,
    profile: { name: '', reason: null, interests: [], dailyGoal: 20, onboarded: false, createdAt: now },
    placement: { done: false, level: null, at: null },
    lessons: {},
    testedOut: [],
    chests: [],
    unitReviews: [],
    tracks: { chosen: [], active: 'core', forksSeen: [], focus: {} },
    hearts: { count: MAX_HEARTS, updatedAt: now },
    gems: 200,
    xp: { total: 0, byDay: {} },
    streak: emptyStreak(),
    quests: { day: today, items: generateQuests(today, 20) },
    stats: { lessons: 0, perfect: 0, practice: 0, listening: 0, bestCombo: 0, timeMs: 0, lessonsByDay: {}, night: 0, early: 0, mistakesFixed: 0 },
    achievements: {},
    srs: {},
    mistakes: {},
    settings: { sound: true, haptics: true, hearts: true, speakingOffUntil: 0, listeningOffUntil: 0 },
  }
}

const isObj = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v)

/** Füllt fehlende Felder mit Defaults auf (eine Ebene tief für verschachtelte Objekte). */
function mergeDefaults<T extends Record<string, unknown>>(defaults: T, data: Record<string, unknown>): T {
  const out: Record<string, unknown> = { ...defaults }
  for (const key of Object.keys(defaults)) {
    const d = defaults[key]
    const v = data[key]
    if (v === undefined || v === null) continue
    if (isObj(d) && isObj(v) && !Array.isArray(d)) {
      // Record-artige Felder (lessons, srs …) haben leere Defaults → komplett übernehmen
      out[key] = Object.keys(d).length ? { ...d, ...v } : v
    } else if (Array.isArray(d) === Array.isArray(v) && typeof d === typeof v) out[key] = v
  }
  return out as T
}

/**
 * Lädt einen gespeicherten Zustand. Unbekannte oder ältere Versionen werden sauber
 * zurückgesetzt (alter Fortschritt darf verloren gehen, aber nichts crasht).
 */
export function migrate(raw: unknown, now = Date.now()): AppState {
  const fresh = defaultState(now)
  if (!isObj(raw) || raw.version !== STATE_VERSION) return fresh
  try {
    const merged = mergeDefaults(fresh as unknown as Record<string, unknown>, raw) as unknown as AppState
    merged.version = STATE_VERSION
    return merged
  } catch {
    return fresh
  }
}

function load(): AppState {
  if (typeof localStorage === 'undefined') return defaultState()
  try {
    for (const k of LEGACY_KEYS) localStorage.removeItem(k)
    const raw = localStorage.getItem(STORAGE_KEY)
    return ensureDaily(migrate(raw ? JSON.parse(raw) : null))
  } catch {
    return defaultState()
  }
}

/** Tageswechsel: neue Quests erzeugen. */
export function ensureDaily(s: AppState, now = Date.now()): AppState {
  const today = dayKey(now)
  if (s.quests.day === today) return s
  return { ...s, quests: { day: today, items: generateQuests(today, s.profile.dailyGoal) } }
}

let state: AppState = load()
const listeners = new Set<() => void>()

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    /* Speicher voll oder privat – App läuft trotzdem weiter */
  }
}

export function getState(): AppState {
  return state
}

/** Zustand ändern. Der Rezept-Callback bekommt eine tiefe Kopie und darf sie direkt verändern. */
export function setState(recipe: (draft: AppState) => void | AppState): void {
  const draft = structuredClone(state)
  const result = recipe(draft)
  state = result ?? draft
  persist()
  listeners.forEach((l) => l())
}

export function replaceState(next: AppState): void {
  state = next
  persist()
  listeners.forEach((l) => l())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

if (typeof window !== 'undefined') {
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) {
      state = load()
      listeners.forEach((l) => l())
    }
  })
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      const next = ensureDaily(state)
      if (next !== state) replaceState(next)
    }
  })
}

export function useAppState(): AppState {
  return useSyncExternalStore(subscribe, getState, getState)
}

/** Sekündlich/minütlich aktualisierte Uhrzeit für Herz-Regeneration usw. */
let nowValue = Date.now()
const clockListeners = new Set<() => void>()
if (typeof window !== 'undefined') {
  window.setInterval(() => {
    nowValue = Date.now()
    clockListeners.forEach((l) => l())
  }, 15_000)
}
export function useNow(): number {
  return useSyncExternalStore(
    (l) => {
      clockListeners.add(l)
      return () => clockListeners.delete(l)
    },
    () => nowValue,
    () => nowValue,
  )
}
