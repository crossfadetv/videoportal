"use client";

import { Flex, Text } from "@chakra-ui/react";
import { useFilm } from "../FilmContext";

// Leere 16:9-Fläche. Das eigentliche Video wird im Schnitt eingesetzt.
export function VideoPlaceholder() {
	const { video } = useFilm();
	const label = video.placeholderLabel ?? "Videocontainer";

	return (
		<Flex
			w="full"
			aspectRatio="16 / 9"
			align="center"
			justify="center"
			rounded="xl"
			overflow="hidden"
			bg={video.placeholderColor ?? "#000000"}
		>
			{label && (
				<Text color="whiteAlpha.500" fontSize="2xl" letterSpacing="wider">
					{label}
				</Text>
			)}
		</Flex>
	);
}
