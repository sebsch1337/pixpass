import { PictureFormat } from "@/types/pictureFormat";
import { PrintFormat } from "@/types/printFormat";

// Conversion factor from millimeters to points
const mmToPt = 72 / 25.4;

// Convert PictureFormat dimensions from mm to pt
export function convertPictureFormatToPoints(picture: PictureFormat): PictureFormat {
	return {
		...picture,
		width: picture.width * mmToPt,
		height: picture.height * mmToPt,
	};
}

// Calculate how many pictures fit into a print format
export function calculateFit(picture: PictureFormat | null, print: PrintFormat | null): number {
	if (!picture || !print) return 0;

	// Convert picture dimensions to points
	const pictureInPt = convertPictureFormatToPoints(picture);

	// Calculate how many pictures fit along each dimension
	const fitWidth = Math.floor(print.width / pictureInPt.height);
	const fitHeight = Math.floor(print.height / pictureInPt.width);

	// Total number of pictures that fit
	return fitWidth * fitHeight;
}
