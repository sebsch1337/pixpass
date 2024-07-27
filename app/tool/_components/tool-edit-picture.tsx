"use client";

import { useDebouncedCallback } from "@mantine/hooks";
import Cropper, { Area } from "react-easy-crop";

import { useCrop } from "@/hooks/useCrop";
import { useFormats } from "@/hooks/useFormats";
import { usePicture } from "@/hooks/usePicture";

import getCroppedImg from "@/utils/pictureCropUtils";
import { generateImage } from "@/utils/generateAndDownloadImage";

export const ToolEditPicture = () => {
	const { pictureFormat, printFormat } = useFormats();
	const { picture, setPrintPicture } = usePicture();
	const { croppedPosition, zoom, setZoom, setCroppedPicture, setCroppedPosition } = useCrop();

	const onCropComplete = useDebouncedCallback(async (croppedArea: Area, croppedAreaPixels: Area) => {
		if (!picture) return;

		try {
			const croppedImage = await getCroppedImg(picture, croppedAreaPixels, 0);
			if (!croppedImage || !pictureFormat || !printFormat) return;
			setCroppedPicture(croppedImage);
			const generatedPrintPicture = await generateImage(croppedImage, pictureFormat, printFormat);
			setPrintPicture(generatedPrintPicture);
		} catch (e) {
			console.error(e);
		}
	}, 500);

	return (
		<div className="">
			<h2 className="text-lg font-semibold mb-2">Cut-Out</h2>
			<div className="w-full flex justify-center">
				<div className="relative w-full h-[50vh]">
					{(!pictureFormat || !printFormat) && (
						<div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10 flex justify-center items-center">
							<p className="text-sky-50 font-semibold text-xl m-auto">Select the dimensions to cut out</p>
						</div>
					)}
					<Cropper
						image={picture}
						crop={croppedPosition}
						zoom={zoom}
						aspect={(pictureFormat?.width || 1) / (pictureFormat?.height || 1)}
						onCropChange={setCroppedPosition}
						onCropComplete={onCropComplete}
						onZoomChange={setZoom}
					/>
				</div>
			</div>
		</div>
	);
};
