"use strict";
/**
 * @version v1.0
 * @ClassNmae: Coffee
 * @Description: 咖啡基类
 * @Author: Syannpe
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Coffee = /** @class */ (function () {
    function Coffee() {
    }
    Coffee.prototype.addMilk = function () {
        console.log("加奶");
    };
    Coffee.prototype.addSugar = function () {
        console.log("加糖");
    };
    return Coffee;
}());
exports.default = Coffee;
