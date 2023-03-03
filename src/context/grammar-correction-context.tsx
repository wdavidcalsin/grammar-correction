import { GrammarCorrectionModel } from "@/model";
import {
  IGrammarCorrectionContext,
  IReducerGrammar,
  ITextGrammar,
} from "@/types";
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
  const [textGrammar, setTextGrammar] = React.useState<ITextGrammar>({
    entryText: "",
    outputText: "",
  });

  const reducerGrammar: IReducerGrammar = {
    handleChangeEntryText: (event) => {
      setTextGrammar((prev) => ({ ...prev, entryText: event.target.value }));
    },
    handleClickCorrect: async () => {
      if (!textGrammar.entryText) throw new Error("Input value not found.");

      const outputGrammar = await openaiServices(textGrammar.entryText);

      setTextGrammar((prev) => ({ ...prev, outputText: outputGrammar }));
    },
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
