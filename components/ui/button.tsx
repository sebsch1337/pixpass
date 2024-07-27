import { cn } from "@/utils/cn";

const variants = {
	ai: "bg-gradient-to-b from-sky-600 to-sky-400 active:bg-sky-700 text-sky-50 disabled:bg-sky-100 disabled:text-sky-400 border-none h-12 w-auto text-lg",
	flat: "bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-sky-50 disabled:bg-sky-100 disabled:text-sky-400 border-transparent ",
	outline:
		"bg-transparent text-sky-600 hover:text-sky-700 active:text-sky-800 disabled:text-sky-200 border-sky-600 hover:border-sky-700 active:border-sky-800 disabled:border-sky-200",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "ai" | "flat" | "outline";
	hero?: boolean;
}

export const Button = ({ variant = "flat", hero = false, children, className, ...props }: ButtonProps) => {
	return (
		<button
			className={cn(
				variants[variant],
				hero ? "py-4" : "py-2",
				"w-full rounded-full border-2 font-semibold px-10 uppercase flex justify-center items-center",
				className
			)}
			{...props}
		>
			{children}
		</button>
	);
};
