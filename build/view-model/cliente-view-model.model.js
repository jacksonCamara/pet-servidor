"use strict";
var ClienteInterface = (function () {
    function ClienteInterface() {
    }
    ClienteInterface.prototype.createCliente = function (_a) {
        var id = _a.id, nome = _a.nome, cpf = _a.cpf, telefone = _a.telefone, bairro = _a.bairro;
        return {
            id: id, nome: nome, cpf: cpf, telefone: telefone, bairro: bairro
        };
    };
    ClienteInterface.prototype.createClientes = function (data) {
        var _this = this;
        return data.map(function (d) {
            return _this.createCliente(d);
        });
    };
    return ClienteInterface;
}());
exports.ClienteInterface = ClienteInterface;
//# sourceMappingURL=cliente-view-model.model.js.map