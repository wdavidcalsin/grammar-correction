import { Colors } from "@/constants";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { BiSearchAlt } from "react-icons/bi";

const SearchForm = () => {
  const { customSecondary, textPrimary, customPrimary } = Colors();

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
        >
         Correct
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchForm;
