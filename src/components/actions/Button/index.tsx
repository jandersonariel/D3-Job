import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { ButtonProps } from "./interface";

import * as S from "./styles";

export const Button = ({
  title,
  children,
  isLoading,
  ...rest
}: ButtonProps) => (
  <S.Container {...rest}>
    {isLoading ? (
      <ClipLoader size={16} />
    ) : (
      <>
        <p>{title}</p>
        {children && <S.Icon> {children} </S.Icon>}
      </>
    )}
  </S.Container>
);
