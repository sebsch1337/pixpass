"use client";

import { toast } from "sonner";
import { useRef, useState } from "react";

import { useAi } from "@/hooks/useAi";
import { useCrop } from "@/hooks/useCrop";
import { usePicture } from "@/hooks/usePicture";

export const ToolUploadPicture = () => {
	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);

	const { setMessage, setApproved } = useAi();
	const { picture, setPicture } = usePicture();
	const { setCroppedPicture, setCroppedArea, setCroppedPosition, setZoom } = useCrop();

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				const result = reader.result as string;

				const img = document.createElement("img");

				img.onload = () => {
					try {
						if (img.width > img.height) {
							throw new Error("Landscape orientation is not allowed.");
						}

						if (img.width < 413) {
							throw new Error("Please upload a high resolution picture.");
						}

						setPicture(result);
					} catch (e) {
						const error = e as Error;
						toast.error(error.message);

						setPicture("");

						if (fileInputRef.current) {
							fileInputRef.current.value = "";
						}
						return;
					} finally {
						setCroppedPicture("");
						setCroppedArea(null);
						setCroppedPosition({ x: 0, y: 0 });
						setZoom(1);
						setMessage("");
						setApproved(false);
					}
				};
				img.src = result;
			};
			reader.readAsDataURL(file);
		}
	};

	const handleUploadClick = () => {
		setIsButtonDisabled(true);
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
		setTimeout(() => setIsButtonDisabled(false), 300);
	};

	return (
		<div>
			<h2 className="text-lg font-semibold mb-4">Upload Picture</h2>
			{picture ? (
				<button
					onClick={handleUploadClick}
					className="flex justify-center w-full"
					disabled={isButtonDisabled}
				>
					{/* eslint-disable-next-line */}
					<img
						src={picture}
						alt="Uploaded picture"
						className="max-h-[50vh]"
					/>
				</button>
			) : (
				<button
					onClick={handleUploadClick}
					className="w-full min-h-[50vh] border-2 border-dashed border-sky-600 text-sky-600 rounded-xl flex flex-col justify-center items-center text-lg text-center font-semibold"
					disabled={isButtonDisabled}
				>
					<span className="text-3xl">+</span>
					Upload Picture
				</button>
			)}
			<input
				ref={fileInputRef}
				type="file"
				accept=".jpg,.jpeg,.png,.webp"
				className="hidden"
				onChange={handleFileChange}
			/>
		</div>
	);
};
