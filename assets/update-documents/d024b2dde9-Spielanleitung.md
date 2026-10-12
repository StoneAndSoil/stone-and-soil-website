# Stone & Soil – Spielanleitung

Zusammengeführt aus `START_HERE.md` und `Tutorial.md` (8. Oktober 2026). Neuigkeiten stehen im [CHANGELOG](../CHANGELOG.md).

## Stone & Soil spielen (früher START_HERE.md)

### Phase 47 – USB-Beta und produktive Arbeitsplätze

Sechs Arbeitsplätze besitzen jetzt passende Rezepte, eigene Aufträge und Mindestvorräte. Aufsätze öffnen den benachbarten Arbeitsplatz; reine Dekoration ist gekennzeichnet. Spielhilfe und ein normaler Windows-Release-Build sind dabei. Save 62 erhält ältere Spielstände. [USB-Paket](../Builds/StoneAndSoil-Beta-Phase47-USB.zip) · [Direkt starten](../Builds/StoneAndSoil-Beta-Phase47-USB/StoneAndSoil.exe) · [Prüfbericht und Grenzen](Phasen/BetaReadiness.md) · [Bilder](../changelog/index.html).

### Aktuelle Fortsetzung – 4. Oktober 2026, Save 60

Vorheriger Stand, Phase 35: 64er Starttruhe ohne grüne Unterlage, neue 96×96 Testkarte mit allen sechs Vorlagen, acht Betten und Haupthalle sowie zusammenhängende Erd-/Grasflächen. [Aktuelle Version starten](../Builds/Phase35-TestMap-2026-10-04/StoneAndSoil.exe). Im Hauptmenü „Große Testkarte“ wählen. Save 55 unterstützt die große Karte und alte 32×32 Spielstände. [Prüfbericht](Phasen/ContinuousPhases.md).

Vorheriger Stand: [Phase 34 starten](../Builds/Phase34-ArmyView-2026-10-04/StoneAndSoil.exe). Truheninhalte sind optisch verborgen. Unter Armee **Angriff** wählen und den Zielort anklicken: verfügbare Wachen sammeln sich dort und greifen anschließend zusammen an. Unter Bau blendet **Innenansicht** Dächer, Wände und Türen aus. Den vollständigen Buildordner zusammenlassen.

Der aktuelle Auftrag wurde in fortlaufenden Phasen auf die vorhandenen Systeme aufgesetzt. Wellenkampagne, oberirdisches Lager, Expeditionen, Schutzsuchende, Relikte, Vorlagen/Außenposten, Chronik/Wünsche/Pfade, Besucher/Handel, Gemeinschaftsprojekte, Belagerung/Reparatur, Verteidigungsgeräte, Wagen, Monumentkräfte, Brunnen/Feuer, Brücken, zusätzliche Golems, Turmrampen, große Tore, Säulen/Barrikaden/Plattformen und Werkbankaufsätze sind implementiert. Phase 28 ergänzt benannte Gefangene, ihren wirklichen Heimweg zum Monument und die vorhandene Aufnahme; alte bereits besiegte Lager erhalten keine rückwirkenden Kandidaten. Rettungsprüfung, Speicherfixtures v29–54, Lager-Vorstoß, Golemtransport, neuer Windows-Build und ausführbarer Spieltest bestanden. Frühere Version: [Phase 28 starten](../Builds/Phase28-CampRescue-2026-10-04/StoneAndSoil.exe). Drei echte KayKit-Skelettvarianten wurden aus dem lokalen Vorbereitungspaket eingebunden. Jahreszeiten und Tiere bleiben ausgeschlossen.

Verbindlicher Funktions-, Bedienungs-, Migrations- und Prüfbericht: [Fortlaufende Phasen](Phasen/ContinuousPhases.md). Fehlende Modelle mit ihrer konkreten Aufgabe: [Modellliste](MODEL_WISHLIST.md). Diese Angaben haben Vorrang vor historischen Abschnitten weiter unten. Gezielte Unity-Prüfungen, die gemeinsame Abschlussgruppe und der neue Windows-Build mit ausführbarem Spieltest bestanden; konkrete Nachweise und Grenzen stehen im Phasenbericht. Dauerhafter Tod und die darauf angewiesene endgültige Niederlage wurden nicht aus heilbaren Verwundungen abgeleitet.

### Monument und Wiederaufbau (Save 30, 4. Oktober 2026)

Das bisher unsichtbare Gründungszentrum ist jetzt ein sichtbarer Stein mit 240 Gesundheit. Der vorhandene Skelett-Räuber kann ihn angreifen. Bei Zerstörung bleibt das Fundament bestehen; neue Bewohner können erst nach der Instandsetzung aufgenommen werden. Arbeitsaufträge laufen weiter. Null Gesundheit bei Bewohnern bedeutet weiterhin eine heilbare Verwundung.

Unter **Armee** stehen Monumentzustand, **Monument instand setzen** und Bauabbruch. Bauarbeiter benötigen acht eingelagerte Steinblöcke, dann vier Bretter und zwei Arbeitsphasen. Die bestehende Werkbank-Nachbestellung berücksichtigt den aktuellen Bedarf. Fehlender Rohstein beziehungsweise fehlende Stämme müssen regulär beschafft werden. Abbruch gibt beide bereits gelieferten Materialphasen als lose Ressourcen zurück.

