import { Entity } from './entity'

export interface Endereco {
    rua: string;
    numeroResidencia: string;
    bairro: string;
    cidade: string;
}

export interface Telefone {
    numero: string
}

export interface Cliente extends Entity, Telefone, Endereco{
    nome: string;
    email: string;
    telefones: Telefone[];
    enderecos: Endereco[]
}