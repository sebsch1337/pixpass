import { render, screen } from "@testing-library/react";
import { HeroPicture } from "../hero-picture";

/* eslint-disable @next/next/no-img-element */
jest.mock("next/image", () => ({
	__esModule: true,
	default: ({ src, alt }: { src: string; alt: string }) => (
		<img
			src={src}
			alt={alt}
		/>
	),
}));

describe("HeroPicture", () => {
	test("renders the correct image based on persona prop", () => {
		const { rerender } = render(<HeroPicture persona="child" />);
		let image = screen.getByAltText("Biometrical picture of an anime woman");
		expect(image).toHaveAttribute("src", "/hero-child-35.webp");

		rerender(<HeroPicture persona="man" />);
		image = screen.getByAltText("Biometrical picture of an anime woman");
		expect(image).toHaveAttribute("src", "/hero-man-35.webp");

		rerender(<HeroPicture persona="woman" />);
		image = screen.getByAltText("Biometrical picture of an anime woman");
		expect(image).toHaveAttribute("src", "/hero-woman-35.webp");
	});
});
