"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var cliente_1 = require("../model/cliente");
var crud_1 = require("./crud");
var mapper_1 = require("./mapper");
var Cliente = (function (_super) {
    __extends(Cliente, _super);
    function Cliente() {
        var _this = this;
        var mapper = new mapper_1.DefaultMapper(cliente_1.Cliente);
        _this = _super.call(this, cliente_1.Cliente, mapper) || this;
        return _this;
    }
    return Cliente;
}(crud_1.CRUD));
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.js.map