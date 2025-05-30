"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @version v1.0
 * @ClassNmae: Coffee
 * @Description: 咖啡基类
 * @Author: Syannpe
 */
var CoffeeStore_1 = require("./CoffeeStore");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.main = function (args) {
        var store = new CoffeeStore_1.default();
        var coffee = store.orderCoffee("american");
        console.log(coffee.getName());
    };
    return Client;
}());
exports.default = Client;
Client.main([]);
