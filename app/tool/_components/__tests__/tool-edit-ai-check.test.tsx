import { toast } from "sonner";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { ToolEditAiCheck } from "../tool-edit-ai-check";

import { checkBiometricalPicture } from "@/actions/aiAction";

import { useCrop } from "@/hooks/useCrop";
import { useAi } from "@/hooks/useAi";

jest.mock("@/hooks/useCrop");
jest.mock("@/hooks/useAi");
jest.mock("@/actions/aiAction");
jest.mock("sonner", () => ({
	toast: {
		error: jest.fn(),
	},
}));

const mockedUseCrop = useCrop as jest.MockedFunction<typeof useCrop>;
const mockedUseAi = useAi as jest.MockedFunction<typeof useAi>;
const mockedCheckBiometricalPicture = checkBiometricalPicture as jest.MockedFunction<typeof checkBiometricalPicture>;
const mockedToastError = toast.error as jest.MockedFunction<typeof toast.error>;

describe("ToolEditAiCheck", () => {
	beforeEach(() => {
		mockedUseCrop.mockReturnValue({ croppedPictureBase64: "mockedBase64" });
		mockedUseAi.mockReturnValue({
			message: "",
			setMessage: jest.fn(),
			setApproved: jest.fn(),
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("renders correctly", () => {
		render(<ToolEditAiCheck />);

		expect(screen.getByText("AI Check 🔒")).toBeInTheDocument();
		expect(
			screen.getByText(
				"This premium feature utilizes artificial intelligence to verify the biometric accuracy of your cropped image."
			)
		).toBeInTheDocument();
		expect(screen.getByText("While the AI provides helpful tips, it cannot ensure 100% accuracy.")).toBeInTheDocument();
	});

	it("shows loading spinner when loading is true", () => {
		render(<ToolEditAiCheck />);
		fireEvent.click(screen.getByText("Check Biometrics"));

		expect(screen.getByText("AI Check 🔒")).toBeInTheDocument();
	});

	it("calls checkBiometricalPicture and updates state on successful submission", async () => {
		const setMessage = jest.fn();
		const setApproved = jest.fn();
		mockedUseAi.mockReturnValue({ message: "", setMessage, setApproved });
		mockedCheckBiometricalPicture.mockResolvedValue({ message: "mockedMessage", approved: true });

		render(<ToolEditAiCheck />);
		fireEvent.click(screen.getByText("Check Biometrics"));

		await waitFor(() => {
			fireEvent.change(screen.getByPlaceholderText("Access Code"), { target: { value: "mockedCode" } });
			fireEvent.submit(screen.getByText("Check code"));
		});

		await waitFor(() => {
			expect(setMessage).toHaveBeenCalledWith("mockedMessage");
			expect(setApproved).toHaveBeenCalledWith(true);
		});
	});

	it("shows error toast on submission failure", async () => {
		mockedCheckBiometricalPicture.mockRejectedValue(new Error("mockedError"));

		render(<ToolEditAiCheck />);
		fireEvent.click(screen.getByText("Check Biometrics"));

		await waitFor(() => {
			fireEvent.change(screen.getByPlaceholderText("Access Code"), { target: { value: "mockedCode" } });
			fireEvent.submit(screen.getByText("Check code"));
		});

		await waitFor(() => {
			expect(mockedToastError).toHaveBeenCalledWith("mockedError");
		});
	});
});
