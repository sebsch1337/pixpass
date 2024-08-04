import { render, screen, fireEvent } from "@testing-library/react";
import { ToolNavigation } from "../tool-navigation";
import { usePicture } from "@/hooks/usePicture";
import { useProgress } from "@/hooks/useProgress";
import { useWindowScroll } from "@mantine/hooks";

jest.mock("@/hooks/usePicture");
jest.mock("@/hooks/useProgress");
jest.mock("@mantine/hooks", () => ({
	useWindowScroll: jest.fn(),
}));

describe("ToolNavigation", () => {
	const mockUsePicture = usePicture as jest.MockedFunction<typeof usePicture>;
	const mockUseProgress = useProgress as jest.MockedFunction<typeof useProgress>;
	const mockUseWindowScroll = useWindowScroll as jest.MockedFunction<typeof useWindowScroll>;

	beforeEach(() => {
		mockUsePicture.mockReturnValue({
			picture: "mockPicture",
			printPicture: "mockPrintPicture",
		});
		mockUseProgress.mockReturnValue({
			progress: "upload",
			setProgress: jest.fn(),
		});
		mockUseWindowScroll.mockReturnValue([{ x: 0, y: 0 }, jest.fn()]);
	});

	it("renders correctly", () => {
		render(<ToolNavigation />);
		expect(screen.getByText("Next >")).toBeInTheDocument();
	});

	it("navigates to edit page when Next is clicked on upload page", () => {
		const setProgressMock = jest.fn();
		const scrollToMock = jest.fn();

		mockUseProgress.mockReturnValueOnce({
			progress: "upload",
			setProgress: setProgressMock,
		});
		mockUseWindowScroll.mockReturnValueOnce([{ x: 0, y: 0 }, scrollToMock]);

		render(<ToolNavigation />);

		const nextButton = screen.getByText("Next >");
		fireEvent.click(nextButton);

		expect(setProgressMock).toHaveBeenCalledWith("edit");
		expect(scrollToMock).toHaveBeenCalledWith({ y: 0 });
	});

	it("navigates back to upload page when Back is clicked on edit page", () => {
		const setProgressMock = jest.fn();
		const scrollToMock = jest.fn();

		mockUseProgress.mockReturnValueOnce({
			progress: "edit",
			setProgress: setProgressMock,
		});
		mockUseWindowScroll.mockReturnValueOnce([{ x: 0, y: 0 }, scrollToMock]);

		render(<ToolNavigation />);

		const backButton = screen.getByText("< Back");
		fireEvent.click(backButton);

		expect(setProgressMock).toHaveBeenCalledWith("upload");
		expect(scrollToMock).toHaveBeenCalledWith({ y: 0 });
	});

	it("navigates to download page when Next is clicked on edit page", () => {
		const setProgressMock = jest.fn();
		const scrollToMock = jest.fn();

		mockUseProgress.mockReturnValueOnce({
			progress: "edit",
			setProgress: setProgressMock,
		});
		mockUseWindowScroll.mockReturnValueOnce([{ x: 0, y: 0 }, scrollToMock]);

		render(<ToolNavigation />);

		const nextButton = screen.getByText("Next >");
		fireEvent.click(nextButton);

		expect(setProgressMock).toHaveBeenCalledWith("download");
		expect(scrollToMock).toHaveBeenCalledWith({ y: 0 });
	});

	it("displays Finish button on download page", () => {
		mockUseProgress.mockReturnValueOnce({
			progress: "download",
			setProgress: jest.fn(),
		});

		render(<ToolNavigation />);

		expect(screen.getByRole("button", { name: "Finish" })).toBeInTheDocument();
	});
});
