# Changelog

## 2026-09-16 (Naturheilkundetag: Wisch-Übergang statt Karte/Lightbox) – Flyer-Vorder-/Rückseite

### Geändert
- Nochmal überarbeitet nach Feedback: Flyer Seite 1/2 sehen jetzt genau wie die anderen 3
  Dokumentbilder aus (groß, kein Karten-/Thumb-Rahmen), aber mit zwei Pfeil-Buttons direkt auf dem
  Bild. Erster Versuch (Pfeile öffnen die Lightbox bei der jeweils anderen Seite) durch Wunsch
  ersetzt: Die Pfeile blättern jetzt per Wisch-Übergang direkt im Bild um (CSS-`transform`-
  Animation auf einer Slide-Leiste `.doc-page-track`), ohne die Lightbox zu öffnen. Klick auf das
  Bild selbst öffnet weiterhin unverändert die Lightbox zum Vollbild-Zoom.
- Ausstellerverzeichnis/Raum 1/Raum 2 unverändert (großformatig, gemeinsame Lightbox-Gruppe mit
  Pfeilen aus dem letzten Durchgang).

## 2026-09-16 (Naturheilkundetag: Flyer-Karte kompakter, Pfeil-Navigation) – Layout-Feedback umgesetzt

### Geändert
- Flyer Seite 1 & 2 (Titelbild + Rückseite) auf `events-naturheilkundetag.html` nehmen nicht mehr
  zwei volle Bildbreiten hintereinander ein, sondern sind jetzt zu einer kompakten Karte
  zusammengefasst (gleiches Muster wie die Flyer-Karten auf Praxis & Schwerpunkte): Vorderseite als
  Vorschaubild, „⇄ Zweite Seite"-Button darunter öffnet die Rückseite in der Lightbox.
- Ausstellerverzeichnis, Vortragsprogramm Raum 1 und Raum 2 bleiben bewusst wie bisher groß
  dargestellt (auf Wunsch), haben jetzt aber eine gemeinsame Lightbox-Gruppe: In der vergrößerten
  Ansicht kann man mit den Pfeilen links/rechts direkt zwischen allen drei Dokumenten
  weiterblättern, ohne die Lightbox zu schließen.

## 2026-09-16 (Bugfix Zoom-Hinweis Flyer S2) – Fehlpositioniertes Badge auf Naturheilkundetag-Seite behoben

### Behoben
- Bug gefunden (per Screenshot gemeldet): Auf `events-naturheilkundetag.html` "schwebte" der
  Zoom-Hinweis „🔍 Zum Vergrößern anklicken" beim Flyer S2 (Rückseite, eigener Abschnitt) frei auf
  der Seite statt auf dem Bild zu sitzen. Ursache: Dieser eine Link nutzte weder die Wrapper-Klasse
  `.event-hero-flyer` noch `.doc-image-block`, für die `position: relative` gesetzt war – das
  `position: absolute`-Badge positionierte sich dadurch relativ zu einem entfernten Vorfahren.
  Fix generalisiert: `position: relative` gilt jetzt für jeden `a.lightbox-link`, unabhängig von
  der Wrapper-Klasse.
- Nebenbei behoben: Allen 8 Bildern auf dieser Seite `width`/`height`-Attribute ergänzt (verhindert
  Layout-Sprünge beim Nachladen der Bilder). Dabei einen zweiten, dadurch aufgedeckten Fehler in
  der globalen Bildregel behoben: `img` hatte kein `height: auto`, wodurch Bilder mit `width`/
  `height`-Attributen auf ihre volle Pixelhöhe statt proportional skaliert gerendert wurden.

## 2026-09-16 (Design-Check Revision 1) – Rot markierte Korrekturen aus Ellens 2. Durchgang umgesetzt

### Geändert
- Grundlage: `docs/...rev 1.docx` (Home/Kopfzeile/Fußzeile und Praxisschwerpunkte) – nur die rot
  markierten Anmerkungen berücksichtigt, alles andere war laut Ellen bereits bestätigt.
- **Logo/Kopfzeile:** Schriftgröße des Marken-Schriftzugs „Naturheilpraxis Beitat" in der
  Kopfzeile jetzt identisch zur Hero-Überschrift auf der Startseite (`--fs-hero-h1` statt der
  kleineren `--fs-brand`).
- **Kopfzeile-Position (Desktop):** Logo + Reiterzeile sind jetzt linksbündig statt zentriert
  angeordnet. Da der jetzt sehr große Logo-Schriftzug nicht mehr neben die volle Reiterzeile in
  eine Zeile passt, steht die Reiterzeile bewusst als eigene Zeile darunter (statt fragil bei
  bestimmten Breiten umzubrechen) – beides bleibt linksbündig und bildet weiterhin einen
  zusammenhängenden Kopfbereich.
- **Fußzeile:** Instagram-Hinweis „📷 #NaturheilpraxisBeitat Alzenau" unten in der Fußzeile
  ergänzt (verlinkt auf die Instagram-Hashtag-Seite – falls stattdessen ein bestimmter
  Account-Handle verlinkt werden soll, bitte den genauen @-Namen nennen). Tel.-Nr. und Adresse in
  der Fußzeile sind jetzt in der gleichen grünen Farbe wie die übrigen Fußzeilen-Texte (vorher
  Standard-Dunkeltext).
- **Schwerpunkte-Block 2** an allen 3 Stellen (Home-Kacheln, Praxis & Schwerpunkte,
  Beschwerdebilder) umbenannt: „Darm, Immunsystem, Haut" → „Darm, Haut & Immunsystem"; auf Home
  und Praxis & Schwerpunkte zusätzlich mit Zeilenumbruch, sodass „Immunsystem" wie gewünscht auf
  der zweiten Zeile steht.
- **Praxis & Schwerpunkte – Unterzeile:** Im Blocksatz ausgerichtet und mit den vorgegebenen neuen
  Zeilenumbrüchen versehen.
- Flyer-Rückseite „Heilsame Begegnung von Mensch & Pflanze" (Schmerztherapie-Block): bereits im
  letzten Durchgang korrekt umgesetzt (nur ein Panel, korrekter Alt-Text) – keine weitere Änderung
  nötig.

## 2026-09-16 (Event-Karte vereinfacht) – Datums-Badge entfernt, Teaserbild vergrößert

### Geändert
- Auf `events.html`: Das separate Datums-Badge ("27 / SEP. '26") in der Event-Karte entfernt –
  das Datum steht bereits gut lesbar im Teaserbild selbst und im Fließtext, war also doppelt.
  Dafür das Teaserbild vergrößert (140px → 220px mobil, 100px → 180px ab 640px) und nimmt jetzt
  mehr Raum in der Karte ein. `.date-badge`-CSS-Regeln entfernt (nirgends sonst verwendet).

## 2026-09-16 (Naturheilkundetag-Dokumente aktualisiert) – Ausstellerverzeichnis & Vortragsprogramm Raum 1/2

### Geändert / Hinzugefügt
- Ellen hat 3 optimierte PDFs geliefert (`docs/AlzenauerNaturHeilkundeTag - Ausstellerverzeichnis...pdf`,
  `docs/Alzenauer_Naturheilkundetag_2026_Raum_1_Hahnekamm.pdf`,
  `docs/Alzenauer_Naturheilkundetag_2026_Raum_2 Wilmundsheim.pdf`) als Ersatz für die bisherigen
  Bilder. Mit `pdftoppm` (Poppler) als hochauflösende JPGs (200dpi) gerendert und die bestehenden
  Dateien `assets/img/naturheilkundetag-ausstellerverzeichnis.jpg` und
  `assets/img/naturheilkundetag-vortragsprogramm-raum1.jpg` ersetzt (gleicher Dateiname, daher
  automatisch überall aktualisiert).
- Neu: `assets/img/naturheilkundetag-vortragsprogramm-raum2.jpg` – der bisherige Platzhalter
  „Vortragsprogramm Raum 2 folgt in Kürze" auf `events-naturheilkundetag.html` ist jetzt durch das
  echte Programm ersetzt (14 Vorträge, Raum 2 – Wilmundsheim), im gleichen Layout wie Raum 1
  (Bild + Instagram-QR-Block).
- `docs/seitenbaum.md`-Statuszeile für die Naturheilkundetag-Seite aktualisiert (kein Platzhalter
  mehr).

## 2026-09-16 (Bugfix Zoom-Hinweis) – "Zum Vergrößern anklicken"-Badge auf Naturheilkundetag-Seite repariert

