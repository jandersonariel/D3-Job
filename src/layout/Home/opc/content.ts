import { OpcsProps } from "./interface";

export const help: OpcsProps = [
  {
    name: "Como funciona?",
    link: {
      pathname: "#how",
    },
  },
  {
    name: "Contatos",
    link: { pathname: "#contact" },
  },
];

export const registration: OpcsProps = [
  {
    name: "ENTRAR",
    link: { pathname: "/" },
  },
  {
    name: "REGISTRAR-SE",
    link: { pathname: "/registration" },
    size: "variant",
    font: "large",
  },
];
