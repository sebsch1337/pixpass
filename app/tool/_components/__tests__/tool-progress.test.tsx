import { render, screen } from "@testing-library/react";

import { ToolProgress } from "../tool-progress";

jest.mock("@/hooks/useProgress", () => ({
	useProgress: jest.fn(),
}));

const mockedUseProgress = require("@/hooks/useProgress").useProgress;

describe("ToolProgress", () => {
	it("renders upload state correctly", () => {
		mockedUseProgress.mockReturnValue({ progress: "upload" });
		render(<ToolProgress />);

		expect(screen.getByText("Upload")).toHaveClass("bg-sky-400");
		expect(screen.getByText("Edit")).toHaveClass("text-sky-500");
		expect(screen.getByText("Download")).toHaveClass("text-sky-500");
	});

	it("renders edit state correctly", () => {
		mockedUseProgress.mockReturnValue({ progress: "edit" });
		render(<ToolProgress />);

		expect(screen.getByText("Upload")).toHaveClass("text-sky-500");
		expect(screen.getByText("Edit")).toHaveClass("bg-sky-400");
		expect(screen.getByText("Download")).toHaveClass("text-sky-500");
	});

	it("renders download state correctly", () => {
		mockedUseProgress.mockReturnValue({ progress: "download" });
		render(<ToolProgress />);

		expect(screen.getByText("Upload")).toHaveClass("text-sky-500");
		expect(screen.getByText("Edit")).toHaveClass("text-sky-500");
		expect(screen.getByText("Download")).toHaveClass("bg-sky-400");
	});
});