### Behoben
- Bug gefunden (per Screenshot gemeldet) auf `events-naturheilkundetag.html`: Der Hinweistext
  „🔍 Zum Vergrößern anklicken" auf den 4 großen Flyer-/Dokumentbildern hing lose am rechten
  Fensterrand statt auf dem Bild zu sitzen, weil der umgebende Link (`.event-hero-flyer a`,
  `.doc-image-block > a`) kein `position: relative` hatte – das `position: absolute`-Badge
  positionierte sich dadurch relativ zum nächsten Vorfahren mit Position statt zum Bild.
  `position: relative` ergänzt.
- Zusätzlich wurde die kleine 32px-Icon-Kreis-Badge `.img-zoom-hint` (eigentlich nur für ein
  einzelnes Emoji auf den Katalog-Kacheln gedacht, z. B. Praxis & Schwerpunkte) hier mit vollem
  Lesetext wiederverwendet und lief dadurch krumm über. Neue Variante `.img-zoom-hint--label`
  (Pillenform, automatische Breite) für die 4 Textbadges auf dieser Seite ergänzt.

## 2026-09-16 (Events-Teaserbild) – Ellens Event-Grafik auf der Events-Übersicht ergänzt

### Hinzugefügt
- `docs/event_bild.jpeg` (Ellens Instagram-Style-Grafik mit Datum/Ablauf) als
  `prototype/assets/img/naturheilkundetag-teaser.jpg` in die Event-Übersichtsseite
  (`events.html`) übernommen – als quadratisches Vorschaubild links in der Event-Karte,
  verlinkt (dekorativ, `aria-hidden`) auf die Detailseite, gleicher Bildstil (Rundung/Schatten)
  wie die übrigen Karten im Design.
- `.event-card` per CSS um eine Bild-Spalte erweitert (`.event-card-thumb`), Grid-Layout auf
  Desktop entsprechend angepasst.

## 2026-09-16 (Design-Check Praxis & Schwerpunkte) – Unterseite nach Ellens 2. Design-Check-Dokument angepasst

### Geändert
- Seitentitel „Praxis & Schwerpunkte" etwas weiter nach unten in den grünen Balken gerückt
  (mehr Abstand zur Reiterzeile).
- Platzhaltertext unter dem Titel durch die vorgegebene 3-Satz-Formulierung ersetzt: „Weil
  Gesundheit mehr ist als einzelne Beschwerden zu behandeln. Ihr Körper spricht mit Ihnen, ich
  helfe zu verstehen, was ihn aus dem Gleichgewicht gebracht hat. Ganzheitliche Naturheilkunde
  für Sie & Ihn & die ganze Familie – mit 20 Jahren Erfahrung und viel Einfühlungsvermögen." –
  je Satz eine eigene Zeile, wie schon auf der Startseite.
- Block „Ganzheitliche Schmerztherapie": Flyer-Vorderseite (Klappflyer-Deckblatt) zeigt jetzt
  dauerhaft nur noch die rechte Hälfte („Das Kreuz mit dem Kreuz" statt Titel- + Visitenkarten-
  Hälfte nebeneinander) – diesmal als echte zugeschnittene Bilddatei
  (`assets/img/flyer-kreuz-crop-right.webp`), nicht mehr per CSS-Trick. Datei wurde per Canvas-
  Zuschnitt aus der vorhandenen `flyer-kreuz.webp` erzeugt (rechte ~48,5%, exakt an der Flyer-
  Falzkante), da der Rohordner mit den Original-Flyer-Dateien nicht mehr im Projekt liegt.
  Zwischenzeitlich getestete Hover-Zoom-Variante (CSS `transform: scale()`) wieder entfernt, da
  jetzt eine echte Zuschnittsdatei vorliegt. Alt-Text/Aria-Label der Flyer-Rückseite korrigiert
  auf den tatsächlichen Original-Titel „Heilsame Begegnung von Mensch & Pflanze" (vorher stand
  dort noch der Titel der Vorderseite).
- Reihenfolge/Umbenennung der 4 Schwerpunkte-Karten (Hormone/Schilddrüse vor Stress/Psyche,
  einheitlich 2-zeilige Überschriften) war durch den vorherigen Home-Design-Check bereits erledigt
  und wurde nur gegengeprüft.
