# Fortlaufende Entwicklungsphasen – 4. Oktober 2026

**Aktuell: Phase 35 – Große Testkarte, Starttruhe und zusammenhängender Boden, Save 55.** [Neue Spielversion](../../Builds/Phase35-TestMap-2026-10-04/StoneAndSoil.exe).

Dieser Bericht beschreibt die Fortsetzung im bestehenden Unity-Projekt. Er hat Vorrang vor historischen Angaben zu Save 28–30 in den übrigen Dokumenten. Jahreszeiten und Tiere sind ausdrücklich ausgeschlossen. Ein Sieg beendet die freie Siedlung nicht. Bestehende Nutzer-Spielstände werden weder überschrieben noch gelöscht.

**Vorheriger Meilenstein: Phasen 29–32, Save 54 unverändert.** Neue Windows-Version: [Phase32-RestRecovery-2026-10-04/StoneAndSoil.exe](../../Builds/Phase32-RestRecovery-2026-10-04/StoneAndSoil.exe). Den gesamten Ordner zusammenlassen. Ziele/Materialhinweise, vier reale Startbetten und Ruhewegkorrektur sind enthalten. Laufende Nutzerprozesse und Speicherdateien wurden nicht verändert. Frühere Buildordner bleiben erhalten.

Die gemeinsame Gruppe bestand: `Phase29-ProgressionFlow-final.log`, `Phase30-ResidentNeeds-final.log`, `Phase30-EconomyEndurance-final.log`, `Phase31-WorkHints.log`, `Phase31-SaveContinuity.log` (Fixtures v29–54 / reale v29-Wiederherstellung), `Phase31-CampRescue.log`, `Phase32-RestCentering.log`, `Phase32-NormalResidentNeeds.log`, Windows-Build und ausführbarer Player. Der Wirtschaftsdauertest lief vor der zusätzlichen Ruhewegkorrektur; diese wurde danach gezielt im Play-Modus und die abschließende Runtime im Player geprüft. Es wird kein erneuter 20-Minuten-Dauertest mit der letzten Positionskorrektur behauptet.

![Geprüfte Kamera aus der Windows-Version mit realen Startbetten](../Images/Phase32_WindowsPlayer.png)

## Phase 35 – Große Testkarte, Starttruhe und durchgehende Erde

Die grüne Fläche war die bisherige Startlager-Markierung. Sie ist entfernt. Die Starttruhe hat nun 64 Plätze, einen unsichtbaren Auswahlkollider und keine sichtbaren Warenstapel. Der bestehende Lager-Endpunkt bleibt intern erhalten, damit Transport, Reservierungen, Filter, Verschieben und alte gespeicherte Bestände funktionieren. Alte 32er Startlager erhalten beim Laden die größere Truhe. Zusätzliche platzierte 32er/64er Truhen ändern sich nicht.

**Hauptmenü → Große Testkarte · 96 × 96 · alle Vorlagen** erzeugt eine flache Karte mit neunfacher Fläche gegenüber 32×32. Normale Siedlungen bleiben 32×32. Die kleine flache Entwickler-Testwelt bleibt für vorhandene Prüfungen verfügbar. Die große Karte erhält Startmaterial und beginnt mit normaler Wellenwartezeit; sie löst keinen frühen Testangriff nach 25 Sekunden aus.

Das Baumfeld umfasst 15×15 Bodenfelder, von (8,66) bis (22,80). Darin stehen 16 Bäume, mit vier Feldern Abstand zwischen den Stämmen und Platz für Kronen/Wege. Die drei alten Szenen-Demobäume werden nur beim Erzeugen dieser Karte entfernt. Die sechs vorhandenen Vorlagen stehen vollständig gebaut in zwei Reihen von Spalten bei (24,20), (34,20), (24,32), (34,32), (24,44), (34,44): kleines Wohnhaus, Wachhof, Marktplatz, Versammlungshalle, Lagerhaus und Gasthaus. Keine neue Bauvorlage ersetzt sie.

Das Hauptgebäude ist eine einfache 9×7 Halle von (44,31) bis (52,37), mit Dach, zwei Innenstützen, Tisch und zwei mittig ausgerichteten Eingängen. Die Mittelachse x=48 bleibt begehbar. Fünf überdachte Startbetten stehen in der Halle, drei weitere in Wohnhaus/Gasthaus: **acht Betten insgesamt**. Starttruhe (48,43), Werkbank (48,41) und Monument (48,48) liegen nahe beieinander. Große freie Flächen bleiben für Erweiterungen, Abbau und Kampf.

Die Erd-/Grasdarstellung verwendet die zusammenhängenden Chunk-Oberflächen mit passenden Weltkoordinaten für die Textur. Die zuvor erneut aktivierten einzelnen angeschrägten KayKit-Erd-/Graswürfel werden nicht mehr gezeichnet. Damit schließen Flächen an Feld- und Chunk-Grenzen ohne Würfelränder aneinander an. Graswachstum/Trittspuren wechseln die Oberflächenmaterialien; Erde an Seiten und Abbau-Kollisionen bleiben erhalten. Sichtbare Steinvorkommen behalten ihre bisherigen Modelle.

Save **55** speichert Kartengröße und Testkartenvariante. Der Produktionsparser prüft ältere Spielstände weiterhin gegen 32×32, neue Testkarten gegen 96×96; sein zeitlich begrenzter Prüfkontext verändert die laufende Welt nicht. Lager, Monument, Kampffeinde, Besucher, Pfade, Betten und Gebäudekoordinaten verwenden die passenden Grenzen. Laden erzeugt die Galeriegebäude nicht erneut; es stellt gespeicherte Bauten und Baumzustände wieder her. Nutzer-Slots wurden bei den Prüfungen nicht gelesen oder geschrieben.

Gezielte Playerprüfung: Größe/64 Plätze/kein grünes Pad, Baumfeld und Abstand, alle sechs Vorlagen, exakt acht überdachte Betten, erreichbare Türen und Hallenachse, identische UVs an gemeinsamen Oberflächenkanten, alte v54-Parsermigration, Produktionsparser und realer Szenen-Ladevorlauf mit 50 Lageritems, Pause und einem Lager bei (80,80), ohne doppelte Bauten/Bäume. Zusätzlich Armee-/Innenansicht-, Ladebild-/Bewohnerlade- und Produktionsprüfungen. Originale Kameraaufnahmen wurden visuell geprüft; sie zeigen keine IMGUI-Oberfläche. Der anfänglich mitgezählte alte Szenenbaum-Bestand bleibt als `Phase35-TestMapPlayer-demo-trees-diagnostic.log` dokumentiert.

![Neue Testkarte – Kameraaufnahme aus dem Windows-Player](../Images/Phase35_TestMap_Overview.png)

![Durchgehende Erde ohne Würfelränder](../Images/Phase35_JoinedEarth.png)

![Durchgehendes Gras ohne Würfelränder](../Images/Phase35_JoinedGrass.png)

