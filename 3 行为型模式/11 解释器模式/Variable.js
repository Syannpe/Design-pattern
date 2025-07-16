/**
 * @version v1.0
 * @ClassNmae: Variable
 * @Description: 变量类
 * @Author: SYANNPE
 */
import AbstractExpression from "./AbstractExpression";
export default class Variable extends AbstractExpression {
    // 声明存储变量名的成员变量
    _name;
    constructor(name) {
        super();
        this._name = name;
    }
    interpret(context) {
        //     直接返回变量的值
        return context.getValue(this);
    }
    toString() {
        return this._name;
    }
}
