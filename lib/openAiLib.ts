"use server";

import OpenAI from "openai";

import { instructions } from "@/data/openAiInstructions";

const openai = new OpenAI({ dangerouslyAllowBrowser: true });

export const uploadAndCheckOpenAI = async (base64Image: string): Promise<string | null> => {
	const response = await openai.chat.completions.create({
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
	return response.choices[0].message.content;
};
