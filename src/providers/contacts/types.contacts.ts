export type TContact = {
    id: number;
    name: string;
    email: string;
    telefone: string;
    createdAt: string;
    client: {
        id: number;
        name: string;
        email: string;
        telefone: string;
        createdAt: string;
    };
}

export type TContactRequest = {
    name: string;
    email: string;
    telefone: string;
}

export type TListContacts = {
    id: number;
    name: string;
    email: string;
    telefone: string;
    createdAt: string;
}[]

export type TContactResponse = {
    id: number;
    name: string;
    email: string;
    telefone: string;
}

export type TContactUpdate = {
    name?: string | undefined;
    email?: string | undefined;
    telefone?: string | undefined;
}

export type TContactClient = {
    name: string;
    email: string;
    telefone: string;
    client: {
        id: number;
        name: string;
        email: string;
        telefone: string;
        createdAt: string;
    };
}

export type TContactNoRelation = {
    id: number;
    name: string;
    email: string;
    telefone: string;
    createdAt: string;
}
