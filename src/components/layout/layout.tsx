import { useColors } from "@/constants";
import { Box } from "@chakra-ui/react";
import * as React from "react";
import { Footer } from "../footer";
import { Navbar } from "../navbar";

interface PropLayout {
  children: React.ReactElement;
}

const Layout = ({ children }: PropLayout) => {
  const { bgSecondary } = useColors();

  return (
    <Box minHeight="100vh" bgColor={bgSecondary}>
      <Navbar />
      <Box paddingTop={"5rem"}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
