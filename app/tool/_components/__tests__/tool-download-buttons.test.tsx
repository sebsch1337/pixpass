import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { ToolDownloadButtons } from "../tool-download-buttons";

import { useCrop } from "@/hooks/useCrop";
import { useFormats } from "@/hooks/useFormats";

import { downloadPDF } from "@/utils/pdfUtils";

jest.mock("@/hooks/useCrop");
jest.mock("@/hooks/useFormats");

jest.mock("@/utils/pdfUtils");
jest.mock("@/utils/pictureGenUtils", () => ({
	downloadJPG: jest.fn(),
}));

const mockedUseCrop = useCrop as jest.MockedFunction<typeof useCrop>;
const mockedUseFormats = useFormats as jest.MockedFunction<typeof useFormats>;
const mockedDownloadPDF = downloadPDF as jest.MockedFunction<typeof downloadPDF>;

const mockedDownloadJPG = require("@/utils/pictureGenUtils").downloadJPG as jest.Mock;

describe("ToolDownloadButtons", () => {
	beforeEach(() => {
		mockedUseCrop.mockReturnValue({ croppedPicture: "mockedCroppedPicture" });
		mockedUseFormats.mockReturnValue({ pictureFormat: "mockedPictureFormat", printFormat: "mockedPrintFormat" });
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("renders correctly", async () => {
		await waitFor(() => {
			render(<ToolDownloadButtons />);
		});

		expect(screen.getByText("Download")).toBeInTheDocument();
		expect(screen.getByText("Download as JPG")).toBeInTheDocument();
		expect(screen.getByText("Download as PDF")).toBeInTheDocument();
		expect(screen.getByText("Download JPG")).toBeInTheDocument();
		expect(screen.getByText("Download PDF")).toBeInTheDocument();
	});

	it("calls downloadJPG when the Download JPG button is clicked", async () => {
		await waitFor(() => {
			render(<ToolDownloadButtons />);
		});

		fireEvent.click(screen.getByText("Download JPG"));

		expect(mockedDownloadJPG).toHaveBeenCalledWith("mockedCroppedPicture", "mockedPictureFormat", "mockedPrintFormat");
	});

	it("calls downloadPDF when the Download PDF button is clicked", async () => {
		await waitFor(() => {
			render(<ToolDownloadButtons />);
		});

		fireEvent.click(screen.getByText("Download PDF"));

		expect(mockedDownloadPDF).toHaveBeenCalledWith("mockedCroppedPicture", "mockedPictureFormat", "mockedPrintFormat");
	});

	it("does not call downloadJPG if dependencies are missing", async () => {
		mockedUseCrop.mockReturnValue({ croppedPicture: null });
		await waitFor(() => {
			render(<ToolDownloadButtons />);
		});

		fireEvent.click(screen.getByText("Download JPG"));

		expect(mockedDownloadJPG).not.toHaveBeenCalled();
	});

	it("does not call downloadPDF if dependencies are missing", async () => {
		mockedUseCrop.mockReturnValue({ croppedPicture: null });
		await waitFor(() => {
			render(<ToolDownloadButtons />);
		});

		fireEvent.click(screen.getByText("Download PDF"));

		expect(mockedDownloadPDF).not.toHaveBeenCalled();
	});
});
