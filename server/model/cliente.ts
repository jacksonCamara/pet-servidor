import { model, Schema, Document } from 'mongoose'
import { Cliente as ClienteEntity } from '../entity/cliente';

const EnderecoSchema = new Schema({
    rua: { type: String },
    numeroResidencia: { type: String },
    bairro: { type: String },
    cidade: { type: String },
    estado: { type: String },
})

const TelefoneSchema = new Schema({
    numero: { type: String }
});

const schema = new Schema({
    nome: { type: String },
    email: { type: String },
    password: { type: String },
    telefones: [TelefoneSchema],
    enderecos: [EnderecoSchema]
})



export const Cliente = model<ClienteEntity & Document>('Cliente', schema)
const c = new Cliente
console.log(c)