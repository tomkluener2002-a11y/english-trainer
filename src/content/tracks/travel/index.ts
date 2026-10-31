import { plannedUnit } from '../../helpers'
import type { Track } from '../../schema'
import { unit as u1 } from './u1'

export const travelTrack: Track = {
  id: 'travel',
  kind: 'specialization',
  title: 'Reisen',
  subtitle: 'Flughafen, Hotel, Restaurant',
  description: 'Alles, was du unterwegs brauchst: einchecken, nach dem Weg fragen, bestellen und Probleme freundlich lösen.',
  icon: '✈️',
  color: 'teal',
  minCefr: 'A1',
  interests: ['travel', 'everyday'],
  pitch: 'Reisen',
  sample: { en: 'Could I have a window seat, please?', de: 'Könnte ich bitte einen Fensterplatz bekommen?' },
  followUp: {
    question: 'Wie reist du am liebsten?',
    options: [
      { id: 'city', label: 'Städtereisen', emoji: '🏙️' },
      { id: 'nature', label: 'Natur & Abenteuer', emoji: '🏕️' },
      { id: 'business', label: 'Geschäftsreisen', emoji: '🧳' },
    ],
  },
  units: [
    u1,
    plannedUnit({
      id: 'travel.u2',
      title: 'Essen gehen',
      description: 'Tisch reservieren, bestellen, Allergien erklären und bezahlen.',
      cefr: 'A2',
      color: 'orange',
      icon: '🍽️',
      topics: ['Reservieren', 'Bestellen', 'Allergien & Wünsche', 'Bezahlen & Trinkgeld'],
    }),
    plannedUnit({
      id: 'travel.u3',
      title: 'Sightseeing',
      description: 'Tickets kaufen, Touren buchen und nach dem Weg fragen.',
      cefr: 'A2',
      color: 'purple',
      icon: '🗺️',
      topics: ['Tickets', 'Führungen', 'Nach dem Weg fragen', 'Öffentlicher Verkehr'],
    }),
    plannedUnit({
      id: 'travel.u4',
      title: 'Hilfe & Notfälle',
      description: 'Verlorenes Gepäck, Apotheke und Notfälle souverän meistern.',
      cefr: 'B1',
      color: 'red',
      icon: '🆘',
      topics: ['Verlorenes Gepäck', 'Apotheke', 'Polizei & Notruf', 'Beschwerden'],
    }),
  ],
}
