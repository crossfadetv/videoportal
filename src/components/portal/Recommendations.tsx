"use client";

import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import type { VideoRecommendation } from "@/data/films/types";
import { fakeUploadAgo, fakeViews, formatCompact } from "@/lib/fake";
import { useFilm } from "../FilmContext";

// Dunkle Farbverläufe als Thumbnail-Ersatz, wenn kein Bild angegeben ist.
const fallbackGradients = [
	"linear-gradient(135deg, #1e3a2f, #0b1a14)",
	"linear-gradient(135deg, #3a1e2a, #1a0b12)",
	"linear-gradient(135deg, #1e2a3a, #0b121a)",
	"linear-gradient(135deg, #3a321e, #1a160b)",
	"linear-gradient(135deg, #2a1e3a, #120b1a)",
];

function Thumbnail({
	rec,
	index,
}: {
	rec: VideoRecommendation;
	index: number;
}) {
	return (
		<Box
			position="relative"
			w="44"
			flexShrink="0"
			aspectRatio="16 / 9"
			rounded="lg"
			overflow="hidden"
			style={{
				background: fallbackGradients[index % fallbackGradients.length],
			}}
		>
			{rec.recImg && (
				<Image src={rec.recImg} alt="" w="full" h="full" objectFit="cover" />
			)}
			<Box
				position="absolute"
				right="1"
				bottom="1"
				px="1"
				rounded="sm"
				bg="blackAlpha.800"
				color="white"
				fontSize="2xs"
				fontWeight="semibold"
			>
				{rec.recLength}
			</Box>
		</Box>
	);
}

export function Recommendations() {
	const { videoRecommendations } = useFilm();

	return (
		<VStack align="stretch" gap="3">
			{videoRecommendations.map((rec, i) => (
				<HStack key={rec.recFilmTitle} align="flex-start" gap="2">
					<Thumbnail rec={rec} index={i} />
					<VStack align="flex-start" gap="1" minW="0">
						<Text
							color="white"
							fontSize="sm"
							fontWeight="semibold"
							lineHeight="1.3"
							lineClamp="2"
						>
							{rec.recFilmTitle}
						</Text>
						<Text color="gray.400" fontSize="xs">
							{rec.recChannel}
						</Text>
						<Text color="gray.400" fontSize="xs">
							{formatCompact(fakeViews(rec.recFilmTitle))} Aufrufe ·{" "}
							{fakeUploadAgo(rec.recFilmTitle)}
						</Text>
					</VStack>
				</HStack>
			))}
		</VStack>
	);
}
