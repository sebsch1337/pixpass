"use server";

import { uploadAndCheckOpenAI } from "@/lib/openAiLib";

import { AiMessage } from "@/types/aiMessage";

const accessCode = process.env.ACCESS_CODE;

export const checkBiometricalPicture = async (
	base64Image: string,
	inputAccessCode: FormDataEntryValue | null
): Promise<AiMessage> => {
	if (inputAccessCode !== accessCode) {
		const error = new Error();
		error.message = "Wrong access code.";
		throw error;
	}

	const message = await uploadAndCheckOpenAI(base64Image);
	if (!message) {
		const error = new Error();
		error.message = "Error receiving message.";
		throw error;
	}

	const reply: AiMessage = JSON.parse(message) as AiMessage;
	if (typeof reply.approved !== "boolean" || !reply.message) {
		const error = new Error();
		error.message = "Error parsing JSON.";
		throw error;
	}

	return reply;
};
