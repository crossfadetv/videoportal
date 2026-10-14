"use client";

import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useFilm } from "../FilmContext";

// Leere 16:9-Fläche. Das eigentliche Video wird im Schnitt eingesetzt.
// Bewusst eckig (keine runden Ecken), und die Höhe wird auf ganze
// Bildschirmpixel gerundet – so hat die Fläche scharfe Kanten und das
// Video lässt sich exakt einpassen.
export function VideoPlaceholder() {
	const { placeholderLabel, placeholderColor } = useFilm();
	const label = placeholderLabel ?? "Videocontainer";
	const ref = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState<number>();

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const update = () => {
			// Breite auf dem Bildschirm (inkl. contentZoom) → Faktor zu CSS-Pixeln
			const screenWidth = el.getBoundingClientRect().width;
			const zoom = screenWidth / el.offsetWidth || 1;
			setHeight(Math.round((screenWidth * 9) / 16) / zoom);
		};
		update();
		const observer = new ResizeObserver(update);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	return (
		<Flex
			ref={ref}
			w="full"
			aspectRatio={height ? undefined : "16 / 9"}
			style={height ? { height } : undefined}
			align="center"
			justify="center"
			bg={placeholderColor ?? "#000000"}
		>
			{label && (
				<Text color="whiteAlpha.500" fontSize="2xl" letterSpacing="wider">
					{label}
				</Text>
			)}
		</Flex>
	);
}
