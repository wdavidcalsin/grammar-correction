import { useGrammarCorrection } from "@/context";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const TextOutputContent = () => {
  const { outputText } = useGrammarCorrection().textGrammar;
  return (
    <Stack justifyContent={"center"}>
      <Heading>Output</Heading>
      <Box>
        <Text width={["xs", "md", "lg"]}>{outputText}</Text>
      </Box>
    </Stack>
  );
};

export default TextOutputContent;
