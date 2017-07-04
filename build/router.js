"use strict";
var express = require("express");
var cliente_1 = require("./router/cliente");
exports.router = express.Router();
exports.router.use('/clientes', cliente_1.cliente);
//# sourceMappingURL=router.js.map