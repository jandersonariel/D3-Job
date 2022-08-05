import { InputHTMLAttributes } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  readOnly?: boolean;
  value?: string;
  defaultValue?: string;
  onBlur?: () => void;
  onKeyUp?: () => void;
  id?: string;
  isLoading?: boolean;

  clear?: boolean;
  type?: string;
  size?: 'block' | any;
  error?: boolean;
  tooltip?: string;
  transform?: 'capitalize' | 'lowercase' | 'uppercase';

  mask?:
    | 'email'
    | 'billingZipCode'
    | 'text'
    | 'cellphone'
    | 'document'
    | 'date'
    | 'shortDate'
    | 'creditCard'
    | 'placa'
    | 'cvv3'
    | 'cvv4'
    | 'name'
    | 'number'
    | 'textAndNumber';
}
