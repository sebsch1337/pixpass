import { render, screen } from "@testing-library/react";
import { Footer } from "../footer";

jest.mock("next/link", () => ({
	__esModule: true,
	default: ({ children, href }: { children: React.ReactNode; href: string }) => <a href={href}>{children}</a>,
}));

describe("Footer", () => {
	test("renders the footer correctly", () => {
		render(<Footer />);

		const madeWithText = screen.getByText("Made with 🍣");
		const privacyPolicyLink = screen.getByText("Privacy Policy");
		const termsOfServiceLink = screen.getByText("Terms of Service");
		const separator = screen.getByText("-");

		expect(madeWithText).toBeInTheDocument();
		expect(privacyPolicyLink).toBeInTheDocument();
		expect(privacyPolicyLink.closest("a")).toHaveAttribute("href", "/privacy");
		expect(termsOfServiceLink).toBeInTheDocument();
		expect(termsOfServiceLink.closest("a")).toHaveAttribute("href", "/terms");
		expect(separator).toBeInTheDocument();
	});
});
