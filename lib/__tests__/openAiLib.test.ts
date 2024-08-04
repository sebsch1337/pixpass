import OpenAI from "openai";

import { uploadAndCheckOpenAI } from "../openAiLib";

import { instructions } from "@/data/openAiInstructions";

jest.mock("openai");

const mockedOpenAI = OpenAI as jest.Mocked<typeof OpenAI>;

describe("uploadAndCheckOpenAI", () => {
	const mockCreate = jest.fn();

	const originalConsoleError = console.error;

	beforeAll(() => {
		mockedOpenAI.prototype.chat = {
			completions: {
				create: mockCreate,
			},
		} as any;
		console.error = jest.fn();
	});

	afterAll(() => {
		console.error = originalConsoleError;
	});

	beforeEach(() => {
		mockCreate.mockReset();
	});

	it("returns the message content from the OpenAI API response", async () => {
		const mockResponse = {
			choices: [{ message: { content: '{"approved": true, "message": "Photo meets the standards."}' } }],
		};

		mockCreate.mockResolvedValueOnce(mockResponse);

		const base64Image = "mockedBase64Image";
		const result = await uploadAndCheckOpenAI(base64Image);

		expect(result).toBe('{"approved": true, "message": "Photo meets the standards."}');
		expect(mockCreate).toHaveBeenCalledWith({
			model: "gpt-4o",
			messages: [
				{
					role: "user",
					content: [
						{ type: "text", text: instructions },
						{
							type: "image_url",
							image_url: {
								url: base64Image,
							},
						},
					],
				},
			],
			max_tokens: 300,
		});
	});

	it("returns null if there is no message content in the response", async () => {
		const mockResponse = {
			choices: [{ message: { content: null } }],
		};

		mockCreate.mockResolvedValueOnce(mockResponse);

		const base64Image = "mockedBase64Image";
		const result = await uploadAndCheckOpenAI(base64Image);

		expect(result).toBeNull();
	});

	it("handles errors thrown by the OpenAI API", async () => {
		const mockError = new Error("API error");
		mockCreate.mockRejectedValueOnce(mockError);

		const base64Image = "mockedBase64Image";
		await expect(uploadAndCheckOpenAI(base64Image)).rejects.toThrow("API error");
	});
});
