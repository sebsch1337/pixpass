import { render, screen } from "@testing-library/react";

import { PrintPicture } from "../print-picture";

jest.mock("@/app/(home)/_components/hero-picture", () => ({
	HeroPicture: ({ persona }: { persona: string }) => <div data-testid={`hero-picture-${persona}`}>{persona}</div>,
}));

describe("PrintPicture", () => {
	it("renders the PrintPicture with correct HeroPicture components", () => {
		render(<PrintPicture />);

		const childHeroPictures = screen.getAllByTestId("hero-picture-child");
		expect(childHeroPictures).toHaveLength(8);

		const manHeroPictures = screen.getAllByTestId("hero-picture-man");
		expect(manHeroPictures).toHaveLength(8);

		const womanHeroPictures = screen.getAllByTestId("hero-picture-woman");
		expect(womanHeroPictures).toHaveLength(8);
	});
});
