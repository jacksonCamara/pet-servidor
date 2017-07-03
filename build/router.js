"use strict";
var express = require("express");
var noticia_1 = require("./router/noticia");
exports.router = express.Router();
exports.router.use('/noticias', noticia_1.noticia);
//# sourceMappingURL=router.js.map