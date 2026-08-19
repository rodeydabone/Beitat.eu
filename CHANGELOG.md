# Changelog

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
