export interface IAuthWorker {
  email: string,
  password: string
}

export interface IWorker {
  id: string,
  email: string,
  cpf_cnpj: string,
  nameComplet: string,
  description: string,
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
  skills: [
    {
      name: string,
      description: string,
      timeExp: string
    }
  ]
}

export interface ISignupWorker {
  email: string,
  cpf_cnpj: string,
  nameComplet: string,
  description: string,
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
  password: string,
  skills: [
    {
      name: string,
      description: string,
      timeExp: string
    }
  ]
}

export interface IEditWorker {
    id: string,
    email: string,
    cpf_cnpj: string,
    nameComplet: string,
    description: string,
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
    password: string,
    skills: [
      {
        name: string,
        description: string,
        timeExp: string
      }
    ]
  }
