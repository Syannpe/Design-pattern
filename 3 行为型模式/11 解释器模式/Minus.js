/**
 * @version v1.0
 * @ClassNmae: Plus
 * @Description: 减法表达式类
 * @Author: SYANNPE
 */
import AbstractExpression from "./AbstractExpression";
export default class Minus extends AbstractExpression {
    // 减号左面的表达式
    _left;
    // 减号右面的表达式
    _right;
    constructor(left, right) {
        super();
        this._left = left;
        this._right = right;
    }
    interpret(context) {
        // 将左面表达式结果和右面表达式的结果进行相减
        return this._left.interpret(context) - this._right.interpret(context);
    }
    toString() {
        return `(${this._left.toString()} - ${this._right.toString()})`;
    }
}
