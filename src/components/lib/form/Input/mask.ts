import emailMask from 'text-mask-addons/dist/emailMask';

export const email = emailMask;
export const placa = [
  /[A-Za-z]/,
  /[A-Za-z]/,
  /[A-Za-z]/,
  '-',
  /[0-9]/,
  /[0-9A-Za-z]/,
  /[0-9]/,
  /[0-9]/,
];

export const billingZipCode = [
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  '-',
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
];

export const cellphone = [
  '(',
  /[1-9]/,
  /[1-9]/,
  ')',
  ' ',
  /[0-9*]/,
  ' ',
  /[0-9*]/,
  /[0-9*]/,
  /[0-9*]/,
  /[0-9*]/,
  '-',
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
];

export const agency = [/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];

export const account = [
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  '-',
  /[0-9A-z]/,
];

export const functional = [
  /[0-9A-z]/,
  /[0-9A-z]/,
  /[0-9A-z]/,
  /[0-9A-z]/,
  /[0-9A-z]/,
  /[0-9A-z]/,
  /[0-9A-z]/,
  /[0-9A-z]/,
  /[0-9A-z]/,
  /[0-9A-z]/,
];

export const document = [
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  '.',
  /[0-9*]/,
  /[0-9*]/,
  /[0-9*]/,
  '.',
  /[0-9*]/,
  /[0-9*]/,
  /[0-9*]/,
  '-',
  /[0-9*]/,
  /[0-9*]/,
];

export const date = [
  /[*0-9]/,
  /[0-9]/,
  '/',
  /[*0-9]/,
  /[0-9]/,
  '/',
  /[0-9]/,
  /[*0-9]/,
  /[*0-9]/,
  /[0-9]/,
];

export const shortDate = [
  /[0-9]/,
  /[0-9]/,
  '/',
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
  /[0-9]/,
];

export const creditCardDefault = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];
export const creditCardDiners = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];
export const creditCardAmex = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const cvv3 = [/\d/, /\d/, /\d/];
export const cvv4 = [/\d/, /\d/, /\d/, /\d/];
