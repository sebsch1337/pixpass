import { render, screen } from "@testing-library/react";

import { FeaturesSection } from "../features-section";

describe("FeaturesSection", () => {
	test("renders all feature items", () => {
		render(<FeaturesSection />);

		const noLoginHeading = screen.getByText("No Login");
		const noLoginText = screen.getByText("required");
		const localProcessingHeading = screen.getByText("Local Processing");
		const localProcessingText = screen.getByText("in your browser");
		const downloadHeading = screen.getByText("Download");
		const downloadText = screen.getByText("JPG and PDF");

		expect(noLoginHeading).toBeInTheDocument();
		expect(noLoginText).toBeInTheDocument();
		expect(localProcessingHeading).toBeInTheDocument();
		expect(localProcessingText).toBeInTheDocument();
		expect(downloadHeading).toBeInTheDocument();
		expect(downloadText).toBeInTheDocument();
	});
});