- Bug gefunden und behoben: Die `min-height` der Karten-Überschriften (`.img-card > h3`) hatte das
  eigene Padding nicht mit eingerechnet (box-sizing: border-box) – bei zweizeiligen Überschriften
  (z. B. „Hormone, Schilddrüse & Frauengesundheit") reichte der reservierte Platz nicht, die Box
  wuchs über einzeilige Karten hinaus, wodurch Bild/Buttons pro Karte unterschiedlich hoch saßen.
  `min-height` rechnet Padding jetzt mit ein (`calc(2 * 1.25rem * 1.3 + 22px)`) – alle 4
  Kartenköpfe sind jetzt exakt gleich hoch, unabhängig von 1 oder 2 Textzeilen.
- Grundlage: `docs/Ellens Website - Design check - Praxisschwerpunkte.docx`. Offen/nicht
  übernommen: „wenn möglich" auch die Flyer-Rückseite (S.2) nur zur Hälfte zeigen – dort ist
  bereits nur ein Panel abgebildet, keine Änderung nötig.

## 2026-09-16 (nach Design-Check) – Feinschliff Kopf-/Fußzeile & Home nach Ellens Design-Check

### Geändert
- Hero-Claim (Home): Untertitel „Ihr Körper spricht mit Ihnen. Ich helfe Ihnen, ihn besser zu
  verstehen." auf zwei Zeilen umgebrochen (ein Satz je Zeile).
- Zweiter Hero-Untertitel neu formuliert: „Einfühlsame Begleitung bei Schmerzen, Darm-, Immun-,
  Haut- und Hormonthemen, Frauengesundheit sowie Psyche und Stress" – Farbe auf einen dunklen
  Orangeton (`--orange-dunkel`, neu in der Palette) statt Bordeaux gestellt, zur besseren
  Abgrenzung von Fließtext-Bordeaux.
- Bildunterschrift beim Mitgliedssiegel: „Gelistete Heilpraktikerin bei" → „Mitglied" (Text jetzt:
  „Mitglied der Union Deutscher Heilpraktiker, Landesverband Hessen e. V.").
- „Wozu benötigen Sie meine Hilfe?"-Lead: „ich begleite Sie individuell." → „ich begleite Sie gern
  und individuell."
- Schwerpunkte einheitlich an 3 Stellen (Home-Kacheln, Praxis & Schwerpunkte, Beschwerdebilder)
  umbenannt/neu sortiert: 3. Block heißt jetzt „Hormone, Schilddrüse & Frauengesundheit" (ergänzt
  um „Schilddrüse") und steht vor dem 4. Block „Stress, Psyche & Erschöpfung" (zuvor umgekehrte
  Reihenfolge auf Home und Praxis & Schwerpunkte).
- Footer-Link „Impressum" auf allen Seiten zu „Impressum & DSGVO" präzisiert.
- Footer-Linkfarbe von Bordeaux auf Grün (`--gruen-dunkel`) vereinheitlicht – wirkte zuvor an
  mehreren Stellen zu rötlich; Footer-Überschriften etwas größer gesetzt, damit sie den Inhalten
  gegenüber klar erkennbar bleiben.
- Reiterzeile (Hauptnavigation): Schriftgröße vergrößert und im Verhältnis zum Logo in der
  Kopfzeile ausgerichtet; auf Desktop-Breite (≥1000px) wird die Kopfzeile jetzt als Einheit
  (Logo + Nav) mittig statt an den Rändern verteilt angeordnet.
- Grüner Kopf-/Fußzeilen-Balken (`.band`) schmaler gestellt (reduzierte Mindesthöhe).
- Seitenhintergrund (`--creme`) etwas wärmer/beiger gestellt – war zuvor bewusst sehr hell
  abgeschwächt worden (siehe Kommentar in der CSS-Variable) und wirkte dadurch fast weiß;
  jetzt sichtbar beige zwischen den grünen Kopf-/Fußzeilen-Bändern, ohne so satt wie die
  ursprüngliche Farbdatei (#fcfed7) zu wirken.
- Grundlage: Ellens Feedback-Dokument `docs/Ellens Website - Design check - Home Kopfzeile
  Fusszeile.docx`. Nicht übernommen bzw. offen: die genaue Orange-Nuance sowie Feinjustierung der
  Zentrierung von Kopf-/Reiterzeile sind Geschmacksfragen ohne Referenzdatei – bitte in der
  Vorschau gegenprüfen und bei Bedarf nachjustieren.

## 2026-09-16 (allerletzt) – Reiter „Wissen & Blog" geparkt (auskommentiert)

### Geändert
- Der Hauptnav-Punkt „Wissen & Blog" ist auf allen 17 Prototyp-Seiten auskommentiert
  (`<!-- ... -->`), nicht gelöscht – Grund: noch kein echter Blog-/Wissensbeitrag verfügbar.
  Wiederaktivierung später = Kommentar in der jeweiligen `<li>`-Zeile entfernen.
- Die Seiten `wissen.html` und `wissen-beispiel-eintrag.html` selbst bleiben unverändert
  im Repo bestehen und sind weiterhin per Direktlink erreichbar, tauchen aber in keiner
  Navigation mehr auf (gleiches Vorgehen wie zuvor bei „Seminarzentrum").
- `docs/seitenbaum.md` entsprechend aktualisiert (Baum, Diagramm, Status-Tabelle, offene
  Punkte).

## 2026-09-16 (zuletzt) – Eigenbluttherapie aus Therapieangebot entfernt

### Entfernt
- „Eigenbluttherapie" aus der Gruppe „Homöopathie & Ausleitungsverfahren" auf
  `therapieangebot.html` gelöscht (auf Wunsch der Kundin, wird nicht angeboten).

## 2026-09-16 (noch später) – Echte Sprechzeiten auf Kontaktseite

### Geändert
- `kontakt.html`: Platzhalter „[Platzhalter: Sprechzeiten / Termine nach Vereinbarung]"
  durch echte Angabe ersetzt: „Termine nach Vereinbarung, Di, Mi, Do 08:00–13:00 &
  15:00–20:00 Uhr".

## 2026-09-16 (später) – Therapieangebot: echte Filterfunktion + gruppierte Darstellung

### Geändert
- Die 52 Therapieverfahren waren als eine lange, unstrukturierte zweispaltige Liste zu
  „breit gefächert" – jetzt in 8 fachlich sinnvolle Gruppen sortiert, jede mit eigener
  Bordeaux-Überschrift: Homöopathie & Ausleitungsverfahren; Pflanzenheilkunde, Naturmedizin
  & Fasten; Körperarbeit & Massage; Injektionen & Infusionen; Diagnostik & Anamnese;
  Energetische Verfahren & TCM; Psyche, Gespräch & Trauma; Frauengesundheit & Hormone.
- Die Filter-Sidebar ist jetzt echt funktional (reines Vanilla-JS, `assets/js/
  therapie-filter.js`, kein Zusatz-Tool nötig): Checkboxen entsprechen den 8 neuen Gruppen,
  beim Anhaken werden nur die passenden Gruppen angezeigt (Mehrfachauswahl möglich), bei
  keiner Auswahl wird alles gezeigt. Neuer „Alle anzeigen (Filter zurücksetzen)"-Button.
  Der bisherige „Prototyp: noch nicht funktional"-Hinweis ist damit hinfällig und entfernt.
- Der rechtliche Hinweis bleibt unverändert bestehen: gefiltert wird ausschließlich nach
  Anwendungsart, nie nach Beschwerdebild (HWG-Trennung).
- CSS: neue `.verfahren-group`/`h3`-Stile sowie ein gestylter Reset-Button
  (`#verfahren-filter-reset`), da die bisherige `.cta`-Klasse nur für Links innerhalb von
  `.need-card` definiert war und für einen eigenständigen Button nicht gepasst hätte.

## 2026-09-16 – Therapieangebot: vollständige Verfahrensliste statt Platzhalter-Karten

### Geändert
- `therapieangebot.html`: Die 4 fiktiven Platzhalter-Karten (Homöopathie & Pflanzenheilkunde,
  Massage, Injektionen & Infusionen, Mineral- & Vitalstoffe – je mit „[Platzhalter: neutrale
  Beschreibung...]") sowie der abschließende Platzhalter-Hinweis sind raus. Stattdessen listet
  die Seite jetzt die vollständigen, von der Kundin bereitgestellten 53 Therapieverfahren
  (`NHP Beitat - Konzept texte - Therapieformen.docx`) alphabetisch in einer zweispaltigen
  Liste unter „Alle angewandten Verfahren im Überblick". Filter-Sidebar (Anwendungsart,
  Layout-Prototyp) bleibt unverändert bestehen.
- Tippfehler aus der Vorlage stillschweigend korrigiert (u. a. „Rodgers" → „Rogers" bei
  Gesprächstherapie, „Jamamoto" → „Yamamoto" bei der Schädelakupunktur, „Massage n" →
  „Massage", „Labor Untersuchung" → „Laboruntersuchung", „P hytotherapie" → „Phytotherapie",
  „Vitamin C HochdosisTherapie" → „Vitamin-C-Hochdosistherapie"); doppelten Eintrag
  „Irisdiagnose" entfernt, da bereits durch „Augen-, Irisdiagnose" abgedeckt.
- CSS-Refactoring: Die kompakten Zweispalten-Listenstile (`ul.two-col`, vorher an
  `.beschwerde-block` gebunden) sind jetzt allgemein wiederverwendbar (`.detail-block`/
  `.results ul`/`li`), damit sie auch außerhalb von Beschwerdebilder funktionieren. Klasse
  `.beschwerde-block` in `.detail-block` umbenannt (generischer Name, da jetzt auf mehreren
  Seiten im Einsatz). Beschwerdebilder-Seite optisch unverändert, gegengeprüft.

## 2026-09-15 (ganz zum Schluss) – UDH-Hessen-Legitimitäts-Badge im Hero der Startseite

### Geändert
- Die Schwerpunkt-Aufzählung unter dem Hero-Foto ist nach oben in die Textspalte gewandert,
  direkt unter den Tagline-Claim (neue Klasse `.hero-subline`). Die Namenszeile „Ellen
  Beitat – Ihre Heilpraktikerin mit 20 Jahren Erfahrung" bleibt wie gewünscht unter dem
  Foto stehen (neue Klasse `.hero-photo-name`), darunter folgt jetzt das Legitimitäts-Badge.
- Unter dem Foto (unter der Namenszeile) steht jetzt zusätzlich ein Legitimitäts-Badge: das
  offizielle runde Mitgliedssiegel „Mitglied – Union Deutscher Heilpraktiker" (von der Kundin
  bereitgestellt, `assets/img/udh-hessen-mitglied-siegel.jpg`), verlinkt auf Ellen Beitats
  Eintrag in der offiziellen Heilpraktikersuche der Union Deutscher Heilpraktiker,
  Landesverband Hessen e.&nbsp;V. (udh-hessen.de) (neue Klasse `.hero-verify-badge`, öffnet
  in neuem Tab, Siegel mit `border-radius:50%` rund freigestellt).
- CSS-Fix dabei: `.hero-photo img` war zu breit gefasst und hätte auch das neue Badge-Logo
  gespiegelt/mit Schatten versehen – auf `.hero-photo > img` (nur Direktkind, also das
  Porträtfoto) präzisiert.

## 2026-09-15 (spätestens) – Beschwerdebilder: Layout-Bugs behoben (Listenabstand, Überschriften)

### Behoben
- Riesige, ungleichmäßige Lücken zwischen Listenpunkten in den zweispaltigen Listen: Ursache
  war CSS-Multi-Column-Layout (`columns: 2`) in Kombination mit `break-inside: avoid` – der
  Browser balanciert dabei die Spaltenhöhe und reißt dabei große Lücken zwischen einzelne
  Einträge. Umgestellt auf CSS-Grid (`display:grid; grid-template-columns: 1fr 1fr`), das
  Einträge sauber zeilenweise nebeneinander setzt statt spaltenweise zu balancieren.
- Zwischenüberschriften (h3, z. B. „Stresshormone & Nebennieren") waren optisch kaum von den
  Listenpunkten zu unterscheiden. Jetzt in Bordeaux, größer, fett und mit Trennlinie
  abgesetzt statt nur etwas Abstand nach oben.
- Zeilenabstand innerhalb der Listen von zu großzügig auf kompakt reduziert.

## 2026-09-15 (später) – Block „Ganzheitliche Schmerztherapie" ergänzt

### Hinzugefügt
- Weitere konkrete Beschwerdebilder im Block „Ganzheitliche Schmerztherapie" ergänzt:
  Rückenschmerzen, Schulter-Arm-Syndrom, Spannungskopfschmerz und Migräne, Beckenschiefstand,
  ISG-Blockade und Beinlängendifferenz, Tennisellenbogen, Karpaltunnelsyndrom, Knie- und
  Fußprobleme, Kniearthrose, Tinnitus, Zähneknirschen, Allergiebehandlung ganzheitlich,
  Reizdarmsyndrom, u.v.a.m. (Tippfehler aus der Vorgabe stillschweigend korrigiert, z. B.
  Tennisellenbogen statt „Tennissellenbogen", Karpaltunnelsyndrom statt „Carpaltunnersyndrom").
  Dabei „Rückenschmerzen" wieder entfernt, da inhaltlich bereits durch „Rücken-, Nacken- und
  Gelenkbeschwerden" in der ersten Liste desselben Blocks abgedeckt (Dopplung vermieden).

## 2026-09-15 (spät) – Beschwerdebilder: vollständige Inhalte statt Platzhalter, Layout auf Absatzform umgestellt

### Geändert
- `beschwerdebilder.html` von kompaktem Icon-Kachelraster (`.need-card`) auf gestapelte
  Themenblöcke umgestellt (`.beschwerde-block`, je Block volle Containerbreite, durch
  Trennlinie abgesetzt). Grund: Die reale Textvorlage (`NHP Beitat - Konzept texte -
  Beschwerdebilder.docx`) enthält pro Thema lange, differenzierte Symptomlisten statt
  kurzer 1–2-Satz-Teaser – dafür ist ein drittes Kachelraster (nach Startseite und Praxis
  & Schwerpunkte) zu eng; Fließtext/Listen in voller Breite lesen sich deutlich ruhiger.
  Lange Symptomlisten laufen ab 700px zweispaltig (`ul.two-col`, CSS-Columns) statt als
  eine sehr lange einspaltige Liste.
- Alle 4 Themenblöcke mit dem vollständigen, von der Kundin bereitgestellten Text befüllt:
  Ganzheitliche Schmerztherapie; Darm, Immunsystem & Haut (mit Unterabschnitten
  Darmgesundheit/Immunsystem/Haut); Hormone & Frauengesundheit (mit Unterabschnitten
  Zyklus/Schilddrüse/Stresshormone/weitere Themen); Stress, Psyche & Erschöpfung.
- Neue Quick-Nav-Pillenleiste oben auf der Seite mit Sprunglinks zu den 4 Blöcken (Anker),
  da die Seite durch die vollständigen Inhalte deutlich länger geworden ist.
- Die in der Textvorlage enthaltenen wichtigen medizinischen Sicherheitshinweise 1:1
  übernommen und optisch hervorgehoben (neue Klasse `.disclaimer-box--critical`,
  bordeauxfarbener Rand statt golden): u. a. „Eine Heilpraktikerbehandlung ersetzt keine
  notwendige ärztliche Therapie" bei Autoimmun-/chronisch-entzündlichen Erkrankungen, und
  der Hinweis zur zwingend erforderlichen ärztlichen/psychotherapeutischen Abklärung bei
  Depression, schweren Angststörungen oder Suizidgedanken (Block „Stress, Psyche &
  Erschöpfung").
- Abschluss der Seite an den Text der Vorlage angepasst: „Sie finden Ihre Beschwerden
  nicht in der Liste?" mit Einladung zum persönlichen Erstgespräch statt der bisherigen
  kürzeren Platzhalter-Formulierung.

## 2026-09-15 (Korrektur) – 4 Schwerpunkte erneut umbenannt

### Geändert
- Erneute Umbenennung der 4 Schwerpunkte (index.html, praxis-schwerpunkte.html,
  beschwerdebilder.html, inkl. Meta-Descriptions und Hero-Bildunterschrift):
  - „Darmgesundheit, Immunsystem, Psyche & Haut" → **„Darm, Immunsystem, Haut"**
  - „Stressbedingte Themen" → **„Stress, Psyche & Erschöpfung"** (Psyche von der
    Darm-Kategorie hierher verschoben)
  - „Ganzheitliche Frauen- & hormonelle Themen" → **„Hormone & Frauengesundheit"**
  - „Ganzheitliche Schmerztherapie" unverändert

## 2026-09-15 (noch später) – Echter Haftungsausschluss je Marke + Content-Law-Check

### Hinzugefügt
- Drei neue Haftungsausschluss-Seiten (`haftungsausschluss-praxis.html`,
  `haftungsausschluss-kraeuterwerkstatt.html`, `haftungsausschluss-event.html`), je Marke
  eigenständig wie beim Impressum. Inhalt: Haftung für Inhalte (§ 7 Abs. 1 DDG) und Links,
  Urheberrecht – plus markenspezifische Ergänzungen:
  - **Praxis:** kein Ersatz für ärztliche/heilkundliche Behandlung, kein Angebot zur
    Fernbehandlung (§ 9 HWG), keine Heilversprechen/Erfolgsgarantie (§ 3 HWG), Hinweis zu
    schweren Krankheiten nach Anlage § 12 HWG.
  - **Kräuterwerkstatt:** Hinweise zu Nahrungsergänzung/Naturkosmetik (Health-Claims-VO
    (EG) Nr. 1924/2006, kein Ersatz für ausgewogene Ernährung), Hinweis dass Seminare/
    Workshops keine Heilkundeausübung darstellen.
  - **Event:** Hinweis zu Ausstellern und Vortragsprogramm (Verantwortung liegt bei den
    jeweiligen Ausstellern/Referenten, keine Heilversprechen), Haftung als Veranstalterin.
- Footer-Link „Haftungsausschluss" auf allen 14 betroffenen Seiten von totem `#`/TODO auf
  die jeweils passende neue Seite umgestellt (praxis-/kraeuterwerkstatt-/event-Gruppe wie
  beim Impressum-Link).
- Weiterer gefundener toter Link behoben: Der Datenschutz-Hinweis beim Google-Maps-Consent
  auf `kontakt.html` verlinkte auf `#`/TODO – zeigt jetzt auf die bestehende
  Datenschutzerklärung (`impressum-praxis.html#datenschutz`, dafür neue Anker-ID ergänzt).

### Geprüft (Content-Law-Scan, keine weiteren Funde)
- Gesamter Seiteninhalt auf Heilversprechen/Erfolgsgarantien durchsucht (Begriffe wie
  „garantiert", „heilt", „schmerzfrei", „100 %", „nachgewiesen") – keine Treffer.
  „Autoimmunerkrankung"-Erwähnungen auf `ueber-mich.html` sind Ellens persönliche
  Erfahrungsberichte, keine Werbeaussage zur Behandlung – unkritisch.
- `therapieangebot.html` filtert bereits bewusst nur nach Anwendungsart, nicht nach
  Beschwerdebild (bestehender HWG-Hinweis dort bestätigt korrekt).

## 2026-09-15 (später) – Beschwerdebilder: einladender Zusatzsatz nach Web-Recherche

### Hinzugefügt
- Nach Recherche zu üblichen "Beschwerdebilder"-Seiten bei Heilpraktiker-Websites (u. a.
  heilpraktiker-schmidt.de/beschwerdebilder/): Solche Übersichten sind dort bewusst nicht
  erschöpfend und laden explizit dazu ein, auch nicht gelistete Themen anzusprechen –
  Diagnosesprache/lange Listen wirken sonst wie eine unvollständige Checkliste.
  Entsprechend neuer Satz auf `beschwerdebilder.html` unterhalb der 4 Themen-Kacheln:
  „Ihr Thema ist hier nicht aufgeführt? Diese Übersicht ist bewusst nicht abschließend –
  sprechen Sie mich gerne trotzdem an."

## 2026-09-15 – Offizielle Neubenennung der 4 Schwerpunkte

### Geändert
- Die 4 Praxis-Schwerpunkte gemäß der Vorgabe aus
  `NHP Beitat - Konzept texte - die 4 Schwerpunkte - Startseite Schwerpunkte und
  Beschwerdebilder.docx` umbenannt und überall konsistent durchgezogen:
  - „Naturheilkunde & Schmerztherapie" → **„Ganzheitliche Schmerztherapie"**
  - „Darmgesundheit" → **„Darmgesundheit, Immunsystem, Psyche & Haut"**
  - „Stress-Medizin" → **„Stressbedingte Themen"**
  - „Ganzheitliche Frauenheilkunde" → **„Ganzheitliche Frauen- & hormonelle Themen"**
- Angepasst in: den 4 Kacheln auf der Startseite (`index.html`, inkl. Hero-Bildunterschrift
  und Meta-Description), den 4 Flyer-Karten auf `praxis-schwerpunkte.html` (inkl.
  Meta-Description; Flyer-Bilder selbst und deren Alt-Texte unverändert, da eigenes
  Werbematerial) sowie den 6 Einträgen auf `beschwerdebilder.html` – dort auf Nutzerwunsch
  von 6 granularen Symptomen (Kopfschmerzen, Verdauung, Rücken, Erschöpfung, Haut, Hormone)
  auf dieselben 4 breiten Kategorien reduziert, inkl. neuer Icons für Schmerztherapie und
  stressbedingte Themen.

## 2026-09-14 (Nachtrag) – Startseiten-Kacheln verlinkt

### Geändert
- Die 4 Schwerpunkt-Kacheln unter „Wozu benötigen Sie meine Hilfe?" sind jetzt klickbar und
  springen direkt zur passenden Flyer-Karte auf `praxis-schwerpunkte.html` (neue Anker-IDs
  `#schwerpunkt-schmerz`/`-darm`/`-stress`/`-frau` an den jeweiligen `.img-card`-Elementen).
  Dezenter Hover-Effekt (Anheben + Schatten) ergänzt.
- Der Button unter den Kacheln führt jetzt zu „Beschwerdebilder" statt zu „Praxis &
  Schwerpunkte" (Linktext entsprechend zu „Zu Beschwerdebildern" geändert) – die Kacheln selbst
  decken den Link zu Praxis & Schwerpunkte bereits ab.

## 2026-09-14 (wirklich letzter Stand) – Erklärsatz im Hero entfernt

### Entfernt
- Den erklärenden Zweitsatz „Mit 20 Jahren Erfahrung und einem ganzheitlichen Blick begleite
  ich Sie zu den Zusammenhängen hinter Schmerzen, Darmbeschwerden, hormonellen Veränderungen
  oder Stress." aus dem Hero der Startseite entfernt – der neue Tagline-Claim steht jetzt
  direkt über dem CTA-Button, ohne zusätzlichen Fließtext. Der „20 Jahre Erfahrung"-Gedanke
  bleibt über die Bildunterschrift neben dem Foto erhalten.

## 2026-09-14 (allerletzter Stand) – Zentraler Claim + konsequente Ich-Form

### Geändert
- Neuer zentraler Praxis-Claim auf der Startseite, prominent direkt unter der H1 platziert:
  „Ihr Körper spricht mit Ihnen. Ich helfe Ihnen, ihn besser zu verstehen." (neue Klasse
  `.hero .tagline` in `style.css`, kursiv/größer als der bisherige Erklärsatz, der jetzt als
  unterstützender Zusatztext darunter steht). Meta-Description der Startseite entsprechend
  angepasst.
- Durchgängig auf Ich-Form umgestellt, da es sich um eine Einzelpraxis (Ellen Beitat) handelt,
  kein Team: „Wozu benötigen Sie unsere Hilfe?" → „…meine Hilfe?", „wir begleiten Sie
  individuell" → „ich begleite…" (`index.html`); „zu uns kommen" → „zu mir kommen", „klären
  wir" → „kläre ich" (`beschwerdebilder.html`, Meta-Description + Hero-Claim + Hinweistext).
  Bewusst unverändert gelassen: die zwei „uns"/„unser"-Stellen in Ellens Originaltext auf
  `ueber-mich.html` – dort generisch gemeint (menschlicher Körper allgemein bzw. das
  idiomatische „Lassen Sie uns…" zwischen ihr und der Patientin/dem Patienten).

## 2026-09-14 (letzter Stand) – Startseite: Platzhalter-Kacheln durch echte Schwerpunkte ersetzt

### Geändert
- `index.html`, Sektion „Wozu benötigen Sie unsere Hilfe?": Die 6 Platzhalter-Kacheln (Akute
  Themen, Homöopathie & Pflanzenheilkunde usw. mit Icon + Fließtext + eigenem CTA) sind raus.
  Stattdessen stehen dort jetzt die 4 echten Praxis-Schwerpunkte nur als Überschrift, ohne
  Icon/Bild/Text (Naturheilkunde & Schmerztherapie, Darmgesundheit, Stress-Medizin,
  Ganzheitliche Frauenheilkunde) – identisch benannt wie auf `praxis-schwerpunkte.html`.
- Statt einzelner "Termin anfragen"-Links je Kachel gibt es jetzt einen zentralen Button
  „Zu Praxis & Schwerpunkte" unter der Kachel-Reihe, der auf die Übersichtsseite verlinkt.
- CSS: neue Modifier-Klassen `.needs-grid--titles` / `.need-card--title-only` in `style.css`
  für die schlanken, zentrierten Titel-Kacheln (kein Icon-Kreis, kein Fließtext-Slot).

## 2026-09-14 (noch später) – Echter Text auf „Über mich" eingepflegt

### Geändert
- `ueber-mich.html`: Platzhaltertexte durch den von Ellen bereitgestellten Text ersetzt
  (Quelle: `NHP Beitat - Konzept texte - Seite über mich.docx`). Hero-Claim jetzt „Vom
  Kläranlagenbau zur ganzheitlichen Naturheilkunde und Darmexpertin"; erster Abschnitt
  (Foto + Zitat) erzählt den beruflichen Wechsel vom Kläranlagenbau zur Naturheilkunde,
  zweiter Abschnitt „Mein Weg zur Darmexpertin" beschreibt die 20 Jahre Praxiserfahrung,
  die eigene Autoimmunerkrankung und die ganzheitliche Haltung zur Therapie.
- Den bisherigen Platzhalter-Abschnitt „Ganzheitliche Frauenheilkunde" entfernt (war nicht
  Teil der neuen Textvorlage) – der Frauenheilkunde-Schwerpunkt bleibt über die eigene Karte
  auf `praxis-schwerpunkte.html` abgedeckt.
- Lange Fließtext-Absätze im zweiten Abschnitt in `.article-body` gewrappt (max-width 720px),
  damit die Zeilenlänge über die volle Container-Breite hinweg lesbar bleibt.

## 2026-09-14 (später) – Neue Seite „Beschwerdebilder" (bewusst ohne Cross-Link zu Therapieangebot)

### Hinzugefügt
- Neue Seite `beschwerdebilder.html`: 6 Themen-Kacheln zu häufigen Beschwerdebildern
  (Kopfschmerzen & Migräne, Verdauungs- & Magen-Darm-Beschwerden, Rücken- & Gelenkschmerzen,
  Erschöpfung & Schlafprobleme, Haut- & Schleimhautthemen, Hormonelle Beschwerden & Wechseljahre),
  im selben `.need-card`-Muster wie die "Wozu benötigen Sie unsere Hilfe?"-Sektion der Startseite.
  Reine Platzhaltertexte, jede Karte verlinkt ausschließlich auf Kontakt aufnehmen.
- Neuer Hauptnav-Punkt „Beschwerdebilder" zwischen „Praxis & Schwerpunkte" und „Therapieangebot"
  auf allen 14 Prototyp-Seiten ergänzt.
- **Rechtlicher Hinweis (HWG/Heilpraktikergesetz):** Bewusst KEIN Link von dieser Seite zu
  Therapieangebot oder einzelnen Anwendungsarten – folgt demselben Trennungsprinzip wie
  Praxis & Schwerpunkte (siehe Eintrag vom 2026-08-31 und `docs/Kontext.md`). Seite enthält
  zusätzlich einen expliziten Platzhalter-Hinweis für den späteren rechtlichen Disclaimer.
- `docs/seitenbaum.md` aktualisiert (Baum, Diagramm, Status-Tabelle, Rechtlicher Hinweis);
  dabei auch eine veraltete Diagramm-Kante `Praxis --> Therapie` korrigiert zu `Praxis --> Kontakt`,
  die dem Text direkt darüber widersprach.

## 2026-09-14 – Vollständige Impressum- & Datenschutzseiten für alle drei Marken

### Geändert
- `impressum-praxis.html`, `impressum-kraeuterwerkstatt.html` und `impressum-event.html` inhaltlich
  komplett überarbeitet: statt der bisherigen schlanken Kurzversion jetzt vollständiges Impressum
  (§ 5 DDG) **und** eine eigene Datenschutzerklärung (Art. 13/14 DSGVO) je Seite, inkl. Hosting-/
  Logfile-Hinweis, Kontaktaufnahme, Instagram-/Meta-Verweis, Betroffenenrechten, Aufsichtsbehörde
  (BayLDA) und SSL-Hinweis. Grundlage waren drei vom Nutzer bereitgestellte, eigenständige
  HTML-Entwürfe (Anlass: die jeweiligen Instagram-Accounts sollen künftig direkt auf diese Seiten
  verlinken, siehe unten). Inhalte ins bestehende Site-Design übernommen (Header/Footer/Nav
  unverändert), damit ein einheitliches Erscheinungsbild bleibt statt separater Mini-Seiten.
- `impressum-praxis.html` gilt für @Naturheilpraxis_Alzenau, `impressum-kraeuterwerkstatt.html` für
  @Kräuterwerkstatt_Alzenau **und** @Vitaminerie (Vitaminerie ist Geschäftsbereich, kein eigenes
  Unternehmen – ein gemeinsames Impressum deckt beide ab), `impressum-event.html` für
  @AlzenauerNaturheilkundeTag.
- CSS: neue `.article-body h3`- und `.legal-intro`-Regel in `style.css` für die zusätzliche
  Überschriftenebene und die „Angaben gemäß …"-Unterzeile in den Rechtstexten.
- Footer-Link „Impressum" auf allen drei betroffenen Seiten zu „Impressum & Datenschutz" umbenannt.
- Offen (manueller Schritt, nicht über Code lösbar): In jedem der drei Instagram-Konten muss der
  Link-in-Bio noch auf die jeweils passende, deployte URL gesetzt werden, z. B.
  `https://rodeydabone.github.io/Beitat.eu/impressum-praxis.html`.

## 2026-09-13 – Seminarzentrum-Reiter aus Navigation entfernt

### Geändert
- Der Link „Seminarzentrum" wurde aus der Sub-Nav (neben „Events") und aus dem Footer-Bereich
  „Mehr" auf allen 13 Prototyp-Seiten entfernt. Grund: Naturheilpraxis Beitat und Kräuterwerkstatt/
  Seminarzentrum sind zwei getrennte Firmen und dürfen steuerrechtlich nicht vermischt werden –
  ein sichtbarer Reiter würde die beiden Unternehmen für Besucher als zusammengehörig darstellen.
- `seminarzentrum.html` selbst bleibt unverändert bestehen und ist weiterhin per Direktlink
  erreichbar (z. B. von der Kräuterwerkstatt selbst zu verteilen), taucht aber nicht mehr in der
  Seiten-Navigation auf. „Events" ist von der Änderung nicht betroffen und bleibt sichtbar verlinkt.
- `docs/seitenbaum.md` entsprechend aktualisiert (Baum, Diagramm, Status-Tabelle, neuer
  Rechtlicher Hinweis).

## 2026-09-03 (später, Teil 5) – Lightbox statt neuem Tab für Flyer-Bilder

### Geändert
- Neue `assets/js/lightbox.js` (Vanilla-JS, keine Abhängigkeiten): Klick auf ein Flyer-/Dokumentbild
  öffnet es jetzt als vergrößertes Overlay im selben Tab (abgedunkelter Hintergrund) statt in einem
  neuen Browser-Tab. Schließen per Klick außerhalb des Bildes, X-Button oder Escape-Taste.
  CSS: `.lightbox-overlay`/`.lightbox-img`/`.lightbox-close` in `style.css`.
- Alle bisherigen `target="_blank"`-Bild-Links (4× `praxis-schwerpunkte.html`, 4× `events-
  naturheilkundetag.html`) auf `class="lightbox-link"` umgestellt, Skript in beiden Seiten eingebunden.

## 2026-09-03 (später, Teil 4) – Leeren Rand an drei Event-Bildern entfernt

### Behoben
- `naturheilkundetag-flyer-s1.jpg`, `-s2.jpg` und `-vortragsprogramm-raum1.jpg` hatten unten einen
  großen Leerbereich (bei S1/S2 reines Weiß, bestätigt per Pixelfarbe) statt direkt am Inhalt zu enden.
  Per Zeilen-Varianz-Scan automatisch erkannt, wo der eigentliche Inhalt endet, und dort zugeschnitten
  (S1: 1697→1500px, S2: 1697→1516px, Vortragsprogramm Raum 1: 1697→1498px Höhe).
- Geprüft, aber unverändert gelassen: `flyer-darm.webp`/`flyer-frau.webp` haben nur einen schmalen
  (~64px) einfarbigen Rand – das ist der Bilderrahmen aus der Originalvorlage, kein Leerraum.
  `flyer-kreuz.webp`, `flyer-stress-vs.jpg`, `naturheilkundetag-ausstellerverzeichnis.jpg` waren bereits
  eng zugeschnitten.

## 2026-09-03 (später, Teil 3) – Deploy-Fehler auf v0.2.0 behoben

### Behoben
- Pushes auf `v0.2.0` scheiterten am Pages-Deploy (0 von 0 Steps, 2 Sekunden) – über die GitHub-API
  diagnostiziert: Das `github-pages`-Deployment-Environment erlaubt per Branch-Policy nur `main` als
  Deploy-Quelle. `v0.2.0` nach `main` gemergt (inkl. Zusammenführen mit einem zwischenzeitlich über
  GitHub erstellten PR-Merge-Commit) und gepusht – Deploy läuft jetzt wieder über `main`.
- Für später festgehalten: entweder künftig konsequent nach `main` mergen, oder `v0.2.0` einmalig in
  den Repo-Settings (Environments → github-pages → Deployment branches) freischalten.

## 2026-09-03 (später, Teil 2) – Impressum: drei eigene Seiten je Tätigkeitsbereich

### Hinzugefügt
- Quelle: `Instagram - Impressi - Konzept.docx` (Projektroot) enthielt vier fertige, nach § 5 DDG
  formulierte Impressum-Texte für Ellens Instagram-Accounts. Text per PowerShell aus der
  `word/document.xml` des Docx (ist ein ZIP) extrahiert, da kein Word/Docx-Reader verfügbar ist.
- Drei neue Seiten, je Tätigkeitsbereich getrennt (wie von Ellen für Instagram vorgesehen, gleiches
  Prinzip auf die Website übertragen):
  - `impressum-praxis.html` – Naturheilpraxis Beitat (HP Ellen Beitat, Aufsichtsbehörde: Landratsamt
    Aschaffenburg – Gesundheitsamt)
  - `impressum-kraeuterwerkstatt.html` – Kräuterwerkstatt Alzenau (Seminarzentrum + Laden,
    Aufsichtsbehörde: Stadt Alzenau; enthält als Hinweis den Handelsnamen „Vitaminerie" für den
    Ladenbereich, da die Website keine eigene Vitaminerie-Seite hat – vierter Account aus dem Docx
    wurde hier eingegliedert statt eigener Seite)
  - `impressum-event.html` – Alzenauer Naturheilkundetag (Aufsichtsbehörde: Ordnungsamt Alzenau)
- Footer-Link „Impressum" auf allen 10 bestehenden Seiten von `#`/TODO auf die jeweils passende
  Impressum-Seite umgestellt (Praxis-Seiten → impressum-praxis, Seminarzentrum → impressum-
  kraeuterwerkstatt, Events → impressum-event). „Haftungsausschluss" bleibt weiterhin TODO – dazu
  lag keine vorbereitete Textquelle vor.

## 2026-09-03 (später) – Flyer-/Dokument-Bilder: nicht mehr beschnitten, jetzt anklickbar

### Behoben
- Nutzer-Feedback: Flyer-Bilder in den Karten waren per `object-fit: cover` zugeschnitten (nur ein
  Ausschnitt sichtbar) und nirgends klickbar – Inhalte der Flyer/Dokumente waren praktisch nicht lesbar.
- `.img-card .thumb` (Praxis & Schwerpunkte): `object-fit: cover` → `contain`, zeigt das ganze Flyer-Bild
  statt eines Ausschnitts. Zusätzlich ist die gesamte Vorschau jetzt ein Link, der das Originalbild in
  voller Auflösung in einem neuen Tab öffnet, mit sichtbarem Hinweis „🔍 Zum Vergrößern anklicken".
- Gleiches Muster auf `events-naturheilkundetag.html` ergänzt: Flyer S1 (Hero), Flyer S2,
  Ausstellerverzeichnis und Vortragsprogramm Raum 1 sind jetzt alle anklickbar (öffnen Originalgröße),
  nicht nur klein eingebettet – wichtig, da Ausstellerverzeichnis/Vortragsprogramm dichte Textinhalte sind.

## 2026-09-03 – Repo-Bereinigung: rohe Original-Bilder raus, ungenutztes PDF eingebaut

### Sicherheit/Datenschutz
- Festgestellt: Das Repo ist aktuell **öffentlich** auf GitHub sichtbar. Die beiden Rohdaten-Ordner
  `Homepage Ellen - Farbdatei und Foto/` und `Homepage Ellen - Flyer dateien/` (u. a. Ellens
  unbearbeitetes Original-Porträt, alle Original-Flyer, ein ungenutztes 4,3-MB-PDF) waren dadurch
  öffentlich einsehbar, obwohl sie nie Teil des deployten Prototyps sind (`deploy-pages.yml` deployt
  ausschließlich `prototype/`). Aus der laufenden Versionierung genommen (`git rm --cached` + Ordner-
  Regeln in `.gitignore`), bleiben lokal erhalten. Betrifft nur künftige Commits, nicht die bereits
  gepushte Historie – dafür hat der Nutzer separat bereits eine Löschung sensibler Daten über den
  GitHub-Support beauftragt und durchführen lassen.

### Hinzugefügt
- `Flyer - Stress  VS.pdf` (bisher komplett ungenutzt) per Windows-eigener `Windows.Data.Pdf`-API zu
  `prototype/assets/img/flyer-stress-vs.jpg` gerendert und nachträglich sauber JPEG-komprimiert
  (900px Breite, ~380 KB). Ersetzt in `praxis-schwerpunkte.html` die bisherige Rückseiten-Version
  (`flyer-stress.jpg`, aus `Flyer-Stress - RS.jpg`) durch die deutlich aussagekräftigere Vorderseite
  ("Lässig statt stressig – Ganzheitliche Stress-Medizin & Achtsamkeitstraining"). Alte, jetzt
  ungenutzte `flyer-stress.jpg` gelöscht.

## 2026-09-01 – Google Maps: Zwei-Klick-Lösung statt Direkt-Embed

### Entschieden
- Anlass: Ellen (per WhatsApp, weitergeleitet über David) hatte Bedenken bzgl. Abmahnrisiko bei
  direkter Google-Maps-Einbindung und dazu bereits eine externe KI-Einschätzung eingeholt.
  Einschätzung bestätigt: berechtigte Sorge, deckt sich mit dem bereits etablierten Vorsichtsprinzip
  bei den Ausstellerlinks der Eventseite (siehe `docs/Kontext.md`). Kein API-Key nötig – die einfache
  iframe-Einbettung ohne Google-Cloud-Account reicht für die Zwei-Klick-Lösung.

### Geändert
- `kontakt.html`: `.map-placeholder` (reiner Text-Platzhalter) ersetzt durch `.map-consent` –
  Hinweistext + Button „Google Maps anzeigen". Die Karte lädt erst nach explizitem Klick, vorher
  besteht keine Verbindung zu Google-Servern.
- Neu: `assets/js/maps-consent.js` (Vanilla-JS, kein API-Key) baut das iframe erst nach Klick ein.
- CSS: `.map-placeholder` durch `.map-consent`/`.map-consent-loaded` ersetzt.

### Offen
- Datenschutzerklärung (weiterhin TODO) muss bei Erstellung Google Maps explizit nennen (Dienst,
  übertragene Daten, Rechtsgrundlage, Widerruf) – Platzhalter-Link ist schon im Hinweistext gesetzt.

## 2026-08-19 (später, Teil 3) – Interne Kontextdateien aus der Versionierung genommen

### Geändert
- `CLAUDE.md` und der komplette `docs/`-Ordner (Planungsnotizen, Architektur-Analyse, Admin-Einführung, alte Bauanleitung) sind ab jetzt **nicht mehr Teil des Git-Repos** (`git rm --cached`, Regeln in `.gitignore`). Hintergrund: Das Repo ist für GitHub Pages vorgesehen und könnte öffentlich werden – interne Planungsdokumente sollen nicht zwangsläufig mit der Website mitveröffentlicht werden.
- Die Dateien bleiben lokal auf der Maschine unverändert erhalten (Claude Code liest `CLAUDE.md` weiterhin normal), sie werden nur nicht mehr committet/gepusht.
- `CHANGELOG.md` bleibt bewusst weiterhin versioniert – der Projektverlauf soll im Repo nachvollziehbar bleiben.

## 2026-08-19 (später, Teil 2) – Responsive Überarbeitung (Mobile First)

### Geändert
- `assets/css/style.css` komplett auf **Mobile-First** umgestellt: Basis-Regeln gelten jetzt für schmale Bildschirme, `@media (min-width: 640px)` und `@media (min-width: 1000px)` schalten schrittweise auf mehrspaltige/Desktop-Layouts um (vorher: einzelne `max-width: 760px`-Regel als nachträglicher Fix).
- **Fluide Typografie/Abstände** über `clamp()`-CSS-Variablen (`--fs-brand`, `--fs-hero-h1`, `--fs-page-h1`, `--fs-h2`, `--space-section`, `--space-container`) statt fixer `rem`-Werte, die an Breakpoints hart springen.
- **Mobile Navigation**: Hamburger-Button (`.nav-toggle`) + aufklappbares Menü (`.nav-wrapper`) ab 6 Hauptpunkten + 2 Sekundärpunkten nötig, da inline-Nav auf schmalen Screens nicht mehr passt. Ab 1000px Breite permanent inline sichtbar, Button verschwindet. Neues `assets/js/nav.js` (reines Vanilla-JS, keine Abhängigkeiten) steuert das Auf-/Zuklappen und schließt das Menü nach Linkklick.
- `.band`-Hintergrundbereich (Header/Hero) nutzt jetzt `min-height: clamp(...)` statt fixer Breakpoint-Werte für sanftes Skalieren.
- Grids mit `repeat(auto-fit, minmax(...))` (Karten, Footer, Bedürfnis-Kacheln) blieben unverändert – waren bereits fluid.
- Formular-Inputs auf `font-size: 1rem` gesetzt (verhindert Auto-Zoom beim Fokussieren auf iOS), Tapzonen bei Filter-Checkboxen und Kacheln vergrößert.
- Hamburger-Button + `assets/js/nav.js`-Einbindung auf allen 10 Seiten ergänzt.

### Hinweis
- Konnte auf dieser Maschine nicht automatisiert bei mehreren Viewport-Breiten gegengeprüft werden (kein Headless-Browser verfügbar) – bitte im Browser per DevTools-Geräte-Toolbar (F12 → Toggle Device Toolbar) oder durch Fenster-Verkleinern selbst kurz gegenchecken, v. a. das Hamburger-Menü unter 1000px Breite.

## 2026-08-19 (später) – Entscheidungen aus der Architektur-Analyse umgesetzt

### Entschieden
- Markenname bleibt **„Naturheilpraxis Beitat"** (ohne „& Kollegen").
- CTA-Wortlaut einheitlich **„Termin anfragen"** (ersetzt „Erstgespräch buchen" auf Home und Therapieangebot, 13 Stellen).
- **„Wissen & Blog"** wird jetzt schon als Hauptnav-Punkt geführt, aber ausdrücklich als Coming-Soon-Bereich.

