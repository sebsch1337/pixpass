import { Montserrat } from "next/font/google";

import { cn } from "@/utils/cn";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });

export const Logo = () => {
	return (
		<Link
			href="/"
			className={cn(montserrat.className, "font-semibold text-2xl text-sky-950")}
		>
			🤳 PixPass
		</Link>
	);
};
