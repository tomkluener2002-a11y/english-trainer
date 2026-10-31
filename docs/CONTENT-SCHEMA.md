# Content-Schema

Alle Lerninhalte sind **Daten**, getrennt von der UI. Die TypeScript-Typen in
[`src/content/schema.ts`](../src/content/schema.ts) sind die verbindliche Definition; dieses Dokument
erklärt sie mit Beispielen. Didaktische Regeln stehen in [CONTENT-GUIDE.md](./CONTENT-GUIDE.md).

```
Track (core | specialization)
 └─ Unit            (CEFR, Farbe, Icon, Themen, Status)
     └─ Lesson      (8–15 Aufgaben, führt Vokabeln ein)
         └─ Exercise  (diskriminierte Union über `type`)

VocabEntry-Registry  (wortbasierte Spaced Repetition)
PlacementQuestion    (Fragenbank für den adaptiven Einstufungstest)
```

## Prüfen

```bash
bun run validate:content                       # alle Inhalte (läuft auch vor jedem Build)
bun run validate:content unit.json vocab.json  # einzelne JSON-Dateien prüfen
```

Der Validator ([`src/content/validate.ts`](../src/content/validate.ts)) arbeitet strukturell auf rohen
Daten. Inhalte können daher auch als JSON geschrieben und vor dem Einbau geprüft werden. **Fehler**
brechen den Build ab, **Hinweise** nicht.

Geprüft wird unter anderem:

- Pflichtfelder und Typen, erlaubte Werte (CEFR, Farben, Interessen, Aufgabentypen)
- doppelte IDs (global für Tracks/Units/Lektionen/Vokabeln, pro Lektion für Aufgaben)
- ID-Präfixe: Unit-IDs beginnen mit `<trackId>.`, Lektions-IDs mit `<unitId>.`
- 8–15 Aufgaben pro Lektion, mindestens 3 verschiedene Aufgabentypen (Hinweis)
- jede Auswahl-Aufgabe hat **genau eine** korrekte Option, keine doppelten Optionen
- Wortbank: Distraktoren sind nicht Teil der Lösung, keine doppelten Distraktoren, nur Einzelwörter;
  `accepted`-Varianten, die mit der Wortbank nicht baubar sind, ergeben einen Hinweis
- Lückentexte enthalten genau ein `___`
- alle referenzierten Vokabel-IDs (`words`, `introduces`, `intro.word`) existieren
- jedes Wort in `introduces` hat eine `intro`-Karte, und die Karte steht vor der ersten Abfrage
- Unit-Status passt zum Inhalt (`planned` ohne Lektionen, aber mit `plannedLessons`)
- Einstufungstest: mindestens 60 Fragen, mindestens 8 pro Niveau, nur erlaubte Typen

## Dateiablage

```
src/content/
  schema.ts                 Typen (Single Source of Truth)
  validate.ts               Validator
  helpers.ts                plannedUnit() für Gerüst-Units
  index.ts                  Registry: Tracks + Vokabellisten registrieren
  placement/questions.ts    Fragenbank Einstufungstest
  tracks/
    core/index.ts           Track-Definition (Reihenfolge der Units)
    core/a1-u1.ts           eine Datei pro Unit: export const unit: Unit
    core/vocab-a1u1.ts      Vokabeln der Unit: export const vocab: VocabEntry[]
    treasury/index.ts, u1.ts, u2.ts, vocab.ts
    travel/…  tech/…  career/…  everyday/…  health/…
```

Neue Unit hinzufügen:

1. `src/content/tracks/<track>/<unit>.ts` mit `export const unit: Unit = { … }` anlegen.
2. Vokabeln in die Vokabeldatei des Tracks (oder eine neue Datei) schreiben.
3. In `tracks/<track>/index.ts` die Gerüst-Unit (`plannedUnit(...)`) durch den Import ersetzen.
4. Neue Vokabeldatei in `src/content/index.ts` in `vocabulary` aufnehmen.
5. `bun run validate:content`.

## IDs

