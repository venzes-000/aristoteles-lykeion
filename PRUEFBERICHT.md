# Durchgeführte Prüfungen · 21.09.2026

## Inhalt

- Alle 15 Szenen und sechs Aufgaben vorhanden; Gesamtrichtzeit 715 Sekunden (11:55).
- Alle 15 vollständigen Sprechtexte aus dem Prompt übernommen; Hinweise an die Website angepasst. Keine erfundene Benennung von Person B.
- Original-Arbeitsblatt aus dem ursprünglichen Chat verfügbar gemacht und gelesen. 49 + 26 = 75 feste Originalzeilen extrahiert.
- Drei wörtliche Zitate exakt mit den angegebenen Originalzeilen verglichen; alle stimmen. Nummerierte PDF auf beiden Seiten visuell geprüft. Ihr Original-Inhalt einschließlich Arbeitsaufträge bleibt unverändert.
- Quellen Q2–Q6 direkt überprüft. Präzisierung: der Sklaven-Passus steht in NE X.6. Theoria wird als aktive theoretische Erkenntnistätigkeit erklärt. Im Schema wurde „Hunger spüren“ als Beispiel für das vegetative Vermögen durch „Verdauen & wachsen“ ersetzt.

## Build und Zustandslogik

- Produktionsbuild `node scripts/build.mjs` erfolgreich. JavaScript-Syntaxprüfung aller Module erfolgreich.
- `node --test tests/presentation.test.mjs`: **6 Tests bestanden**. Geprüft: vollständiger Vorwärtslauf; Rückwärtslauf über Szenengrenzen; direkte Sprünge und Hash-Begrenzung; Timer-Pause/Fortsetzung; Sitzungs-/Echo-Filter; drei Originalzitate.
- Der Build enthält lokal alle Skripte, Daten, Bilder, Schriften mit Lizenzen und beide PDF-Fassungen. Keine externe Laufzeitbibliothek.

## Browserprüfung

Verwendet: Chromium-basierter Codex-Browser, lokaler HTTP-Server.

- Alle 15 vollständig aufgebauten Szenen bei **1920×1080, 1366×768 und 1024×768** geöffnet, als Screenshots erfasst und visuell über Kontaktübersichten geprüft. Zusätzlich DOM-Geometrieprüfung auf Überlauf. Randabstände der Einstieg-/Schlussfiguren anschließend korrigiert; zentrale Szenen einzeln in voller Größe kontrolliert.
- **390×844:** Lesemodus mit allen 15 Szenen, keine ausgeblendeten Erklärungsschritte, kein horizontaler Seitenüberlauf.
- Leertaste: genau ein Schritt. Pfeil rechts: nächste Szene nach letztem Schritt. Pfeil links: vollständig aufgebautes Ende der vorherigen Szene.
- Klick auf nicht interaktiven Szeneninhalt: genau ein Schritt.
- Abstimmung und Mesotes-Auswahl: Auswahl funktioniert, ohne zusätzlich weiterzublättern.
- Quellenoverlay sperrt Hintergrundnavigation; Esc schließt. Übersicht mit G geöffnet und geschlossen.
- Direkter Szenenlink und Neuladen erhalten Schritt und Interaktionsauswahl.
- Später geöffnetes Sprecherfenster übernimmt Szene und Schritt. Navigation aus dem Sprecherfenster aktualisiert das Publikum; Änderungen im Publikum aktualisieren das Notizenfenster. Timerstart und Pause über das Sprecherfenster geprüft.
- Bewegungen per Einstellung ein-/ausgeschaltet. Drei schnelle Eingaben während des Seelenschema-Aufbaus erreichen genau die erwartete nächste Szene; keine anwachsende Animationswarteschlange.
- Betrieb mit einer Content Security Policy geprüft, die Bild-, Font-, Skript- und Datenabrufe auf die lokale Origin beschränkt. Keine Browserfehler. Internetquellen sind normale externe Links; ihr Öffnen benötigt Internet.
- Druckzustand im DOM: alle 15 Szenen vorhanden, keine noch ausgeblendeten Schritte. Eigene Druckregeln blenden Bedienleisten aus und enthalten die Notizen.

## Konkrete Grenzen

- Kein Test auf einem physischen iPad, einer Schultafel oder dem tatsächlichen Schul-PC. Echte Touch-/Mehrfingergesten wurden nicht mit Hardware überprüft; die Eingabe verwendet einen gemeinsamen Klickpfad mit Pointer-Gestenfilter.
- Kein Papierausdruck bzw. abschließender Vergleich eines Browser-PDF-Ausdrucks. Die Druckstruktur und der vollständige Aufbau sind geprüft, die tatsächliche Paginierung ist am Zielbrowser zu kontrollieren.
- Popup-Darstellung im Codex-Browser war nicht als eigener kontrollierbarer Tab sichtbar. Die Fenstersynchronisation wurde deshalb mit einem separat geöffneten Browser-Tab derselben Sitzung geprüft. Auf normalen Desktopbrowsern öffnet der Button das vorgesehene zweite Fenster.
- Die alten Bilder B1–B4 und die frühere PPTX wurden nicht als lokale Dateien bereitgestellt. Neue Illustrationen N1–N3 ersetzen sie und sind ausdrücklich als solche dokumentiert. Das ursprüngliche Arbeitsblatt ist enthalten.
- Die 11:55 Minuten sind der vorgegebene Zeitplan, keine gemessene gemeinsame Generalprobe.

Screenshots liegen unter `screenshots/`. Die Anwendung wurde nicht als öffentliche Website veröffentlicht.
