import { MainContainer, TextEntryTitle } from "@/sub-components";
import TextEntryForm from "@/sub-components/text-entry/text-entry-form";
import { Box } from "@chakra-ui/react";

const TextEntry = () => {
  return (
    <Box>
      <MainContainer>
        <TextEntryTitle />
        <TextEntryForm />
      </MainContainer>
    </Box>
  );
};

export default TextEntry;
