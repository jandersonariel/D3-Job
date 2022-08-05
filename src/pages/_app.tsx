import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import type { AppProps } from "next/app";
import GlobalStyle from "../../styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyle />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
