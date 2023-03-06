import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

console.log("Openai 1111");

const API_KEY = "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";

const configuration = new Configuration({
  apiKey: API_KEY,
});
const openai = new OpenAIApi(configuration);

console.log("Openai 2222");

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Openai 3333");

  const entryText = req.query.entryText;

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Correct this to standard English, no autocomplete:\n\n${entryText}`,
    temperature: 0.3,
    max_tokens: 100,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0,
  });

  console.log("Openai is run...");

  res.status(200).json(completion.data.choices[0].text);
}

export default handler;
