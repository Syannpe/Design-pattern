"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
var Square = /** @class */ (function () {
    function Square() {
    }
    Object.defineProperty(Square.prototype, "side", {
        get: function () {
            return this._side;
        },
        set: function (side) {
            this._side = side;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Square.prototype, "length", {
        get: function () {
            return this._side;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Square.prototype, "width", {
        get: function () {
            return this._side;
        },
        enumerable: false,
        configurable: true
    });
    return Square;
}());
exports.Square = Square;
