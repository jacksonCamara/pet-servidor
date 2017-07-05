"use strict";
var CRUD = (function () {
    function CRUD(repository) {
        this.repository = repository;
    }
    CRUD.prototype.list = function () {
        return this.repository.list();
    };
    CRUD.prototype.add = function (dado) {
        return this.repository.add(dado);
    };
    CRUD.prototype.find = function (id) {
        return this.repository.find(id);
    };
    CRUD.prototype.findNome = function (nome) {
        return this.repository.findNome(nome);
    };
    CRUD.prototype.update = function (dado) {
        return this.repository.update(dado);
    };
    return CRUD;
}());
exports.CRUD = CRUD;
//# sourceMappingURL=crud.js.map