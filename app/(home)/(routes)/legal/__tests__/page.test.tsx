import { render, screen } from "@testing-library/react";

import LegalNoticePage from "../page";

describe("LegalNoticePage", () => {
	test("renders operator and contact information", () => {
		render(<LegalNoticePage />);

		expect(screen.getByRole("heading", { name: "Legal Notice" })).toBeInTheDocument();
		expect(screen.getByText("Arukido LLC")).toBeInTheDocument();
		expect(screen.getByRole("link", { name: "pixpass@arukido.com" })).toHaveAttribute(
			"href",
			"mailto:pixpass@arukido.com"
		);
	});
});
