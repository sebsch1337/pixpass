"use client";

import { useEffect } from "react";

import { ToolProgress } from "./_components/tool-progress";
import { ToolNavigation } from "./_components/tool-navigation";

import { useProgress } from "@/hooks/useProgress";
import { ToolUploadInfo } from "./_components/tool-upload-info";
import { ToolUploadPicture } from "./_components/tool-upload-picture";
import { ToolEditFormat } from "./_components/tool-edit-format";
import { ToolEditPicture } from "./_components/tool-edit-picture";
import { ToolPictureAiCheck } from "./_components/tool-picture-ai-check";

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
					<section className="flex-1 rounded-xl bg-sky-200 flex flex-col h-full p-8">
						{progress === "upload" && <ToolUploadInfo />}
						{progress === "edit" && <ToolEditFormat />}
					</section>

					<section className="flex-1 rounded-xl bg-sky-200 flex flex-col h-full p-8">
						{/* {progress === "upload" && <ToolPictureAiCheck />} */}
						{progress === "edit" && <ToolPictureAiCheck />}
					</section>
				</div>

				<section className="flex-1 rounded-xl bg-sky-200 flex flex-col h-full p-8">
					{progress === "upload" && <ToolUploadPicture />}
					{progress === "edit" && <ToolEditPicture />}
				</section>
			</div>

			<div className="max-w-5xl mx-auto mt-8 flex flex-col md:flex-row gap-4 justify-between">
				<ToolNavigation />
			</div>
		</>
	);
};

export default ToolPage;
