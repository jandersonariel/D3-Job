import { ReactNode } from "react";
import { sizeProps, colorProps, fontProps, weightProps } from "../../../global";

export interface ButtonProps extends ButtonStyles {
  title: string;
  children?: ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
}

export interface ButtonStyles {
  height?: number | "max-content";
  size?: sizeProps;
  font?: fontProps;
  color?: colorProps;
  weight?: weightProps;
  pad?: string;
}
