"use client";

import { pdf } from "@react-pdf/renderer";
import { getDocument, GlobalWorkerOptions, PDFDocumentProxy, PDFPageProxy } from "pdfjs-dist";

import { PrintPDF } from "@/components/print-pdf";

import { PictureFormat } from "@/types/pictureFormat";
import { PrintFormat } from "@/types/printFormat";

GlobalWorkerOptions.workerSrc = "./pdf.worker.mjs";

/**
 * Generates an image from a given PDF document created from the provided picture and formats.
 *
 * @param croppedPicture - The URL of the cropped picture to be included in the PDF.
 * @param pictureFormat - The format of the picture including dimensions.
 * @param printFormat - The format of the print including dimensions.
 * @returns A promise that resolves to a data URL representing the generated image in JPEG format.
 */
export const generateImageFromPDF = async (
	croppedPicture: string,
	pictureFormat: PictureFormat,
	printFormat: PrintFormat
): Promise<string> => {
	try {
		const pdfBlob: Blob = await pdf(
			<PrintPDF
				croppedPicture={croppedPicture}
				pictureFormat={pictureFormat}
				printFormat={printFormat}
			/>
		).toBlob();

		const pdfDoc: PDFDocumentProxy = await getDocument(await pdfBlob.arrayBuffer()).promise;
		const page: PDFPageProxy = await pdfDoc.getPage(1);

		const viewport = page.getViewport({ scale: 1 });
		const canvas: HTMLCanvasElement = document.createElement("canvas");
		canvas.width = viewport.width;
		canvas.height = viewport.height;
		const context: CanvasRenderingContext2D | null = canvas.getContext("2d");

		if (!context) {
			console.error("Failed to get canvas context");
			throw new Error("Failed to get canvas context");
		}

		const renderContext = {
			canvasContext: context,
			viewport: viewport,
		};

		await page.render(renderContext).promise;

		const dataUrl: string = canvas.toDataURL("image/jpeg", 1.0);
		return dataUrl;
	} catch (error) {
		console.error("Error generating and downloading image:", error);
		return "Error generating and downloading image.";
	}
};

/**
 * Downloads the generated image as a JPEG file.
 *
 * @param croppedPicture - The URL of the cropped picture to be included in the PDF.
 * @param pictureFormat - The format of the picture including dimensions.
 * @param printFormat - The format of the print including dimensions.
 * @returns A promise that resolves when the download action is completed.
 */

export const downloadJPG = async (
	croppedPicture: string,
	pictureFormat: PictureFormat,
	printFormat: PrintFormat
): Promise<void> => {
	const dataUrl: string = await generateImageFromPDF(croppedPicture, pictureFormat, printFormat);
	const link: HTMLAnchorElement = document.createElement("a");
	link.href = dataUrl;
	link.download = "pixpass-print.jpg";
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};
