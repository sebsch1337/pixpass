import { Logo } from "./logo";

export const Header: React.FC = () => {
	return (
		<header className="flex w-full px-8 py-8">
			<Logo />
		</header>
	);
};
