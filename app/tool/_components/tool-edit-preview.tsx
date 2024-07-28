import Image from "next/image";

import { useCrop } from "@/hooks/useCrop";
import { useFormats } from "@/hooks/useFormats";
import { usePicture } from "@/hooks/usePicture";

import { downloadImage } from "@/utils/pictureGenUtils";

export const ToolEditPreview = () => {
	const { printPicture } = usePicture();
	const { croppedPicture } = useCrop();
	const { printFormat, pictureFormat } = useFormats();

	if (!croppedPicture || !pictureFormat || !printFormat || !printPicture) return;

	const downloadPDF = async () => {
		await downloadImage(croppedPicture, pictureFormat, printFormat);
	};

	return (
		<div className="flex-1">
			<h2 className="text-lg font-semibold mb-2">Print Preview</h2>
			<Image
				src={printPicture}
				width={printFormat?.width}
				height={printFormat?.height}
				alt="Cropped Preview"
				className="mx-auto"
			/>
			{croppedPicture && printFormat && <button onClick={downloadPDF}>Download JPG</button>}
		</div>
	);
};
