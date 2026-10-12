# Geländestufen, Grafikoptionen und Laufzeit – 6. Oktober 2026

## Umsetzung

Alle vier FBX-Prototypen `GrassCliff_1m_A/B` und `StoneCliff_1m_A/B` sind eingebunden. Die Auswahl A/B folgt einem festen Hash aus Seed und Voxelposition. Nur freiliegende Seiten und Oberflächen werden aus den importierten Dreiecken erzeugt und zu Chunk-Meshes zusammengefasst. Verdeckte Voxel erzeugen keine Modellobjekte. Grasoberseiten schließen am Raster bündig zusammen; Felsoberseiten erhalten eine geschlossene ebene Deckfläche gegen kleine Exportlücken. Facettierte Felsseiten und Grasränder stammen aus den Modellen.

Die ursprünglichen Voxel-MeshCollider bleiben die Grundlage für Abbau, Platzierung, Rasterhöhen und Wegfindung. Änderungen aktualisieren den eigenen Chunk und gegebenenfalls Nachbarchunks an Grenzen. Oberirdische Erde wird sofort grün dargestellt. Gespeicherte Gras-Wachstums- und Trampelzeiten bleiben erhalten, benötigen aber keine optisch identischen Chunk-Neubauten mehr.

Neue normale 50×50-Welten nutzen breitere Terrassen, einen geschützten flachen Startbereich und höchstens einen Höhenmeter zwischen benachbarten Feldern. Vierzig zusätzliche funktionierende Waldbäume und 24 Beerenbüsche verteilen sich deterministisch, mit Waldgruppen und freier Startfläche. Die drei bisherigen KayKit-Baumvarianten bleiben erhalten. Zwei weitere Buschvarianten sowie zwei Grasmodelle und ein kleines Felsmodell aus dem vorhandenen Forest Nature Pack wurden als Spielassets übernommen. Gras und kleine Felsen sind nicht blockierende Bodendetails mit GPU-Instancing; sie verschwinden auf belegten Bau- und Farmflächen und passen sich dem Gelände an.

Spielstandformat 70 speichert die Generation des Geländes. Alte normale Spielstände verwenden weiterhin die alte Höhenformel und die alte Waldanzahl und behalten diese Einstellung auch beim erneuten Speichern. Flache Testwelt, Bauen und die feste Kampagnengeometrie bleiben erhalten. Die Art-Quellen wurden nicht verändert; originale Nutzerspielstände wurden nicht zum Testen überschrieben.

## Gameplay und Bedienung

- Dorfpalisade unter Bau auswählen und mit gedrückter linker Maustaste eine Reihe ziehen. Die bestehende Reihenplanung und Kantenvorschau werden jetzt auch von der Maussteuerung benutzt. Drehen, Baukosten, Bewohnerbau, Kollision und Reparatur nutzen die vorhandenen Regeln.
- Hauptmenü → Einstellungen → Grafik / Anzeige → „Schatten anzeigen“. Die Einstellung bleibt auf dem PC gespeichert und wirkt auch nach Weltwechseln. Sie schaltet tatsächliche Lichtschatten ab, ohne die Beleuchtung auszuschalten oder URP-Projektassets zur Laufzeit zu verändern.
- x2/x5 erhöhen die Simulation, ohne die Physikfrequenz pro realer Sekunde zu vervielfachen. Im Projekt verwendet kein Gameplay-System `FixedUpdate` oder dynamische Rigidbody-Bewegung. Die Kamera verwendet weiterhin unabhängige Mauseingaben und reale Zeit.
- Laufboni werden pro Belegungsrevision zwischengespeichert. Statt einer vollständigen Gebäudesuche bei jedem Bewegungsschritt erfolgt ein Dictionary-Zugriff. Die Prüfung auf überbaute Trampelpfade läuft bei Belegungsänderungen. Voxel-Laufhöhen werden pro Spalte gespeichert und bei Abbau oder Platzierung invalidiert.

## Prüfungen im Unity-Spiel

Der Windows-Release-Build wurde in einer isolierten Projektkopie erstellt. Die tatsächliche Spielkarte wurde aus zwei Kamerawinkeln und ohne Schatten aufgenommen; das Grafikmenü wurde ebenfalls fotografiert. Bilder werden automatisch unter `changelog/Phase_60` archiviert.

Die direkte Geländeprüfung bestand: Start über die tatsächlichen Menübuttons, 50×50-Normalwelt, Chunk-Darstellung, Forest-Instancing, Ein-Meter-Terrassen, reale Bewegung eines Bewohners, Abbau und Wiederauffüllen mit sofort korrekter Laufhöhe, privates Speichern und vollständiger Szenenneustart, Palisaden-Reihenbauaufträge, Schatten aus/an sowie Kamera-Drehung bei x1/x2/x5. Eine normale Testwelt der alten Generation wurde als Version-69-Datei geladen und danach als Version 70 wieder aufgenommen; Gelände und alte Waldanzahl blieben erhalten. Flache Testwelt und 100×100-Baumodus wurden anschließend gestartet.

