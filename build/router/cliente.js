"use strict";
var express_1 = require("express");
var cliente_1 = require("../controller/cliente");
exports.cliente = express_1.Router();
var controller = new cliente_1.Cliente();
exports.cliente.get('/', function (request, response) {
    console.log("entrou no router cliente");
    controller.list(request, response);
});
exports.cliente.get('/:id', function (request, response) {
    controller.find(request, response);
});
exports.cliente.post('/', function (request, response) {
    controller.add(request, response);
});
exports.cliente.get('/nome/:nome', function (request, response) {
    controller.findNome(request, response);
});
exports.cliente.put('/:id', function (request, response) {
    controller.update(request, response);
});
exports.cliente.delete('/:id', function (request, response) {
    controller.delete(request, response);
});
//# sourceMappingURL=cliente.js.map