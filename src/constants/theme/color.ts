import { useColorModeValue } from "@chakra-ui/react";

export const Colors = () => {
  const bgPrimary = useColorModeValue("#FFFFFF", "#1B1B1E");
  const bgSecondary = useColorModeValue("#FFFFFF", "#27272A");
  const textPrimary = useColorModeValue("#1B1B1E", "#FFFFFF");
  const txtSecondary = useColorModeValue("#27272A", "#8D8D90");
  const customPrimary = useColorModeValue("#312E81", "#312E81");
  const customSecondary = useColorModeValue("#D8D8D9", "#3F3F46");

  return {
    bgPrimary,
    bgSecondary,
    textPrimary,
    txtSecondary,
    customPrimary,
    customSecondary,
  };
};
