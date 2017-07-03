"use strict";
var mongoose_1 = require("mongoose");
var mongoose = require("mongoose");
var app_1 = require("./app");
var Bluebird = require("bluebird");
mongoose.Promise = Bluebird;
mongoose_1.connect('localhost:27017/e-commerce')
    .then(function () {
    console.log('conectado ao banco de dados');
    app_1.app.listen(8080, function () {
        console.log('escutando na porta 8080');
    });
})
    .catch(console.error);
//# sourceMappingURL=server.js.map