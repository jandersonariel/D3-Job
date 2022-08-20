import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyle, colors } from "../global";

import { Header, Main } from "../layout";

export const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={colors}>
        <Main>
          <Component {...pageProps} />
        </Main>
        <GlobalStyle />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default MyApp;
