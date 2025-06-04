"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SDcardImpl = /** @class */ (function () {
    function SDcardImpl() {
    }
    SDcardImpl.prototype.readSD = function () {
        return "SDCard read msg: hello world TFCard";
    };
    SDcardImpl.prototype.writeSD = function (message) {
        console.log("SDCard write msg: " + message);
    };
    return SDcardImpl;
}());
exports.default = SDcardImpl;
