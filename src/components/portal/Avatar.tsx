import { Flex } from "@chakra-ui/react";

// Runder Avatar mit Initiale – kein Bild nötig.
export function Avatar({
	initial,
	color,
	size = "10",
}: {
	initial: string;
	color?: string;
	size?: string;
}) {
	return (
		<Flex
			align="center"
			justify="center"
			w={size}
			h={size}
			rounded="full"
			bg={color ?? "gray.600"}
			color="white"
			fontWeight="semibold"
			fontSize="sm"
			flexShrink="0"
		>
			{initial}
		</Flex>
	);
}
