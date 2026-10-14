import { Flex } from "@chakra-ui/react";
import { fakeAvatarColor } from "@/lib/fake";

// "Ben" → "@ben", "lena_s" → "@lena_s"
export function handleOf(name: string) {
	const clean = name.replace(/^@/, "").replace(/\s+/g, "").toLowerCase();
	return `@${clean}`;
}

// Runder Avatar mit Initiale und zum Namen passender Farbe – kein Bild nötig.
export function Avatar({ name, size = "10" }: { name: string; size?: string }) {
	const initial = name.replace(/^@/, "")[0]?.toUpperCase() ?? "?";
	return (
		<Flex
			align="center"
			justify="center"
			w={size}
			h={size}
			rounded="full"
			bg={fakeAvatarColor(handleOf(name))}
			color="white"
			fontWeight="semibold"
			fontSize="sm"
			flexShrink="0"
		>
			{initial}
		</Flex>
	);
}
