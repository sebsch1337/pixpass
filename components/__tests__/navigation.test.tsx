import { render, screen } from "@testing-library/react";

import { Navigation } from "../navigation";

jest.mock("next/link", () => ({
	__esModule: true,
	default: ({
		children,
		href,
		target,
		className,
	}: {
		children: React.ReactNode;
		href: string;
		target: string;
		className: string;
	}) => (
		<a
			href={href}
			target={target}
			className={className}
		>
			{children}
		</a>
	),
}));

describe("Navigation", () => {
	it("renders the navigation with the About link", () => {
		render(<Navigation />);

		const aboutLink = screen.getByText(/about/i);

		expect(aboutLink).toBeInTheDocument();
		expect(aboutLink).toHaveAttribute("href", "https://www.scherbes.com/chat");
		expect(aboutLink).toHaveAttribute("target", "_blank");
		expect(aboutLink).toHaveClass("hover:underline decoration-4 decoration-sky-600");
	});
});
