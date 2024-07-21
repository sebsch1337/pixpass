"use client";

import { useRef, useState } from "react";

import { usePicture } from "@/hooks/usePicture";
import { toast } from "sonner";

export const ToolUpload = () => {
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);
	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const { picture, setPicture } = usePicture();

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

						setPicture(null);

						if (fileInputRef.current) {
							fileInputRef.current.value = "";
						}
						return;
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
		<section className="rounded-xl bg-sky-200 flex flex-col h-full p-8">
			<div className="min-w-[25-dvw]">
				{picture ? (
					<button
						onClick={handleUploadClick}
						className="w-full min-h-[50dvh] flex justify-center items-center"
						disabled={isButtonDisabled}
					>
						{/* eslint-disable-next-line */}
						<img
							src={picture}
							alt="Uploaded picture"
						/>
					</button>
				) : (
					<button
						onClick={handleUploadClick}
						className="w-full min-h-[50dvh] border-2 border-dashed border-sky-600 text-sky-600 rounded-xl flex flex-col justify-center items-center text-lg text-center font-semibold"
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
		</section>
	);
};
