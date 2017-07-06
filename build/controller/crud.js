"use strict";
var response_handler_1 = require("../responses/response-handler");
var CRUD = (function () {
    function CRUD(service, tipo) {
        this.responseHandler = new response_handler_1.ResponseHandler();
        this.service = service;
    }
    CRUD.prototype.list = function (request, response) {
        var _this = this;
        this.service.list()
            .then(function (dado) {
            //   const clienteViewModel = new ClienteInterface();
            //  const teste = clienteViewModel.createClientes(dado);
            _this.responseHandler.onSuccess(response, dado);
        })
            .catch(function (error) {
            _this.responseHandler.onError(response, error, "Erro ao pesquisar " + _this.tipo);
        });
    };
    CRUD.prototype.add = function (request, response) {
        var _this = this;
        var entity = request.body;
        this.service.add(entity)
            .then(function (dado) {
            _this.responseHandler.onSuccess(response, dado);
        })
            .catch(function (error) {
            _this.responseHandler.onError(response, error, "Erro ao adiciionar " + _this.tipo);
        });
    };
    CRUD.prototype.find = function (request, response) {
        var _this = this;
        this.service.find(request.params.id)
            .then(function (dado) {
            _this.responseHandler.onSuccess(response, dado);
        })
            .catch(function (error) {
            _this.responseHandler.onError(response, error, "Erro ao pesquisar " + _this.tipo);
        });
    };
    CRUD.prototype.findNome = function (request, response) {
        var _this = this;
        this.service.findNome(request.params.nome)
            .then(function (dado) {
            _this.responseHandler.onSuccess(response, dado);
        })
            .catch(function (error) {
            _this.responseHandler.onError(response, error, "Erro ao pesquisar " + _this.tipo);
        });
    };
    CRUD.prototype.update = function (request, response) {
        var _this = this;
        var dado = request.body;
        this.service.update(dado)
            .then(function (dado) {
            _this.responseHandler.onSuccess(response, dado);
        })
            .catch(function (error) {
            _this.responseHandler.onError(response, error, "Erro ao pesquisar " + _this.tipo);
        });
    };
    return CRUD;
}());
exports.CRUD = CRUD;
//# sourceMappingURL=crud.js.map