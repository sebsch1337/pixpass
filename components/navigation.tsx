import Link from "next/link";

export const Navigation = () => {
	return (
		<nav className="text-lg font-semibold flex gap-10 items-center">
			<Link
				href="/start"
				className="hover:underline decoration-4 decoration-sky-600"
			>
				About
			</Link>
			<Link
				href="/login"
				className="hover:underline decoration-4 decoration-sky-600"
			>
				Login
			</Link>
		</nav>
	);
};
