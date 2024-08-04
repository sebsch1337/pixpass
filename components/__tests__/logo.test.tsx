import { render, screen } from "@testing-library/react";

import { Logo } from "../logo";

jest.mock("next/font/google", () => ({
	Montserrat: jest.fn(() => ({ className: "mocked-montserrat-class" })),
}));

jest.mock("next/link", () => ({
	__esModule: true,
	default: ({ children, href, className }: { children: React.ReactNode; href: string; className: string }) => (
		<a
			href={href}
			className={className}
		>
			{children}
		</a>
	),
}));

jest.mock("@/utils/cn", () => ({
	cn: jest.fn((...classes: string[]) => classes.join(" ")),
}));

describe("Logo", () => {
	it("renders the Logo with the correct link and class names", () => {
		render(<Logo />);

		const logoLink = screen.getByText(/.*PixPass.*/i);

		expect(logoLink).toBeInTheDocument();
		expect(logoLink).toHaveAttribute("href", "/");
		expect(logoLink).toHaveClass("mocked-montserrat-class font-semibold text-2xl text-sky-950");
	});
});
