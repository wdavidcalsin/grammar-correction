import { Colors } from "@/constants";
import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const TextEntryTitle = () => {
  const { customPrimary, txtSecondary } = Colors();

  return (
    <Stack spacing={"3"} display={"grid"} placeItems="center">
      <Heading fontSize="3.5rem" fontWeight={"normal"}>
        Grammar Correction
      </Heading>
      <Image
        src="/grammar-correction.png"
        alt="Logo Pencil"
        width={30}
        height={30}
      />
      <Text color={txtSecondary}>Search engine for intelligent learning</Text>
      <Button
        as={"a"}
        leftIcon={<FaGithub />}
        colorScheme={customPrimary}
        borderRadius=".7rem"
        variant="outline"
        fontWeight={"normal"}
        color={txtSecondary}
        fontSize={".8rem"}
        paddingY={"0rem"}
        href={"https://github.com/wdavidcalsin/smart-learn"}
      >
        View Code
      </Button>
    </Stack>
  );
};

export default TextEntryTitle;
