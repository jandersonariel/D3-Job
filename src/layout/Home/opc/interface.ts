import { fontProps, sizeProps } from "../../../global";

export type OpcsProps = {
  name: string;
  link: `/${string}` | `#${string}` | `https://${string}`;
  size?: sizeProps;
  font?: fontProps;
}[];
