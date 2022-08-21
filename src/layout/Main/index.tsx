import React from "react";

import { Container, Loading } from "library-caiol.sousa";

import * as I from "./interface";
import * as S from "./styles";

export const Main: React.FC<I.MainProps> = ({ children }) => (
  <S.Main>
    <Container
      justify="flex-start"
      direction="column"
      maxW="block"
      pos="relative"
      gap={[0, 30]}
      minH="100vh"
    >
      {children}
    </Container>
  </S.Main>
);
