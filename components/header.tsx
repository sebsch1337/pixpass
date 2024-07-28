import { Logo } from "./logo";
import { Navigation } from "./navigation";

export const Header: React.FC = () => {
	return (
		<header className="w-full py-8 px-8 flex justify-between">
			<Logo />
			<Navigation />
		</header>
	);
};
