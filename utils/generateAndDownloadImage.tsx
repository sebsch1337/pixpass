"use client";

import { pdf } from "@react-pdf/renderer";
import { getDocument, GlobalWorkerOptions, PDFDocumentProxy, PDFPageProxy } from "pdfjs-dist";

import { PrintPDF } from "@/components/print-pdf";

import { PictureFormat } from "@/types/pictureFormat";
import { PrintFormat } from "@/types/printFormat";

GlobalWorkerOptions.workerSrc = "./pdf.worker.mjs";

export const generateImage = async (
	croppedPicture: string,
	pictureFormat: PictureFormat,
	printFormat: PrintFormat
): Promise<string> => {
	try {
		// Generate PDF
		const pdfBlob: Blob = await pdf(
			<PrintPDF
				croppedPicture={croppedPicture}
				pictureFormat={pictureFormat}
				printFormat={printFormat}
			/>
		).toBlob();

		// Load PDF with pdfjs-dist
		const pdfDoc: PDFDocumentProxy = await getDocument(await pdfBlob.arrayBuffer()).promise;
		const page: PDFPageProxy = await pdfDoc.getPage(1);

		// Set up a canvas to render the PDF page
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

		// Render the PDF page to canvas
		await page.render(renderContext).promise;

		// Convert canvas to data URL and download image
		const dataUrl: string = canvas.toDataURL("image/jpeg", 1.0);
		return dataUrl;
	} catch (error) {
		console.error("Error generating and downloading image:", error);
		return "Error generating and downloading image.";
	}
};

export const downloadImage = async (croppedPicture: string, pictureFormat: PictureFormat, printFormat: PrintFormat) => {
	const dataUrl: string = await generateImage(croppedPicture, pictureFormat, printFormat);
	const link: HTMLAnchorElement = document.createElement("a");
	link.href = dataUrl;
	link.download = "document-image.jpg";
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};
