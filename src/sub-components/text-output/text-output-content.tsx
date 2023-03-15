import { useGrammarCorrection } from "@/context";
import {
  Box,
  Heading,
  IconButton,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FaCopy } from "react-icons/fa";
import React from "react";
import { copyText } from "@/utilities";

const TextOutputContent = () => {
  const { outputText } = useGrammarCorrection().textGrammar;
  const copyStatusToast = useToast();

  const handleClickCopyText = () => {
    copyText(outputText);

    copyStatusToast({
      title: `Copy text`,
      status: "success",
      isClosable: true,
      icon: <FaCopy />,
    });
  };

  return (
    <Box display={"flex"} justifyContent={"center"} py="2rem">
      <Stack width={["xs", "md", "lg"]}>
        <Heading
          textAlign={"center"}
          fontSize={"1.2rem"}
          fontWeight={"semibold"}
        >
          Output
        </Heading>
        <Box
          bg={"rgba(0,0,0,.1)"}
          py="1.8rem"
          px={"1.5rem"}
          borderRadius=".5rem"
          position={"relative"}
        >
          <IconButton
            aria-label="Search database"
            icon={<FaCopy />}
            onClick={handleClickCopyText}
            position="absolute"
            top={1}
            right={1}
          />
          <Text>{outputText}</Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default TextOutputContent;
