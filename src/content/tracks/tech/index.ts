import { plannedUnit } from '../../helpers'
import type { Track } from '../../schema'

export const techTrack: Track = {
  id: 'tech',
  kind: 'specialization',
  title: 'Technik & IT',
  subtitle: 'Meetings, Code, Support',
  description: 'Englisch für Tech-Teams: Stand-ups, Software beschreiben, Bugs melden und Projekte präsentieren.',
  icon: '💻',
  color: 'purple',
  minCefr: 'A2',
  interests: ['tech', 'career'],
  pitch: 'Technik & IT',
  sample: { en: 'The bug only happens when the cache is empty.', de: 'Der Fehler tritt nur auf, wenn der Cache leer ist.' },
  followUp: {
    question: 'Was machst du eher?',
    options: [
      { id: 'dev', label: 'Entwicklung', emoji: '👩‍💻' },
      { id: 'support', label: 'Support & Betrieb', emoji: '🛠️' },
      { id: 'product', label: 'Produkt & Projekte', emoji: '📋' },
    ],
  },
  units: [
    plannedUnit({ id: 'tech.u1', title: 'Im Team-Meeting', description: 'Stand-ups, Status-Updates und Rückfragen.', cefr: 'A2', color: 'purple', icon: '🧑‍💻', topics: ['Stand-up', 'Status berichten', 'Blocker benennen', 'Nachfragen'] }),
    plannedUnit({ id: 'tech.u2', title: 'Software beschreiben', description: 'Features, Architektur und Abläufe erklären.', cefr: 'B1', color: 'blue', icon: '🧩', topics: ['Features', 'Architektur', 'Abläufe', 'Dokumentation'] }),
    plannedUnit({ id: 'tech.u3', title: 'Bugs & Support', description: 'Fehler melden, reproduzieren und lösen.', cefr: 'B1', color: 'red', icon: '🐞', topics: ['Bug Reports', 'Reproduzieren', 'Tickets', 'Kunden-Support'] }),
    plannedUnit({ id: 'tech.u4', title: 'Projekte präsentieren', description: 'Demos geben und Feedback einholen.', cefr: 'B2', color: 'teal', icon: '🚀', topics: ['Demo', 'Roadmap', 'Feedback', 'Fragen beantworten'] }),
  ],
}
