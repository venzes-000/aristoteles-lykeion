# Q1-Prüfbericht: Originalblatt und feste Zeilenzählung

Geprüft am 21.09.2026. Dieser Bericht ersetzt die frühere Aussage im Recherchebericht, Q1 liege nicht vor: Das Original wurde inzwischen gefunden und vollständig geprüft.

## Original und erzeugte Dateien

Originalquelle: `C:\Users\Steff\AppData\Local\Temp\codex-file-preview-K8zVub\Aristoteles.pdf`.

In `work/material/` liegen:

- `Aristoteles.pdf`: byteidentische Kopie des Originals.
- `Aristoteles_Arbeitsblatt_mit_Zeilen.pdf`: Originalseiten mit hinzugefügten Randnummern und kleinem Erläuterungsfuß.
- `zeilen.json`: genau 75 Einträge in der Form `{page, line, text}`.
- `zitate_pruefung.json`: drei überprüfte Zitate mit Seite und Bereich.
- `q1_verification.json`: maschinenlesbare Prüfergebnisse.
- `Originaltext_mit_Zeilen.txt`: lesbare Textkontrolle.
- `verify_q1.py`: reproduzierbare Extraktion, Nummerierung und Inhaltsprüfungen.

SHA-256 Original: `c7fe158315246a6721589f6ae49bf2e48942d5b82b2e920507c7e1a888cda653`.

## Zeilenbildung

Die Original-PDF hat genau zwei Seiten. Die sichtbaren, bereits im Original feststehenden Zeilen ergeben nach Ausschluss der Überschrift auf Seite 1 sowie des Aufgabenblocks auf Seite 2 exakt:

- Seite 1: Z. 1-49, 49 Zeilen.
- Seite 2: Z. 50-75, 26 Zeilen.

Es wurden keine neuen Umbrüche erzeugt. Die JSON-Einträge folgen diesen Originalzeilen. Umlaute, historische Schreibungen und Interpunktion bleiben erhalten; die typografischen Auszeichnungen der PDF bleiben in der nummerierten PDF ebenfalls bestehen. Die sechs Aufgaben sind unnummeriert übernommen. Der Übersetzer wird im Original nicht angegeben.

## Drei überprüfte Originalzitate

Alle drei stimmen nach Zusammenziehen der Original-Zeilenumbrüche wortwörtlich mit dem Prompt überein:

| Szene | Wortlaut | Nachweis | Ergebnis |
|---|---|---|---|
| 05 | „Der Verstand oder die Vernunft ist nämlich das Vornehmste in uns“ | Q1, S. 1, Z. 32-33 | Genaues Satzfragment; im Original folgt nach „uns“ ein Komma und eine Fortsetzung. Der Prompt kennzeichnet es korrekt als kurzes Zitat ohne angehängten Punkt. |
| 10 | „Mithin ist dieses Leben auch das glückseligste.“ | Q1, S. 2, Z. 75 | Vollständiger letzter Satz, einschließlich Punkt. |
| 12 | „Die Glückseligkeit aber erkennt niemand einem Sklaven zu, außer es müßte auch sein Leben dem entsprechen.“ | Q1, S. 1, Z. 22-23 | Wortlaut und historische Schreibung „müßte“ stimmen; Einschränkung nach „außer“ ist vollständig erhalten. |

Das letzte Zitat muss unmittelbar als historische Position mit heutiger kritischer Einordnung erscheinen. Die Aussage sollte nicht zu einem kategorischen „Aristoteles sagt, versklavte Menschen könnten niemals glücklich sein“ verkürzt werden.

## Abgleich sämtlicher Q1-Belegbereiche aus dem Prompt

Alle angeführten Zeilennummern existieren an den genannten Seiten und passen zum jeweiligen Textbereich; es ist keine Korrektur der numerischen Q1-Verweise nötig.

