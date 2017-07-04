"use strict";
var CRUD = (function () {
    function CRUD(repository) {
        this.repository = repository;
    }
    CRUD.prototype.list = function () {
        return this.repository.list();
    };
    CRUD.prototype.add = function (user) {
        console.log("entrou nolist service/crud/cliente");
        return this.repository.add(user);
    };
    return CRUD;
}());
exports.CRUD = CRUD;
//# sourceMappingURL=crud.js.map