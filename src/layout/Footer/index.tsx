import React from "react";

import { Container, Group } from "library-caiol.sousa";

import * as A from "../../assets";
import * as C from "../../components";

import * as CT from "./content";
import * as S from "./styles";

export const Footer = () => (
  <S.Footer>
    <S.Divider />

    <Container
      minH={373}
      direction="column"
      pad={[15, 30, 0, 30]}
      justify="space-between"
    >
      <>
        <S.ContainerLogo>
          <C.Logo />
        </S.ContainerLogo>

        <Container
          mobileResponsive
          gap={[80, 50]}
          pad={[45, 15, 45, 15]}
          justify="space-between"
        >
          <>
            <Container mobileResponsive justify="space-between" gap={[80, 50]}>
              <>
                <Group direction="column" maxW="max-content">
                  {CT.day3.map(({ img, id, name, url }) => (
                    <S.SubGroup key={id} href={url} target="_blank">
                      <S.Logo>
                        <S.Img priority src={img} alt={`${id}icon`} />
                      </S.Logo>

                      {name}
                    </S.SubGroup>
                  ))}
                </Group>

                <Group direction="column" gap={[7, 7]}>
                  <S.Title>{CT.description.title}</S.Title>
                  <S.Paragraph>{CT.description.paragraph}</S.Paragraph>
                </Group>
              </>
            </Container>
            <Container
              mobileResponsive
              direction="row"
              justify="space-between"
              gap={[80, 0]}
            >
              <>
                <Group direction="column" maxW="max-content">
                  {CT.unnameds.map(({ img, id, name, url }) => (
                    <S.SubGroup key={id} href={url} target="_blank">
                      <S.Logo>
                        <S.Img priority src={img} alt={`${id}icon`} />
                      </S.Logo>

                      {name}
                    </S.SubGroup>
                  ))}
                </Group>
                <S.Unnameds>
                  <S.Img
                    priority
                    src={A.imgs.logoUnnameds}
                    alt="logo-unnameds"
                  />
                </S.Unnameds>
              </>
            </Container>
          </>
        </Container>
      </>
    </Container>
    <S.Divider>
      <h2>Direitos Autorais Day3 - Desenvolvido por Unnameds</h2>{" "}
    </S.Divider>
  </S.Footer>
);
