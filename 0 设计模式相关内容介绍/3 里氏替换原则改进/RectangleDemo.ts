import {Rectangle} from "./Rectangle";
import {Square} from "./Square";
import {Quadrilateral} from "./Quadrilateral";

const resize = function (rectangle: Rectangle) {
//     判断宽如果比长小，进行扩宽操作
    while (rectangle.width <= rectangle.length) {
        rectangle.width++;
    }

}

const printLengthAndWidth = function (quadrilateral: Quadrilateral) {
    console.log(`矩形的长是${quadrilateral.length}，宽是${quadrilateral.width}`);
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
