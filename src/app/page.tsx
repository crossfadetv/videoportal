import type { Metadata } from "next";
import { FilmProvider } from "@/components/FilmContext";
import { Portal } from "@/components/portal/Portal";
import { defaultAccentColor, defaultFilmId, films } from "@/data/films";

async function readFilmId(props: PageProps<"/">) {
	const { film } = await props.searchParams;
	return typeof film === "string" ? film : defaultFilmId;
}

// Standard-Tab-Icon: Kreis mit Play-Symbol in der Akzentfarbe (wie das Logo).
function defaultIcon(color: string) {
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="${color}"/><path d="M13 10l10 6-10 6z" fill="white"/></svg>`;
	return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

// Browser-Tab: "<Videotitel> - <Portalname>" und Logo als Icon.
export async function generateMetadata(
	props: PageProps<"/">,
): Promise<Metadata> {
	const film = films[await readFilmId(props)];
	if (!film) return { title: "Unbekannter Film" };
	const { portalName, portalLogo, accentColor, filmTitle } = film;
	return {
		title: portalName ? `${filmTitle} - ${portalName}` : filmTitle,
		icons: {
			icon: portalLogo ?? defaultIcon(accentColor ?? defaultAccentColor),
		},
	};
}

export default async function Home(props: PageProps<"/">) {
	const filmId = await readFilmId(props);

	if (!films[filmId]) {
		return (
			<div style={{ color: "#eee", fontFamily: "sans-serif", padding: 32 }}>
				<h1>Unbekannter Film: „{filmId}“</h1>
				<p>Verfügbare Filme:</p>
				<ul>
					{Object.entries(films).map(([id, f]) => (
						<li key={id}>
							<a href={`/?film=${id}`} style={{ color: "#8ab4f8" }}>
								{id}
							</a>{" "}
							– {f.production}
						</li>
					))}
				</ul>
			</div>
		);
	}

	return (
		<FilmProvider filmId={filmId}>
			<Portal />
		</FilmProvider>
	);
}
