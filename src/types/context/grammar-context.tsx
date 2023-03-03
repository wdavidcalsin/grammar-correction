export interface IReducerGrammar {
  handleChangeEntryText: () => void;
}

export interface ITextGrammar {
  entryText: string;
  outputText: string;
}

export interface IGrammarCorrectionContext {
  textGrammar: ITextGrammar;
  reducerGrammar: IReducerGrammar;
}
