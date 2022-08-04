import React from "react";
import type { AppProps } from 'next/app'
import { GlobalStyle } from "../global";
import { ThemeProvider } from 'styled-components';
import { colors } from '../global'
import Layout from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider theme={colors}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp