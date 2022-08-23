import { Inputs } from "library-caiol.sousa";

export const inputs1: Inputs[] = [
  {
    name: "name",
    label: {
      name: "Nome Completo",
      bold: true,
    },
  },
  {
    name: "cpf_cnpj",
    mask: "cpf_cnpj",
    label: {
      name: "CPF ou CNPJ",
      bold: true,
    },
  },
  {
    name: "phone",
    mask: "phone",
    label: {
      name: "Telefone",
      bold: true,
    },
  },
  {
    name: "cellphone",
    mask: "cellphone",
    label: {
      name: "Celular",
      bold: true,
    },
  },
  {
    name: "date",
    mask: "date",
    label: {
      name: "Data de nascimento",
      bold: true,
    },
  },
];

export const inputs2: Inputs[] = [
  {
    name: "mail",
    label: {
      name: "E-mail",
      bold: true,
    },
  },
  {
    name: "password",
    type: "password",
    label: {
      name: "Senha",
      bold: true,
      tooltip: "Sua senha deve conter letras maisculas, minusculas e numeros",
    },
  },
  {
    name: "passwordConfirm",
    type: "password",
    label: {
      name: "Confirmar Senha",
      bold: true,
    },
  },
  {
    name: "cep",
    mask: "cep",
    label: {
      name: "CEP",
      bold: true,
    },
  },
];
