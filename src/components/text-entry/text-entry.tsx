import { MainContainer, SearchForm, SearchTitle } from "@/sub-components";
import { Box } from "@chakra-ui/react";
import * as React from "react";

const TextEntry = () => {
  return (
    <Box>
      <MainContainer>
        <SearchTitle />
        <SearchForm />
      </MainContainer>
    </Box>
  );
};

export default TextEntry;
