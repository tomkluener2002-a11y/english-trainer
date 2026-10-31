import type { VocabEntry } from '../../schema'

/** Vokabeln für Core A1 Unit 2 „Menschen & Familie“. */
export const vocab: VocabEntry[] = [
  // Lektion 1: Familie
  { id: 'core.mother', en: 'mother', de: 'die Mutter', emoji: '👩', pos: 'noun', example: 'My mother is a teacher.', exampleDe: 'Meine Mutter ist Lehrerin.', altDe: ['Mutter'], note: 'Umgangssprachlich: "mum" (UK) oder "mom" (US).' },
  { id: 'core.father', en: 'father', de: 'der Vater', emoji: '👨', pos: 'noun', example: 'My father is tall.', exampleDe: 'Mein Vater ist groß.', altDe: ['Vater'], note: 'Umgangssprachlich: "dad".' },
  { id: 'core.brother', en: 'brother', de: 'der Bruder', emoji: '👦', pos: 'noun', example: 'He is my brother.', exampleDe: 'Er ist mein Bruder.', altDe: ['Bruder'] },
  { id: 'core.sister', en: 'sister', de: 'die Schwester', emoji: '👧', pos: 'noun', example: 'She is my sister.', exampleDe: 'Sie ist meine Schwester.', altDe: ['Schwester'] },
  { id: 'core.my', en: 'my', de: 'mein / meine', pos: 'pron', example: 'This is my family.', exampleDe: 'Das ist meine Familie.', altDe: ['mein', 'meine'], note: 'Bleibt immer gleich, egal ob mein, meine oder meinen.' },
  { id: 'core.his', en: 'his', de: 'sein / seine', pos: 'pron', example: 'His sister is Anna.', exampleDe: 'Seine Schwester ist Anna.', altDe: ['sein', 'seine'], note: 'Gehört zu einem Mann: his brother = sein Bruder.' },
  { id: 'core.her', en: 'her', de: 'ihr / ihre', pos: 'pron', example: 'Her brother is Tom.', exampleDe: 'Ihr Bruder ist Tom.', altDe: ['ihr', 'ihre'], note: 'Gehört zu einer Frau: her brother = ihr Bruder.' },

  // Lektion 2: Berufe
  { id: 'core.teacher', en: 'teacher', de: 'der Lehrer / die Lehrerin', emoji: '🧑‍🏫', pos: 'noun', example: 'I am a teacher.', exampleDe: 'Ich bin Lehrer.', altEn: ['a teacher'], altDe: ['Lehrer', 'Lehrerin', 'der Lehrer', 'die Lehrerin'], note: 'Im Englischen steht vor dem Beruf ein Artikel: "a teacher".' },
  { id: 'core.doctor', en: 'doctor', de: 'der Arzt / die Ärztin', emoji: '🧑‍⚕️', pos: 'noun', example: 'My father is a doctor.', exampleDe: 'Mein Vater ist Arzt.', altEn: ['a doctor'], altDe: ['Arzt', 'Ärztin', 'der Arzt', 'die Ärztin'] },
  { id: 'core.student', en: 'student', de: 'der Student / die Studentin', emoji: '🧑‍🎓', pos: 'noun', example: 'She is a student.', exampleDe: 'Sie ist Studentin.', altEn: ['a student'], altDe: ['Student', 'Studentin', 'der Student', 'die Studentin', 'Schüler', 'Schülerin'], note: 'Auch für Schüler/innen gebräuchlich.' },
  { id: 'core.nurse', en: 'nurse', de: 'der Krankenpfleger / die Krankenschwester', emoji: '👩‍⚕️', pos: 'noun', example: 'My sister is a nurse.', exampleDe: 'Meine Schwester ist Krankenschwester.', altEn: ['a nurse'], altDe: ['Krankenschwester', 'Krankenpfleger', 'Pfleger', 'Pflegerin'] },
  { id: 'core.engineer', en: 'engineer', de: 'der Ingenieur / die Ingenieurin', emoji: '👷', pos: 'noun', example: 'He is an engineer.', exampleDe: 'Er ist Ingenieur.', altEn: ['an engineer'], altDe: ['Ingenieur', 'Ingenieurin'], note: 'Beginnt mit einem Vokal-Laut: "an engineer".' },
  { id: 'core.job', en: 'job', de: 'der Beruf / der Job', emoji: '💼', pos: 'noun', example: 'What is your job?', exampleDe: 'Was ist dein Beruf?', altDe: ['Beruf', 'Job', 'Arbeit'] },

  // Lektion 3: Wie alt?
  { id: 'core.how-old', en: 'How old are you?', de: 'Wie alt bist du?', pos: 'phrase', example: 'How old are you? – I am 25.', exampleDe: 'Wie alt bist du? – Ich bin 25.', altEn: ['how old are you'], note: 'Im Englischen "bist" du alt (to be), du "hast" kein Alter: nie "I have 25".' },
  { id: 'core.old', en: 'old', de: 'alt', pos: 'adj', example: 'My grandfather is old.', exampleDe: 'Mein Großvater ist alt.', altDe: ['älter'], note: '"I am 25 years old" – "years old" kann auch wegfallen.' },
  { id: 'core.husband', en: 'husband', de: 'der Ehemann', emoji: '🤵', pos: 'noun', example: 'Her husband is a nurse.', exampleDe: 'Ihr Mann ist Krankenpfleger.', altDe: ['Ehemann', 'Mann'] },
  { id: 'core.wife', en: 'wife', de: 'die Ehefrau', emoji: '👰', pos: 'noun', example: 'His wife is a doctor.', exampleDe: 'Seine Frau ist Ärztin.', altDe: ['Ehefrau', 'Frau'] },
  { id: 'core.son', en: 'son', de: 'der Sohn', emoji: '👦', pos: 'noun', example: 'My son is five years old.', exampleDe: 'Mein Sohn ist fünf Jahre alt.', altDe: ['Sohn'], note: 'Aussprache: wie "sun" (Sonne).' },
  { id: 'core.daughter', en: 'daughter', de: 'die Tochter', emoji: '👧', pos: 'noun', example: 'Her daughter is eight.', exampleDe: 'Ihre Tochter ist acht.', altDe: ['Tochter'], note: 'Das "gh" bleibt stumm: "daw-ter".' },

  // Lektion 4: Personen beschreiben
  { id: 'core.tall', en: 'tall', de: 'groß (Körpergröße)', emoji: '🦒', pos: 'adj', example: 'My brother is tall.', exampleDe: 'Mein Bruder ist groß.', altDe: ['groß', 'hochgewachsen'], note: 'Für Menschen: "tall", nicht "big".' },
  { id: 'core.short', en: 'short', de: 'klein (Körpergröße) / kurz', pos: 'adj', example: 'My sister is short.', exampleDe: 'Meine Schwester ist klein.', altDe: ['klein', 'kurz'], note: 'Für Menschen: "short", nicht "small".' },
  { id: 'core.young', en: 'young', de: 'jung', pos: 'adj', example: 'Her teacher is young.', exampleDe: 'Ihr Lehrer ist jung.', altDe: ['jünger'] },
  { id: 'core.friendly', en: 'friendly', de: 'freundlich', emoji: '😊', pos: 'adj', example: 'The nurse is very friendly.', exampleDe: 'Die Krankenschwester ist sehr freundlich.', altDe: ['nett'] },
  { id: 'core.funny', en: 'funny', de: 'lustig', emoji: '😄', pos: 'adj', example: 'My brother is very funny.', exampleDe: 'Mein Bruder ist sehr lustig.', altDe: ['witzig', 'komisch'] },
  { id: 'core.have-got', en: 'have got', de: 'haben / besitzen', pos: 'phrase', example: 'I have got a sister.', exampleDe: 'Ich habe eine Schwester.', altEn: ['has got', "'ve got", "'s got"], altDe: ['haben', 'besitzen'], note: 'I/you/we/they have got, he/she/it has got.' },
]
