"use client";

import { useCurrentPage } from "@/hooks/useCurrentPage";
import { ToolProgress } from "./_components/tool-progress";
import { ToolUploadSection } from "./_components/tool-upload-section";

import { Button } from "@/components/button";
import { useEffect } from "react";

export default function Tool() {
	const { currentPage, setCurrentPage } = useCurrentPage();

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
			<div className="max-w-5xl px-8 mx-auto">
				<ToolProgress />
			</div>
			<div className="max-w-5xl px-8 mx-auto mt-8 flex flex-col md:flex-row gap-8">
				{currentPage === "upload" && <ToolUploadSection />}
			</div>
			<div className="max-w-5xl px-8 mx-auto mt-8 flex justify-between">
				<div className="w-full md:w-auto">
					{currentPage === "edit" && (
						<Button
							variant="outline"
							onClick={() => setCurrentPage("upload")}
						>
							&lt; Back
						</Button>
					)}
					{currentPage === "download" && (
						<Button
							variant="outline"
							onClick={() => setCurrentPage("edit")}
						>
							&lt; Back
						</Button>
					)}
				</div>
				<div className="w-full md:w-auto">
					{currentPage === "upload" && <Button onClick={() => setCurrentPage("edit")}>Next &gt;</Button>}
					{currentPage === "edit" && <Button onClick={() => setCurrentPage("download")}>Next &gt;</Button>}
					{currentPage === "download" && <Button onClick={() => setCurrentPage("upload")}>Start over</Button>}
				</div>
			</div>
		</>
	);
}
