"use strict";
var error_1 = require("./error");
var CRUD = (function () {
    function CRUD(model, mapper) {
        this.model = model;
        this.mapper = mapper;
    }
    CRUD.prototype.list = function () {
        var _this = this;
        //ClienteModel.
        var documentsQuery = this.model.find();
        return documentsQuery.exec().then(function (doc) {
            return doc.map(_this.mapper.toEntity);
        });
    };
    CRUD.prototype.find = function (id) {
        var _this = this;
        return this.model.findOne({ id: id }).then(function (doc) {
            if (!doc) {
                return undefined;
            }
            else {
                return _this.mapper.toEntity(doc);
            }
        });
    };
    CRUD.prototype.add = function (entity) {
        var _this = this;
        console.log("entrou nolist repository/crud/cliente");
        console.log(entity);
        return this.mapper.toDocument(entity).save().then(function (doc) {
            console.log(doc);
            var teste = _this.mapper.toEntity(doc);
            console.log('=======================================');
            console.log(teste);
            return teste;
        }).catch(function (error) {
            throw error_1.Error.duplicateKey;
        });
    };
    return CRUD;
}());
exports.CRUD = CRUD;
//# sourceMappingURL=crud.js.map