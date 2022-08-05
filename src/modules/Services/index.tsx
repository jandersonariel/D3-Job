import React from "react";

import { Container, Button, Wall } from "../../components";

import * as C from './content';
import * as S from './styles';

export const Services = () => (
  <Container direction="column" mobileResponsive={true} justify="flex-start" maxWidth={1266} gap={[130, 20]} padding="0 30px"> 
    <>

      <S.ContainerWall> <Wall /> </S.ContainerWall>  

      <S.Group>
        {C.imgButtons.map(({ name, icon }) => <Button key={name} weight="regular" color="white" font="large" size="variant" height={180} title={name}> {icon} </Button>)}
      </S.Group>  

    </>
  </Container>
)
