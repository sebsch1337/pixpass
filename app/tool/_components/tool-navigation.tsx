import Link from "next/link";

import { useWindowScroll } from "@mantine/hooks";

import { Button } from "@/components/ui/button";

import { usePicture } from "@/hooks/usePicture";
import { useProgress } from "@/hooks/useProgress";

export const ToolNavigation = () => {
	const { picture, printPicture } = usePicture();
	const { progress, setProgress } = useProgress();

	const [scroll, scrollTo] = useWindowScroll();

	const onPageChange = (page: string): void => {
		setProgress(page);
		scrollTo({ y: 0 });
	};

	return (
		<>
			<div className="w-full md:w-auto">
				{progress === "edit" && (
					<Button
						variant="outline"
						onClick={() => onPageChange("upload")}
					>
						&lt; Back
					</Button>
				)}
				{progress === "download" && (
					<Button
						variant="outline"
						onClick={() => onPageChange("edit")}
					>
						&lt; Back
					</Button>
				)}
			</div>
			<div className="w-full md:w-auto">
				{progress === "upload" && (
					<Button
						disabled={!!!picture}
						onClick={() => onPageChange("edit")}
					>
						Next &gt;
					</Button>
				)}
				{progress === "edit" && (
					<Button
						disabled={!!!printPicture}
						onClick={() => onPageChange("download")}
					>
						Next &gt;
					</Button>
				)}
				{progress === "download" && (
					<Link href="/">
						<Button>Finish</Button>
					</Link>
				)}
			</div>
		</>
	);
};
