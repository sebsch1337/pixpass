import React from "react";

import { ToolEditAiCheck } from "../tool-edit-ai-check";

import { render, screen } from "@testing-library/react";

import { useAi } from "@/hooks/useAi";
import { useCrop } from "@/hooks/useCrop";

jest.mock("@/hooks/useAi", () => ({
	useAi: jest.fn(),
}));

jest.mock("@/hooks/useCrop", () => ({
	useCrop: jest.fn(),
}));

describe("ToolEditAiCheck", () => {
	beforeEach(() => {
		jest.clearAllMocks();
		(useAi as unknown as jest.Mock).mockReturnValue({
			message: "",
			setMessage: jest.fn(),
			setApproved: jest.fn(),
		});
		(useCrop as unknown as jest.Mock).mockReturnValue({
			croppedPictureBase64: "mockedBase64",
		});
	});

	it("renders correctly", () => {
		render(<ToolEditAiCheck />);
		expect(screen.getByText("AI Check 🔒")).toBeInTheDocument();
		expect(screen.getByText("Check Biometrics")).toBeInTheDocument();
	});

	it("biometrics button is enabled initially", () => {
		render(<ToolEditAiCheck />);
		const button = screen.getByText("Check Biometrics");
		expect(button).toBeEnabled();
	});
});
