"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TFCardImpl = /** @class */ (function () {
    function TFCardImpl() {
    }
    TFCardImpl.prototype.readTF = function () {
        return "TFCard read msg: hello world TFCard";
    };
    TFCardImpl.prototype.writeTF = function (message) {
        console.log("TFCard write msg: " + message);
    };
    return TFCardImpl;
}());
exports.default = TFCardImpl;
