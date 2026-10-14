"use client";

import { Box, Flex } from "@chakra-ui/react";
import { backgrounds } from "@/data/backgrounds";
import { useFilm } from "../FilmContext";
import { Comments } from "./Comments";
import { Recommendations } from "./Recommendations";
import { TopBar } from "./TopBar";
import { VideoInfo } from "./VideoInfo";
import { VideoPlaceholder } from "./VideoPlaceholder";

// Vergrößert die ganze Seite gleichmäßig – wirkt im Film besser.
const contentZoom = 1.25;

export function Portal() {
	const { background } = useFilm();

	return (
		<Box
			minH="100vh"
			bg="#0f0f0f"
			style={{ ...backgrounds[background ?? "plain"], zoom: contentZoom }}
		>
			<TopBar />
			<Flex gap="6" px="6" pt="4" pb="10" maxW="1800px" mx="auto">
				<Box flex="1" minW="0">
					<VideoPlaceholder />
					<VideoInfo />
					<Comments />
				</Box>
				<Box w="400px" flexShrink="0">
					<Recommendations />
				</Box>
			</Flex>
		</Box>
	);
}
