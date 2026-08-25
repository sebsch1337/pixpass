import { render, screen } from "@testing-library/react";
import { HeroSection } from "../hero-section";

/* eslint-disable @next/next/no-img-element */
jest.mock("next/link", () => ({
	__esModule: true,
	default: ({ children, href }: { children: React.ReactNode; href: string }) => <a href={href}>{children}</a>,
}));

jest.mock("@/components/print-picture", () => ({
	PrintPicture: () => <div data-testid="print-picture">Print Picture</div>,
}));

jest.mock("@/components/ui/button", () => ({
	Button: ({ children }: { children: React.ReactNode }) => <button>{children}</button>,
}));

describe("HeroSection", () => {
	test("renders the HeroSection correctly", () => {
		render(<HeroSection />);

		const heading = screen.getByText(/Simply print your/i);
		const description = screen.getByText(/Upload your picture/i);
		const startNowButton = screen.getByText(/Start now/i);
		const freeUsageText = screen.getByText(/Free to use — no payment required\./i);
		const printPictures = screen.getAllByTestId("print-picture");

		expect(heading).toBeInTheDocument();
		expect(description).toBeInTheDocument();
		expect(startNowButton).toBeInTheDocument();
		expect(freeUsageText).toBeInTheDocument();
		expect(printPictures).toHaveLength(2);
	});
});
