# Modellintegration – Phasen 39 und 40

Stand: 4. Oktober 2026. Spielstandformat 58. [Spiel starten](../../Builds/Phase40-CompleteModels-2026-10-04/StoneAndSoil.exe).

## Ergebnis

Die vorhandenen 122 ModelGapKit-Modelle bleiben erhalten. Zusätzlich sind 47 vorbereitete Modelle aus JobOutfitKit, PoweredRoadKit, WorkplaceKit und FlatRoofKit importiert. 55 weitere Modelle wurden für den bestehenden Spielumfang in `ArtSources/CompletionKit` erstellt. Insgesamt liegen 102 zusätzliche URP-Prefabs unter `Assets/Resources/PreparedKit`. Die große Testkarte zeigt sie zusammen mit den 122 älteren Modellen, allen 60 Bauarten, Items, Gegnern und weiteren vorhandenen Objekten. Zwischen den Ausstellungsflächen bleibt ein freier Voxel; die Ausstellung verändert keine Bauaufträge oder Lagerbestände.

## Straßen und Böden

Pflasterstraße verwendet das vorbereitete StoneRoad-Modell; die Runenstraße ist neu auswählbar. Holzboden nutzt WoodFloor und behält die dünne, bündige Auflage über der Erde. Straßen bleiben wirklich begehbar; beide Steinvarianten verwenden den vorhandenen Geschwindigkeitsbonus von 15 %. Über Straßen, Böden, Brücken und begehbaren Plattformen entstehen keine Trampelpfade. Vorhandene Pfade werden beim Überbauen und beim Laden entfernt, auch während Pause. Die Runenstraße ist ein sichtbares Bauteil mit Gehweg; ein Stromnetz gehört nicht zum vorhandenen Spielumfang.

## Bewohner und Berufe

Die Bewohner behalten ihre Identität, Aufgaben, Inventare, Gesundheit, Belegungen und gespeicherten Arbeitsprofile. Ihre Darstellung wechselt zu Holzfäller, Baumeister, Schmied, Steinmetz, Schreiner oder Wache entsprechend dem Arbeitsprofil. Anbau nutzt die bereits integrierten Farmer-Varianten. Tatsächliche Werkbankarbeit zeigt Koch, Steinmetz oder Schreiner passend zum Rezept. Händler, Heiler, Reisende und Schutzsuchende ersetzen die bisherigen Personenmarker in ihren vorhandenen Begegnungen. Haare, Bart, Mütze, Rucksack, Werkzeughalter und Verbände werden an dieselben Knochen gebunden; zusätzliche Animatoren werden entfernt.

Die Original-FBX des JobOutfitKit werden nicht verändert. Aus den vorhandenen BLEND-Dateien wurden separate Unity-FBX unter `Assets/Art/PreparedKit/JobOutfitKit` mit konsistenter Einheitenskalierung exportiert. Generic-Rig, Geh-/Trage-/Arbeitszustände und sichtbare Geometrie werden geprüft. Die Skalierung liegt außerhalb des animierten Rig-Wurzelobjekts; die Größe wird anhand sichtbarer Geometrie gemessen.

## Weitere Modelle

CompletionKit enthält Monumentstufen und Schadenszustände, Obelisken, einen Käfig mit öffnender Tür, Brunnen, Sammel- und Erinnerungsobjekte, drei Wagenarten mit Ladungsvarianten, Verteidigungsgeräte, Beute, Feuer, Geschosse, fünf Golembaustufen und sechs gewichtete große Gegner. Käfigöffnung, Gerätebewegungen und Fangzustände folgen der bestehenden Spielmechanik. Bewegte beladene Wagen verwenden die vorhandenen Transporte; es entsteht kein zweites Inventar. Getragene Waren verwenden eine Kiste aus dem neuen Wagenmodell.

Die 17 Workplace-Modelle sind als Einrichtung platzierbar. Säge, Steinwerkzeug und Kochstelle ersetzen zusätzlich die drei bestehenden funktionalen Werkbankaufsätze. Die übrigen Einrichtungsobjekte führen keine neuen Forschungs-, Metall- oder Heilsysteme ein. Holz-Flachdach unterstützt die bestehenden Dach-/Innenansichts- und Unterkunftsregeln.

