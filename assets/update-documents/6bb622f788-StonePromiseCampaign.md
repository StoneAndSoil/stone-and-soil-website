# Phase 44 – Das Versprechen im Stein

Die spielbare Kampagne ist in neuen und bestehenden Siedlungen aktiv. Rechts unter der oberen Leiste erscheinen Kampagnentitel, Akt, erledigte Aufgaben, aktueller Titel, Erzählzeile, höchstens drei Zielzeilen und ein Hinweis. Das Fenster passt seine Höhe an, lässt sich einklappen und weicht geöffneten Objektfenstern nach links aus. Das Questbuch ersetzt andere Menüs vorübergehend und zeigt alle 18 Aufgaben mit Status und scrollbar angeordneten Details. Im mittigen Feldauswahldialog wird der Tracker vorübergehend verborgen.

Die Stein-/Holz-/Kupferränder stammen aus der gelieferten QuestHUD_Stilvorschau; deren Beispielbeschriftungen werden nicht angezeigt. Die Quelldatei bleibt unverändert.

## Geschichte und einmalige Ausgaben

Mara ist die erzählerische Rolle des vorhandenen Gründungsbewohners mit der kleinsten ID, normalerweise Mira/ID 1. Seine vorhandene Bewohneridentität bleibt erhalten. Fehlt er, spricht der neutrale Erzähler. Verwundung entfernt die Rolle nicht. Kein zusätzlicher Bewohner wird erzeugt.

Granit erinnert sich an seine frühere Bauarbeit; Vareks Schutz wurde durch den Seelenobelisk zum Zwang. Kurze Texte erscheinen im Tracker, Questbuch, als dezente Abschlusszeile und einmalig in der Chronik. Nach dem Sieg stehen dort Menschenzahl und überstandene Wellen der tatsächlichen Siedlung sowie der Schlussdialog: Granit „Siedlung fertig?“ – Mara „Nein.“ – Granit „Gut.“

Es gibt keine zusätzlichen Ressourcenbelohnungen. Das Questsystem startet keine Schlacht, Expedition oder Bewohneraufnahme. Das vorhandene Steinherz und bisherige Belohnungen behalten ihre Regeln.

## Aufgaben und Nachweise

| Quest | Nachweis |
| --- | --- |
| Q01 | Stamm tatsächlich eingelagert; zwei erfolgreiche Brett-Herstellungsaufträge |
| Q02 | Zwei Nahrungsfelder; erfolgreiche Mahlzeitenherstellung |
| Q03 | Eigene intakte Boden-, Wand-/Fenster-, Durchgangs- und Dachteile; zusätzliches überdachtes Bett, Startbetten ausgeschlossen |
| Q04 | Erfolgreiche normale, bezahlte Bewohneraufnahme |
| Q05 | Wachtposten, einsatzfähige menschliche Wache, erste Welle oder erfolgreicher alternativer Lagerweg |
| Q06 | Bestehende Siedlungsschäden einschließlich Monument repariert; neue Mahlzeit oder Feldernte nach Q05. Ohne Schaden ist der Reparaturteil erfüllt |
| Q07 | Drei Wellen oder alternativer Lagerweg; aufgedecktes Lager |
| Q08 | Acht Menschen, acht eingelagerte Nahrungsmittel, zwei eigene fertige Werkbänke |
| Q09 | Sechs Wellen oder alternativer Lagerweg; vollständiges Monument, intakte fertige eigene Gebäude, Wachtposten und einsatzfähige Wache |
| Q10 | Erstes geborgenes Reliktfragment aus dem bestehenden Zähler |
| Q11 | Nach bestehenden Expeditionsregeln versorgter, erreichbarer Vorstoß; laufende Expedition beziehungsweise erfolgreicher Lagerangriff zählt |
| Q12 | Alle drei Fragmente; Enthüllung über Granit und Varek |
| Q13 | Fertiger Fragment-Schlüssel am vollständigen Monument |
| Q14 | Bestehende ausdrückliche Schlachtbestätigung beobachtet; vorher Versorgung, Reparaturen und Wachen prüfen |
| Q15 | Vorhandener Sieg der Entscheidungsschlacht |
| Q16 | Lager besiegt, beide Gefangenen tatsächlich befreit und am Monument vorgestellt |
| Q17 | Außenposten übernommen; ausdrücklich optional und im Questbuch überspringbar |
| Q18 | Fürstensieg und Q16; Schlusschronik, anschließend freies Spiel |

