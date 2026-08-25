import { render, screen } from "@testing-library/react";
import PrivacyPage from "../page";

describe("PrivacyPage", () => {
	test("renders the Privacy page correctly", () => {
		render(<PrivacyPage />);

		const heading = screen.getByRole("heading", { name: "Privacy Policy" });

		expect(heading).toBeInTheDocument();
		expect(screen.getByText("The AI biometric-check feature is currently disabled.")).toBeInTheDocument();
		expect(screen.getByText("Arukido LLC")).toBeInTheDocument();
	});
});
