import { Montserrat } from "next/font/google";

import { cn } from "@/utils/cn";

const montserrat = Montserrat({ subsets: ["latin"] });

export const Logo = () => {
	return (
		<div>
			<p className={cn(montserrat.className, "font-semibold text-2xl text-sky-950")}>🤳 PixPass</p>
		</div>
	);
};