Save 30 hält Monumentposition, Gesundheit, Bauphase und Liefermenge sowie Angriffsrestzeit und Schlagpause fest. Alte Spielstände erhalten ein intaktes Monument ohne Kampagnenbelohnungen. Ein Angriff endet spätestens nach 180 Simulationssekunden. Details und Prüfgrenzen: [Monument-Abschnitt](Phasen/MonumentSlice.md).

### Aktuell: automatische Bauaufträge, Werkbankwarteschlange und Wandecken (Save 27)

Eine eigenständige kleine Koloniesimulation: Bewohner arbeiten selbstständig, du planst und verteilst Aufgaben.

### Starten

Öffne `Assets/Scenes/Main.unity` im Unity-Editor und starte Play. Die ältere Windows-Ausgabe unter `Builds/StoneAndSoil/StoneAndSoil.exe` enthält die aktuellen Änderungen nicht.

Ein normaler Start erzeugt eine neue Siedlung im Arbeitsspeicher. Vorhandene Spielstände werden weder automatisch geladen noch überschrieben. Beenden geht über **Spiel → Spiel beenden** oder das Fensterkreuz.

Im aktuellen Unity-Quellcode beginnt eine Sitzung mit einem Hauptmenü: Seed eingeben und eine neue Höhenwelt oder eine flache Testwelt starten, einen vorhandenen Spielstand laden oder die Effektlautstärke einstellen. Die Testwelt hat 12 Bretter, fünf Stämme und je ein weiteres Item. Das Hauptmenü ist auch unter **Spiel & Speichern** erreichbar. Der Start einer neuen Welt und die Baukette wurden im Editor geprüft.

### Die erste Siedlung

1. Wähle im Menü **Abbau** das Baumfällen als Flächenwerkzeug oder klicke einen Baum an und wähle im Infofenster **Fällen**. Aktiviere Baumfällen und Transport bei mindestens einem Bewohner.
2. Öffne **Handwerk → Schreiner** für manuelle Aufträge. Baupläne bestellen fehlende Bauteile und Bretter selbstständig. Bewohner mit Werkbankfreigabe fertigen sie aus gelagertem Material; Transport bringt die Teile ins Lager. Unter **Steinmetz** steht Stein → Steinblock.
3. Ziehe eine Feldfläche bis 10×10 auf und wähle anschließend **Beeren** oder **Karotten**. Feldarbeiter säen und ernten wiederholt. Karotten können gegessen oder an der Werkbank zu Mahlzeiten verarbeitet werden.
4. Vier geschützte Startbetten stehen für die vier Startbewohner bereit. Zusätzliche fertige Betten geben jeweils einen Wohnplatz. Am Spawnmonument beziehungsweise im Bewohnerfenster kannst du neue Bewohner gegen Beeren aufnehmen.
5. Plane ein eigenes Gebäude aus Holzböden, Wänden, Durchgängen und Dächern. Mit **,** und **.** drehst du Bauteile. Böden und Dächer lassen sich als Fläche, Wände als Linie ziehen. Lasse Zugänge offen.
6. Baue weitere Werkbänke, um parallel zu produzieren. Jede Werkbank hat eigene Aufträge und Vorratsziele; bestehende Aufträge anderer Werkbänke zählen bei der Nachproduktion mit.
7. Verfolge die acht Siedlungsziele unter **Siedlung**. Danach geht das freie Spiel weiter.

### Bedienung

| Aktion | Eingabe |
|---|---|
| Aufträge und Auswahl | Linksklick auf Baum für Infofenster, auf Busch, Bewohner oder Einrichtung |
| Bewohnerarbeit | Bewohner anklicken; Beruf über der Tabelle wählen oder Aufgaben einzeln an-/abwählen. Schreiner übernimmt nur Werkbankarbeit; Wache hat keine Arbeitsaufgaben und reagiert früher auf Räuber |
| Kamera bewegen | WASD oder mittlere Maustaste ziehen; Bild↑/Bild↓ ändert die Fokushöhe |
| Kamera drehen | Rechte Maustaste ziehen oder Q/E |
| Abstand ändern | Mausrad – zoomt zum Punkt unter dem Mauszeiger |
| Person/Ort ansehen | Doppelklick auf Bewohner (Kamera folgt, F beendet), Lager oder Truhe; „Ansehen“ in Meldungen |
| Innenansicht | Taste I |
| Kamera zurücksetzen | Pos1/Home |
| Pause / weiter | Leertaste oder obere Leiste |
| Geschwindigkeit | 1, 2, 3 für ×1, ×2, ×5 oder Schalter unten rechts |
| Werkzeug abbrechen | Rechtsklick; Escape schließt zuerst Menüs und Dialoge |
| Bauteil drehen | , oder . während der Planung |
| Innenraum ansehen | Unter Bauen „Dächer anzeigen“ ausschalten |
| Speichern / laden | Spiel-Menü mit drei Plätzen; F5/F9 verwenden den ausgewählten Platz |

### Wenn Bewohner warten

Wähle die Person aus. Ihr Auftrag oder Wartegrund steht über der Aufgabentabelle. Prüfe Arbeitsfreigaben, Hunger/Energie, Material im erreichbaren Lager, Lagerfilter, Platz und Zugänge. Getragene Materialien werden bei abgeschalteter Arbeit noch abgeliefert. Ein unpassierbarer Auftrag gibt Material zurück und wird später erneut gesucht.

