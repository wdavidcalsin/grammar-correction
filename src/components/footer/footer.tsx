import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { MainContainer } from "@/sub-components";

const Footer = () => {
  return (
    <Box>
      <MainContainer>
        <Box
          paddingY={"5rem"}
          color="#6D7074"
          display={"grid"}
          placeItems="center"
        >
          <Text>
            Built with <Link href="https://nextjs.org/">Next.js</Link> ,{" "}
            <Link href="https://chakra-ui.com/">ChakraUI</Link> and{" "}
            <Link href="http://vercel.com/">Vercel</Link>
          </Text>
        </Box>
      </MainContainer>
    </Box>
  );
};

export default Footer;
