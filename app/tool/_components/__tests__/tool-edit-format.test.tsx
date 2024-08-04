import { render, screen } from "@testing-library/react";

import { ToolEditFormat } from "../tool-edit-format";

import { useFormats } from "@/hooks/useFormats";

import { pictureFormats, printFormats } from "@/data/formats";

import { calculateFit } from "@/utils/pictureCalcUtils";

jest.mock("@/hooks/useFormats");
jest.mock("@/utils/pictureCalcUtils");

const mockedUseFormats = useFormats as jest.MockedFunction<typeof useFormats>;
const mockedCalculateFit = calculateFit as jest.MockedFunction<typeof calculateFit>;

describe("ToolEditFormat", () => {
	beforeEach(() => {
		mockedUseFormats.mockReturnValue({
			pictureFormat: null,
			printFormat: null,
			setPictureFormat: jest.fn(),
			setPrintFormat: jest.fn(),
		});
		mockedCalculateFit.mockReturnValue(4);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("renders correctly", () => {
		render(<ToolEditFormat />);

		expect(screen.getByText("Select Dimensions")).toBeInTheDocument();
		expect(screen.getByText("Picture Format")).toBeInTheDocument();
		expect(screen.getByText("Print Format")).toBeInTheDocument();
	});

	it("displays the correct number of pictures that fit", () => {
		const pictureFormat = pictureFormats[0];
		const printFormat = printFormats[0];
		const numPictures = 4;

		mockedUseFormats.mockReturnValue({
			pictureFormat,
			printFormat,
			setPictureFormat: jest.fn(),
			setPrintFormat: jest.fn(),
		});
		mockedCalculateFit.mockReturnValue(numPictures);

		render(<ToolEditFormat />);

		const paragraph = screen.getByText((content, element) => {
			return element?.tagName.toLowerCase() === "p" && content.includes("You will get") && content.includes("pictures.");
		});

		expect(paragraph).toBeInTheDocument();
		if (paragraph) {
			expect(paragraph).toHaveTextContent("You will get");
			expect(paragraph).toHaveTextContent("pictures.");
			expect(paragraph).toContainHTML(`<span class="font-semibold">${numPictures}</span>`);
		}
	});
});
