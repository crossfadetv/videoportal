// =========================================================================
// Film: Aliens (Filmlager)
// Ben schaut ein Video eines Verschwörungstheoretikers.
// Aufruf: http://localhost:3001/?film=aliens
// =========================================================================

import type { Film } from "./types";

export const aliens: Film = {
	title: "Aliens (Filmlager)",

	background: "plain",

	appInfo: {
		appName: "CrossTube",
		accentColor: "#e8452c",
		searchQuery: "KI Aliens Beweise",
	},

	viewer: {
		initial: "B",
		avatarColor: "#dd6b20",
	},

	video: {
		title:
			"KI wird von ALIENS gesteuert?! Die Beweise, die sie dir verschweigen 👽",
		views: "312’847",
		uploadedAgo: "vor 3 Tagen",
		likes: "18’204",
		description:
			"Was, wenn die künstliche Intelligenz gar nicht künstlich ist? In diesem Video zeige ich euch Hinweise, über die niemand sprechen will.\n\nTeilt dieses Video, bevor es gelöscht wird!",
		hashtags: ["#KI", "#Aliens", "#Wahrheit", "#AlienInvasion"],
		placeholderColor: "#000000",
		placeholderLabel: "Videocontainer",
	},

	channel: {
		name: "Wahrheit Ungefiltert",
		initial: "W",
		avatarColor: "#2f855a",
		subscribers: "48,2 Tsd. Abonnenten",
		verified: false,
	},

	commentCount: "2’391 Kommentare",
	comments: [
		{
			author: "@lena_s",
			avatarColor: "#805ad5",
			timeAgo: "vor 2 Stunden",
			text: "Ich habe CrossGPT nach einer geheimen Basis gefragt und es hat mir einfach Koordinaten gegeben. Zufall? 🤔",
			likes: "1’204",
		},
		{
			author: "@realtalk99",
			avatarColor: "#c53030",
			timeAgo: "vor 5 Stunden",
			text: "Endlich sagt es mal einer!!! A.I. = Alien Invasion. Denkt mal drüber nach.",
			likes: "842",
		},
		{
			author: "@skeptiker_ch",
			avatarColor: "#2b6cb0",
			timeAgo: "vor 1 Tag",
			text: "Quelle: trust me bro",
			likes: "3’117",
		},
		{
			author: "@ufo_jaeger",
			avatarColor: "#b7791f",
			timeAgo: "vor 1 Tag",
			text: "Ist euch auch schon aufgefallen, dass der rote Punkt bei CrossGPT aussieht wie ein UFO? 👀",
			likes: "509",
		},
		{
			author: "@grossmeister_fan",
			avatarColor: "#319795",
			timeAgo: "vor 2 Tagen",
			text: "Bei 7:42 sieht man es ganz deutlich. Nicht mehr ungesehen machbar.",
			likes: "276",
		},
	],

	recommendations: [
		{
			title: "Geheime Basis in den Alpen entdeckt?! (Originalaufnahme)",
			channel: "Wahrheit Ungefiltert",
			views: "1,1 Mio. Aufrufe",
			uploadedAgo: "vor 2 Wochen",
			duration: "14:03",
		},
		{
			title: "So erkennst du, ob deine KI dich belügt",
			channel: "Digital Klartext",
			views: "87’000 Aufrufe",
			uploadedAgo: "vor 5 Tagen",
			duration: "9:21",
		},
		{
			title: "UFO über dem Zugersee gefilmt – Experten ratlos",
			channel: "Mystery Schweiz",
			views: "402’000 Aufrufe",
			uploadedAgo: "vor 1 Monat",
			duration: "6:48",
		},
		{
			title: "10 Dinge, die Big Tech dir verschweigt",
			channel: "Wahrheit Ungefiltert",
			views: "655’000 Aufrufe",
			uploadedAgo: "vor 3 Monaten",
			duration: "18:30",
		},
		{
			title: "Einhörner: Die vergessene Spezies",
			channel: "Natur & Mythos",
			views: "23’000 Aufrufe",
			uploadedAgo: "vor 1 Jahr",
			duration: "11:12",
		},
		{
			title: "Tiere mit 2 Hörnern – die komplette Liste",
			channel: "Tierwissen kompakt",
			views: "9’400 Aufrufe",
			uploadedAgo: "vor 8 Monaten",
			duration: "7:55",
		},
		{
			title: "Älplermagronen wie bei Grossmutter",
			channel: "Kochen mit Vreni",
			views: "1,4 Mio. Aufrufe",
			uploadedAgo: "vor 2 Jahren",
			duration: "12:47",
		},
	],
};
