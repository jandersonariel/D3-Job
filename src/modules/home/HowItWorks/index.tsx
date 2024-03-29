import React from "react";

import { Container, Group } from "library-caiol.sousa";

import * as A from "../../../assets";

import { MainContent } from "./MainContent";

import * as S from "./styles";

export const HowItWorks = () => (
  <Container maxW="block">
    <Group direction="column" maxW="block">
      <S.ContainerImg
        transform="transform: translateY(10px)"
        transformMobile="transform: translateY(3px)"
      >
        <S.Img priority src={A.imgs.up_png} alt="upImg" />
      </S.ContainerImg>

      <Container
        maxW="block"
        minH={770}
        pad={[10, 15, 15, 10]}
        bgColor="#5A5A5A"
      >
        <MainContent />
      </Container>

      <S.ContainerImg>
        <S.Img priority src={A.imgs.down_png} alt="dowmImg" />
      </S.ContainerImg>
    </Group>
  </Container>
);
