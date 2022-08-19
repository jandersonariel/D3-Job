import React from "react";

import { Container, Group } from "library-caiol.sousa";

import * as A from "../../assets";

import { MainContent } from "./MainContent";

import * as S from "./styles";

export const HowItWorks = () => (
  <Container direction="column" maxW="block">
    <Group direction="column" maxW="block">
      <S.ContainerImg
        transform="transform: translateY(10px)"
        transformMobile="transform: translateY(3px)"
      >
        <S.Img src={A.imgs.up_png} alt="" />
      </S.ContainerImg>

      <Container
        radius="none"
        justify="center"
        maxW="block"
        direction="column"
        align="center"
        mobileResponsive
        pos="relative"
        minH={770}
        bgColor="#5A5A5A"
      >
        <MainContent />
      </Container>

      <S.ContainerImg>
        <S.Img src={A.imgs.down_png} alt="" />
      </S.ContainerImg>
    </Group>
  </Container>
);
