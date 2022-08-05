export interface IClient   {
    id: string,
    email: string,
    cpf_cnpj: string,
    nameComplet: string,
    phone: string,
    cellphone: string,
    address: {
      street: string,
      district: string,
      city: string,
      state: string,
      cep: string,
      number: string,
      complement: string,
      country: string
    },
    dateBirth: Date,
    isStore: boolean,
    operation: {
      monday: string,
      tuesday: string,
      wednesday: string,
      thursday: string,
      friday: string,
      saturday: string,
      sunday: string
    },
    descriptionStore: string
  }
  
  export interface ISignup {
    email: string,
    nameUser: string,
    nameComplet: string,
    phones: string[],
    dateBirth: Date,
    password: string
  }

export interface IAuthClient {
  email: string,
  password: string
}