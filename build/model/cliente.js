"use strict";
var mongoose_1 = require("mongoose");
var EnderecoSchema = new mongoose_1.Schema({
    rua: { type: String },
    numeroResidencia: { type: String },
    bairro: { type: String },
    cidade: { type: String },
    estado: { type: String },
});
var TelefoneSchema = new mongoose_1.Schema({
    numero: { type: String }
});
var schema = new mongoose_1.Schema({
    id: {
        type: String,
        unique: true
    },
    nome: { type: String },
    email: { type: String },
    password: { type: String },
    telefones: [TelefoneSchema],
    enderecos: [EnderecoSchema]
});
exports.Cliente = mongoose_1.model('Cliente', schema);
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
//# sourceMappingURL=cliente.js.map