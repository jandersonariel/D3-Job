import React from "react";
import { FormikProvider, useFormik } from "formik";

import { Container, Group, Input, Description } from "library-caiol.sousa";

export const Services = () => {
  const onSubmit = (): void => console.log(form.values);

  const form = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit,
  });
  return (
    <Container
      minH={600}
      justify="center"
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
          <h1 style={{ textIndent: "8px" }}>Qual serviço está procurando?</h1>
          <FormikProvider value={form}>
            <form onSubmit={form.handleSubmit} style={{ width: "100%" }}>
              <Group gap={[10, 10]}>
                <Group direction="column" align="flex-end" gap={[5, 5]}>
                  <Input
                    name="search"
                    placeholder="Digite aqui o serviço"
                    maxW="block"
                  />
                  <Description text="Lista de prestadores" />
                </Group>
                <button type="submit">search</button>
              </Group>
            </form>
          </FormikProvider>
        </Group>

        <Group gap={[20, 20]} direction="column" maxW="block">
          <h2>Sugestão de serviços</h2>
          <Group gap={[50, 50]}>
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