Neue Version: [Phase35-TestMap-2026-10-04/StoneAndSoil.exe](../../Builds/Phase35-TestMap-2026-10-04/StoneAndSoil.exe), gesamten Ordner zusammenlassen. Vorhandene Modelle werden wiederverwendet; kein neues Modell fehlt für diese Aufgaben. Tiere und Jahreszeiten bleiben ausgeschlossen.

Abschlussprüfungen: `Phase35-WindowsBuild.log` und die vier Playerprotokolle `Phase35-TestMapPlayer.log`, `Phase35-ArmyViewPlayer.log`, `Phase35-LoadingScreensPlayer.log`, `Phase35-SettlementPlayer.log` bestanden mit Exit 0. `Phase35-SaveContinuity.log` bestand ebenfalls mit Exit 0: Produktionsparser für versionsgetreue Fixtures v29–55 sowie tatsächliche v29-Wiederherstellung. Die verdeckten Editorläufe blieben zunächst beim asynchronen Test-Szenenaufbau hängen (`Phase35-SaveContinuity-background-diagnostic.log`, `-editor-loop-diagnostic.log`, `-async-editor-diagnostic.log`). Nur die Editor-Fixture-Erzeugung wurde auf direkten Szenenwechsel umgestellt; echte asynchrone Übergänge bleiben durch die Playerprüfungen abgedeckt. Nutzerprozesse und Slots wurden nicht verändert.

Die zusätzliche Regression `Phase35-CampRescue.log` bestand mit `CAMP_RESCUE_PASSED`, Exit 0: Siegbedingungen, echte Gefangenenwege, Wegsperre/Pause, Wiederherstellung während des Heimwegs, Aufnahme mit Bett/Dach/Nahrung, Verbrauch ohne doppelte Belohnung und v53-Migration.

## Phase 34 – Truhenanzeige, Angriffsbefehl und Innenansicht

Eingelagerte Waren sind optisch verborgen; auch das Startlager mit Truhenmodell zeigt keine Warenstapel auf dem Deckel. Bestände, Transport, Entnahme und Abrissrückgabe bleiben erhalten.

Unter **Armee → Angriff** wird ein Ziel auf der Karte gewählt. Alle verfügbaren Wachen (Verteidigung erlaubt, mehr als 30 Leben, nicht auf Vorstoß oder in Golemreparatur) erhalten erreichbare unterschiedliche Sammelpositionen bis vier Felder um das Ziel. Ohne erreichbare Position für jede Wache wird der Auftrag vollständig abgelehnt. Arbeitsmaterial wird über die vorhandene Auftragsabbruchlogik zurückgegeben. Die tatsächliche Oberflächenbewegung führt die Wachen zum Ziel; Angekommene warten auf die übrigen. Erst nach gemeinsamer Ankunft werden Nahkampfschläge freigegeben. Danach verfolgen sie Gegner bis 16 Felder um das Ziel und können ein dort aufgedecktes Lager angreifen. Ohne Gegner halten sie die Position. **Angriff abbrechen** gibt alle Teilnehmer wieder für ihre normalen Aufgaben frei. Ein blockierter Marschweg, Verwundung oder Rollenwechsel beendet den Gruppenauftrag. Laufende Angriffsbefehle werden nicht gespeichert; nach Laden gelten wieder normale Aufgaben. Der vorhandene versorgte Lager-Vorstoß bleibt separat nutzbar.

Unter **Bau** gibt es zusätzlich **Innenansicht · Dächer, Wände und Türen ausblenden**. Sie betrifft modulare Gebäude aller Materialien und Wohnhütten; Boden, Möbel und Bewohner bleiben sichtbar. Bauzustand, Raum-/Dachregeln und Wegsperren werden nicht entfernt. Neue und neu aufgebaute Bauteilmodelle übernehmen die aktuelle Ansicht. Ausschalten stellt die Modelle wieder her; der separate Dachschalter bleibt erhalten. Ansichtseinstellungen gelten für die laufende Szene.

Prüfprotokolle: `Phase34-WindowsBuild.log`, `Phase34-ArmyViewPlayer.log`, `Phase34-LoadingScreensPlayer.log`, `Phase34-SettlementPlayer.log`. Die gezielte Prüfung verwendet eine frische Testwelt und kontrollierte Bau-/Gegnerfixtures, keine Nutzer-Spielstände. Sie prüft Inventarerhalt, verdeckte Waren, umkehrbare Bauteil-/Hüttenansicht, erreichbare unterschiedliche Gruppenwege, echte Bewegung, gemeinsame Angriffssperre und reale Nahkampf-Austauschlogik vor/nach Ankunft sowie Rückruf/Rollenwechsel. Verdeckte Player liefern keinen Beleg einer sichtbaren manuellen UI-Bedienung. Neue Modelle sind für diese Änderungen nicht erforderlich; Tiere und Jahreszeiten bleiben ausgeschlossen.

Abschluss: Build sowie alle drei Playerprüfungen bestanden mit Exit 0 (`PHASES_WINDOWS_BUILD_PASSED`, `ARMY_VIEW_PLAYER_PASSED`, `LOADING_SCREENS_PLAYER_PASSED`, `Standalone verification PASSED`). Zwei anfängliche ungültige Gebäudefixtures und ein ohne Hintergrundausführung wartender verdeckter Prüfplayer sind als `Phase34-ArmyViewPlayer-fixture-diagnostic.log`, `-bounds-diagnostic.log` und `-background-diagnostic.log` dokumentiert; die abschließende Prüfung korrigiert ausschließlich diese Testbedingungen. Nutzerprozesse und Spielstände blieben erhalten.

## Phase 33 – Drei Ladebilder und Hauptmenü (Save 54 unverändert)

Die drei vorhandenen PNGs aus `ArtSources/Concepts/LoadingScreens` sind unverändert in `Assets/Resources/LoadingScreens` übernommen: **Gründung → Skelettlager → Golem**. Hauptmenü und Ladebildschirm verwenden diese feste Schleife, vier Echtzeitsekunden je Bild und 0,65 Sekunden Überblendung. Sie läuft bei pausierter Simulation weiter. Bilder füllen den Bildschirm ohne Verzerrung; abweichende Seitenverhältnisse beschneiden den Rand. Das Menü liegt links, damit die Motive rechts sichtbar bleiben.

Im oberen Hauptmenübereich ersetzt das vorhandene transparente `ArtSources/Branding/StoneAndSoil_Logo_TowerDefense.png` den separaten Titeltext „STONE & SOIL“. Die unveränderte Runtime-Kopie liegt in `Assets/Resources/Branding`; Import mit Alpha aus der Datei, Originalgröße 2172×724, ohne Mipmaps. Das Logo bleibt proportional und die Menüaktionen darunter scrollbar. Die Playerprüfung kontrolliert zusätzlich Verfügbarkeit und Originalmaße des Logos.

