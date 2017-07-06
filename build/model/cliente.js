"use strict";
var mongoose_1 = require("mongoose");
var EnderecoSchema = new mongoose_1.Schema({
    cep: { type: String },
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
});
var TelefoneSchema = new mongoose_1.Schema({
    numero: { type: String }
});
var schema = new mongoose_1.Schema({
    nome: { type: String },
    cpf: { type: String },
    sexo: { type: String },
    dataNascimento: { type: String },
    telefones: [TelefoneSchema],
    enderecos: [EnderecoSchema]
});
exports.Cliente = mongoose_1.model('cliente', schema);
/*
const cliente = new Cliente(
       {
       "nome": "Maria da Silva",
       "cpf": "00000000000",
       "sexo": "f",
       "dataNascimento": "02/02/1997",
       "telefones": [
           {
               "numero": "47999999999"
           },
            {
               "numero": "47888888888"
           }
       ],
       "enderecos": [
           {
               "rua": "Antonio da Silva",
               "numeroResidencia": "500",
               "bairro": "São João",
               "cidade": "Itajaí",
               "estado": "SC"
           },
           {
               "rua": "Augusto da Rosa",
               "numeroResidencia": "600",
               "bairro": "Cordeiros",
               "cidade": "Itajaí",
               "estado": "SC"
           }
       ]
   })


Cliente.find().then(cliente =>{
console.log(JSON.stringify(cliente))
}).catch(error =>{
console.log(error)
})

*/ 
//# sourceMappingURL=cliente.js.map