- Kleinbuchstaben, Ziffern, `.` und `-`. **Nie nachträglich ändern**, sie stehen im localStorage
  (Fortschritt, Kronen, Fehlerkiste, Spaced Repetition).
- Track: `core`, `treasury`, `travel` …
- Unit: `<track>.<kurz>`: `core.a1u1`, `travel.u1`
- Lektion: `<unit>.l<n>`: `core.a1u1.l1`
- Aufgabe: innerhalb der Lektion eindeutig: `e01`, `e02` …
- Vokabel: `<präfix>.<wort>`: `core.hello`, `core.good-morning`, `fin.liquidity`, `travel.boarding-pass`.
  Präfixe: `core`, `fin` (Treasury), `travel`, `tech`, `career`, `day` (Alltag), `health`.

## VocabEntry

```ts
{
  id: 'core.apple',
  en: 'apple',
  de: 'der Apfel',
  emoji: '🍎',            // für Bildkarten; bei abstrakten Wörtern weglassen
  pos: 'noun',            // noun | verb | adj | adv | phrase | pron | prep | num | other
  example: 'I eat an apple every day.',
  exampleDe: 'Ich esse jeden Tag einen Apfel.',
  altEn: ['an apple'],    // weitere akzeptierte englische Formen
  altDe: ['Apfel'],
  note: 'Vor Vokal: "an apple", nicht "a apple".',
}
```

Aus der Registry erzeugt die App automatisch Wiederholungsaufgaben (Bedeutung wählen, Paare, Hören,
Tippen). Deshalb sollten `en`/`de` kurz und eindeutig sein. Deutsche Nomen mit Artikel
(`der Apfel`), englische ohne (`apple`), außer der Artikel gehört zur Lerneinheit.

## Track

```ts
{
  id: 'travel',
  kind: 'specialization',            // genau ein Track hat kind: 'core'
  title: 'Reisen',
  subtitle: 'Flughafen, Hotel, Restaurant',
  description: 'Alles, was du unterwegs brauchst …',
  icon: '✈️',
  color: 'teal',                     // green | blue | purple | orange | red | yellow | teal | pink
  minCefr: 'A1',                     // empfohlenes Einstiegsniveau (für Hinweise im Dialog)
  interests: ['travel', 'everyday'], // business | tech | travel | health | creative | career | everyday
  pitch: 'Reisen',                   // „Du hast <pitch> gewählt – …“
  sample: { en: 'Could I have a window seat, please?', de: 'Könnte ich bitte einen Fensterplatz bekommen?' },
  followUp: {                        // optionale Rückfrage des Maskottchens
    question: 'Wie reist du am liebsten?',
    options: [{ id: 'city', label: 'Städtereisen', emoji: '🏙️' }, { id: 'nature', label: 'Natur', emoji: '🏕️' }],
  },
  units: [ … ],
}
```

## Unit

```ts
{
  id: 'core.a1u1',
  title: 'Erste Schritte',
  description: 'Begrüßen, dich vorstellen und erste Sätze bilden.',
  cefr: 'A1',
  color: 'green',
  icon: '👋',
  topics: ['Begrüßen', 'Sich vorstellen', 'Herkunft', 'Zahlen 1–20'],
  status: 'ready',                   // ready | partial | planned
  lessons: [ … ],                    // ready: 4–6 Lektionen empfohlen (min. 3)
  plannedLessons: ['Zahlen', 'Wiederholung'], // nur bei partial/planned: noch fehlende Lektionen
  milestone: true,                   // nach Abschluss: Spezialisierungs-Weggabelung
  tips: [{
    title: 'to be: am, is, are',
    text: 'Nach "I" steht immer "am", nach "he/she/it" "is" …',
    examples: [{ en: 'I am Anna.', de: 'Ich bin Anna.' }],
  }],
}
```

- `planned`: keine Lektionen, aber `plannedLessons`. Im Pfad als gesperrte Knoten mit „Bald verfügbar“.
- `partial`: einige fertige Lektionen plus `plannedLessons` für den Rest.
- Für reine Gerüste gibt es `plannedUnit({...})` aus `helpers.ts`.

