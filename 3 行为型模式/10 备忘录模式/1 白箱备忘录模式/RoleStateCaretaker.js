"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RoleStateCaretaker = /** @class */ (function () {
    function RoleStateCaretaker() {
    }
    Object.defineProperty(RoleStateCaretaker.prototype, "memento", {
        get: function () {
            return this._memento;
        },
        set: function (value) {
            this._memento = value;
        },
        enumerable: false,
        configurable: true
    });
    return RoleStateCaretaker;
}());
exports.default = RoleStateCaretaker;