Das Spiel speichert ausschließlich auf ausdrücklichen Auftrag. Wähle einen freien Platz für eine neue Siedlung, wenn du bestehende Spielstände behalten möchtest.

### Umfang

Dieser Stand bietet einen kleinen Siedlungsablauf mit Bau, Produktion, Farming, Bewohnerfreigaben und Save/Load. Ein erster Räuberangriff ist im Quellcode, aber im Unity-Editor noch nicht durchgespielt. Weltgröße und Bevölkerung sind begrenzt; Tunnel, begehbare Etagen, umfassender Kampf und Handel fehlen. Den tatsächlich geprüften Stand enthält `Documentation/Projektstand.md`.

### Eigene Gebäude und Arbeitsvorlagen

Neue Betten brauchen zwei nebeneinanderliegende ebene Felder; mit , und . drehst du das Bett vor dem Setzen. Jedes fertige Bett gibt genau einen Wohnplatz, auch ohne Dach. Jeder Bewohner bekommt ein eigenes Bett zugewiesen. Die vier Startbetten sind nicht abreißbar. Bett- und Werkbankpläne halten ihre Stellfläche frei; Boden- und Wandpläne lassen die Laufwege bis zum Bau offen.

Beim Bewohner kannst du eine Arbeitsvorlage wählen und jede Aufgabe anschließend einzeln ändern. Die Vorlage **Schreiner** erlaubt ausschließlich Werkbankaufträge; bei Hunger versorgt er sich weiterhin selbst mit Nahrung. Die übrigen Arbeitsvorlagen bis auf die Wache lassen Transport zu. Erfolgreiche Arbeiten erhöhen die jeweilige Fähigkeit: zehn Arbeitsschritte pro Stufe, höchstens Stufe 5, acht Prozent Leistungsbonus pro Stufe. Fähigkeiten bleiben beim Speichern erhalten.

Die Vorlage **Wache** schaltet die Arbeitsaufgaben aus und reagiert auf einen nahen Räuber aus größerer Entfernung. Ohne Wachtposten hält sie sich am Siedlungsmonument auf; einen Wachtposten kannst du unter „Bauen“ für zwei Bretter errichten. Fertige Wachtposten ziehen Wachen auf freie Nachbarfelder. Im Bewohnerfenster kannst du die Verteidigung für jede Person einzeln an- oder ausschalten; auch Personen ohne Verteidigungsfreigabe können verletzt werden. Eine Wache sucht bei Hunger Nahrung. Diese neuen Kampf- und Save-Funktionen sind bislang nur kompiliert und brauchen noch einen Play-Mode-Test im Unity-Editor.

Verletzte Bewohner erholen sich bei ausreichender Nahrung langsam im Leerlauf und schneller am Bett. Nach dem bisherigen siebten Siedlungsziel folgt „Schutz“: Wachtposten bauen und Wache einsetzen. Bereits in älteren Spielständen vollständig abgeschlossene Siedlungsziele bleiben beim Laden abgeschlossen.

Die neuen Modelle sind direkt im Spiel eingebunden. Unter `ArtSources/SettlementKit` findest du eine Übersicht und bearbeitbare OBJ-Dateien; die normalen Bewohner und Betten verwenden weiterhin die passenden KayKit-Modelle.

## Spielhandbuch (früher Tutorial.md)

### Alarm, Verschieben und Holzstraße – Phase 48

Alarmglocke auswählen und Alarm läuten: Menschen sammeln sich in vier Feldern Umkreis. Alarm beenden stellt die bisherigen Aufgaben wieder her. Unter Spiel lässt sich „kein Hunger / keine Müdigkeit“ ein- und ausschalten. Truhen und geeignete fertige eigene Objekte haben einen Verschiebebutton; danach ein freies Bodenfeld wählen. Komma/Punkt dreht Bauteile, Rechtsklick bricht ab. Unter Bau → Wege & Brücken liegt die Holzstraße: ein Brett, 20 % Laufbonus wie der Holzboden. [Details und Grenzen](Phasen/ResidentFixes.md).

### Arbeitsplätze und Spielhilfe – Phase 47

Im Start- und Spielmenü öffnet **Spielhilfe** eine kurze Anleitung. Klicke einen fertigen eigenen Arbeitsplatz an: Links wählst du das Rezeptbild, rechts stehen Materialkosten, Auftrag und Mindestvorrat.

Sägewerk und Schreinerbank produzieren die sechs Holzrezepte. Steinmetzwerkbank und Meißelplatz produzieren Steinblöcke, Küche und Vorbereitungsküche Mahlzeiten. Die normale Werkbank kann weiterhin alle acht Rezepte. **Handwerker** können alle vorhandenen Rezeptarten bearbeiten; **Schreiner** bearbeiten Holzrezepte. Rohstoffe, Zeit und erreichbare Arbeitsplätze sind nötig.

Sägeaufsatz, Steinwerkzeug und Kochaufsatz geben neben einem passenden Arbeitsplatz den vorhandenen Geschwindigkeitsbonus. Beim Anklicken öffnet sich dessen Menü. Nicht jeder vorbereitete Arbeitsplatz hat ein Produktionssystem: Neun Modelle tragen ausdrücklich den Hinweis Dekoration. Kartentisch und Reliktwerkbank führen zu vorhandenen Armee-/Monumentfunktionen.

Für den USB-Betatest den ganzen Ordner weitergeben, nicht nur die EXE. Spielstände liegen auf dem jeweiligen PC. [Prüfbericht](Phasen/BetaReadiness.md).

