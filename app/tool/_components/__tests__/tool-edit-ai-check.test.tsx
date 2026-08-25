import { ToolEditAiCheck } from "../tool-edit-ai-check";

import { render, screen } from "@testing-library/react";

describe("ToolEditAiCheck", () => {
	it("renders correctly", () => {
		render(<ToolEditAiCheck />);
		expect(screen.getByText("AI Check")).toBeInTheDocument();
		expect(screen.getByText("Currently unavailable")).toBeInTheDocument();
	});

	it("biometrics button is disabled", () => {
		render(<ToolEditAiCheck />);
		const button = screen.getByRole("button", { name: /currently unavailable/i });
		expect(button).toBeDisabled();
	});
});
