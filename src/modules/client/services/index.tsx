import React from "react";
import { FormikProvider, useFormik } from "formik";

import { Container, Group, Input, Description } from "library-caiol.sousa";

import * as A from "../../../assets";

import validationSchema from "./validations";

import * as S from "./styles";

export const Services = () => {
  const onSubmit = (): void => console.log(form.values);

  const form = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema,
    validateOnChange: true,
    validateOnMount: true,
    validateOnBlur: true,
    onSubmit,
  });
  return (
    <Container
      minH={500}
      justify="flex-end"
      align="center"
      maxW={1280}
      gap={[80, 40]}
      direction="column"
      pad={[0, 20, 0, 20]}
    >
      <>
        <Group
          gap={[20, 20]}
          direction="column"
          justify="center"
          align="flex-start"
          maxW={1100}
        >
          <S.H1>Qual serviço está procurando?</S.H1>
          <FormikProvider value={form}>
            <S.Form onSubmit={form.handleSubmit}>
              <Group gap={[20, 20]}>
                <Group direction="column" align="flex-end" gap={[5, 5]}>
                  <Input
                    name="search"
                    placeholder="Digite aqui o serviço"
                    maxW="block"
                  />
                  <Description text="Lista de prestadores" />
                </Group>
                <S.Button type="submit">
                  <S.Img
                    src={A.imgs.searchLocation}
                    width="40px"
                    height="40px"
                  />
                </S.Button>
              </Group>
            </S.Form>
          </FormikProvider>
        </Group>

        <Group gap={[20, 20]} direction="column" maxW="block">
          <h2>Sugestão de serviços</h2>
          <Group gap={[50, 50]} pad={[0, 0, 0, 20]}>
            <Group direction="column" maxW="max-content">
              <li>Encanamento</li>
              <li>Troca de lampada</li>
              <li>Troca de chuveiro</li>
            </Group>
            <Group direction="column" maxW="max-content">
              <li>Porta</li>
              <li>Chaveiro</li>
              <li>Pedreiro</li>
            </Group>
          </Group>
        </Group>
      </>
    </Container>
  );
};
