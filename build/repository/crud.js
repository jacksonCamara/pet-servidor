"use strict";
var CRUD = (function () {
    function CRUD(model) {
        this.model = model;
    }
    CRUD.prototype.list = function () {
        return this.model.find();
    };
    CRUD.prototype.find = function (id) {
        console.log("repository find Cliente");
        console.log(id);
        return this.model.findOne({ id: id });
    };
    CRUD.prototype.add = function (entity) {
        var cliente = new this.model(entity);
        return cliente.save();
    };
    CRUD.prototype.findNome = function (nome) {
        return this.model.find({ nome: nome });
    };
    CRUD.prototype.update = function (dado) {
        console.log("repository update Cliente");
        return this.model.findByIdAndUpdate(dado.id, dado);
    };
    return CRUD;
}());
exports.CRUD = CRUD;
//# sourceMappingURL=crud.js.map