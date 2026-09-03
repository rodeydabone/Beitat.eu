# Changelog

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
