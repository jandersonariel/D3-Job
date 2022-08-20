import { fontProps, sizeProps } from "../../../global";

export type OpcsProps = {
  name: string;
  link: string;
  id: string;
  size?: sizeProps;
  font?: fontProps;
}[];
