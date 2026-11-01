# Lernpfad-Aufbau (Curriculum)

Der Pfad ist **ein** durchgehender Pfad. Spezialisierungen sind keine getrennten Kurse, sondern
**Kapitel**, die zwischen die Basis-Units eingestreut werden. Der Basiskurs bleibt der rote Faden.

Referenz-Implementierung: `src/lib/progress.ts` (`buildCurriculum`, `curriculumStatuses`,
`nextLessonInCurriculum`, `recommend`), Tests in `src/lib/__tests__/curriculum.test.ts`.

## Regeln

1. **Reihenfolge:** Basis-Units mit Lektionen in Kursreihenfolge. Nach je `CHAPTER_EVERY = 2`
   Basis-Units folgt ein Kapitel einer gewählten Spezialisierung, reihum durch die gewählten Tracks
   (je Track die nächste Unit mit Lektionen).
2. **Ende des Basisteils:** Basis-Units ohne Lektionen („Bald verfügbar“) stehen nach den fertigen
   Basis-Units. Danach folgen übrig gebliebene Spezialisierungs-Units, damit nichts verloren geht.
3. **Freischaltung:**
   - Basis-Lektion: offen, wenn die vorherige Basis-Lektion erledigt ist.
   - Kapitel-Lektion: offen, wenn die vorherige Lektion **desselben Tracks** erledigt ist **und** die
     davor liegende Basis-Unit komplett durchgespielt (oder per Test übersprungen) ist.
   - Kapitel blockieren den Basiskurs nie.
4. **Empfehlung („WEITER LERNEN“):** zuerst offene Weggabelung, dann volle Fehlerkiste, dann die
   erste offene Lektion in Pfad-Reihenfolge (Basis oder Kapitel), dann fällige Wörter.
5. **Nachträglich gewählte Spezialisierung:** Kapitel werden an den Positionen eingefügt, die der
   Regel entsprechen. Liegen sie hinter dem Fortschritt, werden sie als nächstes empfohlen (Nachholen).
6. **Anzeige:** Kapitel-Banner „Spezialkapitel · <Track>“ in der Farbe der Unit. Basis-Units zählen
   „Unit 1, 2, …“ ohne die Kapitel.