Ein eigenes persistentes Präsentationsobjekt bleibt während des Szenenwechsels erhalten. Neue Welten und Laden aus dem Hauptmenü/F9 verwenden nun `LoadSceneAsync`. Vor dem Beginn erhält die Oberfläche zwei Frames zum Zeichnen. Der Ladebildschirm bleibt bis zum Ende der Szenenvorbereitung und des vorhandenen Spielstand-/Bewohner-Ladevorlaufs aktiv. Er zeigt Unity-Szenenfortschritt und danach den Wiederherstellungshinweis; keine erfundene Prozentanzeige. Kurze Vorgänge werden nicht auf zwölf Sekunden verlängert, nur damit alle Bilder erscheinen. Bei längerem Laden wiederholt sich die Folge.

Während des Übergangs sind Menü, Welt-/Kamerabedienung, Zeit-Hotkeys, weiteres Laden und Speichern gesperrt. Nach Abschluss wird das normale HUD freigegeben. Geladene Pause, Zeit, Bewohner und Startbetten bleiben erhalten. Es gibt keine neue Speicherstruktur und keine Änderungen an Nutzer-Slots. PNG-Import: Originalgröße 1672×941, sRGB, ohne Mipmaps, kein CPU-Lesezugriff, Bilinear/Clamp, hochwertige Kompression.

`Phase33-CampRescue.log` bestand erneut mit `CAMP_RESCUE_PASSED`, Exit 0, einschließlich echtem Heimweg, Aufnahme und normalem Szenen-Ladevorlauf. `Phase33-WindowsBuild.log` bestand mit `PHASES_WINDOWS_BUILD_PASSED`, Exit 0. `Phase33-LoadingScreensPlayer.log` bestand mit `LOADING_SCREENS_PLAYER_PASSED`, Exit 0: alle drei Texturen/Originalmaße, echte Echtzeitfolge bei pausiertem Menü, asynchroner neuer Spielstart, Doppelstart-Sperre, Produktionsparser mit In-Memory-Speicherfixture und tatsächlichem Ladevorlauf für zusätzliche Person, vier Bettpositionen, gespeicherte Pause/Zeit, genau ein persistentes Präsentationsobjekt und anschließend freigegebenes HUD. `Phase33-SettlementPlayer.log` bestand mit `Standalone verification PASSED`, Exit 0: reale Brett-/Mahlzeitenherstellung und Transport in der neuen ausführbaren Version.

Die drei Originalbilder wurden visuell angesehen, ihre Runtime-Kopien sind identisch. Der verdeckte Player zeichnet IMGUI nicht neu: Ein anfänglicher Versuch einer echten Menü-Bildschirmaufnahme erfasste deshalb keine Bildfolge und blieb als `Phase33-LoadingScreensPlayer-hidden-render-diagnostic.log` erhalten. Die endgültige Prüfung kontrolliert den tatsächlich verwendeten Präsentationszustand und Ladeablauf, behauptet jedoch keine sichtbare manuelle Menübedienung oder UI-Bildschirmaufnahme. Die frühere Kameravorschau darunter gehört zu Phase 32.

Neue ausführbare Version: [Phase33-LoadingScreens-2026-10-04/StoneAndSoil.exe](../../Builds/Phase33-LoadingScreens-2026-10-04/StoneAndSoil.exe). Den ganzen Ordner zusammenlassen. Originalgrafiken und frühere Builds bleiben erhalten; neue Modellanforderungen entstehen nicht. Tiere und Jahreszeiten bleiben ausgeschlossen.

## Phase 29 – Verständliche Siedlungsziele (Save 54 bleibt bestehen)

Unter **Kolonie** stehen zu jedem der acht bestehenden Ziele die aktuellen Bestände beziehungsweise fehlenden Teile und ein konkreter nächster Schritt. Die Anzeige aktualisiert sich auch in Pause; Ziele und Tageszeit laufen dabei nicht weiter. Nach den Aufbauzielen erklärt sie den Weg über Wellen und Fragment-Schlüssel, Fürstenwelle, Lager-Vorstoß und schließlich freies Spiel/Grenzland. Sie vergibt keine Ressourcen oder Siege.

Feindliche Lagerbauteile erfüllen nicht mehr „Eigener Bau“. Baum-Pflanzaufträge zählen nicht als Nahrungsfelder. Ein zusätzliches Bett benötigt für das Wohnraumziel Dach über seiner gesamten Grundfläche; die vier Startbetten zählen nicht. Beim Schutzziel muss eine Wache gesund und zur Verteidigung freigegeben sein. Das Wachstumsziel meint insgesamt acht Menschen, ohne Golems. Bereits gespeicherte abgeschlossene Ziele bleiben erhalten; nur noch offene Ziele nutzen die korrigierten Bedingungen. Der gemeinsame Dachtest wird auch bei Aufnahme und Besuch verwendet und zählt nur eigene intakte Dächer.

`Phase29-ProgressionFlow-final.log` bestand mit `PROGRESSION_FLOW_PASSED`, Exit 0: feindliche Bauteile, Baumaufträge, offene/überdachte Betten, Wache, Golem-Abgrenzung, Pause, echte Ziel-Fortschaltung durch Update und vollständiger Produktionsparser. Bauten und Gesundheitszustände sind kontrollierte Fixtures, keine komplette Kampagnen-Spielrunde. Ein fehlerhafter erster Bettcheck und unzulässige Zwischenfixtures bleiben als Diagnoseprotokolle erhalten. Die endgültige Wiederholung nach der Startbettkorrektur bestand ebenfalls in derselben Abschlussdatei.

## Phase 30 – Versorgung und Startbetten

Der erste 20-Minuten-Dauertest deckte einen echten Startfehler auf: Neue Welten hatten keine tatsächlichen Startbetten. Die Menschen verbrauchten bei Arbeit Energie, fanden keinen Ruheplatz und erreichten trotz vorhandener Nahrung schließlich kritischen Hunger. Vorherige kurze Herstellungsprüfungen hatten diese spätere Blockade nicht erfasst.

Die Siedlung erzeugt nun vor der Auswahl der Startpositionen vier tatsächliche Betten. Während des normalen Ladevorlaufs erzeugt sie keine zusätzlichen Startbetten; vorhandene gespeicherte Bettpositionen werden wiederhergestellt. Der Lade-Schutz umfasst nun auch den vollständigen Bewohner-Vorlauf. Save 54 und alle Mengenfelder bleiben unverändert; Nutzerspeicherdateien werden nicht bearbeitet. Ältere Spielstände ohne gespeicherte Startbetten behalten ihren vorhandenen Bauzustand und benötigen gebaute Betten, statt nachträglich beliebig mit neuen Bauten belegt zu werden.

