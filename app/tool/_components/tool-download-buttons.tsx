import { Button } from "@/components/ui/button";

import { useCrop } from "@/hooks/useCrop";
import { useFormats } from "@/hooks/useFormats";

import { downloadPDF } from "@/utils/pdfUtils";
import { downloadJPG } from "@/utils/pictureGenUtils";

export const ToolDownloadButtons: React.FC = () => {
	const { pictureFormat, printFormat } = useFormats();
	const { croppedPicture } = useCrop();

	const onDownloadJPG = (): void => {
		if (!croppedPicture || !pictureFormat || !printFormat) return;

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
