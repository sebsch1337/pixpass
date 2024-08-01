import { render, screen } from "@testing-library/react";

import { ToolDownloadPreview } from "../tool-download-preview";

import { usePicture } from "@/hooks/usePicture";
import { useFormats } from "@/hooks/useFormats";

jest.mock("@/hooks/usePicture");
jest.mock("@/hooks/useFormats");

const mockedUsePicture = usePicture as jest.MockedFunction<typeof usePicture>;
const mockedUseFormats = useFormats as jest.MockedFunction<typeof useFormats>;

describe("ToolDownloadPreview", () => {
	beforeEach(() => {
		mockedUsePicture.mockReturnValue({ printPicture: "/mockedPrintPicture.jpg" });
		mockedUseFormats.mockReturnValue({ printFormat: { width: 200, height: 300 } });
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("renders correctly when printPicture is available", () => {
		render(<ToolDownloadPreview />);

		expect(screen.getByText("Preview")).toBeInTheDocument();
		expect(screen.getByAltText("Preview")).toBeInTheDocument();
	});

	it('renders "No image data available" when printPicture is not available', () => {
		mockedUsePicture.mockReturnValue({ printPicture: null });
		render(<ToolDownloadPreview />);

		expect(screen.getByText("No image data available")).toBeInTheDocument();
	});

	it("renders Image with correct src, width, and height", () => {
		render(<ToolDownloadPreview />);

		const image = screen.getByAltText("Preview") as HTMLImageElement;
		expect(image.src).toContain("mockedPrintPicture");
		expect(image.width).toBe(200);
		expect(image.height).toBe(300);
	});
});
