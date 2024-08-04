import { render, screen } from "@testing-library/react";

import { Button } from "../button";

jest.mock("@/utils/cn", () => ({
	cn: jest.fn((...classes: string[]) => classes.join(" ")),
}));

describe("Button", () => {
	it("renders with the default flat variant", () => {
		render(<Button>Click me</Button>);

		const button = screen.getByText("Click me");
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass(
			"bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-sky-50 disabled:bg-sky-100 disabled:text-sky-400 border-transparent"
		);
	});

	it("renders with the ai variant", () => {
		render(<Button variant="ai">Click me</Button>);

		const button = screen.getByText("Click me");
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass(
			"bg-gradient-to-b from-sky-600 to-sky-400 active:bg-sky-700 text-sky-50 disabled:bg-sky-100 disabled:text-sky-400 border-none h-12 w-auto text-lg"
		);
	});

	it("renders with the outline variant", () => {
		render(<Button variant="outline">Click me</Button>);

		const button = screen.getByText("Click me");
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass(
			"bg-transparent text-sky-600 hover:text-sky-700 active:text-sky-800 disabled:text-sky-200 border-sky-600 hover:border-sky-700 active:border-sky-800 disabled:border-sky-200"
		);
	});

	it("renders with hero prop", () => {
		render(<Button hero>Click me</Button>);

		const button = screen.getByText("Click me");
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass("py-4");
	});

	it("renders without hero prop", () => {
		render(<Button>Click me</Button>);

		const button = screen.getByText("Click me");
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass("py-2");
	});
});