Der kurze Bedarfstest `Phase30-ResidentNeeds-final.log` bestand mit `RESIDENT_NEEDS_PASSED`, Exit 0. Vier anfangs müde/hungrige Menschen finden ihre echten Betten, erholen sich dort und essen selbstständig. Nur der Anfangszustand ist eine Fixture; keine Teleportation oder eingespritzte Erholung. Der erneute Dauertest `Phase30-EconomyEndurance-final.log` bestand mit `ECONOMY_ENDURANCE_PASSED`, Exit 0: 1.200 tatsächliche Simulationssekunden (20 Minuten, über drei Tage), zwei Karottenfelder, vier Menschen und Granit, automatisches Mahlzeitenziel acht, ohne eingespeiste Nahrung oder Nachlieferung. Jeder Mensch aß zweimal; Hunger blieb mindestens 45/100, und 37 Erholungszyklen wurden abgeschlossen. Nach 600 Sekunden erfolgten vollständiger Produktionsparser und normaler Szene-Ladevorlauf; Felder, Vorratsziel, Zeit und genau vier Betten wurden weiterverwendet. Auch der Endzustand bestand den Parser. Die flache Welt mit festem Seed und abgeschalteten Angriffen ist eine kontrollierte Wirtschaftssituation, kein mehrstündiger Kampf-/Kampagnentest und kein allgemeiner Balancingnachweis. Zusätzlich bestand `Phase32-NormalResidentNeeds.log` mit `NORMAL_RESIDENT_NEEDS_PASSED`, Exit 0: auf normal generiertem Höhengelände funktionieren die vier tatsächlichen Startbetten, Hinlaufen, Erholung und Essen. Dort sind müde/hungrige Anfangszustände und vier eingelagerte Mahlzeiten ausdrücklich Fixtures; es ist kein zweiter Wirtschaftsdauertest und keine Prüfung sämtlicher Seeds.

## Phase 31 – Materialhinweise für echte Aufträge

Die Kolonieübersicht benennt tatsächliche Materialarten offener Baustellen einschließlich Reparaturen und die Eingangsmaterialien wartender Rezepte aller eigenen intakten Werkbänke. Steinbauten melden Steinblöcke und Truhenbaustellen Truhenteile; die alte pauschale Brettwarnung entfällt. Hauptlager und sämtliche Truhen zählen zusammen. Feindliche Baustellen und bereits aktive reservierte Werkbankaufträge werden ausgeschlossen. Hinweise sind reine Bestandsinformationen, keine Behauptung einer geprüften freien Route; mitgeführte Lieferungen werden ausdrücklich erwähnt. Die Abfrage ist auf eine Aktualisierung je Echtzeitsekunde begrenzt und verändert keine Aufträge, Ressourcen oder Arbeitsverwaltung.

`Phase31-WorkHints.log` bestand mit `WORK_HINTS_PASSED`, Exit 0: tatsächliche Steinwand-/Truhenbaustellen, fehlender Stamm an einer zweiten Werkbank, Vorräte in einer Truhe, keine falsche Brettwarnung, ausgeschlossener aktiver Auftrag sowie unveränderte Vorräte, Liefermengen und Aufträge nach der Abfrage. Baustellen und Lagerbestände sind kontrollierte Fixtures in Pause. Es entstehen keine zusätzlichen Modellanforderungen; vorhandene Platzhalter und ihre Aufgaben bleiben in der Modellliste dokumentiert.

## Phase 32 – Ruheplatz nach abgebrochenem Schritt

Ein Bewohner kann nach abgebrochener Arbeit bereits auf einem Feld neben seinem Bett stehen, ohne dessen Mittelpunkt erreicht zu haben. Der Gitterpfad dorthin ist leer; der tatsächliche Ruhetest braucht jedoch eine zentrierte Standposition. Bisher konnte diese Kombination dauerhaft vor dem Bett hängen bleiben. Ein leerer Ruhepfad erhält deshalb den Zielpunkt selbst als normalen Bewegungsschritt. Die Figur läuft über `SurfaceStepMovement` zum Mittelpunkt, ohne Teleportation, und erholt sich erst danach durch die vorhandenen Energie-Ticks.

`Phase32-RestCentering.log` bestand mit `REST_CENTERING_PASSED`, Exit 0. Die Positions-/Energieausgangslage ist eine kontrollierte Fixture; Bewegung über den tatsächlichen Schritt, Pause, Energieerholung von 20 bis mindestens 80 und Produktionsparser sind echte Spielsysteme. Keine zusätzlichen Modelle erforderlich. Die abschließende Windows-Version und ihr ausführbarer Spieltest bestanden in `Phase32-WindowsBuild.log` / `Phase32-WindowsPlayer.log`, jeweils Exit 0; kopierte Runtime-Assembly stimmt mit dem isoliert erzeugten Build überein. Die Kameravorschau mit sichtbaren Startbetten wurde angesehen; IMGUI ist weiterhin nicht im Bild, vollständige manuelle HUD-Bedienung bleibt offen.

## Phase 28 – Gefangene befreien (Save 54)

Im oberirdischen Skelettlager warten Alva und Tarek als sichtbare Platzhalter hinter einem Gitter auf dem vorhandenen Lagerboden. Sie werden erst beim dauerhaften Lagersieg befreit: Seelenobelisk zerstört, Fürst besiegt und keine Lagerverteidiger übrig. Eine überstandene Welle oder ein allein zerstörter Altar reicht nicht.

Die zwei Personen laufen über die vorhandene Oberflächennavigation zum Siedlungsmonument. Gesperrte Wege halten sie an; nach dem Öffnen eines Wegs suchen sie eine neue Route. Ihre Standfelder verhindern Bau auf ihnen und Abriss besetzter Brücken beziehungsweise Plattformen. Es entsteht kein zusätzlicher Arbeitsmanager. Sie belegen noch keinen Wohnplatz, besitzen kein Inventar und sind noch keine Koloniearbeiter.

Unter **Armee** zeigt der Lagerbereich Gefangene, Heimweg und einmalige Ankunft. Bei zerstörtem Monument oder voller Kandidatenliste warten die Befreiten dort, bis Wiederaufbau beziehungsweise Platz verfügbar ist. Nach Ankunft erscheinen sie unter **Kolonie** mit Namen und Herkunft. **Aufnehmen** nutzt die bestehende Prüfung auf erreichbares freies Bett mit Dach, intaktes Monument und zwei Mahlzeiten oder sechs Beeren. Erst dann entsteht eine normale auswählbare Bewohnerfigur. Ablehnung und Ablauf bedeuten friedliches Weiterziehen. Die Wartedauer beginnt bei der Vorstellung am Monument.

Save 54 speichert Verfügbarkeit, Befreiung, beide Reiseidentitäten/Positionen und die bereits vorgestellten Personen im Lagerzustand. Bewegungswege werden aus dem aktuellen Gelände erneut berechnet. Der Produktionsvalidator verwirft doppelte Reiseidentitäten, gleichzeitig reisende und vorgestellte Identitäten, unvollständige Befreiungszustände und ungültige Positionen. Aufnahme oder Ablauf erzeugen beim Laden keine Ersatzkandidaten.

Alte Spielstände mit bereits besiegtem Lager erhalten keine rückwirkenden Gefangenen. Bei noch aktivem Lager wird die Möglichkeit ergänzt; die zwei Personen müssen weiterhin durch einen vollständigen Lagersieg befreit werden. Alte Speicherdateien werden dabei nicht umgeschrieben.

