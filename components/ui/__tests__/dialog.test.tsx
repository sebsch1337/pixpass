import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogFooter,
	DialogTitle,
	DialogDescription,
	DialogClose,
} from "../dialog";

jest.mock("@/utils/cn", () => ({
	cn: jest.fn((...classes: string[]) => classes.join(" ")),
}));

describe("Dialog", () => {
	it("renders the Dialog components correctly", async () => {
		render(
			<Dialog>
				<DialogTrigger>Open Dialog</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Dialog Title</DialogTitle>
					</DialogHeader>
					<DialogDescription>Dialog description goes here.</DialogDescription>
					<DialogFooter>
						<button>Close</button>
					</DialogFooter>
					<DialogClose>Close</DialogClose>
				</DialogContent>
			</Dialog>
		);

		const trigger = screen.getByText(/open dialog/i);
		expect(trigger).toBeInTheDocument();

		userEvent.click(trigger);

		const title = await screen.findByText(/dialog title/i);
		expect(title).toBeInTheDocument();

		const description = await screen.findByText(/dialog description goes here/i);
		expect(description).toBeInTheDocument();

		const closeButton = await screen.findAllByText(/close/i);
		expect(closeButton).toHaveLength(3);
	});
});
