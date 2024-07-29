import { pdf } from "@react-pdf/renderer";

import { PrintPDF } from "@/components/print-pdf";

import { PictureFormat } from "@/types/pictureFormat";
import { PrintFormat } from "@/types/printFormat";

export const downloadPDF = async (
	croppedPicture: string,
	pictureFormat: PictureFormat,
	printFormat: PrintFormat
): Promise<void> => {
	// Generate PDF blob
	const blob = await pdf(
		<PrintPDF
			croppedPicture={croppedPicture}
			pictureFormat={pictureFormat}
			printFormat={printFormat}
		/>
	).toBlob();

	// Create a link element
	const link = document.createElement("a");
	link.href = URL.createObjectURL(blob);
	link.download = "pixpass-print.pdf";

	// Append the link to the body
	document.body.appendChild(link);

	// Programmatically click the link to trigger the download
	link.click();

	// Remove the link from the document
	document.body.removeChild(link);
};
