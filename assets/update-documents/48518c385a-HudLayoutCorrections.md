# Phase 38 – Rahmen, Inventarleiste und Bodenhöhen

Spielversion: `Builds/Phase38-HudLayout-2026-10-04/StoneAndSoil.exe`. Den vollständigen Ordner zusammenlassen. Save 57 bleibt unverändert.

## Änderungen

- Das Hauptmenü nutzt einen bis zu 690 Pixel hohen Rahmen mit 40 Pixel Innenabstand. Das Logo und alle drei Ladeplätze bleiben innerhalb des Rahmens. Weitere Einstellungen sind scrollbar.
- Handwerk erhält größere Fenster. Der Schließen-Button hat einen festen Bereich oberhalb der unteren Rahmenverzierung; Rezepte und Aufträge scrollen getrennt davon.
- Die untere HUD-Leiste zeigt ausschließlich Bilder. Anbau erhält ein im Spiel gezeichnetes Pflanzensymbol im vorhandenen Rahmen, damit es sich von Handwerk unterscheidet.
- Alle 16 Itembestände stehen einzeln in zwei Reihen oben unter Menü und Auswahl. Lagerbelegung/Kapazität steht daneben. „Sonst.“ war die Summe aus Holzböden, Holzwänden, Dächern, Truhenteilen, Bettteilen, Reliktfragmenten, Steinherz und Löschwasser; diese Sammelbezeichnung entfällt.
- Die Erdoberfläche hat sichtbarere feine und grobe Textur. Weltkoordinaten für die UVs bleiben durchgehend, auch an Voxel- und Chunkgrenzen.
- Wandvorschauen und gezogene Wandreihen verwenden dieselbe um 0,5 Voxel versetzte Rasterkante wie das fertige Bauteil, einschließlich aller vier Drehrichtungen.
- Fertige Bodenbeläge sind vier Zentimeter dick und liegen direkt auf der Erde. Bettfüße stehen auf dieser Oberkante. Terrain, Baukosten, Belegung und Wegfindungsraster bleiben erhalten; vorhandene Bauten werden beim Laden mit der korrigierten Darstellung aufgebaut.

## Prüfung

- Windows-Build und C#-Prüfung bestanden.
- Sichtprüfung und HUD-Test im eigenständigen Spiel bei **1280×720** und **960×640** bestanden. Hauptmenü, Berufsauswahl, Schreinerliste und Rezeptfenster wurden als Ingame-Bilder aufgenommen. Die beigefügten Bilder zeigen die kleinere Fenstergröße.
- Bodenoberkanten bei allen vier Stilen auf +0,04 m geprüft, Bettfüße auf gleicher Höhe, Wand-Einzelvorschau und gezogene Wandreihen bei **allen vier Drehrichtungen** mit den tatsächlichen Bauteilkanten verglichen. Bett und Böden auch nach echter Szenenwiederherstellung geprüft.
- Bestehende Player-Prüfungen für große Testkarte und zusammenhängende UVs, Armee/Innenansicht, Ladebildschirme, reale Siedlungsproduktion und ModelGapKit bestanden.
- Speicherkompatibilität v29 bis v57 und Gefangenenbefreiung einschließlich Wiederherstellung unterwegs bestanden. Eine bei der Prüfung gefundene Editor-Besonderheit beim Anlegen der Boden-Kollisionsfläche wurde korrigiert und erneut geprüft.
- Der HUD-Test prüft weiterhin Galerieabstände, 100er-Cheat, Itemrestzeit und den tatsächlichen gemeinsamen Marsch von Wachen/Golem. Keine Nutzerspielstände überschrieben; Prüfung nur mit Testwelten und Speicherabbildern im Arbeitsspeicher.

Logs: `.unity-bootstrap/Phase38-HudLayout1280.log`, `Phase38-HudLayout960.log`, `Phase38-TestMapPlayer.log`, `Phase38-ArmyViewPlayer.log`, `Phase38-LoadingScreensPlayer.log`, `Phase38-SettlementPlayer.log`, `Phase38-ModelGapPlayer.log`, `Phase38-SaveContinuity.log`, `Phase38-CampRescue.log`.

## Ingame-Bilder

![Hauptmenü](../Images/Phase38_MainMenu.png)
![Handwerk](../Images/Phase38_Carpenter.png)
![Erdtextur und Bett auf Holzboden](../Images/Phase38_FloorBedEarth.png)
![Wandreihe auf Rasterkanten](../Images/Phase38_WallDragPreview.png)
