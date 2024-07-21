import { cn } from "@/utils/cn";

const variants = {
	flat: "bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white disabled:bg-sky-100 disabled:text-sky-400",
	outline:
		"bg-transparent border-2 text-sky-600 hover:text-sky-700 active:text-sky-800 disabled:text-sky-200 border-sky-600 hover:border-sky-700 active:border-sky-800 disabled:border-sky-200",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "flat" | "outline";
	hero?: boolean;
}

export const Button = ({ variant = "flat", hero = false, children, ...props }: ButtonProps) => {
	return (
		<button
			className={cn(variants[variant], hero ? "py-4" : "py-2", "w-full rounded-full font-semibold px-10 uppercase")}
			{...props}
		>
			{children}
		</button>
	);
};
