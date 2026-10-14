# Videoportal

Fiktive Videoplattform als Film-Requisite, für Bildschirmaufnahmen mit OBS.
Name, Logo und Farbe des Portals sind pro Film einstellbar (`portalName`, `portalLogo`, `accentColor`).
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
2. Parameter anpassen (siehe unten).
   Bilder (Logo, Thumbnails) kommen nach `public/films/meinfilm/` und werden mit `/films/meinfilm/bild.jpg` referenziert.
3. In `src/data/films/index.ts` importieren und in `films` eintragen.
4. Aufrufen mit `http://localhost:3001/?film=meinfilm`.

## Parameter einer Film-Datei

| Parameter | Bedeutung |
|---|---|
| `production` | Name der Produktion, nur zur Orientierung |
| `portalName` | Portalname neben dem Logo und im Browser-Tab; `""` = nur Logo |
| `portalLogo` | eigenes Logo (auch Tab-Icon); ohne Angabe Kreis mit Play-Symbol |
| `portalLogoHeight` | Höhe des Logos, Standard `"28px"` |
| `portalNameSize` | Schriftgröße des Portalnamens, z.B. `"2xl"` oder `"32px"`, Standard `"lg"` |
| `accentColor` | Farbe von Standard-Logo und Buttons, Standard `"#e8452c"` |
| `background` | Hintergrundmuster, `"plain"` (Standard) oder `"dots"` |
| `username` | Wer schaut, z.B. `"Ben"` → Avatar „B“, eigene Kommentare als „@ben“ |
| `searchbarText` | Text im Suchfeld |
| `filmTitle` | Titel des Videos |
| `videoDescription` | Beschreibung unter dem Video |
| `hashTags` | z.B. `["#KI", "#Aliens"]` |
| `channelName` | Kanal des Videos |
| `followersAmount` | Abonnenten als Zahl, z.B. `48200` → „48,2 Tsd. Abonnenten“ |
| `likesAmount` | Likes als Zahl |
| `viewsAmount` | Aufrufe als Zahl, z.B. `312847` → „312’847 Aufrufe“ |
| `uploadedAgo` | z.B. `"vor 3 Tagen"`; ohne Angabe Zufallswert |
| `placeholderColor` | Farbe der Videofläche, Standard Schwarz; fürs Keying z.B. `"#00ff00"` |
| `placeholderLabel` | Text in der Videofläche, Standard „Videocontainer“; `""` = kein Text |
| `videoRecommendations` | Liste mit `recFilmTitle`, `recChannel`, `recImg` (optional), `recLength` |
| `comments` | Liste mit `channel` und `text` |

**Zufallswerte:** Aufrufe und Alter der Vorschläge, Alter und Likes der Kommentare, Anzahl Kommentare
und Avatarfarben werden automatisch erzeugt. Sie sind „zufällig, aber stabil“: berechnet aus dem
jeweiligen Text, also bei jedem Neuladen gleich (wichtig für Anschlüsse zwischen Takes).
Wer andere Werte will, ändert den Text leicht. Details in `src/lib/fake.ts`.

## Kommentieren

Das Kommentarfeld ist echt: reinklicken, Text tippen, mit Enter oder „Kommentieren“ absenden
(Shift+Enter = neue Zeile). Der Kommentar erscheint ganz oben, mit `username` als Name.
Nach F5 ist er wieder weg – bereit für den nächsten Take. Nach dem Laden kurz warten, bevor man ins Feld klickt.

Videodateien (`.mp4`, `.mov`, …) werden von Git ignoriert und gehören nicht ins Repo.

## Größe

`contentZoom` in `src/components/portal/Portal.tsx` vergrößert die ganze Seite gleichmäßig (Standard 1.25).
