import { render, screen } from "@testing-library/react";

import ToolPage from "../page";

import { useProgress } from "@/hooks/useProgress";

import { ToolProgress } from "../_components/tool-progress";
import { ToolNavigation } from "../_components/tool-navigation";
import { ToolUploadInfo } from "../_components/tool-upload-info";
import { ToolEditFormat } from "../_components/tool-edit-format";
import { ToolEditPicture } from "../_components/tool-edit-picture";
import { ToolEditAiCheck } from "../_components/tool-edit-ai-check";
import { ToolUploadPicture } from "../_components/tool-upload-picture";
import { ToolDownloadPreview } from "../_components/tool-download-preview";
import { ToolDownloadButtons } from "../_components/tool-download-buttons";

jest.mock("@/hooks/useProgress");
jest.mock("../_components/tool-progress");
jest.mock("../_components/tool-navigation");
jest.mock("../_components/tool-upload-info");
jest.mock("../_components/tool-edit-format");
jest.mock("../_components/tool-edit-picture");
jest.mock("../_components/tool-edit-ai-check");
jest.mock("../_components/tool-upload-picture");
jest.mock("../_components/tool-download-preview");
jest.mock("../_components/tool-download-buttons");

describe("ToolPage", () => {
	const mockUseProgress = useProgress as jest.MockedFunction<typeof useProgress>;

	beforeEach(() => {
		(ToolProgress as jest.Mock).mockReturnValue(<div>ToolProgress</div>);
		(ToolNavigation as jest.Mock).mockReturnValue(<div>ToolNavigation</div>);
		(ToolUploadInfo as jest.Mock).mockReturnValue(<div>ToolUploadInfo</div>);
		(ToolEditFormat as jest.Mock).mockReturnValue(<div>ToolEditFormat</div>);
		(ToolEditPicture as jest.Mock).mockReturnValue(<div>ToolEditPicture</div>);
		(ToolEditAiCheck as jest.Mock).mockReturnValue(<div>ToolEditAiCheck</div>);
		(ToolUploadPicture as jest.Mock).mockReturnValue(<div>ToolUploadPicture</div>);
		(ToolDownloadPreview as jest.Mock).mockReturnValue(<div>ToolDownloadPreview</div>);
		(ToolDownloadButtons as jest.Mock).mockReturnValue(<div>ToolDownloadButtons</div>);
	});

	it("renders ToolUploadInfo and ToolUploadPicture when progress is 'upload'", () => {
		mockUseProgress.mockReturnValue({ progress: "upload" });

		render(<ToolPage />);

		expect(screen.getByText("ToolProgress")).toBeInTheDocument();
		expect(screen.getByText("ToolNavigation")).toBeInTheDocument();
		expect(screen.getByText("ToolUploadInfo")).toBeInTheDocument();
		expect(screen.getByText("ToolUploadPicture")).toBeInTheDocument();
	});

	it("renders ToolEditFormat, ToolEditAiCheck, and ToolEditPicture when progress is 'edit'", () => {
		mockUseProgress.mockReturnValue({ progress: "edit" });

		render(<ToolPage />);

		expect(screen.getByText("ToolProgress")).toBeInTheDocument();
		expect(screen.getByText("ToolNavigation")).toBeInTheDocument();
		expect(screen.getByText("ToolEditFormat")).toBeInTheDocument();
		expect(screen.getByText("ToolEditAiCheck")).toBeInTheDocument();
		expect(screen.getByText("ToolEditPicture")).toBeInTheDocument();
	});

	it("renders ToolDownloadButtons and ToolDownloadPreview when progress is 'download'", () => {
		mockUseProgress.mockReturnValue({ progress: "download" });

		render(<ToolPage />);

		expect(screen.getByText("ToolProgress")).toBeInTheDocument();
		expect(screen.getByText("ToolNavigation")).toBeInTheDocument();
		expect(screen.getByText("ToolDownloadButtons")).toBeInTheDocument();
		expect(screen.getByText("ToolDownloadPreview")).toBeInTheDocument();
	});
});
