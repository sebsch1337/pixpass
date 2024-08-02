import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { ToolUploadPicture } from "../tool-upload-picture";

import { useAi } from "@/hooks/useAi";
import { useCrop } from "@/hooks/useCrop";
import { usePicture } from "@/hooks/usePicture";

jest.mock("@/hooks/useAi");
jest.mock("@/hooks/useCrop");
jest.mock("@/hooks/usePicture");

describe("ToolUploadPicture", () => {
	const mockUseAi = useAi as jest.MockedFunction<typeof useAi>;
	const mockUseCrop = useCrop as jest.MockedFunction<typeof useCrop>;
	const mockUsePicture = usePicture as jest.MockedFunction<typeof usePicture>;

	beforeEach(() => {
		mockUseAi.mockReturnValue({
			setMessage: jest.fn(),
			setApproved: jest.fn(),
		});
		mockUseCrop.mockReturnValue({
			setCroppedPicture: jest.fn(),
			setCroppedArea: jest.fn(),
			setCroppedPosition: jest.fn(),
			setZoom: jest.fn(),
		});
		mockUsePicture.mockReturnValue({
			picture: "",
			setPicture: jest.fn(),
		});
	});

	it("renders correctly", () => {
		render(<ToolUploadPicture />);
		expect(screen.getByRole("heading", { name: /upload picture/i })).toBeInTheDocument();
		expect(screen.getByRole("button", { name: /upload picture/i })).toBeInTheDocument();
	});

	it("disables and re-enables the upload button based on state", async () => {
		render(<ToolUploadPicture />);

		// Initially, the button should not be disabled
		let button = screen.getByRole("button", { name: /upload picture/i });
		expect(button).not.toBeDisabled();

		// Simulate the button being disabled
		fireEvent.click(button);
		button = screen.getByRole("button", { name: /upload picture/i });
		expect(button).toBeDisabled();

		// Simulate re-enabling the button after timeout
		await waitFor(
			() => {
				expect(button).not.toBeDisabled();
			},
			{ timeout: 300 }
		);
	});
});
