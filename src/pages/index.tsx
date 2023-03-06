import Head from "next/head";
import { TextEntry, TextOutput } from "@/components";
import { GrammarCorrectionProvider } from "@/context";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <GrammarCorrectionProvider>
          <TextEntry />
          <TextOutput />
        </GrammarCorrectionProvider>
      </main>
    </>
  );
}
