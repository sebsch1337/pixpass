import Link from "next/link";

export const Navigation = () => {
	return (
		<nav className="text-lg font-semibold flex gap-10 items-center">
			<Link
				href="https://www.scherbes.com/chat"
				target="_blank"
				className="hover:underline decoration-4 decoration-sky-600"
			>
				About
			</Link>
		</nav>
	);
};
