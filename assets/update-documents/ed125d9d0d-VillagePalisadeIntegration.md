# Phase 43 – Dorfpalisade

Unter **Bau → Holzbauteile → Dorfpalisade** steht das neue hohe Zaunsegment zur Auswahl. Komma/Punkt dreht es in 90°-Schritten. Einzeln setzen oder eine Linie ziehen; eine gezogene Palisade bleibt eine durchgehende Reihe ohne automatische Fenster. Die Vorschau liegt auf der Rasterkante und zeigt die Höhe von rund 2,33 m. Die große Testkarte zeigt das zusätzliche Bauteil automatisch in ihrer Ausstellung.

| Bauteil | Baukosten | Stabilität | Reparatur |
| --- | --- | --- | --- |
| Bisheriger Holzzaun / Wood_Fence | 1 Brett | 60 | 1 Brett |
| Dorfpalisade | 3 Bretter | 180 | 1 Brett nach bestehender Reparaturregel |

Das Verhältnis zwischen Baukosten und Stabilität bleibt gleich. Der alte Zaun ist weiterhin auswählbar. Die dekorativen Steinfüße erzeugen keinen zusätzlichen Materialbedarf.

Das FBX erhält passende URP/Lit-Materialien, einen mittigen Bodenursprung, eine exakt auf 1 m abgestimmte Breite und einen BoxCollider über die tatsächliche Geometrie. Platzierung, Doppelbelegung und Bewegung nutzen dieselbe Rasterkanten-Identität wie vorhandene Zäune. Eine intakte Palisade sperrt den Übergang zwischen zwei Feldern; Bewohner und Gegner nutzen die bestehende gemeinsame Wegfindung.

Es wurde kein neues Tor-, Eck- oder Schadensmodell erfunden. Rechtwinklige Anschlüsse entstehen aus gedrehten geraden Segmenten. Vorhandene Tore bleiben eigenständige Bauteile. Bei Schaden nutzt die Palisade die vorhandene Darstellung durch Abdunklung und reduzierte Höhe; bei vollständiger Zerstörung die vorhandene Schuttdarstellung. Bauaufträge, Materiallieferung, Reparatur, Beute und Freigabe zerstörter Kanten folgen den bisherigen Mechanismen.

## Geänderte Dateien

- `Assets/Art/VillageFenceKit/VillagePalisade_Straight.fbx`: Kopie des fertigen Modells.
- `Assets/Art/VillageFenceKit/Materials/`: acht tatsächlich verwendete URP-Materialien für Eiche, Holzspitzen, Bindungen, Eisen und Steinfüße.
- `Assets/Resources/VillageFenceKit/VillagePalisade_Straight.prefab`: normalisiertes Spiel-Prefab mit Collider.
- `Assets/Editor/VillagePalisadeAssetSetup.cs`: reproduzierbarer Import, Materialien, Maß- und Ursprungskorrektur.
- `Assets/Scripts/World/VillagePalisadeView.cs`: fertiges Modell und bestehende Schadensdarstellung.
- `Assets/Scripts/World/BuildingModule.cs`: neuer, hinten angehängter Bauteiltyp, Bezeichnung, Kosten, Stabilität und Zaunregeln. Alle bisherigen Typnummern bleiben erhalten.
- `Assets/Scripts/World/WorldOccupancy.cs`: Sperrung der Palisadenkante für die gemeinsame Bewegung und Wegfindung.
- `Assets/Scripts/World/GameHudController.cs`, `VoxelDesignationTool.cs`: Holzbaumenü, 90°-Drehung, Reihenplatzierung und passende Rasterkantenvorschau.
- `Assets/Scripts/World/GameSaveController.cs`: Save-Version 59 und Validierung des zusätzlichen Bauteiltyps. Alte Spielstände bleiben ladbar.
- `Assets/Scripts/World/VillagePalisadeVerification.cs`: Prüfung an echten Bewohnern und über den produktiven Speicher-/Ladeweg.
- `Assets/Editor/WindowsBuildValidation.cs`: Windows-Build für Phase 43.

Die Dateien unter **ArtSources/VillageFenceKit** wurden nicht verändert; der abschließende Hashvergleich ist erfolgreich. Die ergänzenden Art-Modelle VillageFence_Low und PointedLog_Standalone wurden im Rahmen dieser Integration nicht als zusätzliche Bauarten eingeführt.

## Prüfung in Unity

**VILLAGE_PALISADE_PLAYER_PASSED**, Prozessende 0:

- Maßgerechte Vorschau, umgekehrter Wandzug und Zurückweisung doppelter Kanten.
- Fünf Segmente durch tatsächliche Bewohneraufträge gebaut; genau 15 Bretter aus einer Testtruhe verbraucht.
- Saubere Anschlüsse nebeneinander und rechtwinklig; vier Drehstellungen mit korrektem Bodenursprung.
- Collider geprüft; die echte Schrittbewegung verweigert das Überqueren. Die Wegfindung berechnet einen Weg um die Palisade.
- Bisheriger Wood_Fence bleibt als vorhandenes Modell erhalten.
- Beschädigung auf 140 Stabilität, Reparaturanforderung und weiterhin blockierte Kante.
- Echtes Szenenladen mit zehn gespeicherten Segmenten, darunter eine beschädigte Palisade und eine unfertige, gedrehte Baustelle. Danach Reparatur und Weiterbau durch Bewohner erfolgreich.
- Vollständige Zerstörung, einmalige Schutt-/Rohstoffausgabe und Freigabe der Kante.
- Alter gültiger Save 58 angenommen; ein neuer Palisadentyp in einem fälschlich als Version 58 markierten Spielstand wird zurückgewiesen.

**SAVE_CONTINUITY_PASSED**, Prozessende 0: versionsgetreue Teststände 29 bis 59 über den Produktionsparser geprüft, einschließlich echter Wiederherstellung eines Version-29-Teststands. Keine Nutzer-Speicherplätze wurden für die Prüfungen geschrieben. Beim Editorstart trat ein interner Unity-Suchindexfehler auf; die anschließende Spielstandprüfung und die separate Playerprüfung waren erfolgreich.

## Ingame-Bilder

![Gebaute Dorfpalisade und gedrehte Segmente](../Images/Phase43_BuiltSegments.png)

![Rückseite und Anschlüsse](../Images/Phase43_BackAndCorner.png)

![Beschädigung ohne zusätzliches Schadensmodell](../Images/Phase43_Damaged.png)

![Vorschau im Bauraster](../Images/Phase43_PlacementPreview.png)

Alle Kontrollbilder sind zusätzlich nach Prüflauf im [visuellen Changelog](../../changelog/index.html) archiviert.

[Phase 43 starten](../../Builds/Phase43-VillagePalisade-2026-10-04/StoneAndSoil.exe)
