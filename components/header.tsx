import { Logo } from "./logo";

export const Header = () => {
	return (
		<header className="w-full p-8 flex justify-between">
			<Logo />
			<p>Menu</p>
		</header>
	);
};
