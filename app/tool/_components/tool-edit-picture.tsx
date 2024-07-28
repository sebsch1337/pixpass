"use client";

import Cropper, { Area } from "react-easy-crop";
import { LucideBadgeAlert, LucideBadgeCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useDebouncedCallback } from "@mantine/hooks";

import { useAi } from "@/hooks/useAi";
import { useCrop } from "@/hooks/useCrop";
import { useFormats } from "@/hooks/useFormats";
import { usePicture } from "@/hooks/usePicture";

import getCroppedImg from "@/utils/pictureCropUtils";

import { useEffect, useState } from "react";

import { downloadImage, generateImageFromPDF } from "@/utils/pictureGenUtils";

export const ToolEditPicture = () => {
	const { approved, message, setApproved, setMessage } = useAi();
	const { pictureFormat, printFormat } = useFormats();
	const { picture, setPrintPicture } = usePicture();
	const { croppedPicture, croppedPosition, zoom, setZoom, setCroppedPicture, setCroppedPictureBase64, setCroppedPosition } =
		useCrop();

	// const [downloadImage, setDownloadImage] = useState<null | typeof import("@/utils/pictureGenUtils").downloadImage>(null);
	// const [generateImageFromPDF, setGenerateImageFromPDF] = useState<
	// 	null | typeof import("@/utils/pictureGenUtils").generateImageFromPDF
	// >(null);

	// useEffect(() => {
	// 	const loadFunctions = async () => {
	// 		const modulea = await import("@/utils/pictureGenUtils");
	// 		setDownloadImage(() => modulea.downloadImage);
	// 		setGenerateImageFromPDF(() => modulea.generateImageFromPDF);
	// 	};

	// 	loadFunctions();
	// }, []);

	// useEffect(() => {
	// 	if (downloadImage && generateImageFromPDF) {
	// 		// Use the functions here
	// 		console.log("Functions loaded:", downloadImage, generateImageFromPDF);
	// 	}
	// }, [downloadImage, generateImageFromPDF]);

	const onCropComplete = useDebouncedCallback(async (croppedArea: Area, croppedAreaPixels: Area) => {
		if (!picture) return;

		try {
			const [croppedImageBase64, croppedImage] = await getCroppedImg(picture, croppedAreaPixels, 0);
			if (!croppedImageBase64 || !croppedImage) return;
			setCroppedPicture(croppedImage);
			setCroppedPictureBase64(croppedImageBase64);
			if (pictureFormat && printFormat && generateImageFromPDF) {
				const generatedPrintPicture = await generateImageFromPDF(croppedImage, pictureFormat, printFormat);
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
