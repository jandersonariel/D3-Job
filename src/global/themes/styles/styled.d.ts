import "styled-components";
import { themeProps } from "../index";

declare module "styled-components" {
  export interface DefaultTheme extends themeProps {}
}