## Prüfung und Grenzen

Alle 55 Completion-Modelle wurden anhand der Vorder- und Rückansichten visuell geprüft. Dabei wurden graue FBX-Ersatzfarben für Relikte und Gegnerdetails durch die ursprüngliche Palette korrigiert; die finale Farbprüfung besteht.

Automatische Spieltests und Ingame-Bilder wurden mit einem eigenen Testspiel ausgeführt; vorhandene Nutzerspielstände werden weder geöffnet noch überschrieben. Details der Laufprüfungen stehen in den Phase40-Protokollen unter `.unity-bootstrap`. Der Einzelkatalog benennt für jedes der 102 Modelle die tatsächliche Verwendung.

Dies sind schlichte Low-Poly-Grundmodelle. Individuelle Berufsbewegungen, Kleidungsfeinschliff, Wagenradrotation, Spezialanimationen der großen Gegner, Rauchpartikel und Verrußung sind weiter Art-Feinschliff. Die bestehenden Geh-, Trage-, Arbeits- und Kampfzustände bleiben verwendbar. Die sieben vollständigen Zusatzteil-Figuren, Bucket_Empty und SpikeTrap_Spent dienen zusätzlich als sichtbare Referenzen in der Testausstellung; die eigentlichen Zusatzteile werden modular angebunden, die Falle zeigt ihren Verbrauch durch eingefahrene/ausgeblendete Spitzen. Tiere und Jahreszeiten wurden nicht ergänzt.

## Bestandene Laufprüfungen

- Alle 102 Prefabs, URP-Materialien, gültige Generic-Avatare und tatsächliche Gehbewegungen; die Reliktfarbe wird gegen die Generatorpalette geprüft.
- Alle 55 neu erstellten Modelle in sieben Bildgruppen von vorn und hinten; sichtbare Geometrie der großen Gegner.
- Acht Arbeitsprofile an einem echten Bewohner, sichtbare Kleidung und Anbauteile, genau ein Animator. Bestehende Identitäten bleiben erhalten.
- Keine Pfade auf Pflaster, Runenstraße oder Holzboden; Überbauen entfernt Altpfade in Pause; gespeicherte Pfade unter Straßen werden verworfen. Straßengeschwindigkeit bleibt +15 %.
- Große Testkarte, Armee einschließlich Golem, alle drei Ladebilder, echte Brett-/Mahlzeitenherstellung sowie die vorhandene ModelGap-Bau-/Tor-/Begehbarkeitsprüfung.
- Produktionsparser mit versionsgetreuen Fixtures v29 bis v58 und tatsächlichem Restore; Lagercheat und Testausstellung überleben den echten Szenenwechsel ohne zusätzliche Ressourcen.
- Käfigbefreiung mit zwei benannten Personen, Heimweg und Aufnahmebedingungen; vollständiger Golembau für 26 Blöcke und Reparatur für vier Blöcke.
- Tatsächlicher Handwagentransport, Zuordnung und gespeicherter Lagerbestand; Gerätebeladung, Bediener, Geschosstreffer, Reparatur und Pausenregeln.

Die Spielstandprüfungen verwenden kontrollierte Fixtures, keine Nutzerspielstände. Die Prüfungen decken die bestehenden Regeln und die beschriebenen Fälle ab; sie sind kein vollständiger Langzeittest aller Kampagnenverläufe.

## Bilder und Katalog

- [Berufsoutfits im Spiel](../Images/Phase40_Professions.png)
- [Straße und Holzboden](../Images/Phase40_Roads.png)
- [Kompletter Einzelkatalog](PreparedAndCompletionCatalog.md)
- Die 55 Completion-Modelle werden in sieben Gruppen von vorn und hinten aufgenommen: `Images/Phase40_Completion_1_Front.png` bis `Phase40_Completion_7_Back.png`.
- [Vorheriger 122-Modelle-Katalog](ModelGapCatalog.md)
