import React from "react";

import * as C from '../../components';
import * as A from '../../assets';

import * as S from './styles';
import * as CT from './content';

export const Contacts = () => (
  <C.Container justify="space-between" position="relative" direction="column" maxWidth="default" mobileResponsive gap={[30, 15]} padding="15px">
    <>
      <S.ContainerImg id='contact'>  
        <S.Img src={A.imgs.peopleTalk} alt="" />
      </S.ContainerImg>  
  
      <S.Group>
        <S.Title> Contatos </S.Title>

        {CT.contatos.map(({ img, name, url }) => 
          <S.SubGroup key={name} href={url} target="_blank">
            
            <S.Logo>  
              <S.Img src={img} alt="" />
            </S.Logo>

            {name}

          </S.SubGroup>
        )}
      </S.Group>

      <S.Copyright> Direitos Autorais Day3 - Desenvolvido por Unnameds </S.Copyright>
    </>
  </C.Container>
)