// Typen für eine Film-Konfiguration. Jeder Film in `src/data/films/`
// exportiert ein Objekt vom Typ `Film`.
//
// Zahlen (Aufrufe, Likes, …) sind Texte, damit sie genau so erscheinen,
// wie sie hier stehen – z.B. "312’847" oder "1,2 Mio.".

import type { BackgroundId } from "../backgrounds";

export type Comment = {
	author: string; // z.B. "@lena_s"
	avatarColor?: string;
	timeAgo: string; // z.B. "vor 2 Stunden"
	text: string;
	likes?: string;
	pinned?: boolean;
};

export type Recommendation = {
	title: string;
	channel: string;
	views: string;
	uploadedAgo: string;
	duration: string; // z.B. "12:47"
	thumbnailUrl?: string; // Bild in /public/films/<film>/, sonst Farbverlauf
};

export type Film = {
	// Anzeigename, nur zur Orientierung (z.B. in Fehlermeldungen).
	title: string;

	// Hintergrundmuster, siehe src/data/backgrounds.ts (Standard: "plain")
	background?: BackgroundId;

	appInfo: {
		appName: string;
		accentColor: string; // Logo & Abo-Button
		searchQuery?: string; // steht im Suchfeld oben
	};

	// Wer schaut gerade (Avatar oben rechts und beim Kommentarfeld)
	viewer: {
		initial: string;
		avatarColor: string;
	};

	video: {
		title: string;
		views: string;
		uploadedAgo: string;
		likes: string;
		description: string;
		hashtags?: string[];
		// Platzhalter für das Video, das im Schnitt eingesetzt wird.
		// Einheitliche Farbe = einfacher zu ersetzen/keyen.
		placeholderColor?: string; // Standard: Schwarz
		placeholderLabel?: string; // leer lassen ("") = kein Text
	};

	channel: {
		name: string;
		initial: string;
		avatarColor: string;
		subscribers: string;
		verified?: boolean;
	};

	commentCount: string;
	comments: Comment[];

	recommendations: Recommendation[];
};
