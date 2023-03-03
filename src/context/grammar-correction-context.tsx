import { GrammarCorrectionModel } from "@/model";
import { IGrammarCorrectionContext, ITextGrammar } from "@/types";
import * as React from "react";

interface PropsGrammarCorrection {
  children: React.ReactNode;
}

export const GrammarCorrectionContext =
  React.createContext<IGrammarCorrectionContext>(GrammarCorrectionModel);

export const GrammarCorrectionProvider = ({
  children,
}: PropsGrammarCorrection) => {
  const [textGrammar, setTextGrammar] = React.useState<ITextGrammar>({
    entryText: "",
    outputText: "",
  });

  const reducerGrammar = {
    handleChangeEntryText: () => null,
    handleClickCorrect: () => null,
  };

  const valueGrammar = {
    textGrammar: textGrammar,
    reducerGrammar: reducerGrammar,
  };

  return (
    <GrammarCorrectionContext.Provider value={valueGrammar}>
      {children}
    </GrammarCorrectionContext.Provider>
  );
};

export const useGrammarCorrection = () =>
  React.useContext(GrammarCorrectionContext);
