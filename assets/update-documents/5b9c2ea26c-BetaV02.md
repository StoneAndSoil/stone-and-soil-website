# Stone & Soil – Beta V0.2

Stand: 5. Oktober 2026 · Unity 6000.3.25f1 · Windows x64 Release · Spielstandformat 69.

## Phasen 50–58 und Abschlussphase

Das Questbuch öffnet sich nur beim Anklicken eines intakten eigenen schwarzen Bretts. Es schließt mit X, Escape, einem anderen Menü oder einer neuen Auswahl. Der Questfortschritt wird weiterhin im Hintergrund geprüft; einmalige Geschichten bleiben in der Chronik. Im Questbuch führt „Chronik & Handel“ zu den vorhandenen Siedlungsfunktionen.

Menschen behalten ihren Berufsfortschritt bei Aufgaben- und Rollenwechseln sowie beim Speichern/Laden. Für Schreiner, Steinmetz und Koch zählt jedes tatsächlich fertiggestellte Stück. Zehn Stücke ergeben die nächste Stufe; Stufe 5 ist das Maximum. Abgebrochene oder nur vorgemerkte Aufträge zählen nicht. Jede zusätzliche Stufe erhöht das Arbeitstempo um 8 %, insgesamt höchstens 32 %.

| Beruf | Stufe / Wirkung |
|---|---|
| Schreiner | 1: Bretter · 2: Böden und Wände · 3: Dächer · 4: Betten · 5: Truhenteile |
| Steinmetz | Steinblöcke ab Stufe 1; weitere Stufen verbessern das Arbeitstempo |
| Koch | Mahlzeiten ab Stufe 1; weitere Stufen verbessern das Arbeitstempo |
| Bauer | Erfahrung durch echte Saat- und Erntearbeit; schnelleres Wachstum beim Pflanzen, ab Stufe 3 ein zusätzlicher Ertrag, ab Stufe 5 zwei |
| Transport | Erfahrung durch abgelieferte Gegenstände; ohne Wagen ab Stufe 3 zwei, ab Stufe 5 drei Gegenstände tragen |
| Wache | Zehn persönlich besiegte Gegner pro Stufe; menschlicher Schaden steigt von 7 auf höchstens 11 |

Granit behält seine bisherigen Werte. Vorhandene weitere Arbeitsfähigkeiten bleiben erhalten. Alte Spielstände behalten alle bisherigen Rezeptzugänge; fehlende historische Herstellungsereignisse werden nicht erfunden. Ihre neuen Herstellungs-Berufslevel starten daher bei 1.

Steinmetz und Koch sind jetzt eigene wählbare Berufe mit den vorbereiteten Outfits. Rezepte zeigen benötigte Stufe, bestes vorhandenes Können, Material und Wartegrund. Über „Ausbildung bestellen“ werden normale Grundrezepte mit normalen Materialkosten bestellt.

Werkbänke können einer bestimmten Person zugewiesen und pausiert werden. Bei Wechsel oder Pause werden reservierte Materialien zurückgegeben, der Auftrag bleibt erhalten. Warteschlange, Mindestvorrat, Zuordnung und Pause werden je Arbeitsplatz gespeichert. Eine feste Besetzung ersetzt keine passende Berufs- und Aufgabenfreigabe.

Eine einklappbare Übersichtskarte oben rechts zeigt Gelände, Siedlung und Bewohner sowie bereits entdeckte Lager. Klicks verschieben die Kamera. Die Darstellung wird zwischengespeichert, verdeckt offene Menüs nicht und speichert ihren Einklappzustand. Weltbezeichnungen und Speicherplatzvorschauen zeigen jetzt Weltmodus und Größe; die Vorschauen lesen nicht bei jeder HUD-Zeichnung erneut den ganzen Spielstand.

## Prüfungen

- Release-Build V0.2 erfolgreich erstellt.
- In der fertigen EXE: zehn echte Bretter-, Steinblock- und Mahlzeitenproduktionen, Freischaltungen, Rollenwechsel, Materialrückgabe bei Arbeitsplatzwechsel, unabhängige Werkbankzuordnungen, Pause/Fortsetzen, Warteschlangen und Mindestvorräte nach privatem Speichern/Laden bestanden.
- Zehn tatsächliche zeitgesteuerte Kampftreffer mit persönlichen Siegen prüfen Wächterfortschritt. Die Gegner wurden für diesen gezielten Test auf einen Lebenspunkt gesetzt; dies ist kein Schwierigkeitsnachweis.
- In der fertigen EXE: tatsächliche Bauernarbeit mit zusätzlichen Erträgen, gespeichertem verkürztem Wachstum und Transport von drei Gegenständen einschließlich Laden während des Transports bestanden. Hohe Fähigkeiten wurden hierfür als Testausgangszustand gesetzt.
- Spielstandparser mit versionsgerechten Testdateien von Version 29 bis 69 geprüft, zusätzlich tatsächliches Anwenden einer Version-29-Welt. Keine Originalspielstände verwendet oder überschrieben.
- 20 simulierte Minuten Kampagnenwirtschaft mit vier Menschen und Granit, zwei frischen Nahrungsfeldern, Mahlzeiten-Mindestvorrat und Laden nach zehn Minuten bestanden. Alle vier Menschen aßen, 16 Erholungszyklen wurden abgeschlossen; sieben Mahlzeiten waren am Ende vorhanden. Keine zusätzliche Nahrung während des Laufs eingefügt. Angriffswellen waren deaktiviert.
- Questbuch, Handwerk und Minimap bei 1280 × 720 visuell geprüft; Bilder im Ordner `changelog/V0.2` archiviert. Weitere Bildschirmgrößen gehören zum Betatest.
- Kampagnenregression und Paket-/Backup-Prüfergebnisse werden im Abschlussnachweis unten festgehalten.

