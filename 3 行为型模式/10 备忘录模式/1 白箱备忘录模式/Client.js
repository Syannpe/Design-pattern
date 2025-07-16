"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @version v1.0
 * @ClassNmae: Client
 * @Description: desc
 * @Author: SYANNPE
 */
var GameRole_1 = require("./GameRole");
var RoleStateCaretaker_1 = require("./RoleStateCaretaker");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.main = function (args) {
        console.log("-".repeat(10) + "大战boss前" + "-".repeat(10));
        var role = new GameRole_1.default();
        role.initState();
        role.stateDisplay();
        // 创建备份
        var roleStateCaretaker = new RoleStateCaretaker_1.default();
        roleStateCaretaker.memento = role.saveState();
        console.log("-".repeat(10) + "大战boss后" + "-".repeat(10));
        // 损耗严重
        role.fight();
        role.stateDisplay();
        console.log("-".repeat(10) + "恢复之前状态" + "-".repeat(10));
        role.recoveryState(roleStateCaretaker.memento);
        role.stateDisplay();
    };
    return Client;
}());
exports.default = Client;
Client.main([]);
