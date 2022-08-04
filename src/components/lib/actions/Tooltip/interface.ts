import { ReactNode } from 'react';

export interface ITooltipStyles {
  placement?: 'downBegin' | 'downMiddle' | 'downLast';
}
export interface ITooltipProps extends ITooltipStyles {
  children: ReactNode;
  label: string;
}
