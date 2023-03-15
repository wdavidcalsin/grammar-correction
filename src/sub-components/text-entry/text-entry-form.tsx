import { useColors } from "@/constants";
import { useGrammarCorrection } from "@/context";
import { Box, Button, Spinner, Stack, Text, Textarea } from "@chakra-ui/react";
import * as React from "react";
import { IoMdSend } from "react-icons/io";

const TextEntryForm = () => {
  const { customSecondary, textPrimary, customPrimary } = useColors();
  const { handleChangeEntryText, handleClickCorrect, setIsLengthTextEntry } =
    useGrammarCorrection().reducerGrammar;
  const { entryText, isLengthTextEntry, isLoadingMessage } =
    useGrammarCorrection().textGrammar;

  React.useEffect(() => {
    setIsLengthTextEntry();
  }, [entryText, setIsLengthTextEntry]);

  return (
    <Stack
      spacing={"3"}
      display={"grid"}
      placeItems="center"
      marginTop={"2rem"}
    >
      <Box display={"grid"} placeItems="center" gap={"1rem"}>
        <Textarea
          size="sm"
          resize={"vertical"}
          placeholder="Write the question"
          width={["xs", "md", "lg"]}
          height={["48"]}
          bgColor={customSecondary}
          color={textPrimary}
          border="none"
          focusBorderColor={customPrimary}
          onChange={handleChangeEntryText}
          fontSize="1rem"
        />
        <Text color={isLengthTextEntry ? "green" : "red"}>Min 3 word</Text>
        <Button
          colorScheme={"white"}
          color="white"
          bgColor={customPrimary}
          display="flex"
          alignItems={"center"}
          gap="1rem"
          borderRadius="2rem"
          fontWeight={"semibold"}
          fontSize=".8rem"
          paddingX="2rem"
          _hover={{
            opacity: "0.8",
          }}
          onClick={handleClickCorrect}
          isDisabled={!isLengthTextEntry}
        >
          Correct
          <Box fontSize={"1.1rem"}>
            {isLoadingMessage ? <Spinner size={"sm"} /> : <IoMdSend />}
          </Box>
        </Button>
      </Box>
    </Stack>
  );
};

export default TextEntryForm;
