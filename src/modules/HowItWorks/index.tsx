import React from "react"

import * as C from '../../components';
import * as A from '../../Assets'

import { MainContent } from './MainContent';

import * as S from './styles';

export const HowItWorks = () => (
  <C.Container direction='column' width="block" maxWidth='block' padding={'0'}>
    <S.Group>
    
      <S.ContainerImg 
        transform='transform: translateY(10px)'
        transformMobile='transform: translateY(3px)'
      > 
        <S.Img src={A.imgs.up_png} alt=""/>  
      </S.ContainerImg>
    
      <C.Container radius="none" bgColor="primary" width="block" maxWidth='block' padding={'0'} minHeight={770}>
        <MainContent/>
      </C.Container>
  
      <S.ContainerImg>  
        <S.Img src={A.imgs.down_png} alt=""/> 
      </S.ContainerImg> 
     
    </S.Group>
  </C.Container>
)