`CAMP_RESCUE_PASSED` prüft Siegbedingungen, echte Bewegung, geschlossene Wegkanten, Pause, vollen Kandidatenpool, Produktionsparser und den normalen Szene-Ladevorlauf einschließlich zusätzlicher Bewohner, Bett/Dach/Nahrung, tatsächlichen Zwei-Mahlzeiten-Verbrauch, Kandidatenablauf, Wiederholschutz sowie reale Wiederherstellung eines bereits besiegten v53-Lagers ohne neue Gefangene. Sieg, Hindernisse, Bett/Dach und verkürzter Ablauf sind kontrollierte Prüffälle; Reise, Aufnahme, Verbrauch und Wiederherstellung laufen in den vorhandenen Spielsystemen. Nutzerspielstände werden nicht verwendet. Der Abschlusslauf `Phase28-CampRescue.log` bestand mit Exit 0. Speicherfixtures v29–54, Golemtransport und Lager-Vorstoß bestanden ebenfalls (`Final-SaveContinuity.log`, `Final-GolemTransport.log`, `Final-CampExpedition.log`). Der neue Build und ausführbare Spieltest stehen in `Phase28-WindowsBuild.log` beziehungsweise `Phase28-WindowsPlayer.log`, beide Exit 0. Der Player prüft auch den gültigen neuen Gefangenen-Lagerzustand und weiterhin echte Herstellung/Transport. Die Kamerabilder wurden angesehen; IMGUI ist darin nicht enthalten.

Neue Windows-Version: [Phase28-CampRescue-2026-10-04/StoneAndSoil.exe](../../Builds/Phase28-CampRescue-2026-10-04/StoneAndSoil.exe). Den ganzen Ordner zusammenlassen; der frühere Phase-27-Build bleibt erhalten.

![Zwei Gefangene auf einem Lagerboden hinter dem Platzhaltergitter](../Images/CampRescue_Phase28.png)

Die Gefangenen haben noch keine eigene Kampfschadens- oder Begleitschutzsimulation; sie sterben nicht und nutzen dieselbe einzelne begehbare Höhe wie die übrigen Figuren. Gitter und Reisefiguren sind ausdrücklich dokumentierte Modellplatzhalter. [Modellbedarf](../MODEL_WISHLIST.md).

## Bedienung

Neue Welt über das Hauptmenü starten. Die flache Testwelt enthält Startmaterial und kündigt den ersten Angriff früher an; die normale Welt gewährt eine längere Aufbauzeit. Die Kolonie beginnt mit vier Menschen und Granit. Weitere Menschen benötigen ein gebautes Bett und Nahrung; neu eintreffende Schutzsuchende und Besucher benötigen zusätzlich ein Dach.

Im Bereich **Armee** stehen Wellenzustand, Gegnerpriorität, Monumentreparatur, Fragment-Schlüssel, bestätigte Fürstenwelle und Vorstoßteilnehmer. Ein Vorstoß braucht ein intaktes Monument, einen aufgedeckten erreichbaren Lagerstandort und einsatzfähige Teilnehmer. Menschen verbrauchen eine Mahlzeit oder drei Beeren; Golems brauchen keinen Proviant. Rückruf beendet die Expedition nach tatsächlicher Heimkehr.

**Bauen** bietet die gemeinsamen Bauteile und Baustile sowie gespeicherte Vorlagen. Eine Vorlage erzeugt normale Baustellen mit normalen Kosten. Beim Auswählen eines fertigen Bauteils kann die umliegende Konstruktion gespeichert werden. Lagerinventare, Aufgaben, Bediener und Wagenbesitzer werden nicht in Vorlagen kopiert. Ein erobertes Lager schaltet seinen Stil und seine Bauvorlage frei. **Marktplatz**, **Versammlungshalle**, **Lagerhaus** und **Gasthaus** bleiben aus einzelnen Teilen aufgebaute Projekte.

Wache als Beruf einstellen und Verteidigung freigeben. Türme benötigen einen echten Zugang: zwei aufsteigende Treppenrampen führen vom Boden auf die drei Stufen höhere Plattform. Balliste und Steinschleuder benötigen einen zugewiesenen Bediener am Gerät sowie sechs tatsächlich gelieferte Steine je Ladung. Nachladen wird im Gerätefenster beauftragt. Eine Falle benötigt zum erneuten Scharfmachen ein Brett.

Wagen im Bauteilfenster einer vorhandenen menschlichen Figur zuweisen. Handwagen: vier Gegenstände; Transportwagen: acht; Versorgungswagen: sechs Nahrungsgüter. Der eigene Versorgungswagen verlängert einen Vorstoß auf 360 statt 180 Sekunden, benötigt dafür eine zweite echte Portion. Ungenutzter Zusatzproviant wird bei Heimkehr als lose Nahrung zurückgegeben. Wagen haben kein zusätzliches unsichtbares Inventar.

Ein neuer Golem entsteht über **Golem errichten** in fünf Bauabschnitten aus insgesamt 26 Steinblöcken. Höchstens drei zusätzliche Golems sind möglich. Granit bleibt bestehen. Gebaute Golems benötigen bei vollständiger Stilllegung vier echte Steinblöcke zur Reparatur; sie werden nicht nach 45 Sekunden kostenlos repariert. Menschen und Granit erholen sich weiterhin von heilbaren Verwundungen.

Ein Brunnen erzeugt höchstens sechs physische Wassereinheiten. Begrenzte Holzbrände erzeugen normale Löschaufträge. Wasser wird getragen, geliefert und durch Bauarbeit eingesetzt. Stein brennt nicht. Nach dem Löschen erfolgt eine normale Reparatur. Hebbare Brückenteile verbinden erreichbare Ufer über Gräben; besetzte Teile lassen sich nicht hochheben oder abreißen.

Säulen erlauben Dachbau an ihrem Feld. Barrikaden blockieren eine Wegkante; niedrige Plattformen liegen eine Stufe über Boden und bleiben neben anderen Plattformen eben. Sägeaufsatz kostet drei Bretter, Steinwerkzeug und Kochstelle jeweils vier Steinblöcke. Direkt neben einer Werkbank geben sie passenden Holz-, Steinblock- bzw. Mahlzeitenrezepten 25 % Arbeitstempo; gleiche Aufsätze stapeln nicht. Alle frühen Rezepte bleiben ohne Aufsatz verfügbar.

**Chronik** zeigt Siedlungsnamen, Phase, Identität, Ereignisse, Wünsche und Titel. **Geschichten** enthält zeitlich begrenzte Angebote und Besucher. Handel tauscht vorhandene Bestände direkt. Besuchsleistungen setzen Unterkunft, Versorgung und Anwesenheit voraus. Häufig gelaufene Wege entstehen durch tatsächliche Bewegungen; gebaute Steinwege beschleunigen eigene Bewohner.

![Geprüfte Skelettrollen: Fürst, Magier, Krieger, Dieb, Minion](../Images/SkeletonRoles_Phases.png)

## Phasen und Nachweise

