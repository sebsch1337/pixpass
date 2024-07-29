import { Button } from "@/components/ui/button";

import { usePicture } from "@/hooks/usePicture";
import { useProgress } from "@/hooks/useProgress";

export const ToolNavigation = () => {
	const { picture, printPicture } = usePicture();
	const { progress, setProgress } = useProgress();

	return (
		<>
			<div className="w-full md:w-auto">
				{progress === "edit" && (
					<Button
						variant="outline"
						onClick={() => setProgress("upload")}
					>
						&lt; Back
					</Button>
				)}
				{progress === "download" && (
					<Button
						variant="outline"
						onClick={() => setProgress("edit")}
					>
						&lt; Back
					</Button>
				)}
			</div>
			<div className="w-full md:w-auto">
				{progress === "upload" && (
					<Button
						disabled={!!!picture}
						onClick={() => setProgress("edit")}
					>
						Next &gt;
					</Button>
				)}
				{progress === "edit" && (
					<Button
						disabled={!!!printPicture}
						onClick={() => setProgress("download")}
					>
						Next &gt;
					</Button>
				)}
				{progress === "download" && <Button onClick={() => setProgress("upload")}>Finish</Button>}
			</div>
		</>
	);
};
