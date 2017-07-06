"use strict";
var ClienteInterface = (function () {
    function ClienteInterface() {
    }
    ClienteInterface.prototype.createCliente = function (_a) {
        var _this = this;
        var id = _a.id, nome = _a.nome, cpf = _a.cpf, telefones = _a.telefones, enderecos = _a.enderecos;
        var telefone = telefones.map(function (t) { return _this.createTelefone(t); });
        var bairro = enderecos.map(function (e) { return _this.createEndereco(e); });
        return {
            id: id, nome: nome, cpf: cpf, telefone: telefone, bairro: bairro
        };
    };
    ClienteInterface.prototype.createClientes = function (data) {
        var _this = this;
        var teste = data.map(function (d) {
            return _this.createCliente(d);
        });
        return teste;
    };
    ClienteInterface.prototype.createTelefone = function (_a) {
        var numero = _a.numero;
        return { numero: numero };
    };
    ClienteInterface.prototype.createEndereco = function (_a) {
        var bairro = _a.bairro;
        return { bairro: bairro };
    };
    return ClienteInterface;
}());
exports.ClienteInterface = ClienteInterface;
//# sourceMappingURL=cliente-view-model.js.map