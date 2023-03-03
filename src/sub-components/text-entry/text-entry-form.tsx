import { Colors } from "@/constants";
import { useGrammarCorrection } from "@/context";
import { Box, Button, Stack, Textarea } from "@chakra-ui/react";

const TextEntryForm = () => {
  const { customSecondary, textPrimary, customPrimary } = Colors();
  const { handleChangeEntryText, handleClickCorrect } =
    useGrammarCorrection().reducerGrammar;

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
          bgColor={customSecondary}
          color={textPrimary}
          border="none"
          focusBorderColor={customPrimary}
          onChange={handleChangeEntryText}
        />
        <Button
          colorScheme={"white"}
          color="white"
          bgColor={customPrimary}
          borderRadius="2rem"
          fontWeight={"semibold"}
          fontSize=".8rem"
          paddingX="2.5rem"
          _hover={{
            opacity: "0.8",
          }}
          onClick={handleClickCorrect}
        >
          Correct
        </Button>
      </Box>
    </Stack>
  );
};

export default TextEntryForm;
