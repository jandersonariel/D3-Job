import * as yup from "yup";

export default yup.object().shape({
  search: yup.string().nullable().required("Digite algo para pesquisar."),
});