### Hinzugefügt
- `prototype/wissen.html` – Übersichtsseite mit Coming-Soon-Banner und festem Karten-Layout (Bild-Platzhalter, Kategorie, Titel, Teaser, Datum) für zukünftige Beiträge; 3 Beispiel-Einträge zum Ausprobieren, kein echter Inhalt.
- `prototype/wissen-beispiel-eintrag.html` – Artikel-Detail-Template (Titel, Meta, Bild-Platzhalter, Fließtext-Absätze, medizinischer Hinweis, CTA), als Muster für künftige echte Beiträge.
- CSS: `.coming-soon-banner`, `.entry-meta`, `.thumb-placeholder`, `.article-body` in `assets/css/style.css`.
- Nav-Eintrag „Wissen & Blog" auf allen 10 Seiten ergänzt (zwischen Therapieangebot und Über mich).
- `docs/seitenbaum.md` aktualisiert (neue Seiten, bestätigter Markenname/CTA, aktualisierte offene Punkte).

Basis: `docs/analyse-architektur-gestaltung.md` (Architektur-/Gestaltungsanalyse eines Kollegen-Durchlaufs), siehe deren Abschnitt 8 „Offene Entscheidungen".

## 2026-08-19 – Seitenbaum-Dokumentation

### Hinzugefügt
- `docs/seitenbaum.md` – Überblick über die aktuelle Architektur des Prototyps (Baumdarstellung, Mermaid-Diagramm, Status-Tabelle je Seite, offene Punkte). Ersetzt den veralteten Stand aus `docs/seitenstruktur-bauanleitung.md` als Referenz für die tatsächlich gebaute Struktur.

