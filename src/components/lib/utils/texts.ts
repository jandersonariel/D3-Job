/* eslint-disable radix */
import { cpf as validCPF } from 'cpf-cnpj-validator';
import valid from 'card-validator';

export const getAsset = (asset: string) => {
  const path = encodeURI(asset).replace(/\//g, '%2F');
  return `${process.env.REACT_APP_URL_LANDING_PAGE}/${path}`;
};


export const maskPhone = (v: string) => {
  v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/g, '$2'); // Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/^(\d{2})(\d)/g, '($1) $2'); // Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{4})$/, '$1-$2'); // Coloca hífen entre o quarto e o quinto dígitos
  return v;
};

export const maskPhoneWithoutHyphen = (v: string) => {
  v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/g, '$2'); // Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/^(\d{2})(\d)/g, '($1) $2'); // Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{4})$/, '$1 $2'); // Coloca espaço entre o quarto e o quinto dígitos
  return v;
};

export const getInitialsFromName = (name: string) => {
  const names = name.split(' ');
  let initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }

  return initials;
};

export const formatDate = (date: string, locale = 'pt-br') =>
  new Date(date).toLocaleDateString(locale);

export const getCardFlag = (cardNumber: string) => {
  const PORTO_CARD_INITIAL = [
    '412177',
    '415274',
    '415275',
    '484635',
    '446690',
    '536380',
    '536537',
    '532930',
    '553659',
    '512452',
    '519873',
  ];

  let flag = '';
  const cardNumberFormatted = cardNumber.replace(/[^0-9]+/g, '');
  const cardNumberValid = valid.number(cardNumberFormatted);

  if (cardNumberFormatted.length >= 14 && cardNumberValid?.card) {
    flag = cardNumberValid?.card?.type;

    const isPortoCard = PORTO_CARD_INITIAL.some(initial =>
      cardNumberFormatted.includes(initial),
    );

    if (isPortoCard)
      return {
        flag,
        url: getAsset('images/credit-card/porto.png'),
        cardCrypt: `•••• •••• •••• ${cardNumberFormatted.substring(-4)}`,
        niceName: `${cardNumberValid?.card?.niceType}, cartão Porto.`,
        cardNumberValid,
      };
    return {
      flag,
      url: getAsset(`images/credit-card/${flag}.png`),
      cardCrypt: `•••• •••• •••• ${cardNumberFormatted.substring(-4)}`,
      niceName: cardNumberValid?.card?.niceType,
      cardNumberValid,
    };
  }
  return {
    flag: 'Cartão',
    url: getAsset('images/credit-card/card.png'),
    cardCrypt: '•••• •••• •••• ••••',
    niceName: 'do Cartão',
  };
};

export const validateCpf = (cpf: string) => {
  const document = cpf.replace(/[^\d]+/g, '');
  return validCPF.isValid(document);
};

export const validateDate = (date: string) => {
  const newDate = new Date();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  const [monthDate, yearDate] = date.split('/');

  return (
    parseInt(yearDate) > year ||
    (parseInt(monthDate) >= month && parseInt(yearDate) >= year)
  );
};
