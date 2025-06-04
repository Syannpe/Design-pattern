"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @version v1.0
 * @ClassNmae: Client
 * @Description: desc
 * @Author: SYANNPE
 */
var ProxyPoint_1 = require("./ProxyPoint");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.main = function (args) {
        // 创建代售点类对象
        var proxyPoint = new ProxyPoint_1.default();
        proxyPoint.sell();
    };
    return Client;
}());
exports.default = Client;
Client.main([]);
