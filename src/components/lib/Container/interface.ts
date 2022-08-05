import { colorProps } from "../../../global";

type gaps = [desktop: number, mobile?: number ]

export interface containerProps {
  children: JSX.Element; 
  gap?: gaps;
  direction?: 'row' | 'column'
  maxWidth?: number | 'max-content';
  maxHeight?: number | 'max-content';
  bgColor?: colorProps;
  width?: number | 'max-content';
  height?: number | 'max-content';
  padding?: number;
  border?: {
    size: number;
    color: colorProps;
    style: 'solid' | 'double' | 'dashed'
  };
  radius?: {
    size: number;
    style: '%' | 'px'
  }
  align?: 'center' | 'flex-end' | 'flex-start';
  justify?: 'center' | 'flex-end' | 'flex-start' | 'space-between' | 'space-around' | 'space-evenly'
  mobileResponsive?: boolean;
}

export interface containerStyleProps {
  gap?: gaps;
  direction?: 'row' | 'column'
  bgColor?: colorProps;
  maxW?: number | 'max-content';
  maxH?: number | 'max-content';
  w?: number | 'max-content';
  h?: number | 'max-content';
  pad?: number;
  border?: {
    size: number;
    color: colorProps;
    style: 'solid' | 'double' | 'dashed'
  };
  radius?: {
    size: number;
    style: '%' | 'px'
  }
  align?: 'center' | 'flex-end' | 'flex-start';
  justify?: 'center' | 'flex-end' | 'flex-start' | 'space-between' | 'space-around' | 'space-evenly'
  mobileResponsive?: boolean;
}