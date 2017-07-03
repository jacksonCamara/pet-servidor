"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var router_1 = require("./router");
exports.app = express();
exports.app.use(cors());
exports.app.use(bodyParser.json());
exports.app.use(router_1.router);
//# sourceMappingURL=app.js.map