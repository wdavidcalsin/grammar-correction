import { IGrammarCorrectionContext } from "@/types";

export const textGrammarModel = {
  entryText: "",
  outputText: "",
};

export const GrammarCorrectionModel: IGrammarCorrectionContext = {
  textGrammar: textGrammarModel,
  reducerGrammar: { handleChangeEntryText: () => null },
};
