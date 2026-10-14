"use client";

import { Box, Flex, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import {
	LuDownload,
	LuEllipsis,
	LuForward,
	LuThumbsDown,
	LuThumbsUp,
} from "react-icons/lu";
import { defaultAccentColor } from "@/data/films";
import { fakeUploadAgo, formatCompact, formatFull } from "@/lib/fake";
import { useFilm } from "../FilmContext";
import { Avatar } from "./Avatar";

function Pill({ children }: { children: React.ReactNode }) {
	return (
		<HStack
			gap="2"
			px="4"
			h="9"
			rounded="full"
			bg="whiteAlpha.100"
			color="gray.100"
			fontSize="sm"
			fontWeight="medium"
		>
			{children}
		</HStack>
	);
}

export function VideoInfo() {
	const film = useFilm();
	const uploadedAgo = film.uploadedAgo ?? fakeUploadAgo(film.filmTitle);

	return (
		<VStack align="stretch" gap="3" mt="3">
			<Text fontSize="xl" fontWeight="bold" color="white" lineHeight="1.3">
				{film.filmTitle}
			</Text>

			<Flex justify="space-between" align="center" wrap="wrap" gap="3">
				{/* Kanal */}
				<HStack gap="3">
					<Avatar name={film.channelName} />
					<VStack align="flex-start" gap="0">
						<Text color="white" fontWeight="semibold">
							{film.channelName}
						</Text>
						<Text color="gray.400" fontSize="xs">
							{formatCompact(film.followersAmount)} Abonnenten
						</Text>
					</VStack>
					<Flex
						align="center"
						ml="3"
						px="4"
						h="9"
						rounded="full"
						bg={film.accentColor ?? defaultAccentColor}
						color="white"
						fontSize="sm"
						fontWeight="semibold"
					>
						Abonnieren
					</Flex>
				</HStack>

				{/* Aktionen */}
				<HStack gap="2">
					<HStack
						gap="0"
						rounded="full"
						bg="whiteAlpha.100"
						color="gray.100"
						fontSize="sm"
						fontWeight="medium"
						h="9"
					>
						<HStack
							gap="2"
							px="4"
							borderRightWidth="1px"
							borderColor="whiteAlpha.300"
						>
							<Icon as={LuThumbsUp} boxSize="4" />
							<Text>{formatCompact(film.likesAmount)}</Text>
						</HStack>
						<Flex px="4">
							<Icon as={LuThumbsDown} boxSize="4" />
						</Flex>
					</HStack>
					<Pill>
						<Icon as={LuForward} boxSize="4" />
						<Text>Teilen</Text>
					</Pill>
					<Pill>
						<Icon as={LuDownload} boxSize="4" />
						<Text>Herunterladen</Text>
					</Pill>
					<Flex
						align="center"
						justify="center"
						w="9"
						h="9"
						rounded="full"
						bg="whiteAlpha.100"
						color="gray.100"
					>
						<Icon as={LuEllipsis} boxSize="4" />
					</Flex>
				</HStack>
			</Flex>

			{/* Beschreibung */}
			<Box
				bg="whiteAlpha.100"
				rounded="xl"
				p="3"
				fontSize="sm"
				color="gray.100"
			>
				<Text fontWeight="semibold">
					{formatFull(film.viewsAmount)} Aufrufe · {uploadedAgo}
					{film.hashTags && (
						<Text as="span" color="blue.300" fontWeight="normal" ml="2">
							{film.hashTags.join(" ")}
						</Text>
					)}
				</Text>
				<Text mt="1" whiteSpace="pre-wrap" lineHeight="1.6">
					{film.videoDescription}
				</Text>
			</Box>
		</VStack>
	);
}
