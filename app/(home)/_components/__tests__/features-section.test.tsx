import { render, screen } from "@testing-library/react";

import { FeaturesSection } from "../features-section";

describe("FeaturesSection", () => {
	test("renders all feature items", () => {
		render(<FeaturesSection />);

		const noLoginHeading = screen.getByText("No Login");
		const noLoginText = screen.getByText("required");
		const aiCheckHeading = screen.getByText("AI Check");
		const aiCheckText = screen.getByText("for biometrics");
		const downloadHeading = screen.getByText("Download");
		const downloadText = screen.getByText("JPG and PDF");

		expect(noLoginHeading).toBeInTheDocument();
		expect(noLoginText).toBeInTheDocument();
		expect(aiCheckHeading).toBeInTheDocument();
		expect(aiCheckText).toBeInTheDocument();
		expect(downloadHeading).toBeInTheDocument();
		expect(downloadText).toBeInTheDocument();
	});
});
