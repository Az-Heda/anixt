import type { Metadata } from "next";

import { Providers } from "@/app/providers";
import { WEBSITE_NAME } from "@/libs/consts";

import "./globals.css";

export const metadata: Metadata = {
	title: WEBSITE_NAME,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en" className="dark">
			<body>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	);
}
