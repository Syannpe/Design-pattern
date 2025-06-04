"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @version v1.0
 * @ClassNmae: Client
 * @Description: desc
 * @Author: SYANNPE
 */
var Computer_1 = require("./Computer");
var SDAdapter_1 = require("./SDAdapter");
var SDcardImpl_1 = require("./SDcardImpl");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.main = function (args) {
        // 创建计算机对象
        var computer = new Computer_1.default();
        // 读取SD卡中的数据
        var msg1 = computer.readSD(new SDcardImpl_1.default());
        console.log(msg1);
        console.log("-".repeat(20));
        // 读取TF卡中的数据
        var msg2 = computer.readSD(new SDAdapter_1.default());
        console.log(msg2);
    };
    return Client;
}());
exports.default = Client;
Client.main([]);
