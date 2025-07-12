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
 * @ClassNmae: Lift
 * @Description: 电梯类（ILift的子实现类）
 * @Author: SYANNPE
 */
var ILift_1 = require("./ILift");
var Lift = /** @class */ (function (_super) {
    __extends(Lift, _super);
    function Lift() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lift.prototype.setState = function (state) {
        this.state = state;
    };
    Lift.prototype.open = function () {
        switch (this.state) {
            case this.CLOSING_STATE:
                console.log("电梯门开启");
                this.setState(this.OPENING_STATE);
                break;
            case this.OPENING_STATE:
                break;
            case this.RUNNING_STATE:
                break;
            case this.STOPPING_STATE:
                console.log("电梯已停止");
                this.setState(this.OPENING_STATE);
                break;
        }
    };
    Lift.prototype.close = function () {
        switch (this.state) {
            case this.CLOSING_STATE:
                break;
            case this.OPENING_STATE:
                console.log("电梯关门了。");
                this.setState(this.CLOSING_STATE);
                break;
            case this.RUNNING_STATE:
                break;
            case this.STOPPING_STATE:
                break;
        }
    };
    Lift.prototype.run = function () {
        switch (this.state) {
            case this.CLOSING_STATE:
                console.log("电梯开始运行了。");
                this.setState(this.RUNNING_STATE);
                break;
            case this.OPENING_STATE:
                break;
            case this.RUNNING_STATE:
                break;
            case this.STOPPING_STATE:
                console.log("电梯开始运行了");
                this.setState(this.RUNNING_STATE);
                break;
        }
    };
    Lift.prototype.stop = function () {
        switch (this.state) {
            case this.CLOSING_STATE:
                console.log("电梯已停止。");
                this.setState(this.STOPPING_STATE);
                break;
            case this.OPENING_STATE:
                break;
            case this.RUNNING_STATE:
                console.log("电梯已停止。");
                this.setState(this.STOPPING_STATE);
                break;
            case this.STOPPING_STATE:
                break;
        }
    };
    return Lift;
}(ILift_1.default));
exports.default = Lift;
