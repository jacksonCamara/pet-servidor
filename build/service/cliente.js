"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var cliente_1 = require("../repository/cliente");
var crud_1 = require("./crud");
var Cliente = (function (_super) {
    __extends(Cliente, _super);
    function Cliente() {
        return _super.call(this, new cliente_1.Cliente()) || this;
    }
    return Cliente;
}(crud_1.CRUD));
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.js.map