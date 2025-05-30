"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SimpleCoffeeFactory_1 = require("./SimpleCoffeeFactory");
var CoffeeStore = /** @class */ (function () {
    function CoffeeStore() {
    }
    CoffeeStore.prototype.orderCoffee = function (type) {
        var store = new SimpleCoffeeFactory_1.default();
        return store.createCoffee(type);
    };
    ;
    return CoffeeStore;
}());
exports.default = CoffeeStore;
