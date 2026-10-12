# Phase 47 – produktive Arbeitsplätze und USB-Beta

Die sechs vorbereiteten Arbeitsplätze produzieren jetzt über die bestehende Bewohner-, Ressourcen- und Auftragslogik. Jeder besitzt eine eigene Warteschlange und Mindestvorräte. Beim Anklicken öffnet sich das Handwerksbuch mit der passenden Rezeptgruppe.

| Modelle | Funktion |
|---|---|
| Saegeblock, Holzspannbank | Sechs Holzrezepte: Bretter, Boden-, Wand-, Dach-, Truhen- und Bettteile |
| Steinmetztisch, Meisselblock | Steinblock |
| Kochstelle, Vorbereitungstisch | Mahlzeit |
| Bisherige Werkbank | Weiterhin alle acht Rezepte |
| Sägeaufsatz, Steinwerkzeug, Kochaufsatz | Bestehender 25-%-Geschwindigkeitsbonus; Klick öffnet benachbarten passenden Arbeitsplatz |
| Kartentisch, Reliktwerkbank | Schaltflächen für vorhandene Armee-/Expeditions- bzw. Monument-/Schlüsselfunktionen |

Automatische Vorratsaufträge bevorzugen passende freie Spezialarbeitsplätze. Aufträge für unpassende Rezepte werden abgewiesen. Beschädigte oder feindliche Arbeitsplätze produzieren nicht. Bestehende Kosten, Rollen, Bauaufträge, Wegfindung und Aufsatzregeln bleiben Grundlage; Handwerker können alle vorhandenen Rezeptarten bearbeiten, Schreiner nur Holzrezepte.

Neun weitere Modelle sind ausdrücklich als Dekoration ohne eigene Produktion gekennzeichnet: Blasebalg, Forschungstisch, Heilerplatz, Ambossständer, Schmiedeofen, Schneidertisch, kleiner Steinhaufen, Werkzeugständer und Webstuhl. Forschungs-, Metall-, Stoff- und Heilungssysteme wurden nicht erfunden.

Eine kurze scrollbare Spielhilfe steht im Start- und Spielmenü bereit. Der Windows-Build ist ein normaler Release-Build. Das [USB-Paket](../../Builds/StoneAndSoil-Beta-Phase47-USB.zip) enthält Spieldateien, Startanleitung, bekannte Grenzen, Testcheckliste, Fehlerformular und Lizenzhinweise. Die ZIP vollständig entpacken und den ganzen Ordner weitergeben; die EXE braucht ihre Datenordner. Spielstände bleiben auf dem jeweiligen PC.

## Geprüft

- Windows-Spieler: alle sechs Arbeitsplatzmenüs, Rezeptauswahl, Aufträge, Mindestvorräte und Zurückweisung falscher Rezepte.
- Echte Bewohnerbewegung, Materiallieferung und Fertigung aller acht bestehenden Rezepte an den neuen Arbeitsplätzen; passende Rollenfilter.
- Benachbarter Sägeaufsatz öffnet den Arbeitsplatz und erhält seinen 25-%-Bonus.
- Tatsächlicher Szenenwechsel mit sechs gespeicherten Warteschlangen und Mindestvorräten; keine mehrfach erzeugten Arbeitsplatzkomponenten. Entfernen eines Arbeitsplatzes geprüft.
- Produktionsparser mit versionsgetreuen Testspielständen von Version 29 bis 62 sowie tatsächliches Anwenden eines Version-29-Spielstands. Es wurden Testfixtures verwendet, keine privaten Nutzerspielstände.
- Regression der drei Weltvarianten, Vorräte/Pflanzbereiche, Höhenwelt, Galerie, Flachdächer und bestehende universelle Werkbank.
- Arbeitsplatzdarstellung bei 1920×1080 und 960×640; Spielhilfe bei 1280×800 per Maus geöffnet und bis unten gescrollt. Der neue F1-Code wurde eingebaut, seine Tasteneingabe wurde im nativen Sichttest nicht zuverlässig bestätigt.
- Alle kopierten Spieldateien per SHA-256 mit dem geprüften Build verglichen; ZIP auf CRC-Fehler geprüft. Debug-Unterlagen mit „DoNotShip“ werden nicht verteilt.

Nachweise: `.unity-bootstrap/Phase47-Workstations.log`, `Phase47-SaveContinuity.log`, `Phase47-WorldRegression.log` und `Phase47-WindowsBuild.log`. Alle zugehörigen Prüfmarker erfolgreich. Der Editor meldete beim Speicherprüfung-Start einen bereits bekannten Suchindexfehler; die Speicherprüfungen selbst bestanden.

Zehn neue Bilder liegen unter `Documentation/Images/Phase47_*.png`; die [Changelog-Galerie](../../changelog/index.html) erhält archivierte Kopien.

## Speicherstände und geänderte Dateien

Save 62 speichert Warteschlangen und Mindestvorräte der neuen Arbeitsplätze. Ältere Spielstände bleiben lesbar; alte dekorative Arbeitsplatzobjekte bekommen leere Produktionszustände. Nicht belegte historische Ereignisse und Ressourcen werden nicht ergänzt. Neue Spielstände sind nicht für ältere Spielversionen vorgesehen.

- Neu: `Assets/Scripts/World/WorkstationCatalog.cs`, `WorkstationVerification.cs` samt Metadaten.
- Geändert: `WorkbenchView.cs`, `WorkbenchState.cs`, `BuildingModule.cs`, `ColonyResident.cs`, `GameHudController.cs`, `GameSaveController.cs` im selben Verzeichnis.
- Geändert: `Assets/Editor/WindowsBuildValidation.cs` für den Release-Betabuild.
- Dokumentation, Kontrollbilder, USB-Paket und `.unity-bootstrap/PackageBeta47.py` ergänzt.

ArtSources bleiben erhalten. Private Spielstände und parallele Änderungen wurden nicht zurückgesetzt.

## Offen

Das ist eine spielbare private Beta. Mehrstündiges Spielen, vollständiger Kampagnendurchlauf unter realen Spielbedingungen, abschließende Balance und Leistung auf verschiedenen PCs bleiben offen. Die beigefügte Testcheckliste ist dafür vorgesehen. Die neun dekorativen Berufe bleiben ohne zusätzliche Produktionssysteme. Kein Anspruch auf ein vollständig fertiges Spiel.
