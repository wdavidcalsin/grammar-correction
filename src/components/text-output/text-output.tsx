import { useGrammarCorrection } from "@/context";
import { MainContainer, TextOutputContent } from "@/sub-components";
import { Box } from "@chakra-ui/react";

const TextOutput = () => {
  const { outputText } = useGrammarCorrection().textGrammar;

  return (
    <Box>
      <MainContainer>
        {!!outputText ? <TextOutputContent /> : null}
      </MainContainer>
    </Box>
  );
};

export default TextOutput;