| Szene | Q1-Bereich | Tatsächlicher Textbezug |
|---|---|---|
| 01 | S. 1, Z. 10-17 | Spiel, Vergnügen, Glück als Ziel; Erholung als Mittel. Einstiegsfrage bleibt eigenes Gedankenexperiment. |
| 02 | S. 2, Aufgaben 1-6 | Alle sechs Arbeitsaufträge sind vorhanden; außerhalb der Fließtext-Zählung. |
| 03 | Q1 allgemein | Das Blatt ist ein Beispiel für Aristoteles' Ethik, aber keine Quelle für seine Biografie. Dafür Q2 beibehalten. |
| 05 | S. 1, Z. 18-33; insbesondere 25-33 und 32-33 | Tugendgemäße Tätigkeit, bestes Vermögen, Betrachtung und Vorrang der Vernunft. Seelenschema und Tugendarten benötigen weiterhin Q3 I.13 / Q6. |
| 07 | S. 1, Z. 18-24 | Glück als tugendgemäße Tätigkeit. Übung und bewusste Wahl werden genauer durch Q4 II.1 / II.4 belegt. |
| 08 | S. 1, Z. 10-24; S. 2, Z. 50-58 | Vergnügen versus Tätigkeit sowie Vergleich politischen Handelns und Betrachtung. Die systematische Dreiergruppe kommt ergänzend aus Q3 I.5. Gegenwartsbeispiele bleiben eigene Übertragungen. |
| 09 | S. 1, Z. 25-49; S. 2, Z. 50-58 | Vorrang, Beständigkeit, Freude, Selbstgenüge, Lebensbedarf, Mitarbeiter, Selbstzweck, Muße und ganzes Leben. |
| 10 | S. 1, Z. 1-6 und 18-33; S. 2, Z. 57-58 und 73-75 | Höchstes Ziel, tugendgemäße vernünftige Tätigkeit, Betrachtung und Lebensdauer. |
| 11 | S. 1, Z. 6-8, 18-24 und 34-49 | Textgrundlage für eigene Bewertung: Selbstzweck, Tugend, Beständigkeit, Freude, relative Selbstgenüge. Der Text beweist keine heutigen empirischen Glückswirkungen. |
| 12 | S. 1, Z. 21-24 und 41-46; S. 2, Z. 59-68 | Historischer Sklaven-Passus, nötige Versorgung und Mitarbeiter sowie göttlicher/höchster Anspruch. Kritik an Ungleichheit und Rangordnung ist eigene heutige Bewertung. |
| 13 | S. 1, Z. 10-17 und 18-33; S. 2, Z. 73-75 | Rückkehr zu Vergnügen, Tugend, Vernunft und höchstem Leben. Schlussbewertung bleibt eigene Position. |
| 14-15 | Q1 bibliografisch / Bild- und Quellenhinweise | Original und nummerierte Fassung können jetzt verlinkt werden. Eigene Zeilenzählung ausdrücklich nennen. |

Kleine Verbesserung für Szene 10: Die Zusatzbehauptung „Aristoteles verbietet nicht jeden Spaß“ kann unmittelbar mit Q1 S. 1, Z. 14-17 (Erholung) und Z. 36-40 (Freude an Weisheit) belegt werden. Im Prompt standen diese Stellen für Szene 10 nicht ausdrücklich dabei; alternativ genügt Q5 X.6-7 als Ergänzung.

Die frühere fachliche Korrektur zu Q5 bleibt bestehen: Der Sklaven-Passus steht in NE X.6. Für Szene 12 deshalb „Q5, X.6 und X.8“ angeben, nicht allein X.8. Der Q1-Nachweis S. 1, Z. 22-23 war bereits richtig.

## Tatsächlich durchgeführte Prüfungen

1. Beide Originalseiten mit Poppler als PNG gerendert und vollständig visuell gelesen.
2. Originalzeilen anhand der PDF-Textgeometrie extrahiert; 49/26 Zeilen durch Assertions abgesichert.
3. Alle drei Promptzitate als exakte Teilzeichenfolgen der angegebenen, zusammengezogenen Zeilen geprüft.
4. Originalkopie byteweise verglichen.
5. Nummerierte PDF wieder geöffnet: Inhaltsbereich einschließlich Aufgaben ist bei erneuter Textextraktion exakt gleich dem Original.
6. Nummern im linken Rand separat extrahiert und auf vollständige Reihenfolge 1-49 / 50-75 geprüft.
7. Beide Seiten der nummerierten PDF erneut mit Poppler gerendert und visuell geprüft. Keine Überlagerung, kein abgeschnittener Text, keine fehlende Nummer. Erläuterungsfuß und Seitenzahlen liegen außerhalb des Originalinhalts.
8. Poppler meldete Hinweise zu Systemschriftfamilien; beide Renderings zeigen den gesamten Text vollständig und lesbar. Keine erkennbare Schriftabweichung zwischen Original und nummerierter Fassung.

Die Prüfung von Q1 und den drei gewünschten Originalzitaten ist damit abgeschlossen. Bildmaterial und andere fehlende Paketdateien wurden durch diese Prüfung nicht rekonstruiert.
