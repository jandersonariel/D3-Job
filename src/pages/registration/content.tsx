import React from "react";

import { HrefProps } from "library-caiol.sousa";

import { Perfil, Services } from "../../components";

interface buttonProps {
  name: string;
  icon: JSX.Element;
  description: string;
  pad: [desktop: number, mobile: number];
  href: HrefProps;
}

export const imgButtons: buttonProps[] = [
  {
    name: "Vou ser Prestador",
    icon: <Services />,
    description:
      "Se no caso for prestar serviços para lojas e outras pessoas escolha <strong> PRESTADOR </strong>",
    pad: [17, 17],
    href: { defautlLink: "/registration/worker" },
  },
  {
    name: "Vou ser Client",
    icon: <Perfil />,
    description:
      "Quer apenas contratar um serviço selecione <strong> CLIENTE </strong>",
    pad: [22, 22],
    href: {
      defautlLink: "/registration/client",
    },
  },
];