Die Tabelle sammelt die bestandenen gezielten Abschlussläufe der einzelnen Phasen. Die jüngste gemeinsame Gruppe prüft Speicher v29–53, Rollenanimationen, Wellen, Lager-Vorstoß, Golemtransport und Werkbankaufsätze; nicht jeder frühere Einzeltest wurde mit Format 53 erneut ausgeführt.

Die folgenden Prüfungen fanden in einer isolierten Kopie mit Unity 6000.3.25f1 statt. Materiallieferung bedeutet tatsächliche Arbeit der vorhandenen Bewohner. Wo Zustände kontrolliert eingespeist oder Gegner angehalten wurden, steht dies ausdrücklich dabei. Ein JSON-/Apply-Rundlauf ist eine Prüfung im Speicher, kein Schreiben in einen Nutzer-Slot.

| Phase | Umsetzung | Praktischer Nachweis |
|---|---|---|
| 0 | Monumentgesundheit, Fundament, Wiederaufbau | `MONUMENT_SLICE_PASSED`: echte 8-Steinblock-/4-Brett-Baukette, Abbruch, Verwundung, Pause und Speicherzustand |
| 1 | Zehn Wellen und bestätigte Fürstenwelle, eigene Gegneridentitäten | `WAVE_CAMPAIGN_PASSED`; Wellenausgänge teils mit kontrolliertem Schaden beschleunigt |
| 2 | Erreichbares oberirdisches modulares Lager, Altar, Expeditionen | `CAMP_EXPEDITION_PASSED`: tatsächlicher Vorstoß und Altarangriff; Bossabschluss als Zustandsfixture |
| 3 | Schutzsuchende, Bett-/Dach-/Nahrungsregel, Ablauf | `REFUGEE_CHECK_PASSED`; überdachte Betten wurden als Prüfaufbau angelegt |
| 4 | Physische Fragmente, zusammengesetzter Schlüssel, Steinherz, Schutzmonument | `RELIC_CONSTRUCTION_PASSED`: tatsächliche Arbeit und Rückgaben; Freischaltung als Bossfixture |
| 5 | Drehbare Bauvorlagen, Baustile, Außenposten, Zaun/Tor/Turm | `TEMPLATE_OUTPOST_PASSED`: tatsächlicher gedrehter Hausbau, Kosten und Navigation; Eroberung als Fixture |
| 6 | Chronik, Wünsche, Titel, Erinnerungen, tatsächliche Trampelpfade | `CHRONICLE_TRAIL_PASSED`: Laufbewegung, Pause, Wunsch/Krise und Speicherzustand |
| 7 | Besucher, Unterkunft, zeitliche Geschichten, direkter Handel | `STORIES_PASSED`: tatsächlicher Handel, Heilhilfe, Nahrung und Bettreservierung |
| 8 | Vier modulare Gemeinschaftsprojekte | `COMMUNITY_PASSED`: tatsächlicher Marktplatz und unterbrochener/fortgesetzter Bau; übrige drei Vorlagen strukturell geprüft |
| 9 | Belagerung, Befestigungsschäden, Ruinen, Reparatur | `SIEGE_REPAIR_PASSED`: tatsächlicher Kriegerangriff auf geschlossenes Tor, Schutt und Reparaturlieferung |
| 10 | Balliste, Steinschleuder, Falle, Glocke, Kristall | `DEFENSE_DEVICE_PASSED`: echtes Laden, gespeicherter Einzelschuss, Pause und Restmunition; Gegner zur Isolierung angehalten |
| 11 | Exklusiver menschlicher Handwagenbesitzer | `HANDCART_PASSED`: vier gleichzeitig transportierte Gegenstände ohne zweites Inventar |
| 12 | Fünf Monumentkräfte mit gespeicherten Wirk-/Abklingzeiten | `MONUMENT_POWERS_PASSED`: Bewegung, lokaler Schutz, Pause, Speicherzustand und Wirkungsende |
| 13 | Brunnenwasser, begrenzte Holzbrände, Löschen | `BUILDING_FIRE_PASSED`: echtes Brunnenwasser, Schaden, Tragen/Löschen und Reparatur; Zündung kontrolliert |
| 14 | Echte Brückennavigation und hebbare Segmente | `BRIDGE_PASSED`: tatsächlicher Bau über ausgehobenen Graben, Bewegung, Pause und gespeicherte Höhe |
| 15 | Zusätzliche Golems, fünf Bauabschnitte, Steinreparatur | `GOLEM_CONSTRUCTION_PASSED`: tatsächlicher 26-Block-Bau, Teilbau-/Reparaturzustand, nach 50 Simulationssekunden weiter stillgelegt, reale Vier-Block-Reparatur |
| 16 | Sechs freiwillige große Gegner nach Kampagnensieg | `FRONTIER_PASSED`: echter Belagerungsangriff, sechs Darstellungen und aktiver Speicherzustand; Sieg/Freischaltung kontrolliert |
| 17 | Maschinenbediener, Schaden und Reparatur | `DEFENSE_DEVICE_PASSED` in `DefenseCrewRepair-customjobs.log`: Bedienersperre, echter Schuss, drei Bretter zur Reparatur und Munitionserhalt |
| 18 | Turmplattformen, Treppenrampen, Umwege um besetzte Plätze | `TOWER_PLATFORM_PASSED`: echter Bau und Aufstieg, gespeicherter Bewohner auf Plattform, besetzter Abriss gesperrt, Einsturz und reale Reparatur |
| 19 | Transport-/Versorgungswagen und Zusatzproviant | `WAGON_SUPPLY_PASSED` in `WagonSupply-final.log`: echter Bau, Achtfachtransport, atomare Nahrungsprüfung, voller Produktionsparser/Apply, einmalige Rückgabe; Verbrauchsgrenze mit verkürzter Anfangszeit geprüft |
| 20 | Fünf sichtbare Monumentstufen und Erinnerungssymbole | `MONUMENT_APPEARANCE_PASSED`: echte Dorfentwicklung; höhere Stufen/Erinnerungen als Fixtures, vollständiger Parser/Apply und Ruinenzustand |
| 21 | Relative Deckhöhen in Turm-/Rampenvorlagen | `ELEVATED_TEMPLATE_PASSED`: tatsächlicher kopierter Turm-/Rampenbau, verbundener Weg, Kosten und Produktionsparser/Apply |
| 22 | Speicherkompatibilität und gemeinsame Regressionen | `SAVE_CONTINUITY_PASSED`: versionsgerechte frische Fixtures, reale Wiederherstellung v29, Maschinenmigration; keine Nutzersaves |
| 23 | Großes Tor über zwei Felder | `LARGE_GATE_PASSED`: realer Sechs-Teil-Bau, beide Sperrkanten, tatsächlicher Bewegungstest, Parser/Apply und Drei-Teil-Reparatur; Schaden kontrolliert |
| 24 | Eigene KayKit-Modelle für Dieb, Krieger und Magier | `SKELETON_ROLES_PASSED`: tatsächliche Rollenmodelle, Generic-Avatare, Palette und bewegte Idle/Walk/Attack-Bones; gerenderte Übersicht |
| 25 | Säulen, Barrikaden und niedrige Plattformen | `MODULAR_PARTS_PASSED`: tatsächlicher Materialbau, Dach auf Säule, echter Plattformaufstieg, Parser/Apply mit erhöhtem Bewohner, Sperrkante und einmaliger Schutt |
| 26 | Sägeaufsatz, Steinwerkzeug und Kochstelle | `WORKSHOP_ATTACHMENTS_PASSED`: tatsächlicher Bau für sechs Bretter/acht Steinblöcke einschließlich Werkbank, reale drei Rezepte, Lagerausgabe, Parser/Apply und Bonusverlust bei Abriss |
| 27 | Gemeinsame Regressionen und Windows-Spielversion | Windows-Build und ausführbarer Spieltest jeweils Exit 0; echte Brett-/Mahlzeitenproduktion mit Transport, fünf Startakteure, Modellressourcen und Systeme; direkt gerenderte Kameravorschau geprüft |
| 28 | Gefangenenbefreiung, physischer Heimweg und einmalige Aufnahme | `CAMP_RESCUE_PASSED`: Wegsperre/Pause, voller Pool, vollständiger Ladevorlauf, Dach/Bett/Nahrung, Zwei-Mahlzeiten-Verbrauch, Ablauf und Wiederholschutz; besiegtes v53-Lager ohne rückwirkende Kandidaten |

