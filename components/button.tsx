import { cn } from "@/utils/cn";

const variants = {
	flat: "bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white disabled:bg-sky-100 disabled:text-sky-400",
	outline: "bg-white text-sky-600 border-sky-600",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant: "flat" | "outline";
}

export const Button = ({ variant, children, ...props }: ButtonProps) => {
	return (
		<button
			className={cn(variants[variant], "w-full rounded-full font-semibold py-4 px-10 uppercase")}
			{...props}
		>
			{children}
		</button>
	);
};
