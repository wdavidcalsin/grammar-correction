export interface IReducerGrammar {
  handleChangeEntryText: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleClickCorrect: () => void;
  setIsLengthTextEntry: () => void;
}

export interface ITextGrammar {
  entryText: string;
  isLengthTextEntry: boolean;
  outputText: string;
}

export interface IGrammarCorrectionContext {
  textGrammar: ITextGrammar;
  reducerGrammar: IReducerGrammar;
}
