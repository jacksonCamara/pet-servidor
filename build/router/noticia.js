"use strict";
var express_1 = require("express");
//import { Produto as ProdutoController } from '../controller/produto'
exports.noticia = express_1.Router();
//const controller = new ProdutoController()
exports.noticia.get('/', function (request, response) {
    console.log("entrou no get");
    // controller.list(request, response)
});
exports.noticia.post('/', function (request, response) {
    // controller.add(request, response)
    console.log("entrou no post");
});
//# sourceMappingURL=noticia.js.map