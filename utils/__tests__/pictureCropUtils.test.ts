import { createImage, getRadianAngle, rotateSize, default as getCroppedImg } from "@/utils/pictureCropUtils";

// describe("createImage", () => {
// 	it("should load an image successfully", async () => {
// 		const imageUrl = "./public/hero-woman-35.webp";
// 		const image = await createImage(imageUrl);

// 		expect(image).toBeInstanceOf(HTMLImageElement);
// 		expect(image.src).toBe(imageUrl);
// 	});

// 	it("should reject on image load error", async () => {
// 		const invalidImageUrl = "https://invalid-url";
// 		await expect(createImage(invalidImageUrl)).rejects.toThrow("Image load error");
// 	});
// });

// describe("getCroppedImg", () => {
// beforeAll(() => {
// 	// Mock createImage to return a fake image element
// 	jest.spyOn(global, "Image").mockImplementation(() => {
// 		const image: Partial<HTMLImageElement> = {
// 			width: 200,
// 			height: 100,
// 			src: "",
// 			setAttribute: jest.fn(),
// 			addEventListener: jest.fn((event, handler) => {
// 				if (event === "load") {
// 					setTimeout(handler, 0); // simulate load event
// 				}
// 			}),
// 		};
// 		return image as HTMLImageElement;
// 	});
// });
// afterAll(() => {
// 	jest.restoreAllMocks();
// });
// it("should return base64 and blob URL of the cropped image", async () => {
// 	const imageSrc = "./public/hero-woman-35.webp";
// 	const pixelCrop = { x: 0, y: 0, width: 10, height: 10 };
// 	const [base64String, blobUrl] = await getCroppedImg(imageSrc, pixelCrop);
// 	expect(base64String).toMatch(/^data:image\/jpeg;base64,/);
// 	expect(blobUrl).toMatch(/^blob:/);
// });
// });

describe("getRadianAngle", () => {
	it("should convert degrees to radians correctly", () => {
		expect(getRadianAngle(0)).toBe(0);
		expect(getRadianAngle(180)).toBe(Math.PI);
		expect(getRadianAngle(90)).toBe(Math.PI / 2);
	});
});

describe("rotateSize", () => {
	it("should return correct bounding box dimensions for a rotated rectangle", () => {
		const width = 100;
		const height = 50;
		const rotation = 45;
		const result = rotateSize(width, height, rotation);

		expect(result.width).toBeCloseTo(106.066);
		expect(result.height).toBeCloseTo(106.066);
	});
});
