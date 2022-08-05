import React from "react";
import type { AppProps } from 'next/app'
import { GlobalStyle } from "../global";
import { ThemeProvider } from 'styled-components';
import { colors } from '../global'

import { Header, Main } from '../layout';

export const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={colors}>
    <Header />
    <Main>  
      <Component {...pageProps} /> 
    </Main>
    <GlobalStyle />
  </ThemeProvider>
)

export default MyApp