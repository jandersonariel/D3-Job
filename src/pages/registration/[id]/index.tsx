/* eslint-disable no-constant-condition */
import React from "react";
import { useRouter } from "next/router";
import { FormikProvider, useFormik } from "formik";

import { Container, Group, Input } from "library-caiol.sousa";

import { GetStaticPaths, GetStaticProps } from "next";
import { Button } from "../../../components";
import { Header } from "../../../layout";

import { Opc } from "../opc";

import * as S from "../styles";
import * as I from "./interface";
import * as F from "./form";

export async function getStaticProps(context: { params: { id: string } }) {
  const { id } = context.params;
  return { props: { id } };
}

export async function getStaticPaths() {
  const paths = [
    {
      params: {
        id: "client",
      },
    },
    {
      params: {
        id: "provider",
      },
    },
  ];

  return { paths, fallback: false };
}

const ClientOrProvider = ({ id }: I.ClientOrProviderProps) => {
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

  return (
    <>
      <Header menuOpc={<Opc href="/registration" label="voltar" />} />
      <Container
        direction="column"
        maxW={1280}
        pad={[15, 20, 15, 20]}
        gap={[30, 50]}
      >
        <>
          {id === "client" && <h1> REGISTRANDO-SE COMO CLIENTE </h1>}
          {id === "provider" && <h1> REGISTRANDO-SE COMO PRESTADOR </h1>}
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
  );
};

export default ClientOrProvider;
