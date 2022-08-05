import React from 'react';

import { Container, Label, Description } from './styles';

import { ITooltipProps } from './interface';

export const Tooltip = ({
  children,
  label,
  placement = 'downBegin',
}: ITooltipProps) => (
  <Container placement={placement}>
    <Label placement={placement}>{label}</Label>
    <Description>{children}</Description>
  </Container>
);

export type { ITooltipProps };
