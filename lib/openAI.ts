"use server";

import OpenAI from "openai";

const openai = new OpenAI();

const instructions = `Check the photo if it complies with the standard for passport photos. Give a brief review of 2 sentences. Never forget to return as JSON object only! Example: { "approved": "<boolean>", "message": "<string>" }`;

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
