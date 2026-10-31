import { plannedUnit } from '../../helpers'
import type { Track } from '../../schema'

export const everydayTrack: Track = {
  id: 'everyday',
  kind: 'specialization',
  title: 'Alltag & Smalltalk',
  subtitle: 'Freunde, Freizeit, Gespräche',
  description: 'Locker ins Gespräch kommen: Smalltalk, Verabredungen, Einkaufen und Telefonieren im Alltag.',
  icon: '☕',
  color: 'pink',
  minCefr: 'A1',
  interests: ['everyday', 'travel', 'creative'],
  pitch: 'Alltag & Freunde',
  sample: { en: 'Do you fancy grabbing a coffee later?', de: 'Hast du Lust, später einen Kaffee zu trinken?' },
  followUp: {
    question: 'Wo willst du vor allem mitreden?',
    options: [
      { id: 'friends', label: 'Mit Freunden', emoji: '🧑‍🤝‍🧑' },
      { id: 'neighbours', label: 'Nachbarn & Alltag', emoji: '🏡' },
      { id: 'online', label: 'Online & Gaming', emoji: '🎮' },
    ],
  },
  units: [
    plannedUnit({ id: 'everyday.u1', title: 'Smalltalk', description: 'Wetter, Wochenende und Gesprächseinstiege.', cefr: 'A1', color: 'pink', icon: '💬', topics: ['Gesprächseinstieg', 'Wetter', 'Wochenende', 'Gespräch beenden'] }),
    plannedUnit({ id: 'everyday.u2', title: 'Verabredungen', description: 'Vorschläge machen, zusagen und absagen.', cefr: 'A2', color: 'yellow', icon: '📆', topics: ['Vorschläge', 'Zusagen', 'Absagen', 'Treffpunkt'] }),
    plannedUnit({ id: 'everyday.u3', title: 'Einkaufen & Dienste', description: 'Im Laden, beim Friseur, bei der Post.', cefr: 'A2', color: 'green', icon: '🛍️', topics: ['Im Laden', 'Umtausch', 'Friseur', 'Post & Paket'] }),
    plannedUnit({ id: 'everyday.u4', title: 'Telefonieren', description: 'Termine machen und Nachrichten hinterlassen.', cefr: 'B1', color: 'blue', icon: '📱', topics: ['Anrufen', 'Mailbox', 'Termine', 'Missverständnisse klären'] }),
  ],
}
