// Typen für eine Film-Konfiguration. Jeder Film in `src/data/films/`
// exportiert ein Objekt vom Typ `Film`.
//
// Was hier nicht angegeben wird (Aufrufe der Vorschläge, Alter, Likes von
// Kommentaren, Avatarfarben …), wird mit stabilen Zufallswerten gefüllt,
// siehe src/lib/fake.ts.

import type { BackgroundId } from "../backgrounds";

export type VideoRecommendation = {
	recFilmTitle: string;
	recChannel: string;
	recImg?: string; // Thumbnail, z.B. "/films/meinfilm/thumb1.jpg"; sonst Farbverlauf
	recLength: string; // z.B. "12:47"
};

export type VideoComment = {
	channel: string; // z.B. "lena_s" (wird als "@lena_s" angezeigt)
	text: string;
};

export type Film = {
	// Für welchen Film/welche Produktion – nur zur Orientierung.
	production: string;

	// ----- Portal ----------------------------------------------------------
	portalName: string; // Name neben dem Logo und im Browser-Tab; "" = nur Logo
	portalLogo?: string; // eigenes Logo, sonst Kreis mit Play-Symbol
	portalLogoHeight?: string; // Standard "28px"
	portalNameSize?: string; // Schriftgröße des Namens, z.B. "2xl" oder "32px"; Standard "lg"
	accentColor?: string; // Standard-Logo & Buttons, Standard "#e8452c"
	background?: BackgroundId; // Standard "plain", siehe src/data/backgrounds.ts

	// ----- Wer schaut ------------------------------------------------------
	username: string; // z.B. "Ben" → Avatar "B", eigene Kommentare als "@ben"
	searchbarText?: string;

	// ----- Video -----------------------------------------------------------
	filmTitle: string;
	videoDescription: string;
	hashTags?: string[];
	channelName: string;
	followersAmount: number;
	likesAmount: number;
	viewsAmount: number;
	uploadedAgo?: string; // z.B. "vor 3 Tagen"; sonst Zufallswert

	// Platzhalter für das Video, das im Schnitt eingesetzt wird.
	placeholderColor?: string; // Standard Schwarz; z.B. "#00ff00" fürs Keying
	placeholderLabel?: string; // Standard "Videocontainer"; "" = kein Text

	videoRecommendations: VideoRecommendation[];
	comments: VideoComment[];
};
