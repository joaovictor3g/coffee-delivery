import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import { theme } from "@/styles/theme";
import { Header } from "@/components/layout/Header";
import { Page } from "@/components/layout/Page";
import { CartContextProvider } from "@/contexts/CartContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CartContextProvider>
        <Page>
          <Header />
          <Component {...pageProps} />
        </Page>
      </CartContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
