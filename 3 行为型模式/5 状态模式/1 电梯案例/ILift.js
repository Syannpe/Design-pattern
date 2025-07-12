"use strict";
/**
 * @version v1.0
 * @ClassNmae: ILift
 * @Description: 电梯接口
 * @Author: SYANNPE
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ILift = /** @class */ (function () {
    function ILift() {
        //     定义四个电梯状态常量
        this.OPENING_STATE = 1;
        this.CLOSING_STATE = 2;
        this.RUNNING_STATE = 3;
        this.STOPPING_STATE = 4;
    }
    return ILift;
}());
exports.default = ILift;
