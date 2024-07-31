import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import { cn } from "@/utils/cn";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const domainUrl = process?.env?.DOMAIN_URL || process?.env?.VERCEL_URL || "";

export const metadata: Metadata = {
	title: "PixPass",
	description: "Simply print your passport photos in any size.",
	metadataBase: new URL("https://" + domainUrl),
	openGraph: {
		title: "PixPass",
		type: "website",
		description: "Simply print your passport photos in any size.",
		siteName: "PixPass",
		locale: "en_US",
		images: [
			{
				url: "/og.png",
				width: 1200,
				height: 630,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		images: "/og.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn("bg-sky-50 text-sky-950", inter.className)}>
				<div className=" min-h-dvh flex flex-col justify-center items-center md:container">
					<Header />
					<main className="flex-grow container mx-auto">{children}</main>
					<Footer />
					<Toaster richColors />
				</div>
			</body>
		</html>
	);
}