## Lesson

```ts
{
  id: 'core.a1u1.l1',
  title: 'Hallo!',
  description: 'Begrüßen und verabschieden',
  introduces: ['core.hello', 'core.goodbye', 'core.thank-you'],
  exercises: [ … 8–15 Aufgaben … ],
}
```

## Exercise: gemeinsame Felder

| Feld          | Pflicht | Bedeutung                                                         |
|---------------|---------|-------------------------------------------------------------------|
| `id`          | ja      | eindeutig in der Lektion (`e01`)                                  |
| `type`        | ja      | Aufgabentyp (siehe unten)                                         |
| `explanation` | nein    | kurze Erklärung auf Deutsch, erscheint im Feedback-Sheet          |
| `words`       | nein    | Vokabel-IDs, die geübt werden (steuert die Spaced Repetition)     |

**Antwortprüfung:** Groß/Klein, Satzzeichen, Apostroph-Varianten und englische Kurzformen
(`I'm` = `I am` = `Im`) werden ignoriert. Bei Tipp-Aufgaben gelten kleine Tippfehler als richtig (mit
Hinweis). Unterschiedliche Wortreihenfolgen oder Synonyme müssen explizit in `accepted` stehen.

### `intro`: neue Wortkarte (keine Bewertung)

```ts
{ id: 'e01', type: 'intro', word: 'core.hello' }
```

Zeigt Emoji, Wort, Audio, Übersetzung und Beispielsatz aus der Registry. Muss vor der ersten
Abfrage des Wortes stehen.

### `translate`: Wortbank-Übersetzung

```ts
{
  id: 'e04', type: 'translate', direction: 'de-en',
  prompt: 'Ich bin Anna.',
  answer: 'I am Anna.',
  accepted: ["I'm Anna."],
  distractors: ['is', 'you', 'are'],
  words: ['core.i-am'],
}
```

Die Wortbank besteht aus den Wörtern von `answer` (ohne Satzzeichen) plus `distractors`.
Distraktoren sind Einzelwörter, die **nicht** in der Lösung vorkommen. `direction: 'en-de'` funktioniert
genauso mit deutscher Lösung. Nutzer können alternativ die Tastatur verwenden; dann gilt auch `accepted`.

### `choice`: Multiple Choice (optional Bildkarten)

```ts
{
  id: 'e05', type: 'choice',
  prompt: 'Welches Bild zeigt „der Apfel“?',
  choices: [
    { text: 'apple', emoji: '🍎', correct: true },
    { text: 'bread', emoji: '🍞' },
    { text: 'water', emoji: '💧' },
    { text: 'cheese', emoji: '🧀' },
  ],
  words: ['core.apple'],
}

{
  id: 'e06', type: 'choice',
  prompt: 'Was bedeutet das?',
  question: 'Nice to meet you.',
  questionLang: 'en',               // macht die Frage vorlesbar
  choices: [
    { text: 'Freut mich, dich kennenzulernen.', correct: true },
    { text: 'Bis später.' },
    { text: 'Wie geht es dir?' },
  ],
}
```

2–4 Optionen, genau eine mit `correct: true`. Reihenfolge wird beim Anzeigen gemischt. Sind Emojis
gesetzt (bei allen Optionen), erscheint ein Kartenraster.

### `listen-choice`: Hören & Antworten

```ts
{
  id: 'e07', type: 'listen-choice',
  audio: 'Good morning, how are you?',
  prompt: 'Was hast du gehört?',
  choices: [
    { text: 'Guten Morgen, wie geht es dir?', correct: true },
    { text: 'Guten Abend, wer bist du?' },
    { text: 'Gute Nacht, bis morgen!' },
  ],
}
```

Audio per Web Speech API, mit 🐢-Taste für langsame Wiedergabe. Zahlen im `audio` ausschreiben.

### `listen-type`: Hören & Tippen

