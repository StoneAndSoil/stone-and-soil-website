# Phase 37 – HUD und vollständige Objektausstellung

Stand: 4. Oktober 2026. Spielversion: `Builds/Phase37-HudMap-2026-10-04/StoneAndSoil.exe`. Den gesamten Buildordner zusammenlassen. Im Hauptmenü **Große Testkarte** wählen; die Ausstellung liegt auf der rechten Kartenhälfte ab X=58, Z=4. Modelle anklicken, um ihre Namen zu sehen.

## Umsetzung

- `Hauptmenue_Hintergrund.png` ist der feste Startmenü-Hintergrund. Logo und die drei bisherigen Ladebilder bleiben erhalten.
- `HUD_Leiste.png` und die StoneWood-Icons bilden die untere Leiste. Pause, ×1, ×2 und ×5 sind kompakt. Speichern/Laden erscheinen unter **Spiel**, mit den vorhandenen Bildvorlagen; die unteren Schnellknöpfe sind entfernt.
- `Spielmenue_Rahmen.png` wird in 25 Teilflächen gezeichnet: Ecken und mittlere Schmucksteine bleiben erhalten, die Flächen dazwischen passen sich an. Bau-Unterseiten passen ihre Höhe dem Inhalt an, kurze Auswahl- und Itemfenster bleiben klein. Lange Inhalte scrollen. Zusätzliche Rahmenvorlagen sind nicht nötig.
- **Bau** bietet eindeutig benannte Holz-, Stein-, Ruinen- und Skelettlagerobjekte, Einrichtung, Wege/Brücken, Vorlagen sowie Abriss/Ansicht. Jeder Objekteintrag setzt sein eigenes Material; der globale Baustil und der zusätzliche Werkbankknopf entfallen. Bestehende Kosten und Freischaltungen bleiben maßgeblich.
- **Abbau** enthält Fällen und Erdarbeiten. **Anbau** enthält Felder, Baumflächen und Beerenernte.
- **Handwerk → Beruf → Rezept → Herstellung** trennt Berufsauswahl, Rezeptliste und Herstellung. Die Warteschlange lässt sich bei Bedarf öffnen; Mindestvorräte und Auftragslöschung sind weiter verfügbar.
- Boden-Items besitzen Auswahlcollider. Das Mini-HUD zeigt Namen, ein Stück und die verbleibende Spielzeit bis zum bisherigen Ablauf nach 900 Sekunden. Reservierte Gegenstände werden als geschützt angezeigt. Beim Einsammeln verschwindet die Anzeige.
- Der Armee-Befehl nimmt verfügbare Wachen und Golems mit. Das geklickte Feld wird markiert, die Gruppe verteilt sich auf erreichbare Zielplätze. Erst nach gemeinsamer Ankunft wird der Angriff freigegeben. Verteidigungsfreigaben, Gesundheit, Expeditionen und Golemreparaturen werden berücksichtigt.
- **Unendlich** füllt die gesamten Lagervorräte je Item auf 100 auf. Wiederholtes Drücken summiert nichts auf; größere vorhandene Bestände werden nicht vernichtet. Die Lagerkapazität bleibt bestehen und darf durch den Cheat überschritten werden. Save 57 speichert die ausdrückliche Überfüllungsfreigabe; reguläre Lager behalten ihre Kapazitätsprüfung.
- Neu gebaute Werkbänke auf der großen Testkarte bleiben am gewählten Feld, statt durch die Startposition der Testkarte versetzt zu werden.

## Ausstellung

Die frische Testkarte enthält 204 Anschauungsstücke:

| Gruppe | Anzahl |
| --- | ---: |
| ModelGapKit, einschließlich Anschluss-, Tor- und Schadensvarianten | 122 |
| Alle wählbaren Bauarten, einschließlich älterer Modelle | 41 |
| Alle Itemdarstellungen | 16 |
| Beeren-/Karottenfelder in drei Zuständen und Baumpflanzung | 7 |
| Alle Gegnerrollen | 11 |
| Zwei Truhen, Werkbank, Monument, Bewohner, Golem und Baum | 7 |

