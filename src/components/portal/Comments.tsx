"use client";

import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import {
	LuArrowDownWideNarrow,
	LuThumbsDown,
	LuThumbsUp,
} from "react-icons/lu";
import { useFilm } from "../FilmContext";
import { Avatar } from "./Avatar";

export function Comments() {
	const { comments, commentCount, viewer } = useFilm();

	return (
		<VStack align="stretch" gap="6" mt="6">
			<HStack gap="8">
				<Text fontSize="lg" fontWeight="bold" color="white">
					{commentCount}
				</Text>
				<HStack gap="2" color="gray.100" fontSize="sm" fontWeight="medium">
					<Icon as={LuArrowDownWideNarrow} boxSize="5" />
					<Text>Sortieren nach</Text>
				</HStack>
			</HStack>

			{/* Kommentarfeld – nur Optik */}
			<HStack gap="4">
				<Avatar initial={viewer.initial} color={viewer.avatarColor} />
				<Box
					flex="1"
					pb="1"
					borderBottomWidth="1px"
					borderColor="whiteAlpha.300"
					color="gray.400"
					fontSize="sm"
				>
					Kommentieren …
				</Box>
			</HStack>

			{comments.map((c) => (
				<HStack key={c.author + c.text} align="flex-start" gap="4">
					<Avatar
						initial={c.author.replace("@", "")[0]?.toUpperCase() ?? "?"}
						color={c.avatarColor}
					/>
					<VStack align="flex-start" gap="1" flex="1">
						<HStack gap="2" fontSize="xs">
							<Text color="white" fontWeight="semibold">
								{c.author}
							</Text>
							<Text color="gray.400">{c.timeAgo}</Text>
						</HStack>
						<Text color="gray.100" fontSize="sm" lineHeight="1.5">
							{c.text}
						</Text>
						<HStack gap="4" color="gray.300" fontSize="xs" mt="1">
							<HStack gap="1.5">
								<Icon as={LuThumbsUp} boxSize="4" />
								{c.likes && <Text>{c.likes}</Text>}
							</HStack>
							<Icon as={LuThumbsDown} boxSize="4" />
							<Text fontWeight="semibold">Antworten</Text>
						</HStack>
					</VStack>
				</HStack>
			))}
		</VStack>
	);
}
