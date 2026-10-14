import { FilmProvider } from "@/components/FilmContext";
import { Portal } from "@/components/portal/Portal";
import { defaultFilmId, films } from "@/data/films";

export default async function Home(props: PageProps<"/">) {
	const { film } = await props.searchParams;
	const filmId = typeof film === "string" ? film : defaultFilmId;

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
							– {f.title}
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
