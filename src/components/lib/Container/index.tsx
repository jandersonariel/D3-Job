import React from "react";
import { containerProps } from "./interface";

import * as S from './styles';

export const Container = ({
  children,
  gap,
  direction,
  maxWidth,
  maxHeight,
  width,
  height,
  bgColor,
  padding,
  radius,
  border,
  align,
  justify,
  mobileResponsive,
}: containerProps) => (
  <S.Container 
    direction={direction}
    gap={gap}
    maxW={maxWidth}
    maxH={maxHeight}
    bgColor={bgColor}
    w={width}
    h={height}
    pad={padding}
    radius={radius}
    border={border}
    align={align}
    justify={justify}
    mobileResponsive={mobileResponsive}
  > 
    {children}  
  </S.Container>
)