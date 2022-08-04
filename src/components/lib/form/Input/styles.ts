import styled, { css } from 'styled-components';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import MaskedInput from 'react-text-mask';
import { colors } from '../../../../global';

interface ContainerProps {
  disabled?: boolean;
  error?: boolean;
  size?: 'block';
}
interface IconProps {
  size: number | string;
}

const passwordIcon = css`
  height: 1.5rem;
  width: 1.5rem;
  fill: ${colors.secondary};
`;

export const Toggle = styled.button.attrs(() => ({ type: 'button' }))`
  all: unset;
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
`;

export const Icon = styled.img<IconProps>``;

export const Flag = styled.img`
  width: 45px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-86%);
`;

export const FieldWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const Loading = styled.div`
  position: absolute;
  right: 8px;
`;

export const Field = styled(MaskedInput)`
  background-position: 100% 5% !important;
  background: transparent;
  border: none;
  box-sizing: border-box;
  border-bottom: 1px solid ${colors.primary};
  padding-bottom: 8px;
  color: ${colors.primary};
  font-size: 1.125rem;
  line-height: 150%;
  border-radius: 0;

  ::placeholder {
    font-size: 1.125rem;
    line-height: 150%;
    text-transform: none;
    color: ${colors.primary};
  }
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    box-shadow: 0 0 0px 1000px ${colors.primary} inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  &:focus {
    border-bottom: 2px solid ${colors.primary};
  }

  ${({ transform }: any) =>
    transform &&
    css`
      text-transform: ${transform};
    `}
`;

export const InputGroup = styled.div``;

export const Label = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  gap: 8px;

  font-size: 0.875rem;

  color: ${colors.primary};
`;

export const ClosedEye = styled(AiFillEyeInvisible)`
  ${passwordIcon};
`;

export const OpenedEye = styled(AiFillEye)`
  ${passwordIcon}
`;

export const Container = styled.div<ContainerProps>`
  min-height: 56px;

  line-height: 150%;

  ${({ error }) =>
    error &&
    css`
      ${Field} {
        border-color: ${colors.error};
      }
      ${Label} {
        color: ${colors.error};
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.4;

      ${Field} {
        cursor: not-allowed;
      }
    `}
`;
