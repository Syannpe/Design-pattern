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
 * @ClassNmae: FriedRice
 * @Description: 炒面d，具体构件角色
 * @Author: SYANNPE
 */
var FastFood_1 = require("./FastFood");
var FriedRice = /** @class */ (function (_super) {
    __extends(FriedRice, _super);
    function FriedRice() {
        return _super.call(this, 12, "炒面") || this;
    }
    FriedRice.prototype.cost = function () {
        return this.price;
    };
    return FriedRice;
}(FastFood_1.default));
exports.default = FriedRice;
