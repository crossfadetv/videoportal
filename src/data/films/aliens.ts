// =========================================================================
// Film: Aliens (Filmlager)
// Ben schaut ein Video eines Verschwörungstheoretikers.
// Aufruf: http://localhost:3001/?film=aliens
// =========================================================================

import type { Film } from "./types";

export const aliens: Film = {
	production: "Aliens (Filmlager)",

	// Esoterisch-verschwörerisch: allsehendes Auge in der Pyramide.
	// "Hallucinatio" (lat.) = Träumerei, Wahnvorstellung – und Anspielung
	// auf KI-"Halluzinationen" (CrossGPT erfindet die Koordinaten der Basis).
	portalName: "HALLUCINATIO.TV",
	portalLogo: "/films/aliens/logo.svg",
	portalLogoHeight: "46px",
	portalNameSize: "3xl",
	accentColor: "#7b4fd6",
	background: "plain",

	username: "Ben",
	searchbarText: "KI Aliens Beweise",

	filmTitle:
		"Hast DU dich schon einmal gefragt, WARUM die K.I. ALLES weiss?! Die verstörende Wahrheit in meinem neuen Buch 👽",
	videoDescription:
		"Was, wenn die künstliche Intelligenz gar nicht künstlich ist? In diesem Video zeige ich euch Hinweise, über die niemand sprechen will.\n\nTeilt dieses Video, bevor es gelöscht wird!",
	hashTags: ["#KI", "#Aliens", "#Wahrheit", "#AlienInvasion"],
	channelName: "Dr. Markus Brunner",
	followersAmount: 48_200,
	likesAmount: 18_204,
	viewsAmount: 312_847,
	uploadedAgo: "vor 3 Tagen",

	// Greenscreen: reines Grün, ohne Text (Text würde beim Keying stehen bleiben)
	placeholderColor: "#00ff00",
	placeholderLabel: "",
	// true = 4 Tracking-Kreuze, wenn der Bildschirm mit einer Kamera gefilmt wird
	trackingPoints: true,

	videoRecommendations: [
		{
			recFilmTitle: "Geheime Basis in den Alpen entdeckt?! (Originalaufnahme)",
			recChannel: "Dr. Markus Brunner",
			recImg: "/films/aliens/basis-alpen.jpg",
			recLength: "14:03",
		},
		{
			recFilmTitle:
				"Vorbereitung auf die Invasion – eine Anleitung in 5 Schritten",
			recChannel: "Krisenvorsorge Schweiz",
			recImg: "/films/aliens/vorbereitung-auf-invasion.jpg",
			recLength: "23:41",
		},
		{
			recFilmTitle: "So erkennst du, ob deine KI dich belügt",
			recChannel: "Digital Klartext",
			recImg: "/films/aliens/ki-luegt.jpg",
			recLength: "9:21",
		},
		{
			recFilmTitle: "Das traurigste Einhorn der Welt 😢",
			recChannel: "Kuscheltier TV",
			recImg: "/films/aliens/einhoerner.jpg",
			recLength: "11:12",
		},
		{
			recFilmTitle: "UFO über dem Zugersee gefilmt – Experten ratlos",
			recChannel: "Mystery Schweiz",
			recImg: "/films/aliens/ufo-zugersee.jpg",
			recLength: "6:48",
		},
		{
			recFilmTitle: "10 Dinge, die Big Tech dir verschweigt",
			recChannel: "Dr. Markus Brunner",
			recImg: "/films/aliens/big-tech.jpg",
			recLength: "18:30",
		},
		{
			recFilmTitle: "Tiere mit 2 Hörnern – die komplette Liste",
			recChannel: "Tierwissen kompakt",
			recImg: "/films/aliens/zwei-hoerner.jpg",
			recLength: "7:55",
		},
		{
			recFilmTitle: "Älplermagronen wie bei Grossmutter",
			recChannel: "Kochen mit Vreni",
			recImg: "/films/aliens/aelplermagronen.jpg",
			recLength: "12:47",
		},
	],

	// Ben postet im Film selbst die Koordinaten der Basis als Kommentar –
	// deshalb hier keine Kommentare, die das vorwegnehmen.
	comments: [
		{
			channel: "realtalk99",
			text: "Endlich sagt es mal einer!!! A.I. = Alien Invasion. Denkt mal drüber nach.",
		},
		{
			channel: "skeptiker_ch",
			text: "Quelle: trust me bro",
		},
		{
			channel: "ufo_jaeger",
			text: "Ist euch auch schon aufgefallen, dass der rote Punkt bei CrossGPT aussieht wie ein UFO? 👀",
		},
		{
			channel: "grossmeister_fan",
			text: "Bei 7:42 sieht man es ganz deutlich. Nicht mehr ungesehen machbar.",
		},
	],
};
