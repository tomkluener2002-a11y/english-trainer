/** Empfehlung für „WEITER LERNEN“ und sichtbare Tracks (Basiskurs + gewählte Spezialisierungen). */
import { useMemo } from 'react'
import { core, trackById, tracks } from '../content'
import type { Track } from '../content/schema'
import { dayKey } from '../lib/date'
import { type Recommendation, recommend } from '../lib/progress'
import { setActiveTrack } from '../state/actions'
import { useAppState, useNow } from '../state/store'
import { navigate } from './router'

const PRACTICED_KEY = 'english-trainer:practiced'

export function visibleTracks(chosen: string[]): Track[] {
  return [core, ...chosen.map((id) => trackById.get(id)).filter((t): t is Track => !!t)]
}

/** Merkt sich (pro Browser-Sitzung), dass heute schon geübt wurde – volle Fehlerkiste drängelt dann nicht mehr. */
export function markPracticedToday() {
  try {
    sessionStorage.setItem(PRACTICED_KEY, dayKey())
  } catch {
    /* privat/gesperrt – egal */
  }
}

function practicedToday() {
  try {
    return sessionStorage.getItem(PRACTICED_KEY) === dayKey()
  } catch {
    return false
  }
}

export function useRecommendation(): Recommendation {
  const s = useAppState()
  const now = useNow()
  return useMemo(() => recommend(s, tracks, { now, practicedToday: practicedToday() }), [s, now])
}

export function startRecommendation(rec: Recommendation) {
  switch (rec.kind) {
    case 'lesson':
      setActiveTrack(rec.trackId)
      navigate(`/lesson/${rec.lessonId}`)
      break
    case 'practice':
      navigate(`/session/${rec.mode}`)
      break
    case 'fork':
      navigate('/fork')
      break
    case 'all-done':
      navigate('/practice')
  }
}
