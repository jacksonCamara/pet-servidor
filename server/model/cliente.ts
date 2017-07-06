import { model, Schema, Document } from 'mongoose'
import { Cliente as ClienteEntity } from '../entity/cliente';

const EnderecoSchema = new Schema({
    rua: { type: String },
    numeroResidencia: { type: String },
    bloco: { type: String },
    apartamento: { type: String },
    complemento: { type: String },
    edificio: { type: String },
    bairro: { type: String },
    cidade: { type: String },
    uf: { type: String },
    pontoReferencia: { type: String },
})

const TelefoneSchema = new Schema({
    numero: { type: String }
});

const schema = new Schema({
    nome: { type: String },
    cpf: { type: String },
    sexo: { type: String },
    dataNascimento: { type: String },
    telefones: [TelefoneSchema],
    enderecos: [EnderecoSchema]
})



export const Cliente = model<ClienteEntity & Document>('Cliente', schema)
     /*
const cliente = new Cliente(
    {
            "nome": "Jackson Camara",
            "email": "aaaaaaa",
            "password": "aaaaaaa",
            "telefones": [
                {
                    "numero": "aaaaaaa"
                },
                 {
                    "numero": "aaaaaaa"
                },
                {
                    "numero": "aaaaaaa"
                }
            ],
            "enderecos": [
                {
                    "rua": "aaaeuua",
                    "numeroResidencia": "aaaaaaa",
                    "bairro": "aaaaaaa",
                    "cidade": "aaaaaaa",
                    "estado": "aaaaaaa"
                },
                {
                    "rua": "aaaaaaa",
                    "numeroResidencia": "aaaaaaa",
                    "bairro": "aaaaaaa",
                    "cidade": "aaaaaaa",
                    "estado": "aaaaaaa"
                }
            ]
        })
   
        cliente.save().then(dado =>{
            console.log("de certo")
            console.log(dado)
        }).catch(error =>{
            console.log("deu errado")
            console.log(error)
        })


Cliente.find().then(c =>{
    console.log(JSON.stringify(c))
}).catch(error =>{
    console.log(error)
})

*/