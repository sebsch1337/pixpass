"use client";

import { useEffect } from "react";

import { ToolProgress } from "./_components/tool-progress";
import { ToolNavigation } from "./_components/tool-navigation";
import { ToolUploadInfo } from "./_components/tool-upload-info";
import { ToolEditFormat } from "./_components/tool-edit-format";
import { ToolEditPicture } from "./_components/tool-edit-picture";
import { ToolEditAiCheck } from "./_components/tool-edit-ai-check";
import { ToolUploadPicture } from "./_components/tool-upload-picture";
import { ToolDownloadPreview } from "./_components/tool-download-preview";
import { ToolDownloadButtons } from "./_components/tool-download-buttons";

import { useProgress } from "@/hooks/useProgress";

const ToolPage: React.FC = () => {
	const { progress } = useProgress();

	useEffect(() => {
		const handleBeforeUnload = (event: BeforeUnloadEvent) => {
			event.preventDefault();
		};

		window.addEventListener("beforeunload", handleBeforeUnload);

		return () => {
			window.removeEventListener("beforeunload", handleBeforeUnload);
		};
	}, []);

	return (
		<>
			<div className="max-w-5xl mx-auto">
				<ToolProgress />
			</div>

			<div className="max-w-5xl mx-auto mt-8 flex flex-col md:flex-row gap-8">
				<div className="flex-1 flex flex-col gap-8">
					<section className="flex-1 rounded-xl bg-sky-200 flex flex-col h-full p-6">
						{progress === "upload" && <ToolUploadInfo />}
						{progress === "edit" && <ToolEditFormat />}
						{progress === "download" && <ToolDownloadButtons />}
					</section>

					{progress === "edit" && (
						<section className="flex-1 rounded-xl bg-sky-200 flex flex-col h-full p-6">
							<ToolEditAiCheck />
						</section>
					)}
				</div>

				<section className="flex-1 rounded-xl bg-sky-200 flex flex-col h-full p-6">
					{progress === "upload" && <ToolUploadPicture />}
					{progress === "edit" && <ToolEditPicture />}
					{progress === "download" && <ToolDownloadPreview />}
				</section>
			</div>

			<div className="max-w-5xl mx-auto mt-8 flex flex-col md:flex-row gap-4 justify-between">
				<ToolNavigation />
			</div>
		</>
	);
};

export default ToolPage;
