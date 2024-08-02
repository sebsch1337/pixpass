import { render, screen } from "@testing-library/react";

import { ToolUploadInfo } from "../tool-upload-info";

describe("ToolUploadInfo", () => {
	it("renders correctly", () => {
		render(<ToolUploadInfo />);

		expect(screen.getByText("Requirements")).toBeInTheDocument();
	});
});
