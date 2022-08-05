import React from "react";
import ClipLoader from 'react-spinners/ClipLoader';
import { ButtonProps } from "./interface";

import * as S from './styles';

export const Button = ({
  title,
  children,
  disabled,
  isLoading,
  size,
  height,
  font,
  color,
  weight,
}: ButtonProps) => (
 <S.Container 
    disabled={disabled} 
    size={size}
    height={height}
    font={font}
    color={color}
    weight={weight}
  >
    <>
      {isLoading 
        ? <ClipLoader size={16} />
        : 
        <>
          <p>{title}</p>
          { children && <S.Icon> {children} </S.Icon> }
        </>
      }
    </>
 </S.Container>
) 