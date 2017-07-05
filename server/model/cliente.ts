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
    id: {
        type: String,
        unique: true
    },
    nome: { type: String },
    email: { type: String },
    password: { type: String },
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