### Kampagne und Questbuch

**Das Versprechen im Stein** begleitet neue und bestehende Siedlungen. Das kleine Fenster rechts oben zeigt die nächste offene Aufgabe; bereits erreichte spätere Ziele zählen ebenfalls. **– / +** klappt den Bereich ein oder aus. Das **Questbuch** enthält alle 18 Aufgaben, ihren Status und Hinweise. Der Außenposten ist optional und überspringbar.

Herstellung, Ernte und normale Aufnahme werden dauerhaft nachgewiesen. Verbrauch setzt den Fortschritt nicht zurück. Für ältere Siedlungen müssen fehlende historische Herstellungsnachweise durch neue Produktion erbracht werden. Die Entscheidungsschlacht bestätigst du weiterhin selbst unter **Armee**; das Questfenster startet sie nicht. Beide Befreiten müssen das Monument erreichen, danach bleibt ihre Aufnahme eine eigene Entscheidung. Nach dem Kampagnensieg kannst du frei weiterspielen.

[Umfang, Bilder und Prüfgrenzen](Phasen/StonePromiseCampaign.md)

### Neue Erweiterungen – Save 55

Im Hauptmenü **Große Testkarte · 96 × 96 · alle Vorlagen** wählen. Sie bietet alle sechs Bauvorlagen, acht überdachte Betten, eine einfache Haupthalle, ein 15×15 Baumfeld mit großzügigem Baumabstand und viel freie Baufläche. Die Starttruhe hat 64 Plätze und keine grüne Unterlage. Erde und Gras schließen wieder ohne sichtbare Würfelränder aneinander an. Alte Spielstände werden weiterhin geladen.

**Truhen:** Eingelagerte Waren verschwinden optisch und bleiben im Inventar der Truhe verfügbar.

**Gemeinsamer Angriff:** Unter Bewohner Wachen zuweisen und Verteidigung erlauben. Unter **Armee → Angriff** klicken und einen Zielort auf der Karte anklicken. Alle verfügbaren Wachen mit mehr als 30 Leben sammeln sich dort; erst wenn alle angekommen sind, greifen sie nahe Gegner an. Ohne Gegner halten sie die Position. Unter Armee beendet **Angriff abbrechen** den Auftrag. Esc/Rechtsklick bricht die Zielwahl ab. Unerreichbare Ziele werden abgelehnt; blockierter Marschweg, Ausfall oder Rollenwechsel beendet die Gruppe. Nach dem Laden einen laufenden Angriff erneut befehlen.

**Innenansicht:** Unter **Bau** die Variante **Innenansicht · Dächer, Wände und Türen ausblenden** einschalten. Böden, Möbel und Bewohner bleiben sichtbar. Ausschalten stellt die Außenansicht wieder her. Die Ansicht entfernt keine Wände oder Wegsperren.

Das Hauptmenü zeigt die drei Ladebilder nacheinander als Hintergrund. Beim Start einer Welt oder Laden eines Spielstands läuft dieselbe Folge, bis die Siedlung bereit ist. Währenddessen sind Spielbefehle gesperrt. Es gibt keine zusätzliche Wartezeit, um bei einem kurzen Ladevorgang alle Bilder zu zeigen.

Unter **Kolonie** erklären die Siedlungsziele ihren Fortschritt und den nächsten Schritt. Offene Baustellen nennen das richtige Material; Werkbankhinweise berücksichtigen auch weitere Werkbänke und Truhen. Neue Siedlungen haben vier tatsächliche Startbetten. In älteren Welten ohne Betten über **Bauen** Schlafplätze anlegen und Granit beziehungsweise Baumeistern Bauarbeit freigeben. Ein Zusatzbett zählt beim Wohnraumziel erst mit Dach über beiden Feldern.

