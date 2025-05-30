"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LatteCoffee_1 = require("./LatteCoffee");
var LatteCoffeeFactory = /** @class */ (function () {
    function LatteCoffeeFactory() {
    }
    LatteCoffeeFactory.prototype.createCoffee = function () {
        var coffee = new LatteCoffee_1.default();
        coffee.addMilk();
        coffee.addSugar();
        return coffee;
    };
    ;
    return LatteCoffeeFactory;
}());
exports.default = LatteCoffeeFactory;
