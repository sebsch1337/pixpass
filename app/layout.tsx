import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import { cn } from "@/utils/cn";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import "./globals.css";

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
			<body className={cn("bg-sky-50 text-sky-950 min-h-dvh flex flex-col md:container", inter.className)}>
				<Header />
				<main className="flex-grow container mx-auto">{children}</main>
				<Footer />
				<Toaster richColors />
			</body>
		</html>
	);
}
