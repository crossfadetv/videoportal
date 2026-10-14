# Videoportal

Fiktive Videoplattform („CrossTube“) als Film-Requisite, für Bildschirmaufnahmen mit OBS.
Gegenstück zu [cross-gpt](https://github.com/crossfadetv/cross-gpt), gleich aufgebaut.

Der Videobereich ist eine leere 16:9-Fläche. Das eigentliche Video wird im Schnitt eingesetzt.

## Film starten

```bash
npm install   # einmalig
npm run dev
```

Dann im Browser öffnen: `http://localhost:3001/?film=<filmname>`, z.B. `http://localhost:3001/?film=aliens`.
Läuft auf Port 3001, damit es gleichzeitig mit cross-gpt (Port 3000) laufen kann.
Ohne `?film=` wird der Standardfilm aus `src/data/films/index.ts` geladen.

## Neuen Film anlegen

1. `src/data/films/aliens.ts` kopieren, z.B. nach `meinfilm.ts` (gleicher Name wie in cross-gpt).
2. Videotitel, Kanal, Kommentare, Vorschläge usw. anpassen.
   Bilder (z.B. Thumbnails) kommen nach `public/films/meinfilm/` und werden mit `/films/meinfilm/bild.jpg` referenziert.
3. In `src/data/films/index.ts` importieren und in `films` eintragen.
4. Aufrufen mit `http://localhost:3001/?film=meinfilm`.

## Videoplatzhalter

In der Film-Datei unter `video`:

- `placeholderColor`: Farbe der Fläche (Standard Schwarz). Für Keying im Schnitt z.B. `"#00ff00"`.
- `placeholderLabel`: Text in der Fläche (Standard „Videocontainer“), `""` für keinen Text.

Videodateien (`.mp4`, `.mov`, …) werden von Git ignoriert und gehören nicht ins Repo.

## Größe

`contentZoom` in `src/components/portal/Portal.tsx` vergrößert die ganze Seite gleichmäßig (Standard 1.25).
