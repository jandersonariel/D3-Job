import * as yup from "yup";
import { validations } from "library-caiol.sousa";

const {
  name,
  date,
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
  date: date({}),
  email: email({}),
  cellphone: cellphone({}),
  password: weakPassword({}),
  passwordConfirm: passwordConfirm({}),
});
