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
var TFCardImpl_1 = require("./TFCardImpl");
var SDAdapter = /** @class */ (function (_super) {
    __extends(SDAdapter, _super);
    function SDAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SDAdapter.prototype.readSD = function () {
        console.log("adapter read tf card");
        return this.readTF();
    };
    SDAdapter.prototype.writeSD = function (message) {
        this.writeTF(message);
    };
    return SDAdapter;
}(TFCardImpl_1.default));
exports.default = SDAdapter;
