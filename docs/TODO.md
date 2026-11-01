# TODO – UI-Schicht

Stand der neuen Oberfläche (`src/App.tsx`, `src/components/`) und bekannte Lücken.

## Offen / bewusst vereinfacht

- **Dark Mode** fehlt (alle Farben sind hell definiert, `src/components/theme.ts` + `src/index.css`).
- **Bundle-Größe**: Ein Chunk mit ca. 520 kB (gzip ca. 150 kB), überwiegend Lerninhalte. Bei weiterem Wachstum
  Tracks per `import()` nachladen (Code-Splitting je Track) oder `build.chunkSizeWarningLimit` anheben.
- **Einstufungstest ohne Zwischen-Feedback**: Antworten werden nicht als richtig/falsch angezeigt (bewusst,
  damit der Test zügig bleibt). Eine kurze neutrale Animation zwischen den Fragen wäre noch schöner.
- **„Ganz von vorn anfangen“** nach dem Test: `applyPlacement()` markiert übersprungene Meilensteine als
  gesehen; danach setzt `startFromScratch()` zwar `testedOut` zurück, die Weggabelung an diesen Meilensteinen
  erscheint aber nicht automatisch erneut. Sie ist jederzeit über Pfad (`+ Neu`), Top-Bar-Kursmenü und Profil
  erreichbar. Saubere Lösung: in `startFromScratch()` die übersprungenen Meilensteine wieder aus
  `tracks.forksSeen` entfernen (Logikschicht, daher nicht angefasst).
- **Paare zuordnen** wird immer als richtig gewertet, sobald alle Paare gefunden sind (Fehlversuche kosten
  kein Herz, nur Shake + Ton).
- **Sprechen**: Nach zwei unverständlichen Versuchen wird die Aufgabe ohne Strafe übersprungen. Es gibt keine
  Aussprache-Bewertung über die Wort-Trefferquote hinaus.
- **Celebrate → nächste Lektion**: „Weiter“ führt zurück zum Pfad (Auto-Scroll + pulsierende START-Blase auf
  der nächsten Lektion), nicht direkt in die nächste Lektion. Bei offener Weggabelung geht es direkt dorthin.
- **Liga/Leaderboard, Freunde, Benachrichtigungen** (Duolingo-Features) existieren nicht – ohne Backend nicht
  sinnvoll.
- **Animationen**: Keine Lottie-artigen Charakter-Animationen; das Maskottchen hat Idle-Wippen, Blinzeln und
  fünf statische Ausdrücke.
- **Altlasten**: `src/content/lessons.ts` und `src/content/types.ts` (altes Content-Format) werden von der
  neuen UI nicht mehr verwendet und können entfernt werden, sobald niemand mehr darauf verweist.
- **README** beschreibt teils noch die alte Oberfläche und sollte an die neue Navigation angepasst werden.

## QA-Hinweise

- Visuell geprüft bei 390×844 (Mobil) und 1280×800 (Desktop) mit einer Headless-Chrome-Instanz über CDP:
  Willkommen, Onboarding, Testfragen, Ergebnis, Pfad (inkl. Popover, Tipps, Truhe, Weggabelungs-Knoten),
  alle Aufgabentypen, Feedback richtig/falsch, Celebrate (Statistik, Streak, Belohnungen), Herzen leer,
  Weggabelung inkl. Rückfrage und Bestätigung, Pfad mit Spezialisierung, Üben (leer + gefüllt), Quests,
  Profil, Shop, Beenden-Dialog.
- Ein automatisierter UI-Flow-Test im Repo fehlt noch (z.B. Playwright gegen `vite preview`).
