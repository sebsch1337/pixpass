import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="p-8 flex flex-col items-center justify-center gap-2">
			<p>Made with 🍣</p>
			<div className="flex flex-row gap-2 text-xs">
				<Link href="/privacy">Privacy Policy</Link>
				{`-`}
				<Link href="/terms">Terms of Service</Link>
			</div>
		</footer>
	);
};
