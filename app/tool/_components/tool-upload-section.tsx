import { ToolInfoBox } from "./tool-infobox";
import { ToolUpload } from "./tool-upload";

export const ToolUploadSection = () => {
	return (
		<>
			<div className="flex-1">
				<ToolInfoBox />
			</div>
			<div className="flex-1">
				<ToolUpload />
			</div>
		</>
	);
};
