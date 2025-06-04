"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Computer = /** @class */ (function () {
    function Computer() {
    }
    //     从SD卡中读取数据
    Computer.prototype.readSD = function (sdCard) {
        if (sdCard == null) {
            return "读取SD卡出错了";
        }
        else {
            return sdCard.readSD();
        }
    };
    return Computer;
}());
exports.default = Computer;
