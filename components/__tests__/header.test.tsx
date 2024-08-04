import { render, screen } from "@testing-library/react";

import { Header } from "../header";

describe("Header", () => {
	it("renders the Header with Logo and Navigation", () => {
		render(<Header />);

		const logo = screen.getByText(/.*PixPass.*/i);
		const navigation = screen.getByText(/.*About.*/i);

		expect(logo).toBeInTheDocument();
		expect(navigation).toBeInTheDocument();
	});
});
