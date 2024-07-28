"use client";

import { useDebouncedCallback } from "@mantine/hooks";
import Cropper, { Area } from "react-easy-crop";

import { useAi } from "@/hooks/useAi";
import { useCrop } from "@/hooks/useCrop";
import { useFormats } from "@/hooks/useFormats";
import { usePicture } from "@/hooks/usePicture";

import getCroppedImg from "@/utils/pictureCropUtils";
import { generateImage } from "@/utils/generateAndDownloadImage";
import { LucideBadgeAlert, LucideBadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ToolEditPicture = () => {
	const { approved, message, setApproved, setMessage } = useAi();
	const { pictureFormat, printFormat } = useFormats();
	const { picture, setPrintPicture } = usePicture();
	const { croppedPosition, zoom, setZoom, setCroppedPicture, setCroppedPictureBase64, setCroppedPosition } = useCrop();

	const onCropComplete = useDebouncedCallback(async (croppedArea: Area, croppedAreaPixels: Area) => {
		if (!picture) return;

		try {
			const [croppedImageBase64, croppedImage] = await getCroppedImg(picture, croppedAreaPixels, 0);
			if (!croppedImageBase64 || !croppedImage) return;
			setCroppedPicture(croppedImage);
			setCroppedPictureBase64(croppedImageBase64);
			if (pictureFormat && printFormat) {
				const generatedPrintPicture = await generateImage(croppedImage, pictureFormat, printFormat);
				setPrintPicture(generatedPrintPicture);
			}
		} catch (e) {
			console.error(e);
		}
	}, 500);

	const onResetAiCheck = () => {
		setMessage("");
		setApproved(null);
	};

	return (
		<div className="">
			<h2 className="text-lg font-semibold mb-2">Cut-Out</h2>
			<div className="w-full flex justify-center">
				<div className="relative w-full h-[50vh]">
					{message ? (
						<div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10 flex flex-col justify-center items-center">
							{approved === false ? (
								<>
									<LucideBadgeAlert className="w-1/4 h-auto text-red-500" />
									<p className="text-red-500 text-3xl font-bold">NOT APPROVED!</p>
								</>
							) : (
								<>
									<LucideBadgeCheck className="w-1/4 h-auto text-green-500" />
									<p className="text-green-500 text-3xl font-bold">APPROVED!</p>
								</>
							)}
							<Button
								variant="outline"
								className="mt-4 w-auto"
								onClick={onResetAiCheck}
							>
								Change Cut-Out
							</Button>
						</div>
					) : (
						(!pictureFormat || !printFormat) && (
							<div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10 flex justify-center items-center">
								<p className="text-sky-50 font-semibold text-xl text-center m-auto">Select the dimensions to cut out</p>
							</div>
						)
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
