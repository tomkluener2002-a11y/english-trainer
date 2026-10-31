import type { VocabEntry } from '../../schema'

/** Vokabeln für Core A2 Unit 1 „Unterwegs in der Stadt“. */
export const vocab: VocabEntry[] = [
  // Lektion 1: Orte in der Stadt
  { id: 'core.where-is', en: 'Where is …?', de: 'Wo ist …?', pos: 'phrase', example: 'Where is the station?', exampleDe: 'Wo ist der Bahnhof?', altEn: ['where is'], note: 'Mehrzahl: "Where are …?"' },
  { id: 'core.station', en: 'station', de: 'der Bahnhof', emoji: '🚉', pos: 'noun', example: 'The station is near here.', exampleDe: 'Der Bahnhof ist hier in der Nähe.', altEn: ['train station', 'the station'], altDe: ['Bahnhof', 'die Station'] },
  { id: 'core.post-office', en: 'post office', de: 'die Post', emoji: '🏤', pos: 'noun', example: 'The post office is closed.', exampleDe: 'Die Post ist geschlossen.', altEn: ['the post office'], altDe: ['Post', 'das Postamt', 'Postamt'] },
  { id: 'core.library', en: 'library', de: 'die Bibliothek', emoji: '📚', pos: 'noun', example: 'I read books in the library.', exampleDe: 'Ich lese Bücher in der Bibliothek.', altEn: ['the library'], altDe: ['Bibliothek', 'Bücherei'], note: 'Falscher Freund: library ist die Bibliothek, nicht die "Librarie".' },
  { id: 'core.supermarket', en: 'supermarket', de: 'der Supermarkt', emoji: '🛒', pos: 'noun', example: 'The supermarket is open.', exampleDe: 'Der Supermarkt ist geöffnet.', altEn: ['the supermarket'], altDe: ['Supermarkt'] },
  { id: 'core.hospital', en: 'hospital', de: 'das Krankenhaus', emoji: '🏥', pos: 'noun', example: 'My sister works at the hospital.', exampleDe: 'Meine Schwester arbeitet im Krankenhaus.', altEn: ['the hospital'], altDe: ['Krankenhaus', 'Klinik'] },
  { id: 'core.park', en: 'park', de: 'der Park', emoji: '🌳', pos: 'noun', example: 'We walk in the park.', exampleDe: 'Wir gehen im Park spazieren.', altEn: ['the park'], altDe: ['Park'] },

  // Lektion 2: Der Weg
  { id: 'core.turn-left', en: 'turn left', de: 'links abbiegen', emoji: '⬅️', pos: 'phrase', example: 'Turn left at the corner.', exampleDe: 'Biege an der Ecke links ab.', altDe: ['nach links abbiegen', 'abbiegen nach links'] },
  { id: 'core.turn-right', en: 'turn right', de: 'rechts abbiegen', emoji: '➡️', pos: 'phrase', example: 'Turn right after the bank.', exampleDe: 'Biege hinter der Bank rechts ab.', altDe: ['nach rechts abbiegen', 'abbiegen nach rechts'] },
  { id: 'core.go-straight-on', en: 'go straight on', de: 'geradeaus gehen', emoji: '⬆️', pos: 'phrase', example: 'Go straight on for two minutes.', exampleDe: 'Geh zwei Minuten geradeaus.', altEn: ['go straight', 'go straight ahead'], altDe: ['geradeaus', 'geradeaus weitergehen'] },
  { id: 'core.next-to', en: 'next to', de: 'neben', pos: 'prep', example: 'The park is next to the library.', exampleDe: 'Der Park ist neben der Bibliothek.', altEn: ['beside'], altDe: ['direkt neben'] },
  { id: 'core.opposite', en: 'opposite', de: 'gegenüber', pos: 'prep', example: 'The station is opposite the park.', exampleDe: 'Der Bahnhof liegt gegenüber dem Park.', altDe: ['gegenüber von'], note: 'Falscher Freund: "opposite" heißt hier gegenüber, nicht "Opposition".' },
  { id: 'core.street', en: 'street', de: 'die Straße', emoji: '🛣️', pos: 'noun', example: 'The post office is in this street.', exampleDe: 'Die Post ist in dieser Straße.', altEn: ['the street', 'road'], altDe: ['Straße'] },
  { id: 'core.corner', en: 'corner', de: 'die Ecke', pos: 'noun', example: 'Turn left at the corner.', exampleDe: 'Biege an der Ecke links ab.', altEn: ['the corner'], altDe: ['Ecke', 'Straßenecke'] },
]
