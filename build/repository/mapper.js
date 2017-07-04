"use strict";
var DefaultMapper = (function () {
    function DefaultMapper(documentFactory) {
        this.documentFactory = documentFactory;
        this.toEntity = this.toEntity.bind(this);
        this.toDocument = this.toDocument.bind(this);
    }
    DefaultMapper.prototype.toEntity = function (document) {
        var documentValues = document._doc;
        var entityValues = {};
        for (var key in documentValues) {
            if (key === '_id' || key === '__v')
                continue;
            if (typeof documentValues[key] === 'object') {
                entityValues[key] = this.toEntity(documentValues[key]);
            }
            else {
                entityValues[key] = documentValues[key];
            }
        }
        return entityValues;
    };
    DefaultMapper.prototype.toDocument = function (entity, target) {
        var entityValues = entity;
        var documentValues = target || {};
        for (var key in entityValues) {
            documentValues[key] = entityValues[key];
        }
        return target || new this.documentFactory(documentValues);
    };
    return DefaultMapper;
}());
exports.DefaultMapper = DefaultMapper;
//# sourceMappingURL=mapper.js.map