"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @version v1.0
 * @ClassNmae: GameRole
 * @Description: 游戏角色类（属于发起人角色）
 * @Author: SYANNPE
 */
var RoleStateMemento_1 = require("./RoleStateMemento");
var GameRole = /** @class */ (function () {
    function GameRole() {
    }
    // 初始化内部状态方法
    GameRole.prototype.initState = function () {
        this._vit = 100;
        this._atk = 100;
        this._def = 100;
    };
    // 战斗
    GameRole.prototype.fight = function () {
        this._atk = 0;
        this._def = 0;
        this._vit = 0;
    };
    // 保存角色状态方法
    GameRole.prototype.saveState = function () {
        return new RoleStateMemento_1.default(this._vit, this._atk, this._def);
    };
    // 恢复角色初始化状态
    GameRole.prototype.recoveryState = function (memento) {
        //     将备忘录对象中存储的状态值赋给当前对象
        this._vit = memento.vit;
        this._atk = memento.atk;
        this._def = memento.def;
    };
    // 展示状态功能
    GameRole.prototype.stateDisplay = function () {
        console.log("\n \u5F53\u524D\u89D2\u8272\u72B6\u6001\uFF1A\n \u653B\u51FB\u529B\uFF1A".concat(this._atk, "\n \u9632\u5FA1\u529B\uFF1A").concat(this._def, "\n \u751F\u547D\u503C\uFF1A").concat(this._vit));
    };
    Object.defineProperty(GameRole.prototype, "vit", {
        get: function () {
            return this._vit;
        },
        set: function (value) {
            this._vit = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameRole.prototype, "atk", {
        get: function () {
            return this._atk;
        },
        set: function (value) {
            this._atk = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameRole.prototype, "def", {
        get: function () {
            return this._def;
        },
        set: function (value) {
            this._def = value;
        },
        enumerable: false,
        configurable: true
    });
    return GameRole;
}());
exports.default = GameRole;
