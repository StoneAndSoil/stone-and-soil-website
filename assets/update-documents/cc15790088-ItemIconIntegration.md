# Phase 45 – Item-Icons und bildgesteuerte Werkbank

Die 19 gelieferten PNGs sind als transparente UI-Sprites eingebunden: 16 Ressourcen und die drei Berufe. Kategorien und Rezepte werden über Bildkarten gewählt. Das ausgewählte Rezept zeigt Ergebnis, Eingabe, verfügbare Menge und unveränderte Herstellkosten. Aufträge ohne Material bleiben möglich und warten auf Versorgung; nur ungültige Mengen oder eine volle Warteschlange sperren „Herstellen“.

## Zuordnung

Die zentrale ItemIconCatalog-Zuordnung folgt manifest.json: ResourceType wird auf den gleichnamigen Sprite abgebildet, Rezept-IDs werden über RecipeCatalog auf das Ergebnis-Icon aufgelöst. Fehlende Dateien oder unbekannte Rezepte liefern einen Text-Fallback. Hover, Auswahlrahmen und Deaktivierung entstehen durch die UI; PNGs erhalten keine zusätzlichen Zustandsvarianten.

| Kategorie | Kategorie-Icon | Rezept-ID → Ergebnis-Icon |
| --- | --- | --- |
| Schreiner | Category_Carpenter | plank → Plank; floor_part → FloorPart; wall_part → WallPart; roof_part → RoofPart; chest_part → ChestPart; bed_part → BedPart |
| Steinmetz | Category_Stonemason | stone_block → StoneBlock |
| Küche | Category_Kitchen | meal → Meal |

Ressourcensymbole stehen außerdem in der oberen Bestandsleiste, Truheninhalten, Lagerfiltern, Baumateriallieferungen und Auftragszeilen. Bezeichnungen und Tooltips bleiben verfügbar. Auf kleinen Bildschirmen zeigt die obere Leiste Icon und Anzahl; der Tooltip nennt die Ressource. Truhen und Rezeptdetails scrollen, der Schließen-Button bleibt außerhalb des Scrollbereichs.

## Geänderte Dateien

- Assets/Scripts/World/ItemIconCatalog.cs und .meta: zentrale Zuordnung, Bildkarten, Zeilen, Text-Fallback.
- Assets/Scripts/World/GameHudController.cs: Kategorie-/Rezeptkarten, Rezeptdetails, Inventar-/Lager-/Material-/Warteschlangensymbole, Tooltips und scrollbar angeordnete Truheninhalte.
- Assets/Editor/ItemIconAssetSetup.cs und .meta: Single Sprite, Alpha, 100 PPU, bilinear, Clamp, keine Mipmaps, maximal 256 Pixel, unkomprimiert.
- Assets/Editor/GameUiAssetSetup.cs: schützt ItemIcons vor dem bisherigen allgemeinen Texture-Import.
- Assets/Editor/WindowsBuildValidation.cs: BuildItemIcons für den separaten Phase-45-Build.
- Assets/Resources/UIConcepts/ItemIcons/*.png.meta: 19 Sprite-Importeinstellungen; vorhandene Hauptprojekt-GUIDs erhalten.
- Assets/Scripts/World/ItemIconVerification.cs und .meta: nur bei ausdrücklichem Prüfargument aktiver Spieltest.
- README.md, `Documentation/Spielanleitung.md`, CHANGELOG.md und Tutorial.md: aktuelle Version und Bedienung.
- Documentation/Images/Phase45_*.png und changelog/Phase_45/: Ingame-Kontrollbilder mit Archivierung.

ArtSources und PNG-Pixel wurden nicht verändert; die 38 SHA-256-Prüfsummen der 19 Quell- und 19 Spiel-PNGs stimmen mit dem Ausgangsstand überein. Andere lokale Änderungen wurden übernommen, ohne Git-Reset oder Rücksetzen fremder Dateien. Save-Version 60 und gespeicherte Werkbankdaten bleiben unverändert. Die Prüfungen verwenden neu erzeugte Testwelten und einen Speicher-Rundlauf im Arbeitsspeicher; Nutzerspielstände werden nicht überschrieben.

## Durchgeführte Prüfungen

- Unity 6000.3.25f1: Sprite-Import aller 19 Dateien und Windows-Build erfolgreich.
- Direkte Mausbedienung am laufenden Unity-Spiel über Computer Use: alle drei Kategorie-Icons und alle acht Ergebnis-Icons öffnen die erwartete Auswahl. Transparenz, Hover, Beschriftung und Rezeptdetails sichtbar kontrolliert.
- Getrennter automatischer Spieltest: fehlende Materialien bei allen acht Rezepten, Warteschlange mit zehn Plätzen, gesperrtes Herstellen bei voller Warteschlange, wartenden Auftrag reduzieren, Reihenfolge ändern, Mindestvorräte setzen und nachbestellen.
- Bestehende Vorproduktlogik berücksichtigt: Mindestvorräte für Bauteile bestellen zusätzliche Bretter. Die Prüfung verlangt daher keine künstlich feste Gesamtstückzahl.
- Speicherkompatibilität: vorhandene Unity-Prüfung mit versionsgetreuen Fixtures v29 bis v60 und tatsächlichem Apply einer v29-Testwelt bestanden. Keine Original-Nutzerspielstände verwendet. Beim Editorstart meldet der vorhandene Unity-Suchindex eine Exception; sie betrifft den Editorindex, nicht den anschließend erfolgreich durchgeführten Speichertest. Der Spieler-Prüflauf ist fehlerfrei.
- Tatsächlicher Szenenwechsel nach Capture/Parse/Load: Aufträge, Reihenfolge und Mindestvorräte erhalten; vorhandene Kampagne weiterhin vorhanden.
- Fehlendes Icon mit Text-Fallback und deaktivierte Bildkarte über den kontrollierten UI-Prüfhaken geprüft.
- Ingame-Bilder bei 1920 × 1080 und 960 × 640: Kategorien, sechs Schreiner-Rezepte, Rezeptdetails, Bestandsleiste und Truheninhalte visuell kontrolliert. Das Steinmetz-/Küchenfenster wurde vergrößert, damit die einzelne Rezeptkarte vollständig hineinpasst.

Der direkte Klicklauf und der automatische Lauf sind getrennte Nachweise: Im automatischen Modus löst ein Prüfadapter die vorhandenen Button-Handler aus. Er ersetzt keine tatsächlichen Mauskliks. Reihenfolgeänderung wurde über die bestehende Move-Funktion geprüft; das Ziehen mit der Maus wurde in dieser Phase nicht erneut geprüft. Die unveränderten Laufwege und Arbeitsanimationen der Bewohner sowie die komplette Fertigung aller acht Rezepte wurden nicht erneut als Langzeittest durchgespielt.

Prüfprotokolle: .unity-bootstrap/Phase45-WindowsBuild.log, Phase45-NativeIconClicks.log, Phase45-ItemIconsPlayer.log und Phase45-SaveContinuity.log. Wiederholung des Spieltests: --verify-item-icons für direkte Kategorie-/Rezeptklicks, zusätzlich --verify-item-icons-auto für den automatischen Handler-Lauf.

## Bilder und Spielversion

[Phase 45 starten](../../Builds/Phase45-ItemIcons-2026-10-04/StoneAndSoil.exe) · [Visueller Verlauf](../../changelog/index.html)

![Kategorien](../Images/Phase45_Categories.png)
![Alle Schreiner-Rezepte](../Images/Phase45_Category_0.png)
![Kleine Werkbankansicht](../Images/Phase45_Small_Recipes.png)
![Truheninhalte mit Icons](../Images/Phase45_Small_Storage.png)
