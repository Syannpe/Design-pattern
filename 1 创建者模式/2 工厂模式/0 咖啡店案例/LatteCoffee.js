"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @version v1.0
 * @ClassNmae: Coffee
 * @Description: 咖啡基类
 * @Author: Syannpe
 */
var Coffee_1 = require("./Coffee");
var LatteCoffee = /** @class */ (function (_super) {
    __extends(LatteCoffee, _super);
    function LatteCoffee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LatteCoffee.prototype.getName = function () {
        return "拿铁咖啡";
    };
    ;
    return LatteCoffee;
}(Coffee_1.default));
exports.default = LatteCoffee;
