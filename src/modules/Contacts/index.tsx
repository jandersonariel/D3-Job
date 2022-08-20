import React from "react";

import { Container, Group } from "library-caiol.sousa";

import * as A from "../../assets";

import * as S from "./styles";
import * as CT from "./content";

export const Contacts = () => (
  <Container
    justify="space-between"
    pos="relative"
    maxW="default"
    mobileResponsive
    gap={[30, 15]}
    pad={[20, 30, 50, 50]}
  >
    <>
      <S.ContainerImg id="contact">
        <S.Img src={A.imgs.peopleTalk} alt="" />
      </S.ContainerImg>

      <Group
        direction="column"
        maxW="max-content"
        gap={[10, 10]}
        pad={[0, 0, 40, 0]}
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
