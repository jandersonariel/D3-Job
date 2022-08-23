import * as yup from "yup";

const error = {
  name: "Insira seu nome completo.",
  cpf_cnpj: "Insira um cpf/cnpj válido.",
  mail: "Insira um e-mail válido.",
  cep: "Insira um cep válido",
  cellphone: "Insira um celular válido.",
  phone: "Insira um telefone válido.",
  date: "Insira uma data de aniversario válida.",
  password: "Insira uma senha válida.",
};

export default yup.object().shape({
  name: yup
    .string()
    .min(3, error.name)
    .test("name", error.name, (value) => {
      if (value) return value.trim().split(" ").length >= 2;
      return false;
    }),

  cpf_cnpj: yup
    .string()
    .min(11, error.cpf_cnpj)
    .test("cpf_cnpj", error.cpf_cnpj, (value) => {
      if (value) return value.trim().length >= 1;
      return false;
    }),

  cep: yup
    .string()
    .min(9, error.cep)
    .test("cep", error.cep, (value) => {
      if (value) return value.trim().length >= 1;
      return false;
    }),

  date: yup
    .string()
    .min(10, error.date)
    .test("date", error.date, (value) => {
      if (value) return value.trim().length >= 1;
      return false;
    }),

  mail: yup
    .string()
    .min(5, error.mail)
    .email(error.mail)
    .test("mail", error.mail, (value) => {
      if (value) return value.trim().length >= 1;
      return false;
    }),

  phone: yup
    .string()
    .min(14, error.phone)
    .test("phone", error.phone, (value) => {
      if (value) return value.trim().length >= 1;
      return false;
    }),

  cellphone: yup
    .string()
    .min(16, error.cellphone)
    .test("cellphone", error.cellphone, (value) => {
      if (value) return value.trim().length >= 1;
      return false;
    }),

  password: yup
    .string()
    .min(8, "Senha muito curta.")
    .test("password", error.password, (value) => {
      if (value) return value.trim().length >= 1;
      return false;
    })
    .test("password", "Senha muito fraca, coloque uma mais forte", (value) => {
      if (value)
        return (
          value.length >= 1 &&
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/.test(
            value
          )
        );
      return false;
    }),

  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
});
