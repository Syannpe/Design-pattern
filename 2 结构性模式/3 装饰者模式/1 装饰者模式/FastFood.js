"use strict";
/**
 * @version v1.0
 * @ClassNmae: FastFood
 * @Description: 快餐类，抽象构建角色
 * @Author: SYANNPE
 */
Object.defineProperty(exports, "__esModule", { value: true });
var FastFood = /** @class */ (function () {
    function FastFood(price, desc) {
        this._price = price;
        this._desc = desc;
    }
    Object.defineProperty(FastFood.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FastFood.prototype, "desc", {
        get: function () {
            return this._desc;
        },
        set: function (value) {
            this._desc = value;
        },
        enumerable: false,
        configurable: true
    });
    return FastFood;
}());
exports.default = FastFood;