Die automatisierten Prüfungen verwenden eigene Testwelten und private Testdateien. Sie ersetzen keinen mehrstündigen normalen Spieltest.

## Geänderte Dateien

Neue Dateien: `Assets/Scripts/World/ProfessionProgress.cs`, `WorldOverviewHud.cs`, `ProfessionVerification.cs`, `JobBenefitsVerification.cs` (die letzten drei ebenfalls unter `Assets/Scripts/World/`).

Erweiterte Spielsysteme unter `Assets/Scripts/World/`: `ColonyResident.cs`, `FarmPlotView.cs`, `GameHudController.cs`, `GameSaveController.cs`, `PromiseQuestHud.cs`, `ResidentOutfitCatalog.cs`, `ResidentSkills.cs`, `SeededForest.cs`, `SkeletonRaider.cs`, `StonePromiseCampaign.cs`, `WorkbenchView.cs`, `WorldCameraController.cs`.

Build und Prüfungen: `Assets/Editor/EconomyEnduranceVerification.cs`, `Assets/Editor/WindowsBuildValidation.cs`, `ProjectSettings/ProjectSettings.asset`. Zusätzlich diese Dokumentation, Startseite, Entwicklungsstand und visueller Changelog. Neue Unity-Metadateien gehören zu den neuen Assets.

Art-Quelldateien und externe private Nutzerspielstände wurden nicht verändert. Bestehende Weltmodi und frühere Builds bleiben verfügbar.

## Verteilung und Grenzen

Zum Weitergeben `Builds/StoneAndSoil-Beta-V0.2-USB.zip` vollständig entpacken. Den gesamten Ordner einschließlich Daten und DLLs auf den USB-Stick kopieren, nicht nur die EXE. Unity ist zum Spielen nicht erforderlich. Anleitung, Fehlerformular, Testliste, Lizenzen und bekannte Einschränkungen liegen im Paket.

V0.2 ist eine Beta. Mehrstündige Kampagnenbalance, normale Ausbildung bis Stufe 5, Leistung auf anderen PCs und weitere Auflösungen bleiben zu prüfen. Neun bereits vorhandene Arbeitsplatzmodelle besitzen weiterhin keine eigene zusätzliche Produktionskette: Blasebalg, Forschung, Heiler, Ambossstand, Schmiedeofen, Schneiderei, kleiner Steinhaufen, Werkzeugstand und Webstuhl. Steinmetz- und Kochstufen verbessern vorhandene Rezepte; neue Rezeptketten sind nicht hinzugekommen.

Das Projektbackup enthält Assets, Art-Quellen, Einstellungen, Pakete, Dokumentation und Kontrollbilder sowie das getestete USB-Paket. Wiederaufbaubare Unity-Caches und externe AppData-Spielstände sind nicht enthalten. Die Wiederherstellungsanleitung liegt neben den ZIP-Dateien im datierten Backupordner.

## Abschlussnachweis

Die Kampagnenprüfung in der fertigen V0.2-EXE bestand: tatsächlicher Menüstart, alle 10.000 CSV-Felder, beide unabhängigen Lager, begehbare Zugangswege und Kopffreiheit, echte Bewohnerbewegung, Handwerk und Farm, Terrain- und Auftragsänderungen nach Laden, separater Lagerzustand, früher Angriff, ausdrücklich gestartete Entscheidungsschlacht, Rettung mit Laden unterwegs und tatsächlicher Ankunft sowie einmalige globale Relikt-/Steinherzbelohnungen. Die festgelegte Geometrie blieb bei unterschiedlichen Seeds gleich. Kampfprüfungen verwenden beschleunigte Testbedingungen.

Die kompakten Prüfnachweise stehen unter `Documentation/Verification/V0.2/`. Im isolierten Unity-Editor trat eine bereits bekannte Search-Index-Ausnahme auf; Spielstand- und Wirtschaftsprüfungen liefen dennoch erfolgreich durch. Die drei finalen Spieler-Prüfläufe enthielten keine Exceptions.