Die Reihenfolge ist ein Leitfaden; spätere Ziele werden sofort anerkannt und Abschlüsse dauerhaft gehalten. Der frühe Lagerweg erfüllt nicht mehr benötigte Wellenanforderungen. Die übrigen Bau-/Verteidigungsaufgaben bleiben im Questbuch sichtbar. Der Kampagnensieg hängt ausschließlich von Fürstensieg und abgeschlossener Rettung ab; Q17 und noch offene frühe Wirtschaftsnachweise blockieren ihn nicht.

Aufnahme der Befreiten bleibt separat und benötigt normale Nahrung und Wohnraum. Ihr gespeicherter Ankunftsnachweis bleibt nach Aufnahme gültig. Der gemeinsame Expeditionscheck hat eine Vorschau ohne Verbrauch, Aufträge oder Bewegung.

## Save 60 und ältere Siedlungen

Ein eigener validierter Snapshot speichert Questabschlüsse, optionale Überspringung, Storyausgaben, Herstellungs-/Erntenachweise, normale Aufnahmen, Stammnachweis, Sprecher-ID, Produktionsbaseline von Q06 und Einklappzustand. Keine neuen Bewohner-Speicherfelder.

Erfolgreiche Herstellung und normale Aufnahme werden unmittelbar erfasst. Späterer Verbrauch setzt die Nachweise nicht zurück. Pause hält Informationen aktuell, ohne Kampf-, Produktions- oder Reisezeiten voranzutreiben.

Alte Spielstände erhalten keine erfundenen Herstellungsereignisse: vorhandene Bretter oder Mahlzeiten könnten gekauft oder belohnt worden sein. Eine neue Herstellung ist dafür nötig. Zusätzliche vorhandene Menschen belegen dagegen eine normale Aufnahme. Gebäude, Wellen, Fragmente, Schlüssel und gespeicherte Rettungsankünfte werden aus den bestehenden Zuständen anerkannt.

Sehr alte, bereits besiegte Lager ohne damaliges Rettungssystem eröffnen eine neue tatsächliche Rettung von Alva und Tarek. Eine historische Ankunft wird nicht angerechnet; beide müssen den vorhandenen Heimweg zurücklegen. Bereits gespeicherte Befreiungen/Ankünfte bleiben erhalten. Blockierte Wege, zerstörtes Monument und volle Aufnahmeliste behalten ihre bisherigen Hindernisse.

## Durchgeführte Prüfungen

- Windows-Development-Build im isolierten Projekt.
- Normale neue Siedlung mit vier Gründern und Granit. Echte Bewohner fertigten zwei Bretter und eine Mahlzeit; danach wurden die erzeugten Gegenstände entfernt und eingelagerte Ausgaben geleert. Nachweise und Abschlüsse blieben erhalten.
- Tatsächliches Speichern/Parsieren und Szenenladen während einer offenen Quest.
- Die weiteren normalen Questbedingungen mit kontrollierten Bau-/Wellenzuständen geprüft. Vier zusätzliche Menschen über reale bezahlte Aufnahme aufgenommen; acht Menschen, Vorräte und zwei Werkbänke anerkannt.
- Q06 ohne Schäden sowie vorhandener Schaden mit Reparatur; neue Mahlzeit und erfolgreicher Feld-Arbeitsabschluss als Produktionsnachweis.
- Fehlende Rationen und vier sperrende Zäune verweigern die Expedition. Die Vorschau verbraucht keine Nahrung und erzeugt keinen Vorstoß.
- Früher Lagerweg, beschädigtes Monument, Schlüssel und ausschließlich ausdrücklicher Schlachtbeginn.
- Laden mit zwei aktiven Rettungsreisenden. Beide liefen tatsächlich zum Monument. Ihre anschließende normale Aufnahme erhält Rettungsabschluss und Sieg.
- Optionaler Außenposten übersprungen; keine doppelten Ressourcen/Storyausgaben; Simulation nach Sieg fortgesetzt.
- Tracker bei 960×640, 1280×720, 1920×1080 und 2560×1440; Questbuch im kleinen Fenster; sichere Ränder, Weltklickblockierung und Höhen aller 18 Quests geprüft.
- Bestehende Wellenprüfung: Warnung/Pause, echte Wachenverteidigung, Wellen-Laden, stabile IDs, einmalige Belohnungen und manuelles Fürstentor.
- Bestehende Lagerprüfung: reale Rationen, autonomer Vorstoß/Obeliskkampf, Laden und einmalige Belohnung.
- Speicherprüfung mit versionsgerechten Testständen 29 bis 60, einschließlich tatsächlicher Wiederherstellung von Version 29. Keine Nutzerspielstände verwendet oder überschrieben.