In der kurzen Messung mit einer 50×50-Welt, 28 sichtbaren Gelände-Chunks und 7.775 freiliegenden Geländevoxeln lagen die mittleren Framezeiten bei x1 bei 2,46 ms, x2 bei 2,50 ms und x5 bei 3,08 ms. Einzelspitzen lagen bei rund 21–23 ms. Dies sind jeweils zwei Sekunden auf diesem Rechner, während Eingaben zum Kameradrehen erzeugt wurden; ein weiterer Prüflauf lief parallel. Es ist keine Langzeit- oder Hardwaregarantie und kein Vergleich mit einer identischen alten Version.

Die Kampagnenregression bestand: alle 10.000 CSV-Felder, beide unabhängigen Lager, reale Bewegung, zwei Voxel Kopffreiheit, Farm und Handwerk, Terrain- und Auftragsänderungen nach Laden, Kämpfe, Rettung während Laden, tatsächliche Ankunft und einmalige Belohnungen. Der Spielstandparser akzeptierte versionsgerechte Testdateien von 29 bis 70; Version 29 wurde zusätzlich tatsächlich angewendet. Im isolierten Unity-Editor trat die schon bekannte Search-Index-Ausnahme auf, die Speicherprüfung lief trotzdem erfolgreich durch. Die erfolgreiche Gelände- und Kampagnenprüfung im Player enthielt keine Exceptions.

Die zusätzliche Palisadenprüfung bestand: fünf von Bewohnern gebaute Segmente mit tatsächlichem Verbrauch von 15 Brettern, Kantenvorschau und umgekehrte Reihenwahl, bündige Anschlüsse, alle vier Drehungen, physische Collider und Wegblockierung, alter Wood_Fence, Beschädigung/Reparatur sowie Laden mit unfertigem Auftrag. Ihr erster Durchlauf wertete den Austausch des letzten Baugerüsts zu früh aus; die Prüfung wartet jetzt einen Frame auf die von Unity verzögerte Entfernung des alten Visuals. Kompakte Prüfprotokolle stehen unter `Documentation/Verification/TerrainScenery/`.

## Dateien

Neu: `Assets/Scripts/World/TerrainSceneryRenderer.cs`, `ForestGroundScenery.cs`, `GameGraphicsSettings.cs`, `TerrainSceneryVerification.cs`; `Assets/Editor/TerrainSceneryAssetSetup.cs`.

Erweitert unter `Assets/Scripts/World/`: `VoxelWorldView.cs`, `VoxelWorld.cs`, `VoxelDesignationTool.cs`, `GameHudController.cs`, `GameTimeController.cs`, `TrailNetwork.cs`, `SeededForest.cs`, `ColonyResidentSpawner.cs`, `BerryBushView.cs`, `GameSaveController.cs`. Angepasste Prüffälle: `ProfessionVerification.cs`, `VillagePalisadeVerification.cs`. Build-Einstieg: `Assets/Editor/WindowsBuildValidation.cs`.

Assets: lesbarer Import der vier Terrain-FBX; fünf zusätzliche Forest-FBX unter `Assets/Resources/KayKitForest/` und zugehörige Unity-Metadateien. Dokumentation und visueller Changelog aktualisiert.

## Verbleibende optische Unterschiede und Grenzen

Die Vorschau zeigt eine kleine von Hand komponierte Terrasse. Die Spielwelt bleibt ein bearbeitbares rechtwinkliges Raster: lange Stufenkanten, wiederholte Felslagen und der hohe äußere Kartenrand sind weiterhin erkennbar. Felsoberflächen sind zunächst gleichmäßig grau, Wege behalten ihre bisherigen Modelle. Waldanordnung und kleine Bodendetails sind weniger dicht als eine handkomponierte Waldszene; Büsche bleiben als erntbare Beerenbüsche lesbar. Beleuchtung, Tageszeit, Schatten und Farbwirkung unterscheiden sich vom Blender-Render. Zusätzliche Landschaftselemente wie Wasser, schräg ausgeschnittene Klippen und handgestaltete Lichtstimmung sind nicht hinzugefügt.

Die kurze Messung prüft die Beschleunigung und Kamera auf diesem PC. Große gewachsene Siedlungen, viele gleichzeitige Arbeits- und Kampfrouten sowie die Leistung im geöffneten Unity-Editor und auf schwächeren PCs müssen weiter beobachtet werden.

Die gemeinsame Berufsprüfung im Abschlussbuild bestand ebenfalls: tatsächliche Holz-, Stein- und Mahlzeitenproduktion, Freischaltungen, Rollenwechsel, Werkbankzuordnung, Materialrückgabe, Pause, Warteschlange, Mindestvorrat und privates Speichern/Laden. Der endgültige Build unterscheidet sich vom zuvor geprüften Gelände- und Kampagnenbuild nur durch die korrigierte Wartezeit des Palisaden-Prüffalls.
