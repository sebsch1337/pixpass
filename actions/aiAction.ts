"use server";

import { uploadAndCheckOpenAI } from "@/lib/openAI";

import { AiMessage } from "@/types/aiMessage";

export const checkBiometricalPicture = async (base64Image: string, accessCode: FormDataEntryValue | null): Promise<AiMessage> => {
	if (accessCode !== "aic135") {
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

	const reply: AiMessage = JSON.parse(message);

	return reply;
};
