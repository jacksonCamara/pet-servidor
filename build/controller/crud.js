"use strict";
var HttpStatus = require("http-status-codes");
var error_1 = require("../repository/error");
var CRUD = (function () {
    function CRUD(service) {
        this.service = service;
    }
    CRUD.prototype.list = function (request, response) {
        var entities = this.service.list();
        return response.json(entities);
    };
    CRUD.prototype.add = function (request, response) {
        console.log("entrou no list controller/crud/cliente");
        var entity = request.body;
        return this.service.add(entity).then(function (ser) {
            return response
                .status(HttpStatus.CREATED)
                .json(ser);
        }).catch(function (error) {
            if (error === error_1.Error.duplicateKey) {
                return response
                    .status(HttpStatus.BAD_REQUEST)
                    .json("Entity has some duplicate unique key.");
            }
            return response
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .json();
        });
    };
    return CRUD;
}());
exports.CRUD = CRUD;
//# sourceMappingURL=crud.js.map