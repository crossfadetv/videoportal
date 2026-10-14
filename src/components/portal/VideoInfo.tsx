"use client";

import { Box, Flex, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import {
	LuBadgeCheck,
	LuDownload,
	LuEllipsis,
	LuForward,
	LuThumbsDown,
	LuThumbsUp,
} from "react-icons/lu";
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
	const { video, channel, appInfo } = useFilm();

	return (
		<VStack align="stretch" gap="3" mt="3">
			<Text fontSize="xl" fontWeight="bold" color="white" lineHeight="1.3">
				{video.title}
			</Text>

			<Flex justify="space-between" align="center" wrap="wrap" gap="3">
				{/* Kanal */}
				<HStack gap="3">
					<Avatar initial={channel.initial} color={channel.avatarColor} />
					<VStack align="flex-start" gap="0">
						<HStack gap="1">
							<Text color="white" fontWeight="semibold">
								{channel.name}
							</Text>
							{channel.verified && (
								<Icon as={LuBadgeCheck} boxSize="3.5" color="gray.400" />
							)}
						</HStack>
						<Text color="gray.400" fontSize="xs">
							{channel.subscribers}
						</Text>
					</VStack>
					<Flex
						align="center"
						ml="3"
						px="4"
						h="9"
						rounded="full"
						bg={appInfo.accentColor}
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
							<Text>{video.likes}</Text>
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
					{video.views} Aufrufe · {video.uploadedAgo}
					{video.hashtags && (
						<Text as="span" color="blue.300" fontWeight="normal" ml="2">
							{video.hashtags.join(" ")}
						</Text>
					)}
				</Text>
				<Text mt="1" whiteSpace="pre-wrap" lineHeight="1.6">
					{video.description}
				</Text>
			</Box>
		</VStack>
	);
}
