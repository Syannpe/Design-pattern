"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @version v1.0
 * @ClassNmae: Client
 * @Description: 客户端类
 * @Author: SYANNPE
 */
var Lift_1 = require("./Lift");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.main = function (args) {
        var lift = new Lift_1.default();
        lift.setState(lift.RUNNING_STATE);
        // 分别调用四种方法
        lift.open();
        lift.close();
        lift.run();
        lift.stop();
    };
    return Client;
}());
exports.default = Client;
Client.main([]);
