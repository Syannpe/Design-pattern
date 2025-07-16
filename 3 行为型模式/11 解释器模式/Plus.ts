/**
 * @version v1.0
 * @ClassNmae: Plus
 * @Description: 加法表达式类
 * @Author: SYANNPE
 */
import AbstractExpression from "./AbstractExpression";
import Context from "./Context";

export default class Plus extends AbstractExpression {
    // 加号左面的表达式
    private _left: AbstractExpression;
    // 加号右面的表达式
    private _right: AbstractExpression;

    constructor(left: AbstractExpression, right: AbstractExpression) {
        super();
        this._left = left;
        this._right = right;
    }

    interpret(context: Context): number {
        // 将左面表达式结果和右面表达式的结果进行相加
        return this._left.interpret(context) + this._right.interpret(context);
    }

    toString(): string {
        return `(${this._left.toString()} + ${this._right.toString()})`;
    }
}