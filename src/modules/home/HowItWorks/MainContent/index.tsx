import React from "react";
import Image from "next/image";
import { Container } from "library-caiol.sousa";

import * as A from "../../../../assets";

import * as S from "./styles";

export const MainContent = () => (
  <Container
    maxW={1366}
    align="flex-end"
    mobileResponsive
    pos="relative"
    minH={770}
    gap={[30, 30]}
  >
    <>
      <S.Paragraph id="how">
        <S.Title> Como funciona? </S.Title>

        <S.Text>
          Nosso objetivo nesse projeto é conseguir ajudar a compartilhar
          serviços de pessoas,
          <br /> por sua região.
          <br /> Para alguns de nós que moramos sozinhos em lugares novos as
          vezes precisamos de
          <br /> algum serviço, como troca de encanamento ou afiação e não
          conhecemos ninguém
          <br /> pela região, esse é o site ideial para encontrar pessoas para
          te ajudar.
          <br /> Não somente pessoas como lojas, precisam de manutenção em
          certas areas e não
          <br /> tem contato de ninguém então nesse site permitimos os cadastro
          de:
          <br />
          <br /> Consumidores
          <br />
          Prestadores
          <br />
          Lojas
          <br />
          <br />
          Porém só existem dois tipos de cadastro Cliente e Prestador, caso vá
          prestar serviços
          <br />
          se registre no site como Prestador e caso queira contratar registre-se
          no site como um cliente.
          <br />
          <br />
          Com um sistema de feedback para ambos os lados, tanto para quem pediu
          o serviço e quem o executou.
          <br />
          <br />
          Caso tenha alguma duvida, sugestão e feedback, envie um e-mail para:
          <br />
          <br />
          contato@gmail.com
        </S.Text>

        <S.SubGroup>
          <Image src={A.imgs.dollar} alt="" />
          <S.Alert> Ainda não realizamos pagamentos na plataforma </S.Alert>
        </S.SubGroup>
      </S.Paragraph>

      <S.CustomGroup flex-direction="column" align="center" maxW={462}>
        <S.Img priority src={A.imgs.graphs} alt="grafics" />
      </S.CustomGroup>
    </>
  </Container>
);