| 29 | Zielangaben und korrekte Fortschrittsbedingungen | `PROGRESSION_FLOW_PASSED`: Eigentum, Nahrungsfelder, Dach/Bett, Wache, Pause und Produktionsparser |
| 30 | Vier tatsächliche Startbetten und Versorgungsprüfung | `RESIDENT_NEEDS_PASSED` und `ECONOMY_ENDURANCE_PASSED`: echte Erholung/Nahrung; 20 Simulationsminuten, normaler Ladevorlauf nach Hälfte, vier Betten ohne Duplikate |
| 31 | Materialhinweise für eigene Bau- und Werkbankaufträge | `WORK_HINTS_PASSED`: Stein-/Truhenbedarf, zweite Werkbank, Truhenvorräte, keine Ressourcen-/Auftragsänderung |
| 32 | Zentrieren beim leeren Ruhepfad und neuer Player | `REST_CENTERING_PASSED`: echte Bewegung vor Erholung; Windows-Build und ausführbarer Spieltest Exit 0 |
| 33 | Drei rotierende Hauptmenü-/Ladebilder und asynchroner Szenenwechsel | `LOADING_SCREENS_PLAYER_PASSED`: echte Echtzeitfolge, neuer Spielstart und In-Memory-Ladevorlauf; Rettungsregression, Build und Herstellung im Player bestanden; keine UI-Bildschirmaufnahme aus verdecktem Player |

Beim Editorstart tritt weiterhin ein bereits vorhandener Fehler im Unity-Suchindex (`UnityEditor.Search.SearchDatabase`) auf. Dieser ist von Spielablauffehlern zu unterscheiden. Fehlgeschlagene Zwischenprüfungen bleiben als Diagnoseprotokolle erhalten; als Nachweis zählt ausschließlich die jeweils bestandene Abschlussprüfung.

## Windows-Builds und gemeinsamer Abschluss

**Historischer Meilenstein: Phase 28, Save 54.** Der [neue Build](../../Builds/Phase28-CampRescue-2026-10-04/StoneAndSoil.exe), sein Spieltest und die betroffenen Regressionen bestanden. Der Rettungsablauf wurde im Unity-Play-Modus geprüft; die normale Kolonieproduktion zusätzlich im ausführbaren Player. [Geprüfte direkte Player-Kameravorschau](../Images/Phase28_WindowsPlayer.png). Die folgenden Angaben zum Phase-27-Ordner bleiben als Nachweis des vorherigen Meilensteins erhalten.

Die neue ausführbare Version liegt unter [Builds/Phases-2026-10-04/StoneAndSoil.exe](../../Builds/Phases-2026-10-04/StoneAndSoil.exe). Der gesamte Ordner muss zusammenbleiben. Es ist ein Windows-64-Bit-Development-Build aus der isolierten Unity-Projektkopie; vorhandene frühere Buildordner wurden erhalten.

`Final-WindowsBuild.log` meldet `PHASES_WINDOWS_BUILD_PASSED`, Prozessende 0. `Final-WindowsPlayer.log` meldet `Standalone verification PASSED`, Prozessende 0. Der opt-in Test `--verify-settlement` beginnt mit einer frischen flachen Welt, prüft vier KayKit-Menschen und Granit, echte Brett-/Mahlzeitenherstellung und Lieferung, ursprüngliche Modellressourcen, HUD-Komponente, Fortschritt, intaktes Monument, Lager und Phasensysteme. Er lädt keinen Nutzerspielstand und schreibt keinen Spielstand. Die direkte Kameravorschau enthält die Spielwelt mit ihrem tatsächlichen Terrain-Zeichenschritt, jedoch kein IMGUI; die HUD-Komponente wurde funktional auf Anwesenheit geprüft, ihre vollständige Bedienung im Player noch nicht manuell durchgespielt.

![Direkte Kameraansicht aus der geprüften Windows-Version](../Images/Phases_WindowsPlayer.png)

Die lokale Abschlussgruppe bestand: `Final-WorkshopAttachments.log`, `Final-SaveContinuity.log`, `Final-SkeletonRoles.log`, `Final-WaveCampaign.log`, `Final-GolemTransport.log` und `Final-CampExpedition.log` mit Format 53. Turm/Monument/Höhenvorlagen, große Tore/niedrige Plattformen und Golembau bestanden zuvor in `Final-MonumentTemplate.log`, `Final-LargeGate.log` und `Final-GolemConstruction.log`. Die Protokolle liegen in `.unity-bootstrap`; die zugehörigen wiederholbaren Editor-Prüfungen stehen unter `Assets/Editor`. Runtime und Editorquellen wurden abschließend kompiliert.

Dies bestätigt einen zusammenhängenden ersten großen Meilenstein und weitere vertikale Ausbauschritte. Die gesamte langfristige Vision ist damit noch nicht fertig. Metall-/Erzketten, übereinanderliegende begehbare Räume, individuelle Großgegnermechaniken, dauerhafter Tod/Niederlage und Langzeitbalancing bleiben spätere Abschnitte. Tiere und Jahreszeiten werden nicht ergänzt.

## Speicherung und Migration

Aktuelles Format: **54**. Die öffentlichen Ladefunktionen benutzen denselben `ParseSave`-Validator wie die jüngsten Rundlaufprüfungen. Bestehende Itemdefinitionen werden versionsabhängig ergänzt, ohne neue Mengen zu vergeben. Alte Kampagnenstände erhalten keine kostenlosen Bewohner, Fragmente, Herzen oder Siege. Tatsächlich bereits verdiente Fragmente aus v31–33 werden beim Laden als physische Gegenstände hergestellt, sofern der Schlüssel noch nicht zusammengesetzt war.

