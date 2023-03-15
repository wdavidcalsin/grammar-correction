import { IGrammarCorrectionContext, ITextGrammar } from "@/types";

export const textGrammarModel: ITextGrammar = {
  entryText: "",
  outputText: "",
  isLengthTextEntry: false,
  isLoadingMessage: false,
};

export const GrammarCorrectionModel: IGrammarCorrectionContext = {
  textGrammar: textGrammarModel,
  reducerGrammar: {
    handleChangeEntryText: () => null,
    handleClickCorrect: () => null,
    setIsLengthTextEntry: () => null,
  },
};
