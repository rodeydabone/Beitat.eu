# Changelog

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
