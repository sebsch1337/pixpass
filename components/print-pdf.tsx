"use client";

import { Page, Image, Document, StyleSheet } from "@react-pdf/renderer";

import { PrintFormat } from "@/types/printFormat";
import { PictureFormat } from "@/types/pictureFormat";

import { calculateFit } from "@/utils/pictureCalcUtils";

interface PrintPDFProps {
	croppedPicture: string;
	pictureFormat: PictureFormat;
	printFormat: PrintFormat;
}

export const PrintPDF = ({ croppedPicture, pictureFormat, printFormat }: PrintPDFProps) => {
	if (!croppedPicture || !pictureFormat || !printFormat) return;

	const numberOfPictures = calculateFit(pictureFormat, printFormat);

	const styles = StyleSheet.create({
		page: {
			flexDirection: "row",
			flexWrap: "wrap",
			justifyContent: "center",
			alignContent: "center",
			backgroundColor: "#fff",
			padding: 1,
			gap: 1,
		},
		image: {
			width: pictureFormat.width + "mm",
			height: pictureFormat.height + "mm",
		},
	});
	return (
		<Document>
			<Page
				size={[printFormat.width, printFormat.height]}
				orientation={"landscape"}
				style={styles.page}
				dpi={300}
			>
				{[...Array(numberOfPictures)].map((_, index) => (
					/* eslint-disable-next-line */
					<Image
						key={index}
						style={styles.image}
						src={croppedPicture}
					/>
				))}
			</Page>
		</Document>
	);
};
