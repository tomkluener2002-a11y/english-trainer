import { plannedUnit } from '../../helpers'
import type { Track } from '../../schema'
import { unit as u1 } from './u1'
import { unit as u2 } from './u2'

export const treasuryTrack: Track = {
  id: 'treasury',
  kind: 'specialization',
  title: 'Business Finance & Treasury',
  subtitle: 'Liquidität, Banken, Reporting',
  description: 'Fachenglisch für Finanzabteilungen: Treasury-Vokabular, Zahlen sicher sprechen, Bankgespräche, Verhandlungen und Reports.',
  icon: '🏦',
  color: 'blue',
  minCefr: 'B1',
  interests: ['business', 'career'],
  pitch: 'Business & Finance',
  sample: { en: 'We need to hedge the FX risk with a forward contract.', de: 'Wir müssen das Währungsrisiko mit einem Devisentermingeschäft absichern.' },
  followUp: {
    question: 'Worauf sollen wir den Fokus legen?',
    options: [
      { id: 'calls', label: 'Telefonate & E-Mails', emoji: '📞' },
      { id: 'reports', label: 'Präsentationen & Reports', emoji: '📊' },
      { id: 'both', label: 'Beides gleich', emoji: '⚖️' },
    ],
  },
  units: [
    u1,
    u2,
    plannedUnit({
      id: 'treasury.u3',
      title: 'FX & Hedging',
      description: 'Devisengeschäfte und Absicherungsstrategien mit Banken besprechen.',
      cefr: 'B2',
      color: 'purple',
      icon: '💱',
      topics: ['Spot & Forward', 'Optionen', 'Hedge Accounting', 'Marktkommentare'],
    }),
    plannedUnit({
      id: 'treasury.u4',
      title: 'Finanzierung',
      description: 'Kredite, Covenants und Ratings verstehen und verhandeln.',
      cefr: 'B2',
      color: 'orange',
      icon: '📑',
      topics: ['Kreditverträge', 'Covenants', 'Ratings', 'Investor Relations'],
    }),
  ],
}
