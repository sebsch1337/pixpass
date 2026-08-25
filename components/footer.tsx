import Link from "next/link";

export const Footer: React.FC = () => {
	return (
		<footer className="flex flex-col items-center justify-center gap-3 p-8 text-center">
			<p>Made with 🍣</p>
			<nav
				aria-label="Legal"
				className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-sky-800"
			>
				<Link
					href="/legal"
					className="hover:text-sky-950 hover:underline"
				>
					Legal Notice
				</Link>
				<span aria-hidden="true">·</span>
				<Link
					href="/privacy"
					className="hover:text-sky-950 hover:underline"
				>
					Privacy Policy
				</Link>
				<span aria-hidden="true">·</span>
				<Link
					href="/terms"
					className="hover:text-sky-950 hover:underline"
				>
					Terms of Service
				</Link>
			</nav>
		</footer>
	);
};
