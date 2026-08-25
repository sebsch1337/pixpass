import { render, screen } from "@testing-library/react";
import TermsAndConditionsPage from "../page";

describe("TermsAndConditionsPage", () => {
	test("renders the Terms and Conditions page correctly", () => {
		render(<TermsAndConditionsPage />);

		const heading = screen.getByRole("heading", { name: "Terms of Service" });

		expect(heading).toBeInTheDocument();
		expect(screen.getByText("Arukido LLC")).toBeInTheDocument();
	});
});
