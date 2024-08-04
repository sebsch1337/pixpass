import { render, screen } from "@testing-library/react";
import PrivacyPage from "../page";

describe("PrivacyPage", () => {
	test("renders the Privacy page correctly", () => {
		render(<PrivacyPage />);

		const heading = screen.getByText("Privacy Policy");

		expect(heading).toBeInTheDocument();
	});
});