Prüfprotokolle liegen unter .unity-bootstrap: Phase44-CampaignPlayer.log, Phase44-WaveCampaign.log, Phase44-CampExpedition.log, Phase44-SaveContinuity.log und Phase44-WindowsBuild.log. Der Unity-Editor meldete beim Start der älteren Prüfungen erneut einen internen Suchindexfehler; die Spiel-/Speicherprüfungen liefen anschließend erfolgreich durch.

## Prüfgrenzen

Kein vollständiger stundenlanger Kampagnendurchlauf ausschließlich mit normalen Spielerklicks. Herstellung, Aufnahme, Szenenladen und Rettungswege liefen tatsächlich; lange Wellen-/Baufolgen nutzten zusätzlich kontrollierte Zustände. Der Fürstensieg im Kampagnen-/Lagertest wurde mit erzwungenem Schaden beschleunigt. Langzeitbalance bleibt damit offen.

Das Projekt nutzt skalierte IMGUI. Der Tracker folgt diesem vorhandenen System und führt kein zusätzliches Canvas ein. Bei wenig Höhe wechselt er zur kompakten Ansicht; Details bleiben im scrollbaren Questbuch.

## Geänderte Dateien

Alle nachfolgenden Laufzeitskripte liegen unter Assets/Scripts/World:

- StonePromiseCampaign.cs: 18 Quests, Geschichte, Nachweise und Snapshot.
- PromiseQuestHud.cs: Tracker, variable Höhe, Questbuch, Vorlagenränder.
- PromiseCampaignVerification.cs: isolierte Playerprüfung und Bilder.
- ColonyResidentSpawner.cs: Kampagnenkomponente und erfolgreiche Aufnahmeereignisse.
- WorkbenchState.cs: Herstellungsabschluss-Nachweis.
- FarmPlotView.cs: erfolgreicher Nahrungs-Erntenachweis.
- StockpileStore.cs: tatsächlicher Stamm-Einlagerungsnachweis.
- RaidDirector.cs: gemeinsamer, verbrauchsfreier Expeditionscheck.
- CampRescue.cs: neue tatsächliche Rettung für alte Lager ohne damaligen Nachweis.
- GameSaveController.cs: Save 60, Validierung, Capture und Restore.
- GameHudController.cs: Fensterkoordinierung und Mausblockierung.

Weitere Dateien:

- Assets/Resources/UIConcepts/QuestHUD_Stilvorschau.png samt Import-Meta.
- Assets/Editor/WindowsBuildValidation.cs und neue Script-Metas.
- .unity-bootstrap/BuildPromise44.ps1.
- Dieser Bericht, README, START_HERE, Tutorial, CHANGELOG und Kontrollbilder/Changelog-Galerie.

## Ingame-Bilder

![Quest-HUD bei 1080p](../Images/Phase44_QuestHUD_1080p.png)

![Questbuch](../Images/Phase44_Questbook.png)

![Questbuch im kleinen Fenster](../Images/Phase44_Questbook_960x640.png)

![Kampagnenabschluss](../Images/Phase44_CampaignComplete.png)

[Visueller Verlauf](../../changelog/index.html) · [Aktuelle Version starten](../../Builds/Phase44-StonePromise-2026-10-04/StoneAndSoil.exe). Den gesamten Buildordner zusammenlassen.
