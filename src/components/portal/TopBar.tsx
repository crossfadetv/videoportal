"use client";

import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import {
	LuBell,
	LuMenu,
	LuMic,
	LuPlay,
	LuSearch,
	LuVideo,
} from "react-icons/lu";
import { useFilm } from "../FilmContext";
import { Avatar } from "./Avatar";

export function TopBar() {
	const { appInfo, viewer } = useFilm();

	return (
		<Flex
			align="center"
			justify="space-between"
			px="6"
			h="14"
			position="sticky"
			top="0"
			zIndex="10"
			bg="#0f0f0f"
		>
			{/* Logo */}
			<HStack gap="5">
				<Icon as={LuMenu} boxSize="5" color="gray.200" />
				<HStack gap="2">
					{/* Eigenes Zeichen (Kreis), bewusst nicht wie bekannte Plattformen */}
					<Flex
						align="center"
						justify="center"
						w="7"
						h="7"
						rounded="full"
						bg={appInfo.accentColor}
					>
						<Icon
							as={LuPlay}
							boxSize="3"
							color="white"
							fill="white"
							ml="0.5"
						/>
					</Flex>
					<Text
						fontSize="lg"
						fontWeight="bold"
						color="white"
						letterSpacing="-0.5px"
					>
						{appInfo.appName}
					</Text>
				</HStack>
			</HStack>

			{/* Suche – bewusst kein echtes Eingabefeld (Passwortmanager & Co.) */}
			<HStack gap="3" flex="1" maxW="640px" mx="8">
				<Flex
					flex="1"
					h="10"
					align="center"
					borderWidth="1px"
					borderColor="whiteAlpha.300"
					rounded="full"
					overflow="hidden"
				>
					<Text flex="1" px="4" color="gray.100" fontSize="md">
						{appInfo.searchQuery}
					</Text>
					<Flex
						align="center"
						justify="center"
						w="16"
						h="full"
						bg="whiteAlpha.100"
						borderLeftWidth="1px"
						borderColor="whiteAlpha.300"
					>
						<Icon as={LuSearch} boxSize="5" color="gray.200" />
					</Flex>
				</Flex>
				<Flex
					align="center"
					justify="center"
					w="10"
					h="10"
					rounded="full"
					bg="whiteAlpha.100"
				>
					<Icon as={LuMic} boxSize="5" color="gray.200" />
				</Flex>
			</HStack>

			{/* Rechts */}
			<HStack gap="5">
				<Icon as={LuVideo} boxSize="5" color="gray.200" />
				<Box position="relative">
					<Icon as={LuBell} boxSize="5" color="gray.200" />
					<Flex
						position="absolute"
						top="-1.5"
						right="-2"
						px="1"
						minW="4"
						h="4"
						align="center"
						justify="center"
						rounded="full"
						bg={appInfo.accentColor}
						color="white"
						fontSize="2xs"
						fontWeight="bold"
					>
						9+
					</Flex>
				</Box>
				<Avatar initial={viewer.initial} color={viewer.avatarColor} size="8" />
			</HStack>
		</Flex>
	);
}
