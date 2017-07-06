"use strict";
var HTTPStatus = require("http-status");
var ResponseHandler = (function () {
    function ResponseHandler() {
    }
    ResponseHandler.prototype.onSuccess = function (res, data) {
        res.status(HTTPStatus.OK).json(data);
    };
    ResponseHandler.prototype.onSuccessNoContent = function (res) {
        res.status(HTTPStatus.NO_CONTENT).end();
    };
    ResponseHandler.prototype.onError = function (res, err, message) {
        console.log("Error: " + err);
        res.status(HTTPStatus.INTERNAL_SERVER_ERROR).send(message);
    };
    ResponseHandler.prototype.onErrorBadRequest = function (res, message) {
        res.status(HTTPStatus.BAD_REQUEST).send(message);
    };
    return ResponseHandler;
}());
exports.ResponseHandler = ResponseHandler;
//# sourceMappingURL=response-handler.js.map