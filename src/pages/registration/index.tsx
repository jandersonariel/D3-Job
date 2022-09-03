import React from "react";

import { Container, Group, Description } from "library-caiol.sousa";

import * as A from "../../assets";
import * as C from "../../components";
import { Header } from "../../layout";

import { Opc } from "./opc";
import { imgButtons } from "./content";

import * as S from "./styles";

const Registration = () => (
  <>
    <Header menuOpc={<Opc href={{ pathname: "/" }} label="login" />} />
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
                <Description text={description} align="center" width={275} />

                <C.CustomLink
                  href={{ pathname: href.pathname }}
                  label=""
                  type="buttonLink"
                >
                  <C.Button
                    weight="regular"
                    color="white"
                    font="large"
                    size="variant"
                    height={180}
                    title={name}
                    pad="15px 60px"
                  >
                    {icon}
                  </C.Button>
                </C.CustomLink>
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
