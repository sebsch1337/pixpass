import { LucideSparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export const ToolPictureAiCheck = () => {
	return (
		<div className="h-full flex flex-col justify-between">
			<h2 className="text-lg font-semibold mb-2">AI Check</h2>
			<div className=" w-full h-full text-sm flex jutify-center items-center">
				<Button
					variant="ai"
					className="mx-auto md:w-auto px-6 md:px-10 text-lg"
				>
					<LucideSparkles className="w-5 h-5 md:w-6 md:h-6 inline-block mr-1 text-sky-50" />
					Check Biometrics
				</Button>
			</div>
		</div>
	);
};
