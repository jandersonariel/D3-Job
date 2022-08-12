import React from "react";

import * as I from "./interface";
import * as S from "./styles";

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
  minHeight,
  position,
}: I.containerProps) => (
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
    minH={minHeight}
    pos={position}
  >
    {children}
  </S.Container>
);
