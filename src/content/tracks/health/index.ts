import { plannedUnit } from '../../helpers'
import type { Track } from '../../schema'

export const healthTrack: Track = {
  id: 'health',
  kind: 'specialization',
  title: 'Gesundheit',
  subtitle: 'Arzt, Apotheke, Wohlbefinden',
  description: 'Beschwerden beschreiben, beim Arzt verstehen und in der Apotheke das Richtige bekommen.',
  icon: '🩺',
  color: 'red',
  minCefr: 'A2',
  interests: ['health', 'travel'],
  pitch: 'Gesundheit',
  sample: { en: 'I have had a sore throat since Monday.', de: 'Ich habe seit Montag Halsschmerzen.' },
  followUp: {
    question: 'Wofür brauchst du es?',
    options: [
      { id: 'patient', label: 'Als Patient:in', emoji: '🤒' },
      { id: 'work', label: 'Beruflich (Pflege/Medizin)', emoji: '🏥' },
      { id: 'fitness', label: 'Sport & Fitness', emoji: '🏃' },
    ],
  },
  units: [
    plannedUnit({ id: 'health.u1', title: 'Der Körper', description: 'Körperteile und Beschwerden benennen.', cefr: 'A2', color: 'red', icon: '🫀', topics: ['Körperteile', 'Schmerzen', 'Symptome', 'Wie geht es dir?'] }),
    plannedUnit({ id: 'health.u2', title: 'Beim Arzt', description: 'Termin machen und Fragen verstehen.', cefr: 'A2', color: 'blue', icon: '👩‍⚕️', topics: ['Termin', 'Anamnese', 'Untersuchung', 'Diagnose verstehen'] }),
    plannedUnit({ id: 'health.u3', title: 'Apotheke', description: 'Medikamente und Dosierung verstehen.', cefr: 'B1', color: 'green', icon: '💊', topics: ['Rezeptfrei', 'Dosierung', 'Nebenwirkungen', 'Allergien'] }),
    plannedUnit({ id: 'health.u4', title: 'Fit & gesund', description: 'Über Sport, Schlaf und Ernährung sprechen.', cefr: 'B1', color: 'teal', icon: '🥗', topics: ['Sport', 'Schlaf', 'Ernährung', 'Stress'] }),
  ],
}