Die neue Wellenkampagne, das Lager, Vorstöße, Monumentkräfte, Besucher und Chronik sowie die erweiterten Bau- und Wagenfunktionen stehen im aktuellen [Phasenhandbuch](Phasen/ContinuousPhases.md#bedienung). Es hat bei neuen Funktionen Vorrang vor dem älteren Grundhandbuch darunter. Unter **Armee** findest du Kampagne, Vorstöße und Monumentaktionen; unter **Bauen** die normalen Bauteile, Vorlagen, Werkzeuge und Wagen. Wagen und Maschinen werden über ihr Bauteilfenster bestehenden Personen zugewiesen.

Nach dem vollständigen Skelettlagersieg werden Alva und Tarek befreit. Sie laufen zum Monument und warten bei versperrtem Weg, zerstörtem Monument oder vollem Kandidatenpool. Nach Ankunft findest du sie unter **Kolonie**; die Aufnahme braucht ein erreichbares freies Bett mit Dach und zwei Mahlzeiten oder sechs Beeren. Bereits besiegte Lager älterer Spielstände vergeben keine zusätzlichen Gefangenen.

Säulen tragen Dächer, niedrige Plattformen sind begehbar und Türme brauchen Treppenrampen. Werkbankaufsätze müssen direkt daneben fertig gebaut sein. Die Säge hilft bei Holzrezepten, Steinwerkzeug bei Steinblöcken und die Kochstelle bei Mahlzeiten. Zusätzliche Golems benötigen 26 Steinblöcke und später echte Steinreparatur. Jahreszeiten und Tiere gehören nicht zu dieser Erweiterung.

Dieses Handbuch beschreibt den aktuellen spielbaren Grundbau von **Stone & Soil**. Es ist wie ein kleines Nachschlagewerk aufgebaut: Jeder Abschnitt erklärt einen Begriff und seinen Platz im Siedlungsablauf. Geplante Funktionen stehen ausdrücklich im letzten Abschnitt.

### Inhalt

1. [Spiel starten und Ziel](#spiel-starten-und-ziel)
2. [Bedienung](#bedienung)
3. [Welt und Rohstoffe](#welt-und-rohstoffe)
4. [Bewohner und Berufe](#bewohner-und-berufe)
5. [Lager und Transport](#lager-und-transport)
6. [Werkbank und Aufträge](#werkbank-und-aufträge)
7. [Bauen und Wohnen](#bauen-und-wohnen)
8. [Nahrung und Landwirtschaft](#nahrung-und-landwirtschaft)
9. [Skelettangriff und Verteidigung](#skelettangriff-und-verteidigung)
10. [Speichern und Laden](#speichern-und-laden)
11. [Alle Gegenstände in V01](#alle-gegenstände-in-v01)
12. [Bekannte Grenzen und nächste Schritte](#bekannte-grenzen-und-nächste-schritte)

### Spiel starten und Ziel

**Stone & Soil** ist eine Kolonie-Simulation. Du planst Arbeiten und Bauvorhaben; die Bewohner führen erlaubte, erreichbare Aufgaben selbstständig aus. Der erste wiederholbare Ablauf lautet: **Baum fällen → Stamm einlagern → Brett an der Werkbank fertigen → Bauteil fertigen → Bauplan beliefern → Gebäude fertigstellen**.

Öffne den Projektordner über **Unity Hub mit Unity 6000.3.25f1**, danach `Assets/Scenes/Main.unity` und drücke **Play**. Das Hauptmenü bietet eine neue Siedlung mit Seed, eine flache Testwelt mit Startmaterial und vorhandene Spielstände. Die flache Testwelt eignet sich zum Ausprobieren; die reguläre Welt hat kleine Höhenstufen. Die Spielversion ist **V0.1**. Eine ältere Windows-Datei im Projekt ist noch kein aktueller V0.1-Build.

Die Siedlungsziele im Menü führen durch erste Aufgaben. V0.1 ist ein Grundgerüst, keine abgeschlossene Kampagne. Du kannst die Siedlung auch frei weiterbauen.

### Bedienung

Klicke zuerst in das **Game**-Fenster, damit Unity Eingaben an das Spiel weitergibt.

| Eingabe | Wirkung |
| --- | --- |
| Linksklick | Bewohner, Baum, Busch oder Bauwerk auswählen; bei aktivem Werkzeug einen Auftrag setzen |
| Linke Maustaste ziehen | Rechteck für Felder, Bäume oder Abriss markieren; in der Werkbank Aufträge umsortieren |
| Rechte Maustaste ziehen | Kamera drehen |
| Mittlere Maustaste ziehen oder W/A/S/D | Blickpunkt verschieben |
| Mausrad | Heran- und herauszoomen |
| Pos1/Home | Kamera zurücksetzen |
| Leertaste | Pause umschalten |
| 1, 2, 3 | Spielgeschwindigkeit wählen |
| Komma und Punkt | Drehbaren Bauplan ausrichten |
| Escape oder Rechtsklick | Auswahl beziehungsweise Platzierungswerkzeug beenden |
| F5 / F9 | Gewählten Spielstand speichern / laden |

Die untere Leiste öffnet **Bewohner**, **Bau**, **Abbau**, **Handwerk**, **Armee** und **Spiel**. Der Vorratsstreifen zeigt die wichtigsten Bestände. Die linke Siedlungsansicht nennt Ziele, Wohnplätze, Bedrohung und mögliche Engpässe. Dachanzeige lässt sich im Baumenü umschalten.

### Welt und Rohstoffe

Die Karte besteht aus Voxeln. Erd- und Steinschichten können abgebaut werden. Oberflächen sind begehbar, sofern eine erreichbare Route besteht; Bewohner können kleine Höhenstufen überwinden. Häuser, Bäume und Einrichtungen verändern die Wegsuche. Der Spiel-Seed bestimmt unter anderem Gelände und Baumverteilung.

**Bäume** liefern Baumstämme. Ein Klick auf einen Baum setzt oder entfernt einen Fällauftrag. Baumstellen können als Fläche geplant werden; Bewohner mit Feldarbeit pflanzen später dort. Gepflanzte Bäume benötigen Abstand zueinander. Nach dem Fällen wachsen Bäume in neuen Welten nicht von selbst nach.

**Beerenbüsche** liefern Beeren und werden nach Spielzeit wieder erntereif. Ein Klick markiert sie zur Ernte. **Abbauaufträge** liefern Erde und Stein. Lose Gegenstände können von Bewohnern in ein zulässiges Lager getragen werden.

In der Kartenmitte gibt es **keine sichtbare Blume beziehungsweise kein Monument** mehr. Der interne Spawnpunkt dient weiterhin dem Start und der Rekrutierung; er belegt kein Feld. Neue Karten enthalten **keine automatisch gesetzten Betten**.

### Bewohner und Berufe

Vier Menschen und ein Golem starten in einer neuen Welt. Klicke einen Akteur an oder wähle ihn in der Bewohnerliste. Die Ansicht zeigt Name, Tätigkeit oder Wartegrund, bei Menschen Energie und Sättigung, Gesundheit, Rolle, Arbeitsfreigaben und Erfahrung. Abgeschlossene Arbeit verbessert das Können; höhere Stufen beschleunigen die betreffende Arbeit.

**Beruf** bedeutet die dauerhaft gewählte Arbeitsvorlage. **Arbeitsfreigaben** bestimmen einzeln, welche Aufgaben eine Person übernehmen darf. Eine einzelne manuelle Änderung markiert die Aufgaben als angepasst, ändert aber die gewählte Rolle nicht. Essen und Ruhe bleiben Bedürfnisse der Person. Bereits getragene Materialien werden bei einem Rollenwechsel nicht einfach verworfen.

| Rolle | Schwerpunkt in V0.1 |
| --- | --- |
| Allrounder | Viele allgemeine Arbeiten |
| Förster | Baumfällen, dazu allgemeine Transport- und Versorgungsarbeiten |
| Baumeister | Bauarbeit, dazu allgemeine Arbeiten |
| Handwerker | Werkbankarbeit, dazu allgemeine Arbeiten |
| Bauer | Feldarbeit und Nahrungssuche, dazu allgemeine Arbeiten |
| Bergmann | Abbau, dazu allgemeine Arbeiten |
| Schreiner | Werkbankarbeit für Holzrezepte |
| Wache | Verteidigung und Wachtposten statt normaler Arbeit |

Die genaue Aufgabenliste steht direkt unter den Berufsknöpfen und kann pro Bewohner verändert werden. Für Menschen ist die Rolle **Bauer** mit zwei FarmerKit-Modellen verknüpft: ungerade Bewohner-ID wählt Ranger, gerade ID Rogue. Das Outfit bleibt auch beim Gehen, Arbeiten, Tragen, Essen und Ruhen erhalten; andere menschliche Rollen verwenden die normale Bewohnerfigur. Beide Varianten sind in einer echten [Ingame-Vorschau](Images/Farmer_Ingame_V0.1.jpg) zu sehen.

**Steingolem:** Neben den vier Menschen beginnt „Granit“ als eigener auswählbarer NPC. Seine Arbeitsfreigaben und Berufsrollen werden wie bei einem Bewohner eingestellt; sein [Golem-Modell](Images/Golem_Unity_Front.png) bleibt bei Rollenwechseln erhalten. Er braucht keine Nahrung, keine Ruhe und kein Bett, zählt nicht zum Wohnraumlimit, verteidigt mit fünffachem Trefferschaden und kann beim Transport bis zu 20 lose Gegenstände zusammen einsammeln. Seine aktuelle Tragmenge steht in der Bewohnerliste und im Aufgabenfenster. Das Modell hat bewegliche Arme und Beine, aber noch kein vollständiges Skelett für komplexe Animationen.

**Energie und Hunger:** Arbeit und Gehen verbrauchen Energie; Bewohner suchen bei Bedarf einen zugewiesenen Ruheplatz. Die Sättigung sinkt um einen Punkt je zehn Spielsekunden. Von voller Sättigung bis zur Nahrungssuche vergehen etwa neun Spielminuten; Hunger wird aus erreichbaren Nahrungsvorräten gestillt. Ohne fertiges Bett gibt es noch keinen Wohnplatz. Ein zugewiesenes Bett gehört jeweils einem Bewohner. Wohnraum und sechs eingelagerte Beeren erlauben die Aufnahme weiterer Personen, bis zum aktuellen Limit von zwölf.

### Lager und Transport

Das **Zentrallager** nimmt Rohstoffe und Produkte auf. Sein Fenster zeigt Kapazität und Materialfilter. Ein ausgeschalteter Filter verhindert neue Einlagerungen des betreffenden Typs; vorhandene Bestände bleiben. Über das Fenster kann ein Teil des Inhalts abgelegt und das Lager auf ein freies, erreichbares Feld versetzt werden.

**Truhen** schaffen zusätzlichen Platz. Eine Truhe mit 32 Plätzen benötigt ein Brett, eine mit 64 Plätzen zwei Bretter. Bewohner liefern Material aus einem erreichbaren Lager und bauen die Truhe. Truhen haben ebenfalls Filter. Ist alles voll oder der Filter gesperrt, bleiben lose Materialien liegen; die Siedlungsansicht meldet den Engpass.

**Transport** ist eine eigene Arbeit. Ein Bewohner reserviert erreichbare Gegenstände, trägt sie und gibt sie in einem Lager ab. Laufende Lieferungen zählen bei der automatischen Materialplanung mit, damit Bauteile nicht unnötig doppelt bestellt werden.

### Werkbank und Aufträge

Die erste **Werkbank** ist ein gemeinsamer Produktionsplatz für mehrere Rezepte. Öffne sie über die Welt oder das Baumenü. Wähle ein Rezept, eine Menge und bestätige den Auftrag. Ein Mindestvorrat kann automatische Nachproduktion auslösen.

| Eingang | Ergebnis | Verwendung |
| --- | --- | --- |
| 1 Baumstamm | 1 Brett | Möbel, Bau und weitere Holzbauteile |
| 1 Stein | 1 Steinblock | Vorbereiteter Steinwerkstoff |
| 1 Karotte | 1 Mahlzeit | Nahrung |
| 1 Brett | 1 Holzboden, Holzwand, Dach, Truhenteil oder Bettteil | Modulare Baupläne |

Jede Werkbank hat **höchstens zehn Auftragsstapel**. Ziehe eine Zeile mit gedrückter linker Maustaste: Platz 1 hat die höchste Priorität, Platz 10 die niedrigste. Wird ein Stapel fertig und hat keine offenen Stücke mehr, rücken die unteren Zeilen auf. Ein begonnenes Stück wird zu Ende gefertigt; ein Auftrag ohne Material lässt eine ausführbare Zeile dahinter vor.

Ein Bauplan prüft, welche fertigen Teile bereits im Lager, lose, getragen oder bestellt sind. Fehlt etwas, bestellt das Spiel es automatisch an einer Werkbank. Für Holzbauteile werden bei Bedarf Bretter mitbestellt. Die Rohstoffe selbst müssen trotzdem vorhanden oder beschafft werden. Ist die Zehnerliste voll, wartet die Nachbestellung auf einen freien Platz.

### Bauen und Wohnen

Wähle im **Baumenü** ein Bauwerk und klicke auf eine zulässige Fläche. Die Vorschau zeigt die Platzierung; Komma/Punkt dreht ausrichtbare Bauteile. Bewohner mit Baufreigabe bringen die geforderten Teile und stellen die Baustelle fertig. Bei Abbruch werden angelieferte Materialien wieder freigegeben beziehungsweise abgelegt.

Die **Dorfpalisade** findest du unter **Bau → Holzbauteile**. Ein Segment kostet 3 Bretter und besitzt 180 Stabilität. Mit Komma/Punkt drehst du es um 90°; durch Ziehen setzt du eine Reihe entlang der Rasterkanten. Der bisherige Holzzaun bleibt auswählbar. [Palisadenbericht mit Bildern](Phasen/VillagePalisadeIntegration.md).

| Bauwerk | Zweck |
| --- | --- |
| Holzboden | Begehbare Grundlage für ein Haus |
| Holzwand | Begrenzung an einer Feldkante; zwei verschiedene Kanten eines Bodens bilden eine Ecke |
| Durchgang | Offene Wandkante für einen Zugang |
| Dach | Deckt ein unterstütztes Feld ab; Anzeige kann umgeschaltet werden |
| Werkbank | Zusätzlicher Produktionsplatz mit eigener Warteschlange |
| Bett | Ruheplatz und ein Wohnplatz; belegt zwei drehbare Felder |
| Wachtposten | Standort für eine Wache |

Ein **geschützter Wohnplatz** braucht ein fertiges Bett mit geeigneter Boden- und Dachabdeckung auf beiden Bettfeldern. Du kannst Boden und Dach auch nach dem Bettbau ergänzen. Ein altes, selbst gebautes Bett bleibt beim Laden erhalten; die früher automatisch erzeugten Startbetten werden nicht wieder aufgebaut. Deshalb solltest du früh ein Bett planen.

Mit dem **Abrissrechteck** kannst du mehrere Bauwerke markieren. Ein fertiges Bauteil gibt beim Abreißen einen Teil des Materials zurück. Baue nicht unbedacht Zugänge zu, denn Bewohner benötigen freie Nachbarfelder für Arbeit und Lieferung.

### Nahrung und Landwirtschaft

Markierte **Beerenbüsche** werden geerntet und nach Spielzeit wieder reif. **Felder** lassen sich als Rechteck bis 10 × 10 planen; anschließend wählst du Beeren oder Karotten. Ein Bauer beziehungsweise ein Bewohner mit Feldarbeit sät, wartet auf Reife, erntet und sät erneut. Das Feldfenster zeigt Kultur und Zustand.

Beeren und Karotten können gegessen werden. Karotten lassen sich zu Mahlzeiten verarbeiten. Ohne gelagerte oder erreichbare Nahrung sinkt die Sättigung; das Menü weist auf Engpässe hin. Landwirtschaft, Lagerfilter und Werkbankaufträge greifen daher ineinander.

### Skelettangriff und Verteidigung

Ein **Skelett-Räuber** kann vom Kartenrand erscheinen, zum Lager gehen, einen Gegenstand stehlen und wieder fliehen. Die Armeeansicht zeigt Bedrohung und Gegnergesundheit. Bewohner mit Verteidigungsfreigabe greifen in Reichweite ein; Wachen reagieren aus größerer Entfernung und suchen einen Wachtposten. Der Gegner kann als vorrangiges Ziel markiert werden.

Verwundete Bewohner pausieren ihre Arbeit und erholen sich. Bei ausreichender Versorgung heilt Gesundheit; Ruhe am Bett hilft schneller. Unter **Spiel** gibt es einen Testknopf, der einen Skelettangriff sofort auslöst. Das Skelett nutzt Steh-, Geh- und Angriffshaltungen aus dem KayKit-Rig.

### Speichern und Laden

Es gibt **drei Spielstandsplätze**. Wähle unter **Spiel** einen Platz, speichere mit **F5** oder lade mit **F9**. Das Startmenü kann vorhandene Plätze laden und bietet „Fortsetzen“. Vor einem Neustart oder Laden während einer laufenden Siedlung verlangt das Menü eine Bestätigung für ungespeicherte Änderungen.

Gespeichert werden unter anderem Welt, Vorräte, Aufträge, Baustellen, Bewohner, der Golem und seine Rolle, Bedürfnisse, Gesundheit und laufende Überfälle. Die Dateiformatnummer ist intern **29** und nicht mit der Spielversion **V0.1** identisch. Ältere unterstützte Spielstände werden beim Laden im Speicher angepasst; das Laden überschreibt die alte Datei nicht automatisch. Sichere Spielstände zusätzlich, bevor du mit älteren Projektkopien experimentierst.

### Alle Gegenstände in V0.1

| Gegenstand | Entsteht durch | Hauptzweck |
| --- | --- | --- |
| Erde | Bodenabbau | Gelände auffüllen |
| Stein | Steinabbau | Steinblock-Rezept |
| Baumstamm | Baumfällen | Brett-Rezept |
| Brett | Werkbank aus Baumstamm | Bau, Truhen, Holzbauteile |
| Beere | Busch oder Beerenfeld | Nahrung, Rekrutierung |
| Steinblock | Werkbank aus Stein | Vorbereiteter Baustoff |
| Karotte | Karottenfeld | Nahrung, Mahlzeit-Rezept |
| Mahlzeit | Werkbank aus Karotte | Nahrung |
| Holzboden-Bauteil | Werkbank aus Brett | Holzboden-Bauplan |
| Holzwand-Bauteil | Werkbank aus Brett | Holzwand und Durchgang |
| Dach-Bauteil | Werkbank aus Brett | Dach-Bauplan |
| Truhenteil | Werkbank aus Brett | Truhen-Bauplan |
| Bettteil | Werkbank aus Brett | Bett-Bauplan |

### Bekannte Grenzen und nächste Schritte

V0.1 ist das **fertige Grundgerüst** für Welt, Bewohner, Rohstoffe, Lager, Aufgaben, Bau, Nahrung, Gefahr und Speichern. Farmerfiguren und Skelettanimation sind im Unity-Play-Modus geprüft. Ein aktueller Windows-Build und eine vollständige Langzeitprüfung aller Alt-Spielstände stehen noch aus.

Für die nächste Version bietet sich **eine kleine neue Produktionskette pro Beruf** an. Die folgende Tabelle ist ein Vorschlag, noch kein V0.1-Spielinhalt:

| Beruf | Mögliche Station | Neue Gegenstände | Nutzen im Spiel |
| --- | --- | --- | --- |
| Allrounder | Umschlagplatz | Transportkiste | Größere Lieferungen und kurze Wege |
| Förster | Baumschule | Setzling, Harz | Wald gezielt erneuern; Harz als Bau- oder Handwerksstoff |
| Bergmann | Erzplatz | Eisenerz, Kohle | Grundlage für spätere Metallverarbeitung |
| Steinmetz (neue Rolle) | Steinmetzbank | Steinziegel, Pflasterstein | Haltbarere Böden und Mauern |
| Bauer | Dreschplatz | Saatgut, Getreide, Stroh | Neue Feldfrucht und Rohstoff für Nahrung und Bau |
| Koch (neue Rolle) | Küche mit Ofen | Mehl, Brot, Eintopf | Nahrung mit höherem Sättigungswert |
| Schreiner | Schreinerei | Möbelbauteil, Tisch, Schrank | Ausbau von Wohnraum und Lagerung |
| Baumeister | Bauhof | Gerüst, Mörtel | Größere Baustellen und spätere Steinbauten |
| Wache | Waffentisch | Holzspeer, Schild | Verbesserte Verteidigung |

Ich würde zuerst **Getreide → Mehl → Brot** mit Dreschplatz und Küche umsetzen. Diese Kette verbindet Feldarbeit, Handwerk, Lagerung, Transport und Essen. Anschließend folgen **Setzlinge und Möbel**, dann Stein und Verteidigung. Jede neue Kette sollte mit Auftrag, sichtbarer Arbeit und Save/Laden vollständig funktionieren, bevor die nächste hinzukommt.

### Werkbank über Bilder bedienen (Phase 45)

Unter Handwerk zuerst das Bild für Schreiner, Steinmetz oder Küche wählen, danach das Bild des gewünschten Ergebnisses. Die Rezeptansicht zeigt Eingabematerial, verfügbaren Vorrat und Kosten. Menge eingeben und Herstellen wählen. Ohne Material wartet der Auftrag auf Nachschub. Über Aufträge lässt sich die Warteschlange öffnen. Mindestvorrat und Entfernen bleiben in der Rezeptansicht; auf kleinen Bildschirmen nach unten scrollen. Die obere Bestandsleiste zeigt Ressourcenbilder und Anzahl; beim Darüberfahren erscheint die eindeutige Bezeichnung.

### Weltwahl und Handwerksbuch (Phase 46)

Neues Spiel öffnet ein Untermenü. Flache Testwelt behält die große Ausstellung. Neue normale Welt bietet 50×50 Felder mit Höhenunterschieden. Bauen bietet 100×100 ebene Grasfelder, 100 Stück jeder Ressource und zwei 15×15-Pflanzbereiche. Die Bäume haben Abstand zwischen den Stämmen; die Beeren wachsen in Reihen. Diese Vorräte werden nur beim neuen Start vergeben.

Im Handwerk links den Beruf und das Rezeptbild wählen. Rechts stehen Bild, Material, Menge, Kosten, Mindestvorrat und Aufträge. Bei kleinen Fenstern beide Spalten getrennt scrollen. Im Bau sind die Modelle die Klickziele; beim Darüberfahren erscheinen Name und Materialkosten. Die obere Leiste zeigt Ressourcensymbole mit Mengen, ohne Materialnamen. Das Questbuch schließt mit X.