```ts
{ id: 'e08', type: 'listen-type', audio: 'Where are you from?', translation: 'Woher kommst du?' }
```

`audio` ist immer korrekt; weitere Schreibweisen in `accepted`.

### `match`: Paare zuordnen

```ts
{
  id: 'e09', type: 'match',
  pairs: [
    { en: 'hello', de: 'hallo' },
    { en: 'goodbye', de: 'tschüss' },
    { en: 'please', de: 'bitte' },
    { en: 'thank you', de: 'danke' },
  ],
  words: ['core.hello', 'core.goodbye', 'core.please', 'core.thank-you'],
}
```

3–5 Paare, Begriffe und Bedeutungen jeweils eindeutig.

### `fill`: Lückentext mit Auswahl

```ts
{
  id: 'e10', type: 'fill',
  sentence: 'She ___ from Spain.',
  choices: [{ text: 'is', correct: true }, { text: 'am' }, { text: 'are' }],
  translation: 'Sie kommt aus Spanien.',
  explanation: 'he/she/it → is',
}
```

### `type`: Lückentext zum Tippen

```ts
{
  id: 'e11', type: 'type',
  sentence: 'We need to ___ the FX risk.',
  accepted: ['hedge'],
  hint: 'absichern',
  translation: 'Wir müssen das Währungsrisiko absichern.',
}
```

### `speak`: Sprechen

```ts
{ id: 'e12', type: 'speak', text: 'Nice to meet you.', translation: 'Freut mich.' }
```

Nutzt die Spracherkennung des Browsers (≥ 70 % der Wörter erkannt = richtig). Ohne Unterstützung,
oder wenn der Nutzer „Kann gerade nicht sprechen“ wählt, wird die Aufgabe ohne Strafe übersprungen.
Deshalb nie die einzige Abfrage eines Wortes.

### `dialogue`: Mini-Dialog mit Verständnisfrage

```ts
{
  id: 'e13', type: 'dialogue',
  title: 'Im Café',
  lines: [
    { speaker: 'a', name: 'Sam', en: 'Hi! What would you like?', de: 'Hi! Was möchtest du?' },
    { speaker: 'b', name: 'Anna', en: 'A tea, please.', de: 'Einen Tee, bitte.' },
    { speaker: 'a', name: 'Sam', en: 'Milk or lemon?', de: 'Milch oder Zitrone?' },
    { speaker: 'b', name: 'Anna', en: 'Lemon, thanks.', de: 'Zitrone, danke.' },
  ],
  question: 'Was nimmt Anna in den Tee?',
  choices: [{ text: 'Zitrone', correct: true }, { text: 'Milch' }, { text: 'Zucker' }],
}
```

Zeilen erscheinen nacheinander (mit Audio); die deutsche Übersetzung ist per Antippen sichtbar.
2–8 Zeilen, Namen generisch halten.

## Einstufungstest: PlacementQuestion

```ts
{
  id: 'pt.b1.04',
  cefr: 'B1',
  exercise: {
    id: 'q', type: 'fill',
    sentence: 'I ___ here since 2019.',
    choices: [{ text: 'have lived', correct: true }, { text: 'live' }, { text: 'am living' }, { text: 'lived' }],
    explanation: 'since + Zeitpunkt → Present Perfect',
  },
}
```

Erlaubte Typen: `choice`, `fill`, `translate`, `listen-choice`, `type`. Die Bank braucht mindestens
60 Fragen, mindestens 8 pro Niveau A1–C1 (empfohlen 12+). Fragen eines Niveaus sollten verschiedene
Themen abdecken (Grammatik, Wortschatz, Hören, Leseverständnis), damit der adaptive Test
aussagekräftig bleibt. `words` ist hier nicht nötig.

Ablauf (`src/lib/placement.ts`): Start bei A2, Schätzwert steigt bei richtigen Antworten und sinkt bei
falschen, mit abnehmender Schrittweite. 15–25 Fragen, „Ich weiß es nicht“ zählt als falsch.
