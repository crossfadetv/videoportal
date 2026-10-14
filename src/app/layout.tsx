import { Provider } from "@/components/ui/provider";

export default function RootLayout(props: { children: React.ReactNode }) {
	const { children } = props;
	return (
		<html lang="de" suppressHydrationWarning>
			<body style={{ margin: 0, background: "#0f0f0f" }}>
				<Provider forcedTheme="dark">{children}</Provider>
			</body>
		</html>
	);
}
