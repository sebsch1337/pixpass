import { LucideSparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export const ToolEditAiCheck = () => {
	return (
		<div className="h-full flex flex-col justify-between">
			<h2 className="mb-4 text-lg font-semibold">AI Check</h2>
			<div className="flex h-full w-full flex-col justify-center gap-4">
				<div className="flex-1 flex flex-col md:flex-row gap-2 items-center md:items-start justify-center">
					<p className="max-w-3/4 text-sm hyphens-auto">
						This premium feature utilizes artificial intelligence to verify the biometric accuracy of your cropped image.
						<br />
						<br />
						<span className="text-xs italic">While the AI provides helpful tips, it cannot ensure 100% accuracy.</span>
					</p>
				</div>
				<Button
					variant="ai"
					className="mx-auto px-6 text-lg md:w-auto md:px-10"
					disabled
				>
					<LucideSparkles className="mr-1 inline-block h-5 w-5 md:h-6 md:w-6" />
					Currently unavailable
				</Button>
			</div>
		</div>
	);
};
