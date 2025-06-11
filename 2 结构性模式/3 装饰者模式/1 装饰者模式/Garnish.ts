/**
 * @version v1.0
 * @ClassNmae: Garnis
 * @Description: 装饰者类：抽象装饰者角色
 * @Author: SYANNPE
 */
import FastFood from "./FastFood";

export default abstract class Garnish extends FastFood {
//     声明快餐类的变量
    private _fastFood: FastFood;

    get fastFood(): FastFood {
        return this._fastFood;
    }

    set fastFood(value: FastFood) {
        this._fastFood = value;
    }

    public constructor(fastFood: FastFood, price: number, desc: string) {
        super(price, desc);
        this.fastFood = fastFood;
    }

}