"use client";

import { Button } from "@/components/ui/button";

import { useCrop } from "@/hooks/useCrop";
import { useFormats } from "@/hooks/useFormats";

import { downloadPDF } from "@/utils/pdfUtils";

import { useEffect, useState } from "react";

export const ToolDownloadButtons: React.FC = () => {
	const { pictureFormat, printFormat } = useFormats();
	const { croppedPicture } = useCrop();

	// Import downloadJPG & generateImageFromPDF dynamically
	const [downloadJPG, setDownloadJPG] = useState<null | typeof import("@/utils/pictureGenUtils").downloadJPG>(null);

	useEffect(() => {
		const loadFunctions = async () => {
			const pictureGenUtils = await import("@/utils/pictureGenUtils");
			setDownloadJPG(() => pictureGenUtils.downloadJPG);
		};

		loadFunctions();
	}, []);
	// End dynamic import

	const onDownloadJPG = (): void => {
		if (!croppedPicture || !pictureFormat || !printFormat || !downloadJPG) return;

		downloadJPG(croppedPicture, pictureFormat, printFormat);
	};

	const onDownloadPDF = (): void => {
		if (!croppedPicture || !pictureFormat || !printFormat) return;

		downloadPDF(croppedPicture, pictureFormat, printFormat);
	};

	return (
		<div className="h-full flex flex-col">
			<h2 className="text-lg font-semibold mb-4">Download</h2>
			<div className="flex flex-col gap-6 justify-start h-full">
				<div>
					<h3 className="font-semibold text-md">Download as JPG</h3>
					<p className="text-sm mb-2">Best choice for printing at printing services (DM, Rossmann, ...).</p>
					<Button onClick={onDownloadJPG}>Download JPG</Button>
				</div>
				<div>
					<h3 className="font-semibold text-md">Download as PDF</h3>
					<p className="text-sm mb-2">Best choice for printing with your own printer.</p>
					<Button onClick={onDownloadPDF}>Download PDF</Button>
				</div>
			</div>
		</div>
	);
};
