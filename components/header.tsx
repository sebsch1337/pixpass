import { Logo } from "./logo";
import { Navigation } from "./navigation";

export const Header = () => {
	return (
		<header className="w-full py-8 px-8 md:px-16 flex justify-between">
			<Logo />
			<Navigation />
		</header>
	);
};
