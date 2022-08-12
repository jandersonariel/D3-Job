import { colorProps } from "../../../../global";

type gaps = [desktop: number, mobile?: number];
type sizes = "maxContent" | "block" | "default";
type pos = "relative" | "absolute";
type align = "center" | "flex-end" | "flex-start";
type justify = "space-between" | "space-around" | "space-evenly";
type style = "solid" | "double" | "dashed";
export interface containerProps {
  children: JSX.Element;
  gap?: gaps;
  direction?: "row" | "column";
  maxWidth?: number | sizes;
  maxHeight?: number | sizes;
  minHeight?: number | sizes;
  bgColor?: colorProps;
  width?: number | sizes;
  height?: number | sizes;
  padding?: string;
  border?:
    | "none"
    | {
        size: number;
        color: colorProps;
        style: style;
      };
  radius?:
    | "none"
    | {
        size: number;
        style: "%" | "px";
      };
  align?: align;
  justify?: align | justify;
  mobileResponsive?: boolean;
  position?: pos;
}

export interface containerStyleProps {
  gap?: gaps;
  direction?: "row" | "column";
  bgColor?: colorProps;
  maxW?: number | sizes;
  maxH?: number | sizes;
  minH?: number | sizes;
  w?: number | sizes;
  h?: number | sizes;
  pad?: string;
  border?:
    | "none"
    | {
        size: number;
        color: colorProps;
        style: style;
      };
  radius?:
    | "none"
    | {
        size: number;
        style: "%" | "px";
      };
  align?: align;
  justify?: align | justify;
  mobileResponsive?: boolean;
  pos?: pos;
}
