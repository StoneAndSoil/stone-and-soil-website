# Phase 42 – FarmHoe vollständig im Spiel

Die vorhandenen Farmer Ranger und Rogue halten die FarmHoe während tatsächlicher Feldarbeit am Knochen `hand.r`. Beim Gehen, Warten, Transportieren, Ausruhen, Verteidigen oder nach dem Beenden bzw. Abbrechen der Feldarbeit ist sie unsichtbar. Ein Werkzeug wird pro Erscheinungsmodell erzeugt und für weitere Feldaufträge wiederverwendet. Rollenwechsel und Szenenladen räumen das bisherige Erscheinungsmodell samt Werkzeug auf.

## Animation

Der Farmer-Controller verwendet weiterhin KayKits **Interact** im Zustand **Work**. Die unveränderte Grundbewegung allein war für den Bodenkontakt ungeeignet. Die visuelle Ebene **FarmHoeWork** ergänzt deshalb einen eigenen, wiederholten Hackhub mit angepassten Arm- und Handpositionen: Anheben, Abwärtsschlag, kurzer Bodenkontakt und Rückholung. Ein Zyklus dauert 0,8 Einheiten der bestehenden Arbeitszeit; Arbeitsgeschwindigkeit und Spieltempo bleiben an die bestehende Simulation gekoppelt. Auch in Pause wird die letzte Arbeitsposition erhalten.

Die rechte Hand hält den Griffursprung; die linke Hand folgt dem zweiten Griff. Das Schneidblatt setzt innerhalb der Feldfläche auf, etwa 7,5 cm über der Erdoberfläche auf dem vorhandenen Ackerboden. Der gemessene Hub reicht bis etwa 44,5 cm. Die Prüfung vergleicht zusätzlich den tatsächlichen Schneidkanten-Mesh mit dem Kontaktmarker. Es wurde kein neues Bewohner-Spielstandfeld und keine zusätzliche Werkzeuginventar- oder Wegfindungslogik eingeführt. Save-Version bleibt 58.

## Assets und Änderungen

- `Assets/Art/FarmHoeKit/FarmHoe.fbx`: Kopie des fertigen Werkzeugs; importierte Hierarchie und Griffursprung erhalten.
- `Assets/Art/FarmHoeKit/Materials/`: fünf URP/Lit-Materialien für Holz, Holzlichtkante, Leder, Eisen und Schneidkante.
- `Assets/Resources/FarmTools/FarmHoe.prefab`: kollisionsfreies Werkzeug mit Griff- und Kontaktmarkern.
- `Assets/Resources/FarmerResidents/Farmer_Ranger.fbx` und `Farmer_Rogue.fbx` samt Importmetadaten: dieselben vorhandenen Farmer aus ihren bestehenden Blender-Dateien erneut mit korrekten Unity-Maßeinheiten exportiert. Der bisherige Export schrumpfte Körper und Skelett im Spiel. Modellgestaltung, Rollenidentitäten und KayKit-Medium-Knochennamen bleiben erhalten. Reproduzierbarer Export: `.unity-bootstrap/ExportFarmersHoe.py`.
- `Assets/Scripts/World/FarmHoeWork.cs`: wiederverwendetes Handwerkzeug und angepasster Hackhub; keine Collider oder Rigidbody-Komponenten.
- `Assets/Scripts/World/FarmerResidentView.cs`: visuelle Arbeitsebene, Ausblenden und stabile Ausrichtung innerhalb des Erscheinungsmodells.
- `Assets/Scripts/World/ColonyResident.cs`: berechnetes tatsächliches Feldarbeitsziel, Blickrichtung zum Feld und visuelle Aktualisierung; vorhandene Auftrags-, Rollen-, Ressourcen- und Speicherdaten bleiben maßgeblich.
- `Assets/Editor/FarmHoeAssetSetup.cs`, `WindowsBuildValidation.cs`: reproduzierbarer Import und Windows-Build.
- `Assets/Scripts/World/FarmHoeVerification.cs`: Prüfung an den echten Bewohnern mit Produktions-Speicherparser und Szenenwiederherstellung.

Die Quelldateien unter **ArtSources/FarmHoeKit** bleiben unverändert; ihr Hashvergleich ist erfolgreich. Auch die Farmer-Blender-Quelldateien wurden nur gelesen.

## Prüfung

Windows-Build erfolgreich. **FARM_HOE_PLAYER_PASSED**, Prozessende 0:

- Beide vorhandenen Farmer-Varianten, korrekter `hand.r`-Griff und genau ein Werkzeug.
- Echter Weg zum Feld ohne sichtbare Hacke, Aussaatbeginn, mehrere Hackzyklen und Aussaatabschluss.
- Schneidkante am Feldboden, sichtbares Anheben und Kontakt innerhalb der Feldfläche; auch in Pause.
- Ernteauftrag, Rollenwechsel während Arbeit, erneuter Arbeitsbeginn und Abschalten der Feldaufgabe.
- Erfassen eines laufenden Auftrags und echtes Wiederherstellen über den bestehenden Save/Ladeweg; danach erneute Arbeit ohne doppelte Werkzeuge. Kein Nutzer-Speicherplatz wurde dafür geschrieben.
- Werkzeug ohne Kollision, Rigidbody oder Änderungen an der Belegung.

Zusätzliche bestehende Prüfungen **PREPARED_MODELS_PLAYER_PASSED**, **COMPLETE_MODELS_PLAYER_PASSED** und **HUD_MAP_PLAYER_PASSED** erfolgreich: Berufsoutfits, Galerie, Straßen/Böden, Armee und Save/Laden.

## Ingame-Bilder

![Beide Farmer beim Bodenkontakt](../Images/Phase42_FrontContact.png)

![Anheben der Hacke](../Images/Phase42_Lift.png)

![Seitliche Ansicht des Arbeitshubs](../Images/Phase42_SoilContact.png)

![Nach der Aussaat ohne Werkzeug](../Images/Phase42_WorkEnded.png)

Die Bilder liegen zusätzlich nach Prüflauf sortiert im [visuellen Changelog](../../changelog/index.html).

[Phase 42 starten](../../Builds/Phase42-FarmHoe-2026-10-04/StoneAndSoil.exe)
