# Phase 48 – Bewohner, Alarm und Holzstraße

Die Bewohnerdarstellung verwendet jetzt eine zur bereits gedrehten Figur passende lokale Drehung. Kleine Schritte werden auch bei hohen Bildraten erkannt. Schlafende Figuren liegen entlang der langen Bettachse, einschließlich gedrehter Betten; die Darstellung berücksichtigt die Drehung des Bewohnerobjekts auch beim Versetzen auf das Bett.

Hunger verliert einen Punkt alle 20 statt 10 Simulationstakte. Arbeitsenergie sinkt nur bei jedem zweiten Arbeitstakt: Die bisherige Dauer bis zur Müdigkeit verdoppelt sich. Bett-Erholung bleibt unverändert. Findet ein müder Bewohner nicht rechtzeitig zum Bett, beginnt nach 20 Simulationssekunden eine langsamere Erholung vor Ort. Er bleibt damit nicht dauerhaft in einer Ruhepause hängen. Fehlende Nahrung oder unerreichbare Arbeitsplätze werden weiterhin nicht umgangen.

Die Entfernung zur Starttruhe verhindert Feldarbeit grundsätzlich nicht. Ein echter Bauer hat im Prüflauf bei entfernter Starttruhe ausgesät, die Wachstumsphase abgewartet und Karotten geerntet. Damit ist nicht bewiesen, welche zusätzliche Blockade in einer konkreten privaten Siedlung bestand; private Spielstände wurden nicht bearbeitet.

## Bedienung

- **Alarmglocke anklicken → Alarm läuten / Alarm beenden.** Bewohner einschließlich des Steingolems unterbrechen ihre Arbeit und sammeln sich innerhalb eines Radius von vier Feldern. Dort wirken sie als Verteidiger, ohne ihre gespeicherten Berufe, individuellen Jobfreigaben oder Verteidigungseinstellungen umzuschreiben. Sie verfolgen keine Alarmziele außerhalb dieses Radius. Während des Alarmdienstes pausieren ihre Bedürfnisse. Bei Alarmende gelten wieder die bisherigen Aufgaben und Bedürfnisse. Verwundete erholen sich weiterhin; Expeditionsteilnehmer werden zurückgerufen und schließen sich nach ihrer Rückkehr an. Bestehende Armeeaufträge werden beim Alarm abgebrochen. Auch der Golem beteiligt sich; seine Reparaturregeln bleiben erhalten. Neue Armee- und Expeditionsaufträge sind während eines aktiven Alarms gesperrt.
- **Spiel → Bewohner: kein Hunger / keine Müdigkeit.** Der umschaltbare Cheat füllt beide Werte auf 100 und hält sie dort. Ausschalten setzt den normalen Verbrauch wieder fort. Der Zustand wird gespeichert; ein neues Spiel startet ohne diesen Cheat.
- **Starttruhe anklicken → Starttruhe verschieben.** Eine gebaute Truhe hat ebenfalls einen Verschiebebutton. Danach ein freies erreichbares Bodenfeld wählen. Rechtsklick bricht ab. Inhalt, Kennung und Lagerregeln bleiben erhalten; laufende Transportreservierungen werden vorher aufgelöst.
- **Fertiges eigenes Objekt → Objekt verschieben.** Geeignete Bodenbauteile, Einrichtung, Arbeitsplätze, Betten, Zäune und andere gewöhnliche Bauteile lassen sich umsetzen; mit Komma/Punkt drehen. Arbeitsplätze behalten Aufträge und Vorratsregeln. Dächer, Deck-/Brückenkonstruktionen, Monument und Golembau werden nicht frei versetzt; eine benötigte Dachstütze darf nicht verschwinden. Bei belegtem oder ungeeignetem Ziel bleibt das Original stehen. Verschieben erfolgt direkt über das Menü und erzeugt keinen zusätzlichen Transportauftrag.
- **Bau → Wege & Brücken → Holzstraße.** Ein Brett pro Feld; vorhandene Holzplanken-Grafik, bündig über dem Boden. Bewohner laufen darauf sowie auf Holzböden **20 % schneller**. Stein-/Runenstraßen behalten ihren 15-%-Bonus. Keine Trampelpfade auf Holzstraße oder Holzboden; auf unbebauter Erde können weiterhin Laufwege entstehen.
- Tooltips werden pro UI-Durchlauf zurückgesetzt. Symbol- und Rezeptbuttons geben den Tooltip ausschließlich unter dem Mauszeiger aus, sodass Tastaturfokus keinen permanenten Hinweis hinterlässt.

## Prüfungen

`Phase48-Residents.log`: doppelter Verbrauchszeitraum, vier Lauf- und vier Bettdrehungen, Erholung ohne Bettankunft, echte Aussaat/Wachstum/Ernte, Alarm für Menschen und Golem, Radiusbegrenzung, unveränderte Berufe/Jobfreigaben, Cheat, Verschieben der Starttruhe und einer gebauten Truhe, erhaltene Produktionswarteschlange, beide Holzgeschwindigkeitsboni und tatsächlicher Szenenwechsel mit gespeicherten neuen Zuständen bestanden.

`Phase48-SaveContinuity.log`: Parser-Testfixtures Version 29–63 und tatsächliches Anwenden einer Version-29-Siedlung bestanden. Der Editor meldete beim Start einen bereits bekannten Suchindexfehler; die Speicherprüfungen bestanden.

`Phase48-CraftingRegression.log`: zusätzlich echte Herstellung aller acht Rezepte durch Bewohner an sechs Arbeitsplätzen sowie Warteschlangen, Mindestvorräte und Laden bestanden.

Native Mausprüfung bei 1280×800: ×2 angeklickt, Hinweis sichtbar; Maus danach auf leeren HUD-Bereich bewegt, Hinweis verschwunden. Bewohner-Cheat per Maus eingeschaltet und sichtbar geprüft. Diese Prüfung verwendete die Computer-Use-Anleitung. Keine vorhandenen Spielstände gespeichert oder überschrieben.

Kontrollbilder liegen unter `Documentation/Images/Phase48_*.png` und in der [Changelog-Galerie](../../changelog/index.html). Neue Speicherformatversion: **63**; ältere Formate bleiben lesbar. Neue Formate können nicht mit älteren Spielversionen geladen werden.

## Geänderte Dateien

Neu: `Assets/Scripts/World/ResidentNeedsCheat.cs`, `ResidentFixesVerification.cs` und Metadaten. Geändert im selben Verzeichnis: `ColonyResident.cs`, `WorkerEnergyState.cs`, `WorkerHungerState.cs`, `DefenseDevice.cs`, `RaidDirector.cs`, `GameSaveController.cs`, `GameHudController.cs`, `GameUiArt.cs`, `ItemIconCatalog.cs`, `StockpileView.cs`, `ChestView.cs`, `BuildingModule.cs`, `VoxelDesignationTool.cs`, `TrailNetwork.cs` und `BuildIconCatalog.cs`. Außerdem `Assets/Editor/WindowsBuildValidation.cs`, Dokumentation und isolierte Prüf-/Paketierungshelfer.

ArtSources und private Spielstände bleiben erhalten. Die Holzstraße verwendet ein vorhandenes Modell und das Holzboden-Bild als Bau-Icon. Kontinuierliche Alarmverteidigung unter sämtlichen Kampf- und Wegblockadesituationen sowie längeres Spielen bleiben Teil des Betatests.

[Aktualisierte USB-Beta](../../Builds/StoneAndSoil-Beta-Phase48-USB.zip) · [Direkt starten](../../Builds/Phase48-ResidentFixes-2026-10-04/StoneAndSoil.exe)
