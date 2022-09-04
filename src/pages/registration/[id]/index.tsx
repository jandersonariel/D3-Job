import React, { useState } from "react";
import { FormikProvider, useFormik } from "formik";
import { useRouter } from "next/router";

import { Container, Group, Input, Modal } from "library-caiol.sousa";

import { Button } from "../../../components";
import { Header } from "../../../layout";

import { Opc } from "../opc";

import validationSchema from "./validations";
import { paths } from "./content";

import * as S from "./styles";
import * as I from "./interface";
import * as F from "./form";

export async function getStaticPaths() {
  return { paths, fallback: false };
}

export async function getStaticProps(context: I.GetStaticProps) {
  const { id } = context.params;
  return { props: { id } };
}

const ClientOrWorker = ({ id }: I.ClientOrWorkerProps) => {
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [modal, setModal] = useState({
    title: "",
    description: "",
  });
  const router = useRouter();

  const onSubmit = async () => {
    // setLoading(true);
    // try {
    //   const response = null; // logica para fazer a requisao do backend e logar
    //   if (response) router.push(id === "client" ? "/client" : "/registration");
    //   else throw Error;
    // } catch (error: any) {
    //   setModal({
    //     title: "Ocorreu um erro.",
    //     description: "testando modal para mensagem de erro do retorno da api",
    //   });
    //   setIsVisible(true);
    // } finally {
    //   setLoading(false);
    // }

    router.push(id === "client" ? "/client" : "/worker");
  };

  const form = useFormik({
    initialValues: {
      name: "",
      cpf_cnpj: "",
      phone: "",
      cellphone: "",
      date: "",
      email: "",
      password: "",
      passwordConfirm: "",
      cep: "",
    },
    validationSchema,
    validateOnChange: true,
    validateOnMount: true,
    validateOnBlur: true,
    onSubmit,
  });

  return (
    <>
      <Modal
        isVisible={isVisible}
        onClose={setIsVisible}
        title={modal.title}
        description={modal.description}
      />
      <Header
        menuOpc={<Opc href={{ defautlLink: "/registration" }} label="voltar" />}
      />
      <Container
        direction="column"
        maxW={1280}
        pad={[15, 20, 15, 20]}
        gap={[30, 50]}
      >
        <>
          <h1>
            REGISTRANDO-SE COMO {id === "client" ? "CLIENTE" : "PRESTADOR"}
          </h1>

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
              <Button
                // disabled={!(form.isValid && form.dirty) || form.isSubmitting || loading}
                isLoading={loading}
                type="submit"
                title="Enviar"
                pad="19px 30px"
              />
            </S.Form>
          </FormikProvider>
        </>
      </Container>
    </>
  );
};

export default ClientOrWorker;
