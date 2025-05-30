"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AmericanCoffee_1 = require("./AmericanCoffee");
var LatteCoffee_1 = require("./LatteCoffee");
var CoffeeStore = /** @class */ (function () {
    function CoffeeStore() {
    }
    CoffeeStore.prototype.orderCoffee = function (type) {
        var res;
        switch (type) {
            case "american":
                res = new AmericanCoffee_1.default();
                break;
            case "latte":
                res = new LatteCoffee_1.default();
                break;
            default:
                res = new AmericanCoffee_1.default();
                break;
        }
        res.addSugar();
        res.addMilk();
        return res;
    };
    ;
    return CoffeeStore;
}());
exports.default = CoffeeStore;
