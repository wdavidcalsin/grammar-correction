export const openaiRequest = async (entryText: string) => {
  const response = await fetch(`/api/openai/${entryText}`);

  const textOutput = await response.json();

  return textOutput;
};