| Version | Erweiterung |
|---|---|
| 30–34 | Monument, Wellenakteure/-zustand/-Belohnungsmaske, Lager, Expeditionen, Schutzsuchende, physische Relikte |
| 35–38 | Vorlagen/Styles, Chronik/Erinnerungen/Wünsche/Pfade, Besucher/Geschichten, Gemeinschaftsaufträge |
| 39–43 | Bauteilgesundheit/Reparatur/Schutt, Geräte-/Geschosszustände, Wagenbesitzer, Monumentkräfte, Wasser/Brand |
| 44–47 | Deckhöhen/Brückenstellung, zusätzliche Golemidentitäten/Reparatur, große Gegner, Maschinenbediener |
| 48 | Rampen- und Turmhöhen; alte Türme erhalten ihren aus dem Fundament abgeleiteten Plattformstand |
| 49 | Größere Wagen und separat gehaltener, konservierter Zusatzproviant |
| 50 | Relative Deckhöhen in Bauvorlagen |
| 51 | Zwei Felder breite Tore und validierte überschneidungsfreie Sperrkanten |
| 52 | Säulen, Barrikaden und persistente niedrige Plattformen |
| 53 | Drei normale Werkbankaufsatz-Bauteile; Bonus wird aus fertigen benachbarten Modulen abgeleitet |
| 54 | Gefangenenbefreiung, physische Rückkehrpositionen und einmalige Vorstellung; keine rückwirkenden Geschenke bei bereits besiegtem Lager |

Maschinen hatten vor v47 keine eigene Schadensmechanik. Ihre damalige allgemeine Gesundheit (120 bzw. 240 bei Stein) wird auf die heutige intakte Ballisten-/Steinschleudergesundheit (150/200) migriert. Nullwerte optionaler Unity-JSON-Unterobjekte werden nur dann als leer akzeptiert, wenn sie keine unpassenden Zustände enthalten. Bewohner-, Bediener- und Wagenidentitäten sind eindeutig; Zuweisungen werden gegen tatsächlich gespeicherte Bewohner geprüft.

Höhen und Zustände werden aus logischen Bauteilen gespeichert. Automatische Darstellungen erzeugen keine neuen Ressourcen. Monumentstufen ergeben sich aus der Chronik; Erinnerungsstücke aus bereits gespeichertem Lager-/Kampagnensieg. Die Stufen vergeben keinen zusätzlichen Schadens- oder Wirtschaftsbonus.

## Geänderte Systeme

Erweitert wurden insbesondere `ColonyResident`, `ColonyResidentSpawner`, `RaidDirector`, `SkeletonRaider`, `BuildingModule`, `BuildingTemplateLibrary`, `GameSaveController`, `GameHudController`, `SurfaceReachability`, `SurfaceStepMovement`, `WorldOccupancy`, `VoxelWorldView`, `SpawnMonumentView`, vorhandene Item-/Werkbank-/Lager- und Rastfunktionen. Neue Bauteile verwenden `IPlankConstructionSite`; Expeditionen und Gerätebesatzungen bleiben vorhandene Bewohner. Es gibt keinen zweiten Arbeitsscheduler und keine zusätzlichen Materialinventare für Wagen.

Für Phase 28 erweitert: `SkeletonCamp`, `RefugeeDirector`, `WorldOccupancy`, `GameSaveController`, `GameHudController`, `StandaloneVerification`, `WindowsBuildValidation`. Neu: `CampRescue` mit gespeicherten Reiseidentitäten und `CampRescueVerification` mit vollständigem Ladevorlauf. Keine neuen Modellimporte; Gitter und Reisefiguren entstehen aus primitiven Formen.

Neue Komponenten einschließlich der Werkbankhilfe `WorkshopAttachment` sind `SkeletonWaveCatalog`, `SkeletonCamp`, `RefugeeDirector`, `SettlementChronicle`, `TrailNetwork`, `SettlementStories`, `DefenseDevice`, `Handcart`, `MonumentPowers`, `WellWater`, `BuildingFire`, `BridgeDeck` und `GolemMaintenance`. Die gezielten Editor-Prüfungen stehen unter `Assets/Editor`.

Zusätzliche Imports: `Skeleton_Rogue.fbx`, `Skeleton_Warrior.fbx`, `Skeleton_Mage.fbx` aus dem bereits im Projekt bereitgestellten KayKit-Skeletons-1.1-Paket. Lizenz: mitgeliefertes CC0. Die vorhandene `skeleton_texture.png` stimmt per SHA-256 mit der Originalpalette überein. Der vorhandene Generic-Animationscontroller wird wiederverwendet. Es wurden keine externen Dateien heruntergeladen und keine Tiere eingeführt.

## Grenzen und nächste Abschnitte

Dies ist ein zusammenhängender spielbarer Prototyp, keine fertig ausbalancierte Langzeitsimulation. Eine stundenlange Sitzung, alle Kombinationen von Baustilen/Projektvorlagen sowie viele Bewohner-/Bauteilmengen sind noch nicht umfassend geprüft. Der Bewohnerbestand bleibt auf zwölf Menschen, Granit und drei zusätzliche Golems begrenzt.

Navigation hat eine begehbare Höhe je Weltspalte und Höhenwechsel von einer Stufe. Türme benötigen Rampenzugänge; übereinanderliegende Räume und Tunnel unter begehbaren Brücken fehlen. Große Gegner verwenden dieselbe Navigation wie andere Gegner, mit eigener Darstellung und Werten; sie haben noch keine körpergroßen Mehrfeld-Fußabdrücke oder individuellen Spezialmechaniken. Karawanenverkehr zwischen mehreren Karten und eine vom Besitzer unabhängige Wagenladung fehlen.

Brände beschränken sich auf hölzerne Befestigungen/Maschinen, höchstens drei gleichzeitig und eine begrenzte Ausbreitung. Es gibt keine unbegrenzte Wald- oder Hausbrandkette. Nur ein Geschoss je Maschine ist gleichzeitig aktiv. Die Gerätewerte sind noch keine umfassend ausbalancierte Belagerungssimulation.

Null Gesundheit bedeutet bei Menschen und Granit Verwundung, bei zusätzlich gebauten Golems materialpflichtige Stilllegung. Dauerhafter Tod wurde bewusst nicht eingeführt. Deshalb wird aus einer vorübergehend vollständig verwundeten Kolonie keine endgültige Niederlage oder Notfallrettung abgeleitet. Diese Funktionen brauchen zuerst einen sauber gestalteten dauerhaften Ausfallzustand.

Fehlende Modelle und Animationen sind mit konkreter Aufgabe und Platzhalter in `Documentation/MODEL_WISHLIST.md` erfasst. Nächste sinnvolle Abschnitte: längerer Spieltest und Balancing, vollständige Präsentation/Animation der Platzhalter, mehrere vollständig gebaute Gemeinschaftsprojekte und größere Navigations-/Lastszenarien. Jahreszeiten und Tiere bleiben außerhalb dieses Auftrags.
