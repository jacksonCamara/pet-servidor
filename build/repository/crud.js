"use strict";
var CRUD = (function () {
    function CRUD(model) {
        this.model = model;
    }
    CRUD.prototype.list = function () {
        return this.model.find();
    };
    CRUD.prototype.find = function (id) {
        return this.model.findOne({ _id: id });
    };
    CRUD.prototype.add = function (entity) {
        var cliente = new this.model(entity);
        return cliente.save();
    };
    CRUD.prototype.findNome = function (nome) {
        return this.model.find({ nome: nome });
    };
    CRUD.prototype.update = function (dado) {
        return this.model.findByIdAndUpdate(dado._id, dado);
    };
    CRUD.prototype.delete = function (id) {
        return this.model.remove({ _id: id });
    };
    return CRUD;
}());
exports.CRUD = CRUD;
//# sourceMappingURL=crud.js.map