## 2026-08-18 (später, Teil 4) – Echter Freisteller eingebaut

### Geändert
- Nutzer hat das Portraitfoto extern (remove.bg) freigestellt und bereitgestellt. `prototype/assets/img/ellen-portrait-cutout.png` (echte Transparenz, verifiziert) ersetzt im Hero die Blob-Form-Lösung.
- `.hero-photo img`: Blob-`border-radius`/`box-shadow`-Trick entfernt, stattdessen `filter: drop-shadow(...)`, das der tatsächlichen Silhouette folgt statt dem Rechteck-Rahmen.
- Hinweis: Datei ist die remove.bg-Free-Tier-„Preview"-Auflösung (501×498px) – für Retina-Displays/größere Darstellung ggf. später eine hochauflösendere Freistellung nachreichen.

## 2026-08-18 (später, Teil 3) – Hero-Foto ohne harten Rahmen

### Geändert
- Echtes Freistellen (Personen-Cutout) des Portraitfotos geprüft und verworfen: Haare/Hauttöne und der graue Studio-Hintergrund liegen farblich zu nah beieinander (per Pixel-Sampling verifiziert), ein einfacher Schwellenwert-Ansatz hätte fleckige Kanten produziert. Keine KI-Bildsegmentierung in dieser Umgebung verfügbar.
- Stattdessen: `ellen-portrait.jpg` enger auf die Person zugeschnitten (nah quadratisch, 1308×1299 statt 1869×1299) und im Hero mit organischer Blob-Form (`border-radius`-Trick) statt hartem Rechteck-Rahmen dargestellt – wirkt ohne sichtbare Kante, passt zum Aquarell-Look.
- Für einen echten, sauberen Freisteller später: Foto durch ein Tool wie remove.bg oder Photoshop schicken und die PNG-Version einsetzen.

