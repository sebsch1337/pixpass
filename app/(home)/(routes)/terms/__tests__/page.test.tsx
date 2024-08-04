import { render, screen } from "@testing-library/react";
import TermsAndConditionsPage from "../page";

describe("TermsAndConditionsPage", () => {
	test("renders the Terms and Conditions page correctly", () => {
		render(<TermsAndConditionsPage />);

		const heading = screen.getByText("Terms and Conditions for PixPass");

		expect(heading).toBeInTheDocument();
	});
});
