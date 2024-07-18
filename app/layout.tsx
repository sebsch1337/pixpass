import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/utils/cn";

import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "PixPass",
	description: "Simply print your passport photos in any size",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn("bg-sky-100 min-h-dvh flex flex-col", inter.className)}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