## 2026-08-18 (später, Teil 2) – Feinschliff nach erstem visuellem Review

### Geändert
- `--creme` von `#fcfed7` auf `#faf9ee` abgeschwächt (Originalwert wirkte am Bildschirm zu gesättigt gelb-grün).
- `bg-top.jpg` neu zugeschnitten (58% statt 46% der Bildhöhe) – der tiefste Punkt des Blattmotivs wurde per Pixel-Scan bei y≈43,4% lokalisiert, jetzt mit Puffer vollständig sichtbar statt am Rand abgeschnitten.
- `.band` ist jetzt ein Flex-Container mit `min-height: 460px`; Hero-/Page-Hero-Inhalte sind vertikal zentriert (`flex:1; align-items:center`), damit der größere Hintergrund nicht zu Leerraum unter dem Text führt.
- Emoji-Icons in den 6 Bedürfnis-Kacheln (Home) durch dünne Linien-Icons (Inline-SVG, `stroke: var(--gruen-dunkel)`) ersetzt.

## 2026-08-18 (später) – Echte Hintergrundgrafik statt CSS-Verlauf

### Geändert
- `.band` (Header/Hero) und `.band-footer` nutzen jetzt die echte Aquarell-Vorlage statt eines nachgebauten CSS-Farbverlaufs. Zugeschnitten aus `Homepage Ellen - Farbdatei und Foto/HG-A4-quer-hell-leer.jpg` (Querformat, da es die Bänder bereits in einem breiten, web-tauglichen Seitenverhältnis liefert):
  - `prototype/assets/img/bg-top.jpg` – grünes Wellenband, Goldstreifen, herabhängendes Blattmotiv (oberste ~46% der Vorlage)
  - `prototype/assets/img/bg-bottom.jpg` – unteres grünes Band (unterste ~16%)
