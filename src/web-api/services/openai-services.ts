import { formatText } from "@/utilities";
import { openaiRequest } from "../request";

export const openaiServices = async (entryText: string) => {
  const outputText = await openaiRequest(entryText);
  
  return formatText(outputText);
};
