import { Colors } from "@/constants";
import { Box } from "@chakra-ui/react";
import * as React from "react";
import { Navbar } from "../navbar";

interface PropLayout {
  children: React.ReactElement;
}

const Layout = ({ children }: PropLayout) => {
  const { bgSecondary } = Colors();

  return (
    <Box minHeight="100vh" bgColor={bgSecondary}>
      <Navbar />
      <Box paddingTop={"5rem"}>{children}</Box>
    </Box>
  );
};

export default Layout;
