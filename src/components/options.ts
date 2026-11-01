/** Auswahloptionen aus dem Onboarding (auch im Profil und in der Weggabelung genutzt). */
import type { InterestId } from '../content/schema'
import type { Reason } from '../state/types'

export const REASONS: { id: Reason; label: string; emoji: string }[] = [
  { id: 'career', label: 'Für Beruf & Karriere', emoji: '💼' },
  { id: 'travel', label: 'Für Reisen', emoji: '✈️' },
  { id: 'study', label: 'Für Schule & Studium', emoji: '🎓' },
  { id: 'social', label: 'Um mit Menschen zu sprechen', emoji: '💬' },
  { id: 'curious', label: 'Einfach aus Spaß', emoji: '🎉' },
]

export const INTERESTS: { id: InterestId; label: string; emoji: string }[] = [
  { id: 'business', label: 'Business & Finanzen', emoji: '📊' },
  { id: 'tech', label: 'Technik & IT', emoji: '💻' },
  { id: 'travel', label: 'Reisen', emoji: '🌍' },
  { id: 'career', label: 'Karriere & Bewerbung', emoji: '🚀' },
  { id: 'everyday', label: 'Alltag & Smalltalk', emoji: '☕' },
  { id: 'health', label: 'Gesundheit', emoji: '🩺' },
  { id: 'creative', label: 'Kreatives & Kultur', emoji: '🎨' },
]
