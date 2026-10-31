import { plannedUnit } from '../../helpers'
import type { Track } from '../../schema'

export const careerTrack: Track = {
  id: 'career',
  kind: 'specialization',
  title: 'Karriere & Bewerbung',
  subtitle: 'Lebenslauf, Interview, Gehalt',
  description: 'Überzeugend bewerben: Lebenslauf, Anschreiben, Vorstellungsgespräch und Gehaltsverhandlung auf Englisch.',
  icon: '💼',
  color: 'orange',
  minCefr: 'A2',
  interests: ['career', 'business'],
  pitch: 'Beruf & Karriere',
  sample: { en: 'I have three years of experience in project management.', de: 'Ich habe drei Jahre Erfahrung im Projektmanagement.' },
  followUp: {
    question: 'Was steht bei dir an?',
    options: [
      { id: 'apply', label: 'Bewerbung schreiben', emoji: '📝' },
      { id: 'interview', label: 'Vorstellungsgespräch', emoji: '🤝' },
      { id: 'grow', label: 'Im Job wachsen', emoji: '📈' },
    ],
  },
  units: [
    plannedUnit({ id: 'career.u1', title: 'Lebenslauf', description: 'Erfahrungen und Fähigkeiten treffend beschreiben.', cefr: 'A2', color: 'orange', icon: '📄', topics: ['Berufserfahrung', 'Ausbildung', 'Skills', 'Action Verbs'] }),
    plannedUnit({ id: 'career.u2', title: 'Anschreiben', description: 'Motivation klar und höflich formulieren.', cefr: 'B1', color: 'yellow', icon: '✉️', topics: ['Einleitung', 'Motivation', 'Stärken', 'Abschluss'] }),
    plannedUnit({ id: 'career.u3', title: 'Vorstellungsgespräch', description: 'Typische Fragen sicher beantworten.', cefr: 'B1', color: 'blue', icon: '🤝', topics: ['Tell me about yourself', 'Stärken & Schwächen', 'Situationsfragen', 'Rückfragen stellen'] }),
    plannedUnit({ id: 'career.u4', title: 'Gehalt & Vertrag', description: 'Verhandeln und Angebote besprechen.', cefr: 'B2', color: 'green', icon: '💶', topics: ['Gehaltswunsch', 'Benefits', 'Gegenangebot', 'Zusage & Absage'] }),
  ],
}
