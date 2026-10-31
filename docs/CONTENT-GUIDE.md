# Content-Leitfaden (Didaktik)

Leitfaden für alle, die Inhalte erstellen (Menschen oder Agenten). Technisches Format:
[CONTENT-SCHEMA.md](./CONTENT-SCHEMA.md). Vor dem Commit immer `bun run validate:content` ausführen.

## Zielgruppe und Sprache

- Deutschsprachige Erwachsene, die Englisch lernen.
- **Lerninhalte Englisch**, Anweisungen, Erklärungen und Übersetzungen **Deutsch**.
- Britisches oder amerikanisches Englisch sind beide in Ordnung, aber innerhalb einer Lektion
  einheitlich. Andere Schreibweise in `accepted` (`colour`/`color`).
- Du-Form auf Deutsch, freundlich und kurz.

## Datenschutz

Das Repository ist öffentlich. **Keine echten Personen, Firmen, Adressen, E-Mail-Adressen, Telefonnummern.**
Beispielnamen generisch und divers: Anna, Tom, Sam, Lisa, Ben, Mia, Leo, Priya, Omar, Kim.
Firmen: „our company“, „the bank“, „Northwind Ltd“ (offensichtlich fiktiv).

## Aufbau einer Unit

- **4–6 Lektionen** pro Unit, plus Tipps (`tips`) für die wichtigste Grammatik.
- Jede Lektion hat **ein klares Thema** (Titel 1–3 Wörter, Deutsch).
- **10–14 Aufgaben** pro Lektion (erlaubt: 8–15). Etwa 3–5 Minuten Lernzeit.
- Die letzte Lektion einer Unit ist eine **Wiederholung**, die alle Wörter der Unit mischt und keine
  neuen Wörter einführt.

## Aufbau einer Lektion

1. **Erst einführen, dann abfragen.** Jedes neue Wort bekommt eine `intro`-Karte, bevor es abgefragt
   wird. Pro Lektion **3–6 neue Wörter**, nicht mehr.
2. **Abfrage-Kaskade** pro neuem Wort, von leicht nach schwer:
   - Wiedererkennen: `choice` mit Bild, `match`
   - Verstehen: `listen-choice`, `translate` en→de
   - Produzieren: `translate` de→en, `fill`, `type`, `listen-type`, `speak`
3. **Wiederholung früherer Wörter einstreuen**: etwa 20–30 % der Aufgaben greifen Wörter aus
   vorherigen Lektionen/Units auf (in `words` angeben).
4. **Steigender Schwierigkeitsgrad** innerhalb der Lektion und über die Unit hinweg: frühe Lektionen
   mit mehr Auswahl-Aufgaben, spätere mit mehr Produktion (Tippen, Wortbank de→en, Dialoge).
5. **Abwechslung:** mindestens 4 verschiedene Aufgabentypen pro Lektion, nie mehr als 2 gleiche
   Typen direkt hintereinander. Ein `dialogue` gegen Ende fasst die Lektion zusammen.
6. **Hören einplanen:** mindestens eine Hör-Aufgabe (`listen-choice` oder `listen-type`) pro Lektion.
   `speak` höchstens einmal pro Lektion, nie als einzige Abfrage eines Wortes.

Typische Lektion mit 12 Aufgaben:

| # | Typ | Zweck |
|---|-----|-------|
| 1 | intro | neues Wort A |
| 2 | choice (Bild) | A wiedererkennen |
| 3 | intro | neues Wort B |
| 4 | intro | neues Wort C |
| 5 | match | A, B, C + ein altes Wort |
| 6 | listen-choice | Satz mit B |
| 7 | translate en→de | Satz mit A und C |
| 8 | fill | Grammatik der Lektion |
| 9 | translate de→en | Satz mit B + altem Wort |
| 10 | listen-type | kurzer Satz |
| 11 | speak | kurzer Satz |
| 12 | dialogue | alles im Zusammenhang |

## Erklärungen (`explanation`)

- **Kurz:** 1–2 Sätze, maximal ~160 Zeichen.
- Erklären, **warum**: „he/she/it → is“, „since + Zeitpunkt → Present Perfect“.
- Typische Fehler von Deutschsprachigen ansprechen: falsche Freunde (*become* ≠ bekommen),
  *since/for*, *make/do*, fehlendes *-s* in der 3. Person, Wortstellung, *I am* statt *I have* beim Alter.
- Keine Erklärung, wenn sie nichts hinzufügt.

## Distraktoren

- **Plausibel, aber eindeutig falsch.** Gleiche Wortart, ähnliches Thema, typische Verwechslungen
  (`is/am/are`, `his/her`, `in/on/at`).
- Keine Distraktoren, die in einem anderen Kontext ebenfalls korrekt wären. Ist eine zweite Lösung
  denkbar, gehört sie in `accepted`.
- Wortbank: 2–4 Distraktoren, Einzelwörter, nicht in der Lösung enthalten.
- Bildkarten: Emojis gut unterscheidbar wählen.

## Akzeptierte Varianten

Großzügig sein: Kurz- und Langformen sind automatisch gleich, aber Wortstellungs-Varianten,
Synonyme (`Hi`/`Hello`), Artikel-Varianten und deutsche Übersetzungsvarianten (`du`/`Sie`) müssen in
`accepted` stehen. Bei en→de lieber zwei, drei natürliche deutsche Varianten angeben.

## Audio (TTS)

- Hörtexte kurz halten (≤ 12 Wörter), Zahlen ausschreiben („twenty-five“), Abkürzungen vermeiden
  oder so schreiben, wie sie gesprochen werden.
- Die Web Speech API liest Satzzeichen als Pausen, also normal interpunktieren.

## CEFR-Orientierung

| Niveau | Wortschatz/Grammatik | Satzlänge |
|--------|----------------------|-----------|
| A1 | Begrüßung, Zahlen, Familie, to be, Present Simple, Pluralformen | 3–6 Wörter |
| A2 | Alltag, Stadt, Past Simple, going to, Komparativ, Präpositionen | 5–9 Wörter |
| B1 | Beruf, Erfahrungen, Present Perfect, Modalverben, Meinungen | 7–12 Wörter |
| B2 | Abstrakte Themen, Passiv, Konditionalsätze, Linking Words | 8–15 Wörter |
| C1 | Idiomatik, Nuancen, Inversion, formelles Register | frei |

Spezialisierungen bauen auf dem Basiskurs auf: ihre Units haben ein CEFR-Level (`minCefr` des Tracks)
und dürfen Fachwortschatz voraussetzen, den sie selbst einführen.

## Checkliste vor dem Commit

- [ ] `bun run validate:content` ohne Fehler (Hinweise geprüft)
- [ ] jedes neue Wort: intro-Karte und mindestens zwei Abfragen
- [ ] Erklärungen kurz, Deutsch, korrekt
- [ ] keine personenbezogenen Daten
- [ ] Lektion einmal in der App durchgespielt (`bun run dev`)
