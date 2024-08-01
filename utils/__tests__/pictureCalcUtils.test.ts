import { convertPictureFormatToPoints, calculateFit } from "@/utils/pictureCalcUtils";

import { PictureFormat } from "@/types/pictureFormat";
import { PrintFormat } from "@/types/printFormat";

describe("convertPictureFormatToPoints", () => {
	it("should convert dimensions from mm to pt correctly", () => {
		const picture: PictureFormat = { id: "0000", name: "test-0", width: 100, height: 50 };
		const expected = { width: 283.46456692913385, height: 141.73228346456693 };

		const result = convertPictureFormatToPoints(picture);

		expect(result.width).toBeCloseTo(expected.width);
		expect(result.height).toBeCloseTo(expected.height);
	});

	it("should retain other properties of the picture object", () => {
		const picture: PictureFormat = { id: "0001", name: "test-1", width: 100, height: 50 };

		const result = convertPictureFormatToPoints(picture);

		expect(result.name).toBe("test-1");
	});
});

describe("calculateFit", () => {
	it("should return 0 if picture or print is null", () => {
		expect(calculateFit(null, { id: "0002", name: "test-2", width: 500, height: 700 })).toBe(0);
		expect(calculateFit({ id: "0003", name: "test-3", width: 100, height: 50 }, null)).toBe(0);
		expect(calculateFit(null, null)).toBe(0);
	});

	it("should calculate the correct number of pictures that fit into the print format", () => {
		const picture: PictureFormat = { id: "0004", name: "test-4", width: 35, height: 45 };
		const print: PrintFormat = { id: "0005", name: "test-5", width: 360, height: 504.5669 };

		const expectedFit = 10;

		expect(calculateFit(picture, print)).toBe(expectedFit);
	});

	it("should handle edge cases correctly", () => {
		const picture: PictureFormat = { id: "0006", name: "test-6", width: 35, height: 45 };
		const print: PrintFormat = { id: "0007", name: "test-7", width: 128, height: 100 };

		expect(calculateFit(picture, print)).toBe(1);
	});
});
