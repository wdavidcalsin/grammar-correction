import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const { OPENAI_API_KEY } = process.env;

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function handler(req: NextApiRequest, res: NextApiResponse) {
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

  if (!completion) {
    console.log("The query was incorrect and there was no response.");
    return res.status(400).closed;
  }

  res.status(200).json(completion.data.choices[0].text);
}

export default handler;
