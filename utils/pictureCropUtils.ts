/**
 * Creates an HTMLImageElement from a given URL.
 *
 * @param url - The URL of the image to be created.
 * @returns A promise that resolves to an HTMLImageElement.
 */
export const createImage = (url: string): Promise<HTMLImageElement> =>
	new Promise((resolve, reject) => {
		const image = new Image();
		image.addEventListener("load", () => resolve(image));
		image.addEventListener("error", (error) => reject(error));
		image.setAttribute("crossOrigin", "anonymous");
		image.src = url;
	});

/**
 * Converts degrees to radians.
 *
 * @param degreeValue - The value in degrees to be converted.
 * @returns The equivalent value in radians.
 */
export function getRadianAngle(degreeValue: number): number {
	return (degreeValue * Math.PI) / 180;
}

interface Size {
	width: number;
	height: number;
}

/**
 * Returns the new bounding area of a rotated rectangle.
 *
 * @param width - The width of the original rectangle.
 * @param height - The height of the original rectangle.
 * @param rotation - The rotation angle in degrees.
 * @returns The width and height of the bounding box for the rotated rectangle.
 */
export function rotateSize(width: number, height: number, rotation: number): Size {
	const rotRad = getRadianAngle(rotation);

	return {
		width: Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
		height: Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
	};
}

interface PixelCrop {
	x: number;
	y: number;
	width: number;
	height: number;
}

interface Flip {
	horizontal: boolean;
	vertical: boolean;
}

/**
 * Crops an image based on the specified crop area, rotation, and flip settings.
 *
 * @param imageSrc - The source URL of the image to be cropped.
 * @param pixelCrop - The area of the image to be cropped.
 * @param rotation - The rotation angle in degrees (default is 0).
 * @param flip - An object specifying whether to flip the image horizontally and/or vertically (default is no flip).
 * @returns A promise that resolves to a tuple containing the Base64 string of the cropped image and the blob URL of the cropped image.
 */
export default async function getCroppedImg(
	imageSrc: string,
	pixelCrop: PixelCrop,
	rotation: number = 0,
	flip: Flip = { horizontal: false, vertical: false }
): Promise<[string, string | null]> {
	const image = await createImage(imageSrc);
	const canvas = document.createElement("canvas");
	const ctx = canvas.getContext("2d");

	if (!ctx) {
		return ["", null];
	}

	const rotRad = getRadianAngle(rotation);

	const { width: bBoxWidth, height: bBoxHeight } = rotateSize(image.width, image.height, rotation);

	canvas.width = bBoxWidth;
	canvas.height = bBoxHeight;

	ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
	ctx.rotate(rotRad);
	ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
	ctx.translate(-image.width / 2, -image.height / 2);

	ctx.drawImage(image, 0, 0);

	const croppedCanvas = document.createElement("canvas");
	const croppedCtx = croppedCanvas.getContext("2d");

	if (!croppedCtx) {
		return ["", null];
	}

	croppedCanvas.width = pixelCrop.width;
	croppedCanvas.height = pixelCrop.height;

	croppedCtx.drawImage(
		canvas,
		pixelCrop.x,
		pixelCrop.y,
		pixelCrop.width,
		pixelCrop.height,
		0,
		0,
		pixelCrop.width,
		pixelCrop.height
	);

	const base64String = croppedCanvas.toDataURL("image/jpeg");

	const blobPromise = new Promise<string>((resolve, reject) => {
		croppedCanvas.toBlob((file) => {
			if (file) {
				resolve(URL.createObjectURL(file));
			} else {
				reject(new Error("Could not create blob"));
			}
		}, "image/jpeg");
	});

	const blobUrl = await blobPromise;

	return [base64String, blobUrl];
}
