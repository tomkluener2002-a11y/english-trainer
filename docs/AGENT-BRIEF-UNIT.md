# Auftrag: eine Unit als JSON schreiben

Du schreibst **eine** Lern-Unit für eine Englisch-Lern-App (Zielgruppe: deutschsprachige Erwachsene).
Arbeitsordner: `/Users/tomkluner/Desktop/Claude/english-trainer` (Bun-Binary: `/Applications/OpenClaw.app/Contents/Resources/runtime/bin`, zum PATH hinzufügen).

## Vorbereitung (lesen, nicht verändern)

1. `docs/CONTENT-GUIDE.md` (Didaktik, Datenschutz, Aufbau einer Lektion) – verbindlich.
2. `docs/CONTENT-SCHEMA.md` und `src/content/schema.ts` (exaktes Format jedes Aufgabentyps).
3. Stilvorbild: eine fertige Unit, z.B. `src/content/tracks/core/a1-u2.ts` plus die Vokabeln `src/content/tracks/core/vocab-a1u2.ts`. Schreibe in diesem Stil und mit dieser Qualität.
4. Die Eckdaten deiner Unit (Titel, Beschreibung, CEFR, Farbe, Icon, Themen, `milestone`) stehen im Gerüst `plannedUnit({...})` in `src/content/tracks/<track>/index.ts`. Übernimm sie unverändert (inklusive `milestone`, falls gesetzt).

## Was du lieferst (genau zwei Dateien, sonst nichts anfassen)

- `content-drafts/<unit-id>.json` – die Unit (Typ `Unit`) mit `status: "ready"`, **5 Lektionen** (4 inhaltliche + 1 Wiederholung ohne neue Wörter), je **10–14 Aufgaben**, 2–3 `tips` auf Deutsch zur wichtigsten Grammatik/Redemitteln.
- `content-drafts/<unit-id>.vocab.json` – Array von `VocabEntry` für alle neuen Wörter (ca. 16–24 Wörter/Wendungen). Vokabel-IDs müssen **global eindeutig** sein: Präfix `<unit-id>.` + Slug, z.B. `core.a1u3.apple`. Kleinbuchstaben, Ziffern, `.`, `-`.
- Lektions-IDs: `<unit-id>.l1` … `<unit-id>.l5`. Aufgaben-IDs eindeutig innerhalb der Lektion.
- Verändere keine andere Datei im Repo (keine index.ts, keine anderen Units). Kein git commit.

## Qualitätsregeln (zusätzlich zum Guide)

- Englisch muss korrekt, natürlich und zum CEFR-Niveau passend sein; nichts Erfundenes oder Unnatürliches („Denglisch“ vermeiden). Deutsche Erklärungen kurz, korrekt, du-Form.
- Lerninhalt des Titels/der Themen wirklich abdecken (z.B. Past Simple → regelmäßige und unregelmäßige Verben, Fragen mit did).
- Jede Antwortmöglichkeit mit mehreren gültigen Lösungen (`accepted`, `altEn`, `altDe`) vollständig abdecken, damit korrekte Antworten nie als falsch gelten. Tippfehler-Toleranz existiert bereits, trotzdem übliche Varianten angeben.
- Distraktoren plausibel, aber eindeutig falsch. Genau eine korrekte Auswahl-Option.
- Mindestens 5 verschiedene Aufgabentypen in der Unit, in jeder Lektion mindestens eine Hör-Aufgabe, `speak` höchstens einmal pro Lektion.
- **Datenschutz:** öffentliches Repo. Keine echten Personen, Firmen, Adressen, Telefonnummern, E-Mails. Generische Namen (Anna, Ben, Mia, Leo, Sam, Priya, Omar, Kim). Fiktive Firmen („Northwind Ltd“).
- Keine Markenwerbung, keine politischen oder anstößigen Inhalte.

## Prüfen (Pflicht, bis 0 Fehler)

```bash
bun run validate:content content-drafts/<unit-id>.json content-drafts/<unit-id>.vocab.json
```

Behebe alle **Fehler** vollständig; **Hinweise** möglichst auch. Wenn der Validator deine Dateien nicht lesen kann, ist das JSON ungültig: korrigieren.

## Abschlussbericht (kurz)

Dateipfade, Anzahl Lektionen/Aufgaben/Vokabeln, Validator-Ergebnis (Fehler/Hinweise), Auffälligkeiten.
