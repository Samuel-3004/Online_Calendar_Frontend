export type TClient = {
  id: number;
  name: string;
  email: string;
  telefone: string;
  createdAt: string;
};

export type TClientRequest = {
  name: string;
  email: string;
  password: string;
  telefone: string;
};

export type TListClient = {
  id: number;
  name: string;
  email: string;
  telefone: string;
  createdAt: string;
}[];

export type TClientUpdate = {
  name?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  telefone?: string | undefined;
};

export type TClientContactsResponse = {
  id: number;
  name: string;
  email: string;
  password: string;
  telefone: string;
  createdAt: string;
  contacts?:
    | {
        id: number;
        name: string;
        email: string;
        telefone: string;
        createdAt: string;
      }[]
    | undefined;
};

export type TSession = {
    email: string;
    password: string;
}
 export type TResponseSession = {
    token: string;
}

export type TDataLogin = {
    token: string;
    user: {
        id: number;
        name: string;
        email: string;
        password: string;
        telefone: string;
        createdAt: string;
        contacts: {
              id: number;
              name: string;
              email: string;
              telefone: string;
              createdAt: string;
            }[]
      }
}

export type TUserLogin = {
  id: number;
  name: string;
  email: string;
  password: string;
  telefone: string;
  createdAt: string;
  contacts: {
        id: number;
        name: string;
        email: string;
        telefone: string;
        createdAt: string;
      }[]
}