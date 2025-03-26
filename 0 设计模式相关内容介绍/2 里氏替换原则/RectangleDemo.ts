import {Rectangle} from "./Rectangle";
import {Square} from "./Square";

const resize = function (rectangle: Rectangle) {
//     判断宽如果比长小，进行扩宽操作
    while (rectangle.width <= rectangle.length) {
        rectangle.width++;
    }

}

const printLengthAndWidth = function (rectangle: Rectangle) {
    console.log(`矩形的长是${rectangle.length}，宽是${rectangle.width}`);
}

//创建长方形对象
const r: Rectangle = new Rectangle();
//设置长和宽
r.length = 20;
r.width = 10;

//调用resize函数进行扩宽操作
resize(r);
printLengthAndWidth(r);
console.log("=".repeat(20));
//创建正方形对象
const s: Square = new Square();
//设置长和宽
s.length = 10;
//调用resize函数进行扩宽操作
// 这里是死循环
resize(s);
printLengthAndWidth(s);
