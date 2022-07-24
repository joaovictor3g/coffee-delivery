import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import { theme } from "@/styles/theme";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Page>
        <Header />
        <Component {...pageProps} />
      </Page>
    </ChakraProvider>
  );
}

export default MyApp;
