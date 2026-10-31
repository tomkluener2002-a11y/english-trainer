# English Trainer 🇬🇧

Eine kleine Lern-App im Duolingo-Stil für **Business-Englisch in Treasury & Finance**. Gedacht zum Üben
zwischendurch.

- 8 Lektionen à 12 Karten: Treasury-Vokabular, Zahlen & Beträge, Bank-Telefonate, Verhandeln,
  Cashflow & Liquidität, Reports präsentieren, E-Mails, Small Talk
- Übungstypen: Lernkarte, Multiple Choice, Lückentext, Satzbau, Hören & Schreiben, Hörverständnis
- Sprachausgabe über die kostenlose Web Speech API des Browsers (kein API-Key)
- Streak, XP, Bestwert pro Lektion und eine **Fehlerkiste**: falsch beantwortete Karten bleiben
  gespeichert, bis du sie richtig beantwortest
- Kein Login, kein Server. Der Fortschritt liegt nur im `localStorage` des Browsers
- Für Handys optimiert, lässt sich als Web-App zum Home-Bildschirm hinzufügen

## Starten

Voraussetzung: [Node.js](https://nodejs.org) ab Version 20.19 (inklusive npm).

```bash
npm install
npm run dev
```

Dann <http://localhost:5173> im Browser öffnen.

**Auf dem Handy üben (gleiches WLAN):**

```bash
npm run dev:lan
```

Vite zeigt eine `Network:`-Adresse an (z. B. `http://192.168.178.20:5173`). Diese im Handy-Browser öffnen
und über „Zum Home-Bildschirm hinzufügen“ als App ablegen. Achtung: Der Fortschritt wird **pro Browser**
gespeichert, Handy und Laptop haben also jeweils einen eigenen Stand.

**Produktions-Build** (statische Dateien in `dist/`, die auf jedem beliebigen Webspace laufen,
z. B. Netlify, GitHub Pages oder einem Firmen-Webserver):

```bash
npm run build
npm run preview   # Build lokal testen
```

> Ohne Node, aber mit [Bun](https://bun.sh): `bun install && bun run dev` geht genauso.

## Neue Lektionen oder Karten hinzufügen

Alle Inhalte stehen in **`src/content/lessons.ts`**, das Datenmodell in `src/content/types.ts`.
Eine neue Lektion ist einfach ein weiteres Objekt im Array `lessons`:

```ts
{
  id: 'fx-hedging',                 // eindeutig, später nicht mehr ändern
  title: 'FX & Hedging',            // englischer Titel
  subtitle: 'Devisen & Absicherung', // deutscher Untertitel
  icon: '💱',
  description: 'Devisengeschäfte mit Banken besprechen.',
  exercises: [
    // Lernkarte
    { id: 'fx-01', type: 'flashcard', front: 'forward contract', back: 'Devisentermingeschäft',
      example: 'We booked a forward contract to hedge the USD exposure.' },

    // Multiple Choice ("correct" = Index der richtigen Option, Optionen werden gemischt)
    { id: 'fx-02', type: 'choice', prompt: 'Was bedeutet …?', question: 'spot rate',
      options: ['Kassakurs', 'Terminkurs', 'Leitzins', 'Swapsatz'], correct: 0, speakQuestion: true },

    // Lückentext (genau ein "___", mehrere akzeptierte Antworten möglich)
    { id: 'fx-03', type: 'type', prompt: 'Ergänze das fehlende Wort.',
      sentence: 'We want to ___ our exposure to the dollar.', answers: ['reduce', 'limit'],
      hint: 'verringern', translation: 'Wir wollen unser Dollar-Exposure verringern.' },

    // Satzbau (Satzzeichen hängen am Wort; extraWords = Ablenker)
    { id: 'fx-04', type: 'order', translation: 'Der Kurs ist heute gefallen.',
      solution: 'The rate fell today.', extraWords: ['falled'] },

    // Hören & Schreiben (Zahlen im Text ausschreiben)
    { id: 'fx-05', type: 'listen-type', text: 'The dollar is very strong this week.',
      translation: 'Der Dollar ist diese Woche sehr stark.' },

    // Hörverständnis mit Auswahl
    { id: 'fx-06', type: 'listen-choice', text: 'We will roll the forward for another month.',
      question: 'Was passiert?', options: ['Das Termingeschäft wird um einen Monat verlängert',
      'Das Termingeschäft wird aufgelöst', 'Ein neues Spot-Geschäft wird abgeschlossen'], correct: 0 },
  ],
},
```

Jede Übung kann zusätzlich eine `explanation` (deutsch) haben, die nach dem Beantworten erscheint.

**Regeln:**

- IDs von Lektionen und Übungen nie nachträglich ändern, sonst gehen Bestwerte und Fehlerkiste verloren.
- Im Dev-Modus (`npm run dev`) prüft die App die Inhalte automatisch und zeigt Probleme in der
  Browser-Konsole an (doppelte IDs, falscher `correct`-Index, fehlende `___` usw.).
- `npm run build` prüft zusätzlich alle Typen. Ein Tippfehler im Feldnamen fällt also sofort auf.

## Antwortprüfung

Tippantworten werden tolerant geprüft: Groß-/Kleinschreibung, Satzzeichen und Kurzformen
(`I'll` = `I will`, auch `Ill`/`Im`/`dont` ohne Apostroph) spielen keine Rolle. Kleine Tippfehler
(1 Fehler bei kurzen Wörtern, bis zu 3 bei langen Sätzen, Buchstabendreher zählen als einer) werden als
„fast richtig“ gewertet und die korrekte Schreibweise wird angezeigt.

## Projektstruktur

```
src/
  content/       lessons.ts (Inhalte), types.ts (Datenmodell), validate.ts, labels.ts
  hooks/         useProgress.ts – Streak, XP, Bestwerte, Fehlerkiste (localStorage)
  lib/           answer.ts (Antwortprüfung), speech.ts (Sprachausgabe), session.ts, date.ts, random.ts
  components/    LessonOverview, LessonPlayer, LessonSummary, FeedbackPanel, StreakBadge, ProgressBar,
                 SpeakButton, ExerciseView
    exercises/   Flashcard, MultipleChoice, TypeAnswer, WordOrder, ListeningExercise
```

Tech: Vite, React, TypeScript, Tailwind CSS v4.

## Hinweise

- **Stimmen:** Die Qualität der Sprachausgabe hängt vom Gerät ab. Auf iPhone und Mac klingen die
  „Erweitert“/„Premium“-Stimmen deutlich besser (Einstellungen → Bedienungshilfen → Gesprochene
  Inhalte → Stimmen → Englisch (UK)). Die App bevorzugt automatisch britisches Englisch.
- **Backup:** Den Fortschritt löschst du, wenn du die Browserdaten löschst. Zurücksetzen geht auch
  unten auf der Startseite.
