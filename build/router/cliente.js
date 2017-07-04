"use strict";
var express_1 = require("express");
var cliente_1 = require("../controller/cliente");
exports.cliente = express_1.Router();
var controller = new cliente_1.Cliente();
exports.cliente.get('/', function (request, response) {
    controller.list(request, response);
});
exports.cliente.post('/', function (request, response) {
    console.log("entrou no get router/cliente");
    controller.add(request, response);
});
//# sourceMappingURL=cliente.js.map