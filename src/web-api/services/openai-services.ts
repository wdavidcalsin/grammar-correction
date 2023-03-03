import { openaiRequest } from "../request";

export const openaiSer5vices = async (entryText: string) => {
  return await openaiRequest(entryText);
};
