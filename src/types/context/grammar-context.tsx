export interface IReducerGrammar {
  handleChangeEntryText: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleClickCorrect: () => void;
}

export interface ITextGrammar {
  entryText: string;
  outputText: string;
}

export interface IGrammarCorrectionContext {
  textGrammar: ITextGrammar;
  reducerGrammar: IReducerGrammar;
}
