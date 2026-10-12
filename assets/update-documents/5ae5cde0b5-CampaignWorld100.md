# Phase 49 – Die feste Kampagnenwelt

Unter **Neues Spiel → Kampagne** startet die neue 100×100-Welt. Die bestehenden Modi bleiben verfügbar. Der Build ist `Builds/Phase49-CampaignWorld-2026-10-04/StoneAndSoil.exe`; den gesamten Buildordner zusammenlassen.

## Umsetzung

- Alle 10.000 Geländeoberflächen entsprechen exakt den 100×100 CSV-Werten. Höhe = bisherige Bodenhöhe 30 plus CSV-Wert 0–4. Das Weltvolumen ist in dieser Variante 40 Voxel hoch, damit oberhalb der Hügel Platz bleibt. Bestehende Chunkmeshes und MeshCollider werden verwendet; keine 10.000 Geländeobjekte. Gras ist zu Beginn gewachsen.
- Die vorbereitete Verteilung wird mit der gleichen Python-Zufallsfolge wie die Vorlage übernommen: 187 Bäume in drei vorhandenen KayKit-Varianten. Doppelte Buschpositionen der Vorlage sind zusammengefasst: 265 funktionierende Beerenbüsche. 145 Wegfelder umfassen die Vorlage, Verbindungen bei diagonalen Schritten und Verlängerungen bis zu beiden Eingängen. Seedwechsel verändern Gelände und Vegetationspositionen nicht.
- Startbasis beim Gründungsstein (22,54): kleines Haus aus bestehenden modularen Böden, Wänden, Durchgang und Flachdächern; echte Werkbank (17,53), 64er Starttruhe (21,53), Brunnen, Anschlagtafel, Wachtposten, Wachturm mit drei Rampen, zwölf reife Karottenfelder und Palisaden. Vier bestehende Menschen und Granit starten am Monument. Mira übernimmt Bauer, Taro Handwerker; kein zusätzlicher Bewohner. Vier bestehende geschützte Betten liegen in/bei der Basis mit Dach. Vorräte: acht Stämme, 18 Beeren, sechs Mahlzeiten.
- Die Basis ist für Betten geringfügig größer als die rein optische Vorlage; das Feld hat eine Öffnung. Kampagnen-Durchgänge sind höher, Dächer etwas angehoben. Wachturmdächer haben zwei Voxel Kopffreiheit und vier ergänzte obere Stützen. Die zusätzliche Schwellengeometrie der Skeletttür ist deaktiviert, da dort bereits ein echter Boden liegt. Die Art-Quelldateien bleiben unverändert.
- Lager 1 (75,73) und Lager 2 (78,25) besitzen eigene IDs, Obeliskgesundheit, Krieger/Magier, Erholung, Aufdeckung, Sieg, einmalige Lagerbelohnung und Außenpostenstatus. Armee und Vorstoß richten sich auf das ausgewählte Lager. Kämpfer, Gegner und Expeditionen behalten ihre Lagerzuordnung beim Laden. Außenpostenübergabe betrifft nur das betreffende Lager.
- Relikte, Schlüssel, Varek und Steinherz bleiben gemeinsame Kampagnenmechaniken mit einmaliger Belohnung. Ein früher erfolgreicher Obeliskangriff ermöglicht weiterhin den alternativen Reliktweg; die Entscheidungsschlacht benötigt ausdrückliche Bestätigung. Die beiden bisherigen Gefangenen Alva/Tarek sind im zweiten Lager; es werden keine doppelten namensgleichen Gefangenen erzeugt. Das Rettungsziel verlangt die Niederlage beider Lager und ihre tatsächliche Heimkehr.
- Save 64 ergänzt die Lagerliste und den Weltmodus. Das ältere einzelne `camp` bleibt als Kompatibilitätsfeld erhalten; alte Lager ohne ID werden als Lager 1 geladen. Terrainänderungen oberhalb der alten Bodenhöhe werden gespeichert; ursprüngliche Luft über Hügeln wird nicht als abgebauter Boden gespeichert. Gebäude, Warteschlangen, Felder, Waldzustände, Gefangenenpositionen und Expeditionen bleiben Teil des vorhandenen Systems.

## Prüfungen

`CampaignWorldVerification` startet über die tatsächlichen Hauptmenü-Schaltflächen, verwendet die Produktionssysteme und den Produktionsparser. Save/Load erfolgt über private JSON-Testdaten und den echten Szenenladepfad; keine Nutzerspeicherplätze werden geschrieben.

