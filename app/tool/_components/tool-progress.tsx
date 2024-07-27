"use client";

import { useProgress } from "@/hooks/useProgress";

export const ToolProgress = () => {
	const { progress } = useProgress();

	return (
		<div className="w-full h-10 rounded-xl bg-sky-200 text-sky-50 flex">
			{progress === "upload" ? (
				<h1 className="w-full h-full flex-1 bg-sky-400 rounded-l-xl flex justify-center items-center font-semibold">Upload</h1>
			) : (
				<p className="w-full h-full flex-1 flex justify-center items-center text-sky-500">Upload</p>
			)}

			{progress === "edit" ? (
				<h1 className="w-full h-full flex-1 bg-sky-400 flex justify-center items-center font-semibold">Edit</h1>
			) : (
				<p className="w-full h-full flex-1 flex justify-center items-center text-sky-500">Edit</p>
			)}

			{progress === "download" ? (
				<h1 className="w-full h-full flex-1 bg-sky-400 rounded-r-xl flex justify-center items-center font-semibold">Download</h1>
			) : (
				<p className="w-full h-full flex-1 flex justify-center items-center text-sky-500">Download</p>
			)}
		</div>
	);
};
