# Phase 46 – Handwerksbuch, Bau-Icons und Weltwahl

## Umsetzung

Handwerk zeigt die drei Berufe und eine Rezeptliste links. Rechts erscheinen das Ergebnisbild, eindeutiger Name, Eingabematerial, verfügbarer Bestand, Kosten, Bestellmenge, Mindestvorrat und die vorhandene Warteschlange. Beide Spalten scrollen unabhängig. Der Rahmen wächst bis zur sicheren Bildschirmgrenze; bei 960×640 wird der Questtracker während der Werkbankansicht ausgeblendet, damit die Fenster nicht kollidieren. Das Questbuch verwendet X statt Zu.

Das Baumenü verwendet 97 transparente, aus bestehenden Spielmodellen gerenderte Vorschauen. Kategorien, Bauteile, Vorlagen und Truhen sind Bildkarten. Namen, Baukosten, Stile und Sperrbedingungen stehen in Tooltips; Bau-, Dreh-, Warteschlangen- und Belegungsfunktionen nutzen ihre bisherigen Handler. Hover, Auswahl und gesperrte Zustände werden im UI dargestellt. Die Materialnamen aus der oberen Bestandsleiste entfallen; Icons und numerische Mengen bleiben, mit eindeutigen Tooltips.

Neues Spiel öffnet zuerst die Weltwahl, ohne bereits eine Welt zu starten. Bei einem laufenden Spiel bleibt die ausdrückliche Bestätigung zum Verwerfen ungespeicherten Fortschritts erhalten. Vorhandene Speicherdateien werden durch den neuen Start nicht überschrieben.

| Welt | Größe | Inhalt |
|---|---|---|
| Flache Testwelt | 96×96 | Vorhandene vollständige Modellausstellung, Gebäudevorlagen, Halle und Betten |
| Neue normale Welt | 50×50 | Seedabhängiges Gelände mit tatsächlichen Höhenunterschieden und bestehenden Siedlungsregeln |
| Bauen | 100×100 | Ebenes Erdoberflächenraster mit sofort ausgewachsenem Gras; 100 Stück jeder der 16 Ressourcen; getrennte Baum- und Beerenbereiche |

Die 15×15-Angabe bezeichnet die Fläche jedes Pflanzbereichs: 16 Bäume mit vier Rasterfeldern Stammabstand und 64 Beerenbüsche mit zwei Rasterfeldern Abstand. Sie bezeichnet nicht 225 dicht gepackte Pflanzen. Die 1.600 Startgegenstände dürfen das normale 64er Lager überfüllen; die bestehende Cheat-Überlaufregel übernimmt das Speichern. Beim Laden werden keine weiteren Vorräte hinzugefügt.

Testgebäude und ihre Vorlagen verwenden das vorhandene Wood_FlatRoof. Ältere Roof-Bauteile in der Testwelt erhalten die flache Darstellung, ohne ihre gespeicherten Kennungen oder Baukosten umzuschreiben. Die reine Modellausstellung behält historische Dachvarianten, weil sie weiterhin alle verfügbaren Modelle zeigen soll. Normale Welten behalten die bisherigen wählbaren Dacharten.

Save 61 speichert die neue Weltgröße und das Bauweltprofil. Deterministische, eindeutig benannte Bäume und Büsche werden vor der Wiederherstellung ihres Zustands aufgebaut. Vorhandene Baumfällung, Nachwuchs, Beerenzustände, Gras und verbrauchte Vorräte bleiben über die vorhandenen Speicherpfade erhalten. Die alten booleschen Testwelt-Startaufrufe bleiben für bestehende Prüfungen kompatibel.

## Geänderte Dateien