Die Packung berücksichtigt die tatsächlichen Modellabmessungen und lässt zwischen belegten Rasterflächen einen freien Voxel. Anschauungsstücke besitzen keine Bewohner-, Bau-, Lager- oder Kampfkomponenten. Sie erzeugen keine zusätzlichen Betten oder Aufträge und werden beim Laden neu aufgebaut. Bereits belegte Bauflächen aus einem vorhandenen Spielstand werden für die Ausstellung ausgeblendet. Die sechs echten Bauvorlagen und die acht echten Betten der Testkarte bleiben erhalten.

## Geprüft

- Eigener Windows-Build erfolgreich.
- Sichtbare Playerprüfung mit echten HUD-Aufnahmen bei 1280×720 und 960×640.
- Alle 122 ModelGap-Prefabs und 41 Bauarten mit vorhandener Geometrie; zusätzliche Darstellungen und Rasterabstand geprüft.
- Echter Boden-Ray und Produktionsbefehl: zwei Wachen und der Golem laufen tatsächlich zu ihren Zielplätzen; der erste Platz entspricht dem geklickten Feld, die gemeinsame Ankunft sperrt den frühen Angriff.
- Itemname, Restzeit aus gespeichertem Geburtszeitpunkt, Reservierungsschutz und Entfernung geprüft.
- Cheat zweimal ausgelöst: je Item insgesamt 100 im Lager, kein Aufsummieren; Kapazität unverändert. Überfüllter Bestand durch echten Produktionsparser und Szenen-Ladeablauf wiederhergestellt.
- Große Testkarte, genau acht geschützte Betten, zugängliche Türen, zusammenhängende Erd-/Grasflächen, Armee-Rückruf/Rollenwechsel, verborgene Truheninhalte, Ladebildfolge, Herstellung/Transport und alle ModelGap-Bau-/Tor-/Brückentests bestanden.
- Speicherfixtures v29–v57 und Gefangenenbefreiung einschließlich älterem Lager-Spielstand bestanden. Die Prüfungen schreiben keine Nutzerspielstände. Die ArtSources-Dateien wurden nicht verändert.

## Vorhandene Platzhalter und offene Grafikmotive

Die angeforderten HUD- und Bedienungsänderungen sind umgesetzt. Folgende vorhandene Grafikplätze benötigen für die spätere vollständige Ausgestaltung noch eigene Modelle/Motive:

| Darstellung | Aktueller Ersatz | Benötigt für |
| --- | --- | --- |
| Brute, Knochenriese, Troll, verfluchter Baum, feindlicher Golem, Nekromant | Bestehende farbige Körper-/Kapselmodelle | Eigene Gegnerkörper und passende Animationen |
| Skelettfürst | Verziertes vorhandenes Skelettmodell | Eigenständiges Fürstenmodell |
| Boden-Items Holzboden, Holzwand, Dach-, Truhen- und Bettteil | Bestehendes Holzbrettmodell | Unterscheidbare transportierbare Bauteilpakete |
| Reliktfragment, Steinherz, Löschwasser | Vorhandene einfache Formen | Eigene Sammelobjekte bzw. Wassereimer |
| Anbau-Icon | Handwerk-Motiv mit eigener Beschriftung | Eigenständiges Pflanz-/Erntemotiv im StoneWood-Stil |

Die Ausstellung zeigt diese Ersatzmodelle bewusst mit an, damit der tatsächliche Spielstand sichtbar bleibt. Statische Anschauungsstücke führen keine Animation oder Arbeit aus; die echten Bauobjekte und Figuren außerhalb der Ausstellung bleiben funktional.

## Ingame-Bilder

![Hauptmenü](../Images/Phase37_MainMenu.png)

![Objektausstellung mit HUD](../Images/Phase37_Gallery.png)

![Bau-Auswahl](../Images/Phase37_Build.png)

![Eindeutige Steinobjekte](../Images/Phase37_StoneParts.png)

![Handwerksberufe](../Images/Phase37_CraftJobs.png)

![Schreiner-Rezepte](../Images/Phase37_Carpenter.png)

![Herstellung eines ausgewählten Rezepts](../Images/Phase37_CraftRecipe.png)

![Itemname und verbleibende Spielzeit](../Images/Phase37_GroundItem.png)
