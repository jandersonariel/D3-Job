/* eslint-disable no-constant-condition */
import React from "react";
import { useRouter } from "next/router";
import { FormikProvider, useFormik } from "formik";

import { Container, Group, Input } from "library-caiol.sousa";

import { Button } from "../../components";
import { Header } from "../../layout";

import { Opc } from "./Opc";

import * as F from "./form";
import * as S from "./styles";

const Registration = () => {
  const router = useRouter();
  const query = router.query.id;

  const onSubmit = (): void => console.log(form.values);

  const form = useFormik({
    initialValues: {
      name: "",
      cpf_cnpj: "",
      phone: "",
      cellphone: "",
      date: "",
      mail: "",
      password: "",
      passwordConfirm: "",
      cep: "",
    },
    // validationSchema
    validateOnChange: true,
    validateOnMount: true,
    validateOnBlur: true,
    onSubmit,
  });

  return query === "client" || "provider" ? (
    <>
      <Header menuOpc={<Opc href="/registration" label="voltar" />} />
      <Container
        direction="column"
        maxW={1280}
        pad={[15, 20, 15, 20]}
        gap={[30, 50]}
      >
        <>
          {query === "client" && <h1> REGISTRANDO-SE COMO CLIENTE </h1>}
          {query === "provider" && <h1> REGISTRANDO-SE COMO PRESTADOR </h1>}
          <FormikProvider value={form}>
            <S.Form onSubmit={form.handleSubmit}>
              <Container mobileResponsive align="flex-start" gap={[130, 20]}>
                <>
                  <Group maxW={420} direction="column" gap={[25, 20]}>
                    {F.inputs1.map(({ name, label, mask, type }) => (
                      <Input
                        key={name}
                        type={type}
                        name={name}
                        label={label}
                        mask={mask}
                        border="outline"
                      />
                    ))}
                  </Group>

                  <Group maxW={420} direction="column" gap={[25, 20]}>
                    {F.inputs2.map(({ name, label, mask, type }) => (
                      <Input
                        key={name}
                        name={name}
                        type={type}
                        label={label}
                        mask={mask}
                        border="outline"
                      />
                    ))}
                  </Group>
                </>
              </Container>
              <Button title="Enviar" pad="19px 30px" />
            </S.Form>
          </FormikProvider>
        </>
      </Container>
    </>
  ) : null;
};

export default Registration;
