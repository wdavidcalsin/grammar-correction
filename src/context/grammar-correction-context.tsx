import { GrammarCorrectionModel, textGrammarModel } from "@/model";
import {
  IGrammarCorrectionContext,
  IReducerGrammar,
  ITextGrammar,
} from "@/types";
import { stringSizeByWords } from "@/utilities";
import { openaiServices } from "@/web-api";
import * as React from "react";

interface PropsGrammarCorrection {
  children: React.ReactNode;
}

export const GrammarCorrectionContext =
  React.createContext<IGrammarCorrectionContext>(GrammarCorrectionModel);

export const GrammarCorrectionProvider = ({
  children,
}: PropsGrammarCorrection) => {
  const [textGrammar, setTextGrammar] =
    React.useState<ITextGrammar>(textGrammarModel);

  const reducerGrammar: IReducerGrammar = {
    handleChangeEntryText: (event) => {
      setTextGrammar((prev) => ({ ...prev, entryText: event.target.value }));
    },
    handleClickCorrect: async () => {
      if (!textGrammar.entryText || textGrammar.isLengthTextEntry == false)
        return;

      const outputGrammar = await openaiServices(textGrammar.entryText);

      setTextGrammar((prev) => ({ ...prev, outputText: outputGrammar }));
    },
    setIsLengthTextEntry: React.useCallback(() => {
      setTextGrammar((prev) => ({
        ...prev,
        isLengthTextEntry:
          stringSizeByWords(prev.entryText) >= 3 ? true : false,
      }));
    }, []),
  };

  const valueGrammar = {
    textGrammar: textGrammar,
    setTextGrammar: setTextGrammar,
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
