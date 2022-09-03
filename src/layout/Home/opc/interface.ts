import { HrefProps } from "library-caiol.sousa";

import { fontProps, sizeProps } from "../../../global";

export type OpcsProps = {
  name: string;
  link: HrefProps;
  size?: sizeProps;
  font?: fontProps;
}[];
