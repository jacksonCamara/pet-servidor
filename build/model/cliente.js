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
    nome: { type: String },
    email: { type: String },
    password: { type: String },
    telefones: [TelefoneSchema],
    enderecos: [EnderecoSchema]
});
exports.Cliente = mongoose_1.model('Cliente', schema);
var c = new exports.Cliente;
console.log(c);
//# sourceMappingURL=cliente.js.map