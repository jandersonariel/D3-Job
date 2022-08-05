import React from 'react';

import { ErrorContainer } from './styles';
import { IErrorMessageProps } from './interface';

export const ErrorMessage = ({ children }: IErrorMessageProps) => {
  return (
    <ErrorContainer>
      <span>{children}</span>
    </ErrorContainer>
  );
};

export type { IErrorMessageProps };