- Assets/Scripts/World/GameHudController.cs: Handwerksbuch, Weltwahl, Bau-Bildkarten, Bestandsleiste und sichere Fensterpositionen.
- Assets/Scripts/World/ItemIconCatalog.cs: Listenzeilen und passende Größen für Kategorie-/Baukarten.
- Assets/Scripts/World/BuildIconCatalog.cs (neu): zentrale Modell-/Spritezuordnung und Materialicon-Fallback.
- Assets/Editor/BuildIconAssetSetup.cs (neu): Vorschauen rendern und als transparente UI-Sprites importieren.
- Assets/Resources/UIConcepts/BuildIcons/ (neu): 97 PNGs mit Sprite-Metadaten.
- Assets/Editor/GameUiAssetSetup.cs: Bau-Sprites vor dem allgemeinen Texturimport schützen.
- Assets/Editor/WindowsBuildValidation.cs: eigener Phase-46-Build.
- Assets/Scripts/World/PromiseQuestHud.cs: Questbuch-X.
- Assets/Scripts/World/SeededForest.cs: Weltmodi und Profilzustand.
- Assets/Scripts/World/GameSaveController.cs: Startprofile, Save 61 und abwärtskompatible Größenprüfung.
- Assets/Scripts/World/BuildingWorldLayout.cs (neu): Baum-/Beerenfelder der Bauwelt.
- Assets/Scripts/World/ColonyResidentSpawner.cs: passendes Pflanzenlayout wählen.
- Assets/Scripts/World/StockpileView.cs: einmalige 100er Startvorräte.
- Assets/Scripts/World/VoxelWorldView.cs: sofort gewachsenes Gras beim Bauweltstart.
- Assets/Scripts/World/TestMapLayout.cs und PreparedKitView.cs: Flachdächer der Testgebäude.
- Assets/Scripts/World/WorldChoicesVerification.cs (neu): reproduzierbarer Spieltest über --verify-world-choices.
- README.md, `Documentation/Spielanleitung.md`, CHANGELOG.md, Tutorial.md, dieser Bericht und Documentation/Images/Phase46_*.png.

ArtSources und Original-Nutzerspielstände wurden nicht bearbeitet. Die 38 PNGs des vorherigen Item-Icon-Hashnachweises sind unverändert. Vorhandene Änderungen anderer Chats wurden beibehalten.

## Prüfungen und Grenzen

Windows-Build mit Unity 6000.3.25f1 bestanden. Im isolierten Prüfprojekt: drei neue Welten über die echten Menühandler gestartet; 100×100 Topsoil und 10.000 sofort gewachsene Grasfelder, Pflanzenflächen/Abstände, exakt 100 jeder Ressource, 50×50 tatsächliche Höhenvariation und die vollständige 96×96-Ausstellung kontrolliert. Alle eigenen funktionalen Testdächer verwenden das Flachdachmodell. Capture, Produktionsparser und tatsächlicher asynchroner Szenen-Ladepfad wurden für alle drei Größen geprüft; Pflanzen und Vorräte werden nicht verdoppelt.

Alle drei Handwerkskategorien und acht Rezepte ausgewählt, Mindestvorräte über ihre UI-Handler gesetzt, Warteschlangenansicht geöffnet und Bau-Wand-Icon bis zum realen Platzierungsmodus geprüft. Für jede Bauart existiert ein eigenes Holz-/Standardvorschaubild. Screenshots bei 1920×1080 und 960×640 wurden erzeugt und visuell geprüft. Der automatische Handleradapter ist kein Nachweis echter Mauskliks; Die direkte Mausprüfung mit dem Computer-Use-Werkzeug bestätigt Neues Spiel → Bauen, Bau → Holz → Wand bis zur sichtbaren Platzierungsvorschau, das Handwerksbuch, die Rezeptauswahl Holzboden, den Wechsel zu Steinmetz und Küche, einen eingereihten Mahlzeitauftrag sowie das Öffnen und Schließen des Questbuchs mit X. Diese Stichprobe wurde bei 1280×800 durchgeführt; alle acht Rezept-Handler sind zusätzlich automatisch geprüft. Die Fertigung aller Rezepte, Queue-Ziehen, Kampagne, Kampf und Bewegungsanimationen wurden in dieser UI-Phase nicht erneut als Langzeittest durchgespielt. Ihre vorherigen Prüfungen bleiben im Phase-45-Bericht verfügbar.

Versionsgetreue Speicherfixtures v29–v61 und tatsächliches Laden einer v29-Testwelt bestanden. Beim Start des Batch-Editors meldet der bestehende Unity-Suchindex eine ArgumentOutOfRangeException; der separate Spielerlauf ist fehlerfrei. Keine Original-Nutzerspielstände als Testfixtures verwendet.

Protokolle: .unity-bootstrap/Phase46-WindowsBuild.log, Phase46-Player.log und Phase46-SaveContinuity.log. Die Ingame-Bilder liegen zusätzlich in changelog/Phase_46/, die Übersicht unter changelog/index.html.

[Spiel starten](../../Builds/Phase46-WorldChoices-2026-10-04/StoneAndSoil.exe) · [Bildverlauf](../../changelog/index.html)

![Weltwahl](../Images/Phase46_WorldChooser.png)
![Handwerksbuch](../Images/Phase46_Craft_plank.png)
![Bau-Bildkarten](../Images/Phase46_BuildWood.png)
![Kleines Fenster](../Images/Phase46_SmallCraft.png)
