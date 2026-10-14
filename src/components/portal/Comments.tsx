"use client";

import { Button, HStack, Icon, Text, Textarea, VStack } from "@chakra-ui/react";
import { type KeyboardEvent, useState } from "react";
import {
	LuArrowDownWideNarrow,
	LuThumbsDown,
	LuThumbsUp,
} from "react-icons/lu";
import { defaultAccentColor } from "@/data/films";
import {
	fakeCommentAgo,
	fakeCommentCount,
	fakeCommentLikes,
	formatCompact,
	formatFull,
} from "@/lib/fake";
import { useFilm } from "../FilmContext";
import { Avatar, handleOf } from "./Avatar";

type ShownComment = {
	channel: string;
	text: string;
	timeAgo: string;
	likes?: number;
};

function CommentRow({ comment }: { comment: ShownComment }) {
	return (
		<HStack align="flex-start" gap="4">
			<Avatar name={comment.channel} />
			<VStack align="flex-start" gap="1" flex="1">
				<HStack gap="2" fontSize="xs">
					<Text color="white" fontWeight="semibold">
						{handleOf(comment.channel)}
					</Text>
					<Text color="gray.400">{comment.timeAgo}</Text>
				</HStack>
				<Text
					color="gray.100"
					fontSize="sm"
					lineHeight="1.5"
					whiteSpace="pre-wrap"
				>
					{comment.text}
				</Text>
				<HStack gap="4" color="gray.300" fontSize="xs" mt="1">
					<HStack gap="1.5">
						<Icon as={LuThumbsUp} boxSize="4" />
						{comment.likes !== undefined && (
							<Text>{formatCompact(comment.likes)}</Text>
						)}
					</HStack>
					<Icon as={LuThumbsDown} boxSize="4" />
					<Text fontWeight="semibold">Antworten</Text>
				</HStack>
			</VStack>
		</HStack>
	);
}

// Eingabefeld: Klick öffnet die Buttons, Enter oder "Kommentieren" postet.
// Neue Kommentare erscheinen ganz oben und verschwinden bei F5 wieder.
function CommentInput({ onPost }: { onPost: (text: string) => void }) {
	const film = useFilm();
	const accentColor = film.accentColor ?? defaultAccentColor;
	const [value, setValue] = useState("");
	const [active, setActive] = useState(false);

	const post = () => {
		const text = value.trim();
		if (!text) return;
		onPost(text);
		setValue("");
		setActive(false);
	};

	const cancel = () => {
		setValue("");
		setActive(false);
	};

	const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			post();
		}
	};

	// Bewusst prominenter als die übrigen Kommentare: Hier tippt die Figur
	// im Film ihre Botschaft, das soll im Bild gut lesbar sein.
	const focusStyle = {
		borderColor: accentColor,
		boxShadow: `0 0 0 2px ${accentColor}`,
		bg: "whiteAlpha.100",
		outline: "none",
	};

	return (
		<HStack align="flex-start" gap="4">
			<Avatar name={film.username} size="12" />
			<VStack align="stretch" gap="3" flex="1">
				<Textarea
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onFocus={() => setActive(true)}
					onClick={() => setActive(true)}
					onKeyDown={onKeyDown}
					placeholder="Kommentieren …"
					rows={1}
					autoresize
					variant="outline"
					resize="none"
					minH="0"
					px="4"
					py="3"
					fontSize="lg"
					lineHeight="1.5"
					color="white"
					bg="whiteAlpha.50"
					borderWidth="1px"
					borderColor="whiteAlpha.400"
					rounded="xl"
					_placeholder={{ color: "gray.400" }}
					_focus={focusStyle}
					_focusVisible={focusStyle}
					// Passwortmanager (z.B. Dashlane) sollen das Feld ignorieren.
					autoComplete="off"
					data-form-type="other"
					data-lpignore="true"
				/>
				{(active || value !== "") && (
					<HStack justify="flex-end" gap="2">
						<Button
							size="md"
							variant="ghost"
							rounded="full"
							color="gray.100"
							onClick={cancel}
						>
							Abbrechen
						</Button>
						<Button
							size="md"
							px="5"
							fontWeight="semibold"
							rounded="full"
							bg={value.trim() ? accentColor : "whiteAlpha.100"}
							color={value.trim() ? "white" : "gray.500"}
							onClick={post}
						>
							Kommentieren
						</Button>
					</HStack>
				)}
			</VStack>
		</HStack>
	);
}

export function Comments() {
	const film = useFilm();
	const [posted, setPosted] = useState<ShownComment[]>([]);

	// Kommentare aus der Film-Datei, ergänzt um stabile Zufallswerte.
	const scripted: ShownComment[] = film.comments.map((c) => ({
		...c,
		timeAgo: fakeCommentAgo(c.text),
		likes: fakeCommentLikes(c.text),
	}));
	const count =
		fakeCommentCount(film.viewsAmount, film.filmTitle) + posted.length;

	const addComment = (text: string) => {
		setPosted((prev) => [
			{ channel: film.username, text, timeAgo: "vor 0 Sekunden" },
			...prev,
		]);
	};

	return (
		<VStack align="stretch" gap="6" mt="6">
			<HStack gap="8">
				<Text fontSize="lg" fontWeight="bold" color="white">
					{formatFull(count)} Kommentare
				</Text>
				<HStack gap="2" color="gray.100" fontSize="sm" fontWeight="medium">
					<Icon as={LuArrowDownWideNarrow} boxSize="5" />
					<Text>Sortieren nach</Text>
				</HStack>
			</HStack>

			<CommentInput onPost={addComment} />

			{[...posted, ...scripted].map((c, i) => (
				<CommentRow key={`${i}-${c.channel}`} comment={c} />
			))}
		</VStack>
	);
}
