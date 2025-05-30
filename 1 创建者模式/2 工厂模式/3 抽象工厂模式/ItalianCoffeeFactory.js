"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Trimisu_1 = require("./Trimisu");
var LatteCoffee_1 = require("./LatteCoffee");
var ItalianCoffeeFactory = /** @class */ (function () {
    function ItalianCoffeeFactory() {
    }
    ItalianCoffeeFactory.prototype.createDessert = function () {
        return new Trimisu_1.default();
    };
    ItalianCoffeeFactory.prototype.createCoffee = function () {
        var coffee = new LatteCoffee_1.default();
        coffee.addMilk();
        coffee.addSugar();
        return coffee;
    };
    ;
    return ItalianCoffeeFactory;
}());
exports.default = ItalianCoffeeFactory;
