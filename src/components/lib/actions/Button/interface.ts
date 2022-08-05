import { ReactNode } from "react";
import { sizeProps, colorProps, fontProps, weightProps } from "../../../../global";

export interface ButtonProps {
  title: string;
  children?: ReactNode;
  disabled?: boolean;
  height?: number;
  size?: sizeProps;
  font?: fontProps;
  color?: colorProps;
  isLoading?: boolean;
  weight?: weightProps;
}

export interface ButtonStyles {
  height?: number | 'max-content';
  size?: sizeProps
  font?: fontProps;
  color?: colorProps;
  weight?: weightProps;
}
