// =========================================================================
// "Zufällige", aber stabile Werte (Aufrufe, Alter, Likes, Avatarfarben).
//
// Jeder Wert wird aus einem Text (z.B. Videotitel oder Kommentar) berechnet:
// wirkt zufällig, ist aber bei jedem Neuladen gleich – wichtig für Anschlüsse
// zwischen Takes. Ändert sich der Text, ändern sich auch die Werte.
// =========================================================================

// Zufallsgenerator mit Startwert aus einem Text (cyrb-Hash + mulberry32).
function seeded(seed: string) {
	let h = 1779033703 ^ seed.length;
	for (let i = 0; i < seed.length; i++) {
		h = Math.imul(h ^ seed.charCodeAt(i), 3432918353);
		h = (h << 13) | (h >>> 19);
	}
	// Abschluss-Mischung, damit ähnliche Texte ganz andere Werte ergeben.
	h = Math.imul(h ^ (h >>> 16), 2246822507);
	h = Math.imul(h ^ (h >>> 13), 3266489909);
	h ^= h >>> 16;
	let a = h >>> 0;
	return () => {
		a = (a + 0x6d2b79f5) | 0;
		let t = Math.imul(a ^ (a >>> 15), 1 | a);
		t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

// Logarithmisch verteilt: kleine Werte häufiger, große seltener – wie echt.
function logBetween(rand: () => number, min: number, max: number) {
	const lo = Math.log(min);
	const hi = Math.log(max);
	return Math.round(Math.exp(lo + rand() * (hi - lo)));
}

function int(rand: () => number, min: number, max: number) {
	return min + Math.floor(rand() * (max - min + 1));
}

// ----- Formatierung ------------------------------------------------------

// 312847 → "312’847"
export function formatFull(n: number) {
	return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "’");
}

// 842 → "842", 48200 → "48,2 Tsd.", 1100000 → "1,1 Mio."
export function formatCompact(n: number) {
	const short = (v: number) =>
		(v < 100 ? v.toFixed(1) : v.toFixed(0)).replace(".", ",").replace(",0", "");
	if (n < 1000) return String(n);
	if (n < 1_000_000) return `${short(n / 1000)} Tsd.`;
	return `${short(n / 1_000_000)} Mio.`;
}

function ago(value: number, singular: string, plural: string) {
	return `vor ${value} ${value === 1 ? singular : plural}`;
}

// ----- Werte -------------------------------------------------------------

// Aufrufe eines Vorschlag-Videos
export function fakeViews(seed: string) {
	return logBetween(seeded(`views:${seed}`), 3_000, 2_500_000);
}

// Upload-Alter, z.B. "vor 3 Wochen"
export function fakeUploadAgo(seed: string) {
	const rand = seeded(`upload:${seed}`);
	const unit = rand();
	if (unit < 0.15) return ago(int(rand, 2, 6), "Tag", "Tagen");
	if (unit < 0.35) return ago(int(rand, 1, 4), "Woche", "Wochen");
	if (unit < 0.75) return ago(int(rand, 1, 11), "Monat", "Monaten");
	return ago(int(rand, 1, 5), "Jahr", "Jahren");
}

// Alter eines Kommentars, eher frisch: "vor 5 Stunden", "vor 2 Tagen"
export function fakeCommentAgo(seed: string) {
	const rand = seeded(`comment-ago:${seed}`);
	if (rand() < 0.5) return ago(int(rand, 1, 23), "Stunde", "Stunden");
	return ago(int(rand, 1, 6), "Tag", "Tagen");
}

// Likes eines Kommentars; manchmal keine (dann leer)
export function fakeCommentLikes(seed: string) {
	const rand = seeded(`comment-likes:${seed}`);
	if (rand() < 0.15) return undefined;
	return logBetween(rand, 1, 4_000);
}

// Anzahl Kommentare passend zu den Aufrufen (ca. 0,4–1,2 %)
export function fakeCommentCount(views: number, seed: string) {
	const rand = seeded(`comment-count:${seed}`);
	return Math.round(views * (0.004 + rand() * 0.008));
}

const avatarColors = [
	"#805ad5",
	"#c53030",
	"#2b6cb0",
	"#b7791f",
	"#319795",
	"#2f855a",
	"#d53f8c",
	"#dd6b20",
];

// Avatarfarbe passend zum Namen
export function fakeAvatarColor(seed: string) {
	return avatarColors[
		Math.floor(seeded(`avatar:${seed}`)() * avatarColors.length)
	];
}
