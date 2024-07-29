"use client";

import Image from "next/image";

import { useFormats } from "@/hooks/useFormats";
import { usePicture } from "@/hooks/usePicture";

export const ToolDownloadPreview: React.FC = () => {
	const { printPicture } = usePicture();
	const { printFormat } = useFormats();

	return (
		<div>
			<h2 className="text-lg font-semibold mb-4">Preview</h2>
			{printPicture ? (
				<Image
					key={printPicture.slice(-4)}
					src={printPicture}
					width={printFormat?.width}
					height={printFormat?.height}
					alt="Preview"
					className="w-full"
				/>
			) : (
				<Image
					src="/placeholder.jpeg"
					width={898}
					height={602}
					alt="Preview"
					className="w-full"
				/>
			)}
		</div>
	);
};
