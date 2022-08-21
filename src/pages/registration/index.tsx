import React from "react";
import NextLink from "next/link";

import { Container, Group } from "library-caiol.sousa";

import * as A from "../../assets";
import { Header } from "../../layout";
import { Button } from "../../components";

import { Opc } from "./opc";
import { imgButtons } from "./content";

import * as S from "./styles";

const Registration = () => (
  <>
    <Header menuOpc={<Opc href="/" label="login" />} />
    <Container direction="column" pad={[15, 20, 15, 20]} gap={[70, 50]}>
      <>
        <S.Heading>
          Vamos criar a conta. <br />
          Primeiro escolha o tipo de conta que deseja criar
        </S.Heading>

        <Container
          mobileResponsive
          maxW="max-content"
          align="flex-end"
          gap={[200, 100]}
        >
          <>
            {imgButtons.map(({ name, icon, description, pad, href }) => (
              <Group
                maxW="max-content"
                direction="column"
                align="center"
                gap={pad}
                key={name}
              >
                <S.Description
                  dangerouslySetInnerHTML={{ __html: description }}
                />

                <NextLink href={href}>
                  <S.Link>
                    <Button
                      weight="regular"
                      color="white"
                      font="large"
                      size="variant"
                      height={180}
                      title={name}
                      pad="15px 60px"
                    >
                      {icon}
                    </Button>
                  </S.Link>
                </NextLink>
              </Group>
            ))}
          </>
        </Container>
      </>
    </Container>

    <S.ContainerImg>
      <S.Img priority src={A.imgs.up_png} alt="dowmImg" />
    </S.ContainerImg>
  </>
);

export default Registration;
