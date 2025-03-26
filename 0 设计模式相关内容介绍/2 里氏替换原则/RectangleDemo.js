"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle_1 = require("./Rectangle");
var Square_1 = require("./Square");
var resize = function (rectangle) {
    //     判断宽如果比长小，进行扩宽操作
    while (rectangle.width <= rectangle.length) {
        rectangle.width++;
    }
};
var printLengthAndWidth = function (rectangle) {
    console.log("\u77E9\u5F62\u7684\u957F\u662F".concat(rectangle.length, "\uFF0C\u5BBD\u662F").concat(rectangle.width));
};
//创建长方形对象
var r = new Rectangle_1.Rectangle();
//设置长和宽
r.length = 20;
r.width = 10;
//调用resize函数进行扩宽操作
resize(r);
printLengthAndWidth(r);
console.log("=".repeat(20));
//创建正方形对象
var s = new Square_1.Square();
//设置长和宽
s.length = 10;
//调用resize函数进行扩宽操作
// 这里是死循环
resize(s);
printLengthAndWidth(s);
