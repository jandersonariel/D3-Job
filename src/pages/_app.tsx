import React from "react";
import type { AppProps } from "next/app";
import { GlobalStyle } from "../global";
import { ThemeProvider } from "styled-components";
import { colors } from "../global";
import { QueryClient, QueryClientProvider } from "react-query";

import { Header, Main } from "../layout";

export const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={colors}>
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
        <GlobalStyle />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
