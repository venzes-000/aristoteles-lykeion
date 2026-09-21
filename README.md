# Aristoteles · Was macht ein Leben glücklich?

15 interaktive Szenen, sechs Aufgaben, etwa 11:55 Minuten Richtzeit. Vollständige Sprechtexte für Vincent und „Mein Freund“, lokale Illustrationen und Schriften, überprüfte Arbeitsblattzitate und 75 feste Originalzeilen.

## Starten

Voraussetzung: Node.js ab Version 20. Es müssen keine Pakete heruntergeladen werden.

Windows: `STARTEN.cmd` doppelklicken, dann **http://localhost:4173** im Browser öffnen. Das Serverfenster während des Vortrags geöffnet lassen. Ist bereits eine Vorschau aktiv, ihre Adresse verwenden; ein zweiter Server meldet den belegten Port.

Alternativ im Websiteordner:

```sh
node scripts/serve.mjs dist
```

Die Website wird über einen lokalen HTTP-Server geöffnet. Ein Doppelklick auf `dist/index.html` funktioniert wegen der JavaScript-Module und Inhaltsdateien nicht zuverlässig.

## Vortragen

- **Leertaste, →, PageDown oder freie Fläche antippen:** nächster Erklärungsschritt, dann nächste Szene.
- **←, PageUp:** einen Schritt zurück; am Szenenanfang zum vollständigen Ende der vorherigen Szene.
- **G:** Übersicht. Ein Szenensprung beginnt beim ersten Schritt. „Aktuelle Szene vollständig zeigen“ überspringt den Aufbau.
- **Q:** Quellen einschließlich markierter Originalzeilen. **Esc:** schließen.
- **F:** Vollbild. **Home / End:** erste / letzte Szene. **?:** Einstellungen und Hilfe.
- Interaktive Antworten, Lebensformen, Mobbingreaktionen und Quellenbuttons blättern nicht zusätzlich weiter.
- Es gibt keinen automatischen Szenenwechsel. Die letzte Szene bleibt stehen.
- Namen und reduzierte Bewegung lassen sich unter **⋯** einstellen. Voreinstellung: Vincent / Mein Freund.

Die Adresse enthält Szene und Schritt. Neuladen erhält diesen Stand. „Neu beginnen“ in den Einstellungen setzt die Präsentation und den Timer zurück. Die gespeicherte Sitzung gilt nur lokal.

## Sprecheransicht

„Sprecheransicht ↗“ öffnet ein zweites Fenster mit vollständigem Sprechtext, aktuellem Sprecher, nächster Szene und Timer. Der Timer startet bewusst, kann pausiert und zurückgesetzt werden. Später geöffnete Sprecherfenster übernehmen den aktuellen Zustand.

Für den Vortrag Windows auf **Erweitern** stellen: Publikumsfenster zur Tafel, Notizenfenster auf den eigenen Bildschirm. Beim Spiegeln wären Notizen für das Publikum sichtbar. Falls ein Popup blockiert wird, den angebotenen Tab-Link verwenden.

Die Synchronisation arbeitet über BroadcastChannel mit Sitzungskennung, ersatzweise über lokale Storage-Ereignisse. Beide Fenster müssen auf demselben Gerät und derselben Origin laufen. Das ist keine Fernsteuerung zwischen Schul-PC und separatem iPad. Für das iPad können die Sprechtexte im Lesemodus unabhängig geöffnet werden, sofern die Dateien dort lokal bereitgestellt werden.

## Lesen, Drucken und Offlinebetrieb

„Lesemodus“ zeigt alle Szenen vollständig, inklusive Erklärungen und aufklappbarer Sprechtexte. Auf schmalen Geräten startet er automatisch. Über **⋯ → Alle Szenen drucken** wird ein vollständig aufgebauter Druckzustand aller Szenen verwendet.

Alle Kerninhalte, Bilder, Schriften und beide Arbeitsblatt-PDFs liegen lokal. Nach Einrichtung kann der Server ohne Internet laufen. Nur externe Quellenlinks benötigen Internet. Für den Schul-PC den ganzen Ordner übertragen und Node.js vorab bereitstellen.

## Entwicklung und Prüfungen

```sh
node scripts/serve.mjs src
node scripts/build.mjs
node --test tests/presentation.test.mjs
```

Gleichwertige npm-Skripte: `npm run dev`, `npm run build`, `npm start`, `npm test`. Die Lockdatei hat keine externen Abhängigkeiten. Der Build prüft die JavaScript-Syntax und kopiert alle lokalen Quellen nach `dist/`. Die Anwendung nutzt native HTML-/CSS-/JavaScript- und Browser-APIs; ein umfangreicher Framework-Unterbau ist für diesen lokalen Vortrag nicht erforderlich.

Inhalte: `src/data/content.js`; vollständige Notizen: `src/data/notes.json`; Originalzeilen: `src/data/zeilen.json`; Szenen: `src/scenes.js`; Navigation/Fenstersynchronisation: `src/app.js` und `src/state.js`.

## Aufgaben und Szenen

| Aufgabe | Szenen |
|---|---|
| 1 · Aristoteles und Werk | 03 |
| 2 · Seele und Glück | 04–05 |
| 3 · Mesotes und tugendhaftes Leben | 06–07 |
| 4 · Lebensformen heute | 08–09 |
| 5 · Wie wird man glücklich? | 10 |
| 6 · Vor- und Nachteile | 11–12 |
| Einstieg, Gliederung, Rückkehr, Quellen | 01–02, 13–15 |

Siehe `QUELLEN_UND_ASSETS.md` und `PRUEFBERICHT.md` für Herkunft und tatsächlich durchgeführte Prüfungen.
