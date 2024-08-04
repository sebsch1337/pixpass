import { PictureFormat } from "@/types/pictureFormat";
import { PrintFormat } from "@/types/printFormat";

const mmToPt = 72 / 25.4;

/**
 * Converts the dimensions of a picture from millimeters to points.
 *
 * @param picture - The picture format object containing dimensions in millimeters.
 * @returns A new picture format object with dimensions converted to points.
 */
export function convertPictureFormatToPoints(picture: PictureFormat): PictureFormat {
	return {
		...picture,
		width: picture.width * mmToPt,
		height: picture.height * mmToPt,
	};
}

/**
 * Calculates how many pictures can fit into a given print format. fit-values are mixed due to landscape orientation change in PDF creation component.
 *
 * @param picture - The picture format object containing dimensions.
 * @param print - The print format object containing dimensions.
 * @returns The total number of pictures that fit into the print format.
 */
export function calculateFit(picture: PictureFormat | null, print: PrintFormat | null): number {
	if (!picture || !print) return 0;

	const pictureInPt = convertPictureFormatToPoints(picture);

	const fitWidth = Math.floor(print.width / pictureInPt.height);
	const fitHeight = Math.floor(print.height / pictureInPt.width);

	return fitWidth * fitHeight;
}
