import React from "react";
import { render, screen } from "@testing-library/react";

import { Input } from "../input";

jest.mock("@/utils/cn", () => ({
	cn: jest.fn((...classes: string[]) => classes.join(" ")),
}));

describe("Input", () => {
	it("renders the input", () => {
		render(<Input type="text" />);

		const input = screen.getByRole("textbox");
		expect(input).toBeInTheDocument();
	});

	it("renders the input with the correct type", () => {
		render(
			<Input
				data-testid="pw"
				type="password"
			/>
		);

		const input = screen.getByTestId("pw");
		expect(input).toHaveAttribute("type", "password");
	});

	it("forwards ref to the input element", () => {
		const ref = React.createRef<HTMLInputElement>();
		render(
			<Input
				type="text"
				ref={ref}
			/>
		);

		expect(ref.current).toBeInstanceOf(HTMLInputElement);
	});
});
