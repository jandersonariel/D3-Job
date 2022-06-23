import React from "react";
import type { AppProps } from 'next/app'
import GlobalStyle from "../../styles/global";
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme'
import Layout from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp