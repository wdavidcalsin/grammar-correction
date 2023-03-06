import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Layout } from "@/components";
import { Theme } from "@/constants";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={Theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
