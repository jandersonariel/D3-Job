import React, { useState, useEffect } from 'react';
import { useField } from 'formik';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import { BsInfoCircle } from 'react-icons/bs';

import { getCardFlag, getAsset } from '../../utils';

import { IInputProps } from './interface';

import { Tooltip } from '../../actions';

import * as masks from './mask';

import {
  Container,
  InputGroup,
  Label,
  FieldWrapper,
  Field,
  Loading,
  Toggle,
  ClosedEye,
  OpenedEye,
  Flag,
  Icon,
} from './styles';

import { ErrorMessage } from '../ErrorMessage';

const autoCorrectedDatePipe = createAutoCorrectedDatePipe('dd/mm/yyyy');
const autoCorrectedShortDatePipe = createAutoCorrectedDatePipe('mm/yyyy');
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const Input = ({
  type,
  isLoading,
  mask,
  size,
  disabled,
  label,
  tooltip,
  className,
  clear,
  id,
  ...rest
}: IInputProps) => {
  const [field, meta, helpers] = useField(rest);

  const [inputType, setInputType] = useState(type || 'text');

  useEffect(() => {
    if (meta.error && meta.touched) {
      const dataLayer = window.dataLayer || [];
      dataLayer.push({
        event: 'erro',
        codigo: undefined,
        servico: 'usuario',
        mensagem: meta.error,
      });
    }
  }, [meta.touched, meta.error]);

  const handleBlur = (event: any) => {
    field.onBlur(event);
  };

  const handleInputPassword = () => {
    setInputType((state: string) =>
      state === 'password' ? 'text' : 'password',
    );
  };

  const validateMask = (value: any) => {
    if (!mask) return false;

    if (mask === 'name') {
      if (!value) return false;
      return Array.from(value).map(
        () => /[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ* ]/,
      );
    }

    if (mask === 'text') {
      if (!value) return false;
      return Array.from(value).map(
        () => /[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\-,.* ]/,
      );
    }
    if (mask === 'textAndNumber') {
      if (!value) return false;
      return Array.from(value).map(
        () => /[0-9A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\-,.* ]/,
      );
    }

    if (mask === 'number') {
      if (!value) return false;
      return Array.from(value).map(() => /\d/);
    }

    if (mask === 'creditCard') {
      // Amex
      if (/^3[47][0-9]/.test(value.replace(' ', ''))) {
        return masks.creditCardAmex;
      }
      // Diners
      if (/^3(?:0[0-5]|[68][0-9])[0-9]/.test(value.replace(' ', ''))) {
        return masks.creditCardDiners;
      }
      // Default
      return masks.creditCardDefault;
    }
    return masks[mask] || false;
  };

  return (
    <Container
      size={size}
      disabled={disabled || isLoading}
      error={meta.touched && !!meta.error}
      className={className}
    >
      <InputGroup>
        {label && (
          <Label>
            <label htmlFor={id}>{label}</label>
            {tooltip && (
              <Tooltip label={tooltip}>
                <BsInfoCircle />
              </Tooltip>
            )}
          </Label>
        )}

        <FieldWrapper>
          <Field
            {...field}
            {...rest}
            type={inputType}
            mask={validateMask}
            guide={false}
            keepCharPositions
            onBlur={handleBlur}
            onPaste={e => inputType === 'password' && e.preventDefault()}
            disabled={disabled || isLoading}
          />

          {field.value && type === 'password' && (
            <Toggle onClick={handleInputPassword}>
              {inputType === 'password' ? (
                <ClosedEye size={20} />
              ) : (
                <OpenedEye size={20} />
              )}
            </Toggle>
          )}

          {/* Params: "creditCard"
          - Quando o botão for do tipo cartão, ele exibe a bandeira.
          */}
          {mask === 'creditCard' &&
            field.value &&
            field.value.replace(' ', '').length >= 14 && (
              <Flag
                title={`Bandeira ${getCardFlag(field.value)?.niceName}`}
                src={getCardFlag(field.value).url}
              />
            )}

          {/* Params: "clear"
          - Botão para limpar o campo, ao digitar aparece o X.
          */}
          {!disabled &&
            clear &&
            mask &&
            field.value &&
            type !== 'password' &&
            mask !== 'creditCard' && (
              <Toggle onClick={() => helpers.setValue('')} tabIndex={-1}>
                <Icon
                  size={10}
                  src={getAsset('images/extras/icon-input-reset.svg')}
                />
              </Toggle>
            )}
        </FieldWrapper>
      </InputGroup>

      {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
    </Container>
  );
};

export type { IInputProps };
