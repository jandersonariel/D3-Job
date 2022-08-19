import React from "react";

import { Container, Group } from "library-caiol.sousa";

import * as A from "../../assets";

import * as S from "./styles";
import * as CT from "./content";

export const Contacts = () => (
  <Container
    justify="space-between"
    pos="relative"
    align="center"
    direction="column"
    maxW="default"
    mobileResponsive
    gap={{ desktop: 30, mobile: 15 }}
    pad={{ top: 20, bottom: 30, left: 50, right: 50 }}
  >
    <>
      <S.ContainerImg id="contact">
        <S.Img src={A.imgs.peopleTalk} alt="" />
      </S.ContainerImg>

      <Group
        direction="column"
        maxW="max-content"
        gap={{ desktop: 10 }}
        pad={{ top: 0, left: 0, bottom: 40, right: 0 }}
      >
        <S.Title> Contatos </S.Title>

        {CT.contatos.map(({ img, id, name, url }) => (
          <S.SubGroup key={id} href={url} target="_blank">
            <S.Logo>
              <S.Img src={img} alt="" />
            </S.Logo>

            {name}
          </S.SubGroup>
        ))}
      </Group>

      <S.Copyright>
        Direitos Autorais Day3 - Desenvolvido por Unnameds{" "}
      </S.Copyright>
    </>
  </Container>
);
