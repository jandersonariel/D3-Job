import { fontProps, sizeProps } from "../../../global";

export type OpcsProps = {
  name: string;
  link: {
    pathname: `/${string}` | `#${string}` | `https://${string}`;
    rest?: object | undefined;
    as?: string | undefined;
  };
  size?: sizeProps;
  font?: fontProps;
}[];
