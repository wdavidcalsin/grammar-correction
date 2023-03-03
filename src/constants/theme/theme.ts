import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { fontFamily } from "./font";

export const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: fontFamily,
});

export default theme;