- Neues Spiel → Kampagne; Vergleich jedes CSV-Feldes; maximal ein Voxel Höhenunterschied zwischen Nachbarn; feste Waldpositionen auch mit anderem Seed.
- Haus-/Werkbankzugang, Feldöffnung, Turmrampen. Zwei Voxel hohe Kapseln gegen die tatsächlich erzeugten Unity-Collider an beiden Wegstrecken und Durchgängen; Bewohner läuft beide Lagerzugänge über echte Schrittbewegung ab.
- Tatsächliche Bretterherstellung durch Handwerker und Karottenernte durch Bauer. Beide Lager mit echten zeitgesteuerten Nahkampfschlagwechseln geprüft.
- Laden mit unterschiedlich beschädigten Obelisken, vier lagergebundenen Verteidigern, Expedition zum zweiten Lager, geändertem Gelände, Baumfällmarkierung und Werkbankwarteschlange.
- Früher Lagerangriff, bewusster Schlachtstart, Sieg über Varek, voneinander unabhängige Lagersiege und Außenpostenbesitz. Siegfixtures werden zur schnellen vollständigen Zustandsprüfung über den regulären Schadens-/Todespfad herbeigeführt; kein ausbalancierter Langzeitkampf.
- Laden während der Gefangenenrettung; beide Personen laufen zum Monument und werden einmalig vorgestellt. Kein zusätzliches Relikt/Steinherz nach Laden.
- Separate Unity-Speicherprüfung: versionsgetreue Fixtures 29 bis 64 akzeptiert; tatsächliches Laden einer Version-29-Fixture bestanden. Vorhandene private Spielstände wurden nicht geladen oder verändert.
- Windows-Release-Build kompiliert erfolgreich. Zusätzlich wurde Neues Spiel → Kampagne im normalen Player per Maus bei 1280×720 gestartet; alle vier Weltoptionen, HUD und die arbeitende Farm wurden sichtbar geprüft. Kontrollbilder aus dem Unity-Player liegen unter `Documentation/Images/Phase49_*` und `changelog/Phase_49/`; die visuelle Übersicht steht in `changelog/index.html`.

## Verbleibende Grenzen

Langzeitbalance, viele zusätzliche Gebäude und Leistung auf anderen Rechnern benötigen weiterhin einen längeren Betatest. Die Karte entspricht in Gelände und Platzierung der Vorlage; Hausgröße, Bettunterstände, Rampen und Eingangsbreite wurden für Spielfunktionen angepasst. Es fehlen für diesen Kartenauftrag keine erforderlichen Modelle. Die bestehenden allgemeinen Beta-Grenzen, darunter einige dekorative Arbeitsplätze, bleiben bestehen.

## Geänderte Projektdateien

- `Assets/Scripts/World/SeededForest.cs`
- `Assets/Scripts/World/VoxelWorldView.cs`
- `Assets/Scripts/World/ColonyResidentSpawner.cs`
- `Assets/Scripts/World/StockpileView.cs`
- `Assets/Scripts/World/WorkbenchView.cs`
- `Assets/Scripts/World/WorldCameraController.cs`
- `Assets/Scripts/World/CampaignWorldLayout.cs`
- `Assets/Scripts/World/SkeletonCamp.cs`
- `Assets/Scripts/World/BuildingModule.cs`
- `Assets/Scripts/World/CampRescue.cs`
- `Assets/Scripts/World/SkeletonWaveCatalog.cs`
- `Assets/Scripts/World/SkeletonRaider.cs`
- `Assets/Scripts/World/ColonyResident.cs`
- `Assets/Scripts/World/RaidDirector.cs`
- `Assets/Scripts/World/GameSaveController.cs`
- `Assets/Scripts/World/GameHudController.cs`
- `Assets/Scripts/World/StonePromiseCampaign.cs`
- `Assets/Scripts/World/BuildingTemplateLibrary.cs`
- `Assets/Scripts/World/ColonyProgression.cs`
- `Assets/Scripts/World/SettlementStories.cs`
- `Assets/Scripts/World/SpawnMonumentView.cs`
- `Assets/Editor/WindowsBuildValidation.cs`
- `Assets/Scripts/World/PreparedKitView.cs`
- `Assets/Scripts/World/TreeView.cs`
- `Assets/Resources/CampaignMap/heightmap_100x100.csv.txt`
- `Assets/Resources/CampaignMap/layout.json`
- `Assets/Scripts/World/SettlementChronicle.cs`
- `Assets/Scripts/World/CampaignWorldVerification.cs`
- `Assets/Scripts/World/ModelGapView.cs`
