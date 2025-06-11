/**
 * @version v1.0
 * @ClassNmae: Egg
 * @Description: 培根类，具体的装饰着角色
 * @Author: SYANNPE
 */
import Garnish from "./Garnish";
import FastFood from "./FastFood";

export default class Bacon extends Garnish {
    public constructor(fastFood: FastFood) {
        super(fastFood, 2, "培根");
    }

    public cost(): number {
        return this.price + this.fastFood.cost();
    }


    get desc(): string {
        return super.desc + this.fastFood.desc;
    }
}