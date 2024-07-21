"use client";

import { useCurrentPage } from "@/hooks/useCurrentPage";

export const ToolProgress = () => {
	const { currentPage } = useCurrentPage();

	return (
		<div className="w-full h-10 rounded-xl bg-sky-200 flex">
			{currentPage === "upload" ? (
				<h1 className="w-full h-full flex-1 bg-sky-400 rounded-l-xl flex justify-center items-center font-semibold text-sky-100">
					Upload
				</h1>
			) : (
				<p className="w-full h-full flex-1 flex justify-center items-center text-sky-500">Upload</p>
			)}

			{currentPage === "edit" ? (
				<h1 className="w-full h-full flex-1 bg-sky-400 flex justify-center items-center font-semibold text-sky-100">Edit</h1>
			) : (
				<p className="w-full h-full flex-1 flex justify-center items-center text-sky-500">Edit</p>
			)}

			{currentPage === "download" ? (
				<h1 className="w-full h-full flex-1 bg-sky-400 rounded-r-xl flex justify-center items-center font-semibold text-sky-100">
					Download
				</h1>
			) : (
				<p className="w-full h-full flex-1 flex justify-center items-center text-sky-500">Download</p>
			)}
		</div>
	);
};
