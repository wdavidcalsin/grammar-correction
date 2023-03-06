import { Box, Button, Heading, useColorMode } from "@chakra-ui/react";
import { BiMoon, BiSun } from "react-icons/bi";
import { useColors } from "@/constants";
import { MainContainer } from "@/sub-components";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { bgPrimary, customSecondary, textPrimary, customPrimary } =
    useColors();

  return (
    <Box
      bg={bgPrimary}
      opacity={0.8}
      borderBottom="1px"
      borderColor={customSecondary}
    >
      <MainContainer
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        height="5rem"
      >
        <Heading
          color={textPrimary}
          fontSize="1.5rem"
          fontWeight={"light"}
          as="a"
          href="/"
        >
          Grammar Correction
        </Heading>

        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? (
            <BiSun fontSize="1.5rem" />
          ) : (
            <BiMoon fontSize="1.5rem" />
          )}
        </Button>
      </MainContainer>
    </Box>
  );
};

export default Navbar;
