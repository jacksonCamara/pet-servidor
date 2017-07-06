import { Entity } from './entity'

export interface Endereco {
    rua: string;
    numeroResidencia: string;
    bloco: string;
    apartamento: string;
    complemento: string;
    edificio: string;
    bairro: string;
    cep: string;
    cidade: string;
    uf: string;
    pontoReferencia: string;
}

export interface Telefone {
    numero: string
}

export interface Cliente extends Entity, Telefone, Endereco {
    nome: string;
    cpf: string;
    sexo: string;
    dataNascimento: string;
    telefones: Telefone[];
    enderecos: Endereco[]
}