- Header/Nav und Hero- bzw. Page-Hero-Sektion sind auf allen 8 Seiten jetzt strukturell zusammengefasst (ein gemeinsamer `.band`-Container), damit die Grafik – inkl. Blattmotiv – groß genug sichtbar ist, statt nur hinter der schmalen Nav-Leiste zu verschwinden.
- Das hochformatige `HG-A4-hoch-hell-leer.jpg` bleibt vorerst ungenutzt im Prototyp – es ist als A4-Briefpapier-Vorlage fürs Drucken angelegt (Seitenverhältnis passt nicht gut zu einem breiten Website-Header); Kandidat für einen späteren Print-Stylesheet (z. B. Preisliste/Kontakt als PDF).

Nennenswerte Änderungen, Entscheidungen und Ergänzungen an diesem Projekt – chronologisch, neueste zuerst. Format angelehnt an [Keep a Changelog](https://keepachangelog.com/), mit Datumsabschnitten statt Versionsnummern (kein Software-Release-Zyklus, sondern ein Website-Projekt).

## 2026-08-18 – Kurswechsel: eigener Code-Prototyp statt WordPress

### Entschieden
- Abkehr von WordPress/Elementor. Eigener, code-basierter Aufbau (HTML/CSS/JS, versioniert in Git), Rodi übernimmt die technische Pflege langfristig (statt Ellen selbst im wp-admin).
- Domain `beitat.eu` bleibt bei web.de registriert, wird später nur per DNS auf neues Hosting umgezogen (Netlify/Cloudflare Pages angedacht) – alte WordPress-Seite bleibt bis zur bewussten Umschaltung unangetastet.
- Navigationsstruktur ersetzt durch die detailliertere Wireframe-Skizze vom 12.08.: **Home · Praxis & Schwerpunkte · Therapieangebot · Über mich · Kontakt aufnehmen**, sekundär **Seminarzentrum · Events**.

### Hinzugefügt
- Farb-/Design-System per Pixel-Sampling aus den Original-Dateien ausgelesen (nicht geschätzt): Waldgrün `#0A5A16`, Bordeaux `#7A2E29`, Gold `#F6C004`, Lindgrün-Verlauf `#F3FFA0`→`#D9EB87`, Creme `#FCFED7`.
- `prototype/` – lauffähiger statischer Prototyp, 7 Seiten im gemeinsamen Design-System:
  - `index.html` – Home mit bedürfnisorientiertem Einstieg ("Wozu benötigen Sie unsere Hilfe?", 6 Kategorien)
  - `ueber-mich.html` – Porträt, Bio-Platzhalter, Zitat vom Flyer
  - `praxis-schwerpunkte.html` – 4 Schwerpunkte mit echten Flyer-Bildern (Schmerztherapie, Darm, Stress, Frauenheilkunde)
  - `therapieangebot.html` – Filterleiste (Beschwerdebild/Anwendungsart, Layout only, noch nicht funktional) + Ergebniskarten
  - `kontakt.html` – Kontaktdaten, Formular (noch ohne Backend-Anbindung), Kartenplatzhalter
  - `seminarzentrum.html` – Kräuterwerkstatt-Content (Ladengeschäft + Vorträge/Workshops/Coaching), eigene Kontaktdaten laut Flyer
  - `events.html` + `events-naturheilkundetag.html` – Event-Übersicht und Detailseite (2. Alzenauer Naturheilkundetag) mit Ausstellerliste, Haftungshinweis, Vortragsprogramm
- `.gitignore` neu aufgesetzt nach offiziellen GitHub-Templates (`github/gitignore` – VS Code, Windows) plus projektspezifische Secrets-Regeln.
- `.vscode/sftp.json.example` als versionierte, werteleere Vorlage (echte `sftp.json` bleibt lokal/ungetrackt).
- `CHANGELOG.md` (dieses Dokument).

### Hinweis
- `docs/admin-einfuehrung.md` und `docs/seitenstruktur-bauanleitung.md` basieren auf dem WordPress-Ansatz bzw. der ersten, einfacheren Skizze – als Referenz belassen, aber mit Status-Hinweis auf Überholtheit versehen.

## 2026-08-07/12 – Projekt-Setup (WordPress-Phase)

### Hinzugefügt
- `CLAUDE.md` – Projektkontext, erste Interpretation der handschriftlichen Wireframe-Skizze.
- `docs/admin-einfuehrung.md` – Einstieg ins wp-admin-Backend für den Nutzer (noch nie benutzt).
- `docs/seitenstruktur-bauanleitung.md` – Bauanleitung fürs Architektur-Grundgerüst im Elementor-Editor, mit Platzhaltertexten.
- `docs/vscode-sftp-setup.md` – Anleitung zur SFTP-Anbindung an den Webspace für Theme-Dateien.
- SFTP-Host `ftp.beitat.eu` per DNS-Abfrage verifiziert (Web.de/IONOS-Infrastruktur), zwei Verbindungsprofile (SFTP Port 22, FTP Port 21) vorbereitet, bewusst ohne gespeichertes Passwort (OneDrive-Sync-Risiko).

### Sicherheit
- Vollständiger Zugangsdaten-Dump (WordPress-Login, Domain-/Web.de-Account, MySQL, Dropbox) wurde im Chat geteilt – bewusst nicht in Dateien übernommen, nicht in Memory gespeichert; Empfehlung an den Nutzer, sensible Zugänge künftig getrennt/über einen Passwort-Manager zu teilen.
