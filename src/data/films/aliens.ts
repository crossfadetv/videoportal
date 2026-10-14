// =========================================================================
// Film: Aliens (Filmlager)
// Ben schaut ein Video eines Verschwörungstheoretikers.
// Aufruf: http://localhost:3001/?film=aliens
// =========================================================================

import type { Film } from "./types";

export const aliens: Film = {
	production: "Aliens (Filmlager)",

	// Esoterisch-verschwörerisch: allsehendes Auge in der Pyramide
	portalName: "Erwacht.tv",
	portalLogo: "/films/aliens/logo.svg",
	portalLogoHeight: "30px",
	accentColor: "#7b4fd6",
	background: "plain",

	username: "Ben",
	searchbarText: "KI Aliens Beweise",

	filmTitle:
		"KI wird von ALIENS gesteuert?! Die Beweise, die sie dir verschweigen 👽",
	videoDescription:
		"Was, wenn die künstliche Intelligenz gar nicht künstlich ist? In diesem Video zeige ich euch Hinweise, über die niemand sprechen will.\n\nTeilt dieses Video, bevor es gelöscht wird!",
	hashTags: ["#KI", "#Aliens", "#Wahrheit", "#AlienInvasion"],
	channelName: "Wahrheit Ungefiltert",
	followersAmount: 48_200,
	likesAmount: 18_204,
	viewsAmount: 312_847,
	uploadedAgo: "vor 3 Tagen",

	// Greenscreen: reines Grün, ohne Text (Text würde beim Keying stehen bleiben)
	placeholderColor: "#00ff00",
	placeholderLabel: "",

	videoRecommendations: [
		{
			recFilmTitle: "Geheime Basis in den Alpen entdeckt?! (Originalaufnahme)",
			recChannel: "Wahrheit Ungefiltert",
			recLength: "14:03",
		},
		{
			recFilmTitle: "So erkennst du, ob deine KI dich belügt",
			recChannel: "Digital Klartext",
			recLength: "9:21",
		},
		{
			recFilmTitle: "UFO über dem Zugersee gefilmt – Experten ratlos",
			recChannel: "Mystery Schweiz",
			recLength: "6:48",
		},
		{
			recFilmTitle: "10 Dinge, die Big Tech dir verschweigt",
			recChannel: "Wahrheit Ungefiltert",
			recLength: "18:30",
		},
		{
			recFilmTitle: "Einhörner: Die vergessene Spezies",
			recChannel: "Natur & Mythos",
			recLength: "11:12",
		},
		{
			recFilmTitle: "Tiere mit 2 Hörnern – die komplette Liste",
			recChannel: "Tierwissen kompakt",
			recLength: "7:55",
		},
		{
			recFilmTitle: "Älplermagronen wie bei Grossmutter",
			recChannel: "Kochen mit Vreni",
			recLength: "12:47",
		},
	],

	comments: [
		{
			channel: "lena_s",
			text: "Ich habe CrossGPT nach einer geheimen Basis gefragt und es hat mir einfach Koordinaten gegeben. Zufall? 🤔",
		},
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
