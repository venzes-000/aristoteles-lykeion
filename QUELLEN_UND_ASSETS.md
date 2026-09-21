# Quellen und Assets

## Textquellen

Q1: Unterrichtsblatt „Aristoteles: Glückseligkeit als Selbstzweck und wahres Ziel des Menschen“, S. 1–2; Auszüge aus Nikomachische Ethik X.6–7. Übersetzer nicht genannt. Original aus dem vom Nutzer genannten Chat „Präsentationsplan entwickeln“. Original und ergänzte nummerierte Fassung liegen unter `src/material/` und `dist/material/`.

Die nummerierte Fassung ergänzt nur Zeilennummern: S. 1 = 1–49, S. 2 = 50–75. Überschrift, Leerzeilen und Arbeitsaufträge sind ausgeschlossen. Alle 75 Textzeilen wurden gegen die Original-PDF geprüft. Die drei verwendeten Zitate stimmen exakt mit Z. 32–33, 75 und 22–23 überein. Originalinhalt und Umbrüche bleiben erhalten. Dokumentation: `docs/Q1_Pruefbericht.md`.

Q2: Christopher Shields, *Aristotle*, Stanford Encyclopedia of Philosophy, §§ 1–2. https://plato.stanford.edu/entries/aristotle/

Q3: Aristotle, *Nicomachean Ethics*, Book I, Übersetzung W. D. Ross, Kapitel 5, 7, 13; Internet Classics Archive, MIT. https://classics.mit.edu/Aristotle/nicomachaen.1.i.html

Q4: Dasselbe Werk, Book II, Kapitel 1, 4, 6–7. https://classics.mit.edu/Aristotle/nicomachaen.2.ii.html

Q5: Dasselbe Werk, Book X, Kapitel 6–8. Der historisch problematische Sklaven-Passus steht in X.6; die Erörterung äußerer Güter auch in X.8. https://classics.mit.edu/Aristotle/nicomachaen.10.x.html

Q6: Richard Kraut, *Aristotle’s Ethics*, Stanford Encyclopedia of Philosophy, §§ 2, 4–5 und 10, überarbeitet 11.08.2026. https://plato.stanford.edu/entries/aristotle-ethics/

Q2–Q6 wurden am 21.09.2026 direkt geprüft. Das im Prompt genannte frühere Abrufdatum 15.09.2026 bleibt als Datum der Vorfassung kenntlich. Heutige Beispiele und Bewertungen sind eigene Übertragungen. Englische Quellen werden sinngemäß erläutert; die deutschen Originalzitate stammen ausschließlich aus Q1.

## Illustrationen

Die im Prompt genannten Originalbilder B1–B4, die frühere PPTX und das vollständige ZIP-Materialpaket waren hier nicht als herunterladbare lokale Dateien verfügbar. Der ursprüngliche Chat konnte gelesen werden; dessen erzeugte Downloadverweise waren über diesen Zugang nicht auflösbar. Die Browseransicht des Chats verlangte eine Anmeldung. Deshalb wurden mit OpenAI ImageGen am 21.09.2026 genau drei neue Assets ergänzt:

| ID | Datei | Abmessungen | Verwendung |
|---|---|---|---|
| N1 | figuren-posen.png | 1536 × 1024 | 3 × 2 Raster, Philosoph und Schüler, sechs vollständige Posen |
| N2 | tugend-szenen.png | 2172 × 724 | 3 × 1 Raster, Feigheit / Tapferkeit / Tollkühnheit |
| N3 | lykeion-hintergrund.png | 1672 × 941 | Dekorativer Säulengang |

Alle liegen unter `src/assets/images/` und im Build. N1: Zellen 0–2 Philosoph (nachdenklich, zeigend, Schriftrolle), 3–5 Schüler (Controller, helfende Geste, lesend). CSS-Hintergrundgröße 300 % × 200 %, X-Position 0/50/100 %, Y-Position 0/100 %. N2: CSS-Hintergrundgröße 300 % × 100 %, X-Position 0/50/100 %. Jede Zelle wird einzeln gezeigt; kein ganzer Posenbogen als Figur. Proportionen bleiben erhalten. Der Hintergrund ist dekorativ und für assistive Technik verborgen. Figuren und Szenen besitzen Alt-Beschreibungen und sichtbare Bildunterschriften.

N1–N3 sind freie Erklärillustrationen, keine historischen Originale. Das Seelenschema ist eine eigene fachliche Darstellung nach NE I.13. Die generierten Bilder dürfen keine Beweiskraft für historische oder philosophische Aussagen beanspruchen. Verwendete Prompts: `docs/Bildprompts.json`.

## Schriften

- Cormorant Garamond, variable Schrift, Google Fonts / Christian Thalmann: https://github.com/google/fonts/tree/main/ofl/cormorantgaramond
- DM Sans, variable Schrift, Google Fonts: https://github.com/google/fonts/tree/main/ofl/dmsans

Am 21.09.2026 aus dem offiziellen Google-Fonts-Repository bezogen. Lokal unter `src/assets/fonts/` gebündelt. Die jeweiligen Original-Lizenzdateien (SIL Open Font License 1.1) liegen daneben. Keine Font-CDNs zur Laufzeit.

## Technische Referenzen

- MDN, Broadcast Channel API: https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API
- MDN, prefers-reduced-motion: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion

Am 21.09.2026 geprüft. Native CSS- und Web-Animations-API; keine externen Laufzeitbibliotheken, Telemetrie oder Serverkonten.
