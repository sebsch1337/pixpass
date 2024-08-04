import { render, screen } from "@testing-library/react";

import HomePage from "../page";

jest.mock("../_components/hero-section", () => ({
	HeroSection: () => <div data-testid="hero-section">Hero Section</div>,
}));

jest.mock("../_components/features-section", () => ({
	FeaturesSection: () => <div data-testid="features-section">Features Section</div>,
}));

describe("HomePage", () => {
	test("renders HeroSection and FeaturesSection", () => {
		render(<HomePage />);

		const heroSection = screen.getByTestId("hero-section");
		const featuresSection = screen.getByTestId("features-section");

		expect(heroSection).toBeInTheDocument();
		expect(featuresSection).toBeInTheDocument();
	});
});
