import { checkBiometricalPicture } from "../aiAction";
import { uploadAndCheckOpenAI } from "@/lib/openAiLib";
import { AiMessage } from "@/types/aiMessage";

jest.mock("@/lib/openAiLib", () => ({
	uploadAndCheckOpenAI: jest.fn(),
}));

describe("checkBiometricalPicture", () => {
	const originalEnv = process.env;

	beforeEach(() => {
		jest.resetModules();
		process.env = { ...originalEnv };
	});

	afterEach(() => {
		process.env = originalEnv;
	});

	it("throws an error if the access code is incorrect", async () => {
		const base64Image = "base64string";
		const inputAccessCode = "wrong-code";

		const result = await checkBiometricalPicture(base64Image, inputAccessCode);
		expect(result).toEqual("Wrong access code.");
	});

	it("throws an error if uploadAndCheckOpenAI returns null", async () => {
		const base64Image = "base64string";
		const inputAccessCode = process.env.ACCESS_CODE || "";
		(uploadAndCheckOpenAI as jest.Mock).mockResolvedValue(null);

		const result = await checkBiometricalPicture(base64Image, inputAccessCode);
		expect(result).toEqual("Error receiving message.");
	});

	it("throws an error if reply.approved is not boolean or reply.message is empty or doesn't exist", async () => {
		const base64Image = "base64string";
		const inputAccessCode = process.env.ACCESS_CODE || "";
		const invalidAiMessage = { approved: "true", message: "" };
		(uploadAndCheckOpenAI as jest.Mock).mockResolvedValue(JSON.stringify(invalidAiMessage));

		const result = await checkBiometricalPicture(base64Image, inputAccessCode);
		expect(result).toEqual("Error parsing JSON.");
	});

	it("returns a parsed AiMessage if everything is correct", async () => {
		const base64Image = "base64string";
		const inputAccessCode = process.env.ACCESS_CODE || "";
		const aiMessage: AiMessage = { approved: true, message: "Valid message" };
		(uploadAndCheckOpenAI as jest.Mock).mockResolvedValue(JSON.stringify(aiMessage));

		const result = await checkBiometricalPicture(base64Image, inputAccessCode);
		expect(result).toEqual(aiMessage);
	});
});
