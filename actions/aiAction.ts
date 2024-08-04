"use server";

import { uploadAndCheckOpenAI } from "@/lib/openAiLib";

import { AiMessage } from "@/types/aiMessage";

const accessCode = process.env.ACCESS_CODE;

export const checkBiometricalPicture = async (
	base64Image: string,
	inputAccessCode: FormDataEntryValue | null
): Promise<AiMessage | string> => {
	if (inputAccessCode !== accessCode) {
		return "Wrong access code.";
	}

	const message = await uploadAndCheckOpenAI(base64Image);
	if (!message) {
		return "Error receiving message.";
	}

	const reply: AiMessage = JSON.parse(message) as AiMessage;
	if (typeof reply.approved !== "boolean" || !reply.message) {
		return "Error parsing JSON.";
	}

	return reply;
};
