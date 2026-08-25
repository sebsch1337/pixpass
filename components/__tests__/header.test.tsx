import { render, screen } from "@testing-library/react";

import { Header } from "../header";

describe("Header", () => {
	it("renders the Header with the Logo", () => {
		render(<Header />);

		const logo = screen.getByText(/.*PixPass.*/i);

		expect(logo).toBeInTheDocument();
	});
});
