import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const API_KEY = "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";

const configuration = new Configuration({
  apiKey: API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const entryText = req.query.entryText;

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Correct this to standard English:\n\n${entryText}`,
    temperature: 0.3,
    max_tokens: 100,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });

  res.status(200).json(await completion.data.choices[0].text);
}
