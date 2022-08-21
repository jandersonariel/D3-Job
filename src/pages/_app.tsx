import React from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyle, colors } from "../global";

import { Main, Footer } from "../layout";

export const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();
  const { pathname } = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={colors}>
        <Main>
          <Component {...pageProps} />
        </Main>
        {pathname !== "/" && <Footer />}
        <GlobalStyle />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
