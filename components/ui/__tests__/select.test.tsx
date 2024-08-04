import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { Select, SelectTrigger, SelectContent, SelectItem } from "../select";

jest.mock("@/utils/cn", () => ({
	cn: jest.fn((...classes: string[]) => classes.join(" ")),
}));

beforeAll(() => {
	HTMLElement.prototype.hasPointerCapture = jest.fn();
	HTMLElement.prototype.scrollIntoView = jest.fn();
});

describe("Select", () => {
	it("renders the Select components correctly", async () => {
		render(
			<Select>
				<SelectTrigger data-testid="select-trigger">Select an option</SelectTrigger>
				<SelectContent>
					<SelectItem value="option1">Option 1</SelectItem>
					<SelectItem value="option2">Option 2</SelectItem>
				</SelectContent>
			</Select>
		);

		const trigger = screen.getByTestId("select-trigger");
		expect(trigger).toBeInTheDocument();
		expect(trigger).toHaveTextContent("Select an option");

		await userEvent.click(trigger);

		const option1 = await screen.findByText("Option 1");
		expect(option1).toBeInTheDocument();
	});
});
