/**
 * @version v1.0
 * @ClassNmae: Variable
 * @Description: 变量类
 * @Author: SYANNPE
 */
import AbstractExpression from "./AbstractExpression";
import Context from "./Context";

export default class Variable extends AbstractExpression {
    // 声明存储变量名的成员变量
    private _name: string;

    constructor(name: string) {
        super();
        this._name = name;
    }

    interpret(context: Context): number {
        //     直接返回变量的值
        return context.getValue(this);
    }

    public toString(): string {
        return this._name;
    }

}