import { TextEntry } from "@/components";
import { GrammarCorrectionProvider } from "@/context";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/grammar-correction.png" />
      </Head>
      <main>
        <GrammarCorrectionProvider>
          <TextEntry />
        </GrammarCorrectionProvider>
      </main>
    </>
  );
}