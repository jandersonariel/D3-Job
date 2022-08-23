import * as yup from "yup";
import { validations, regex } from "library-caiol.sousa";

const { phone } = regex;

const {
  name,
  dateWithRestrictionOfAge,
  cep,
  cpf_cnpj,
  email,
  cellphone,
  weakPassword,
  passwordConfirm,
} = validations;

export default yup.object().shape({
  name: name({}),
  cpf_cnpj: cpf_cnpj({}),
  cep: cep({}),
  date: dateWithRestrictionOfAge({}),
  email: email({}),
  cellphone: cellphone({}),
  password: weakPassword({}),
  passwordConfirm: passwordConfirm({}),

  phone: yup
    .string()
    .min(14, "Insira um telefone válido.")
    .nullable()
    .notRequired(),
});
