"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useFilm } from "../FilmContext";

// Helle Fläche (z.B. Greenscreen) → schwarze Marker, dunkle → weiße.
function contrastColor(hex: string) {
	const m = hex
		.replace("#", "")
		.match(/^([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
	if (!m) return "#ffffff";
	const [r, g, b] = m.slice(1).map((v) => Number.parseInt(v, 16));
	const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
	return luminance > 140 ? "#000000" : "#ffffff";
}

// Tracking-Marker als Kreuz – für das Abfilmen des Bildschirms mit einer
// Kamera. Etwas von den Ecken nach innen versetzt, damit sie vollständig im
// Bild sind und später vom eingesetzten Video verdeckt werden.
function TrackingMarker({
	color,
	top,
	left,
}: {
	color: string;
	top: string;
	left: string;
}) {
	const arm = { position: "absolute", bg: color } as const;
	return (
		<Box
			position="absolute"
			top={top}
			left={left}
			w="28px"
			h="28px"
			transform="translate(-50%, -50%)"
			pointerEvents="none"
		>
			<Box {...arm} top="0" bottom="0" left="50%" w="4px" ml="-2px" />
			<Box {...arm} left="0" right="0" top="50%" h="4px" mt="-2px" />
		</Box>
	);
}

const markerInset = "12%";
const markerPositions = [
	{ top: markerInset, left: markerInset },
	{ top: markerInset, left: `calc(100% - ${markerInset})` },
	{ top: `calc(100% - ${markerInset})`, left: markerInset },
	{ top: `calc(100% - ${markerInset})`, left: `calc(100% - ${markerInset})` },
];

// Leere 16:9-Fläche. Das eigentliche Video wird im Schnitt eingesetzt.
// Bewusst eckig (keine runden Ecken), und die Höhe wird auf ganze
// Bildschirmpixel gerundet – so hat die Fläche scharfe Kanten und das
// Video lässt sich exakt einpassen.
export function VideoPlaceholder() {
	const { placeholderLabel, placeholderColor, trackingPoints } = useFilm();
	const label = placeholderLabel ?? "Videocontainer";
	const bg = placeholderColor ?? "#000000";
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
			position="relative"
			w="full"
			aspectRatio={height ? undefined : "16 / 9"}
			style={height ? { height } : undefined}
			align="center"
			justify="center"
			bg={bg}
		>
			{label && (
				<Text color="whiteAlpha.500" fontSize="2xl" letterSpacing="wider">
					{label}
				</Text>
			)}
			{trackingPoints &&
				markerPositions.map((pos) => (
					<TrackingMarker
						key={`${pos.top}-${pos.left}`}
						color={contrastColor(bg)}
						{...pos}
					/>
				))}
		</Flex>
	);
}
