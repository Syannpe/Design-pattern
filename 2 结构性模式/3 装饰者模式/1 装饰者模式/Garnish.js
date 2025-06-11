/**
 * @version v1.0
 * @ClassNmae: Garnis
 * @Description: 装饰者类：抽象装饰者角色
 * @Author: SYANNPE
 */
import FastFood from "./FastFood";
export default class Garnish extends FastFood {
    //     声明快餐类的变量
    _fastFood;
    get fastFood() {
        return this._fastFood;
    }
    set fastFood(value) {
        this._fastFood = value;
    }
    constructor(fastFood, price, desc) {
        super(price, desc);
        this.fastFood = fastFood;
    }
}
