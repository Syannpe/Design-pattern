/**
 * @version v1.0
 * @ClassNmae: Egg
 * @Description: 培根类，具体的装饰着角色
 * @Author: SYANNPE
 */
import Garnish from "./Garnish";
export default class Bacon extends Garnish {
    constructor(fastFood) {
        super(fastFood, 2, "培根");
    }
    cost() {
        return this.price + this.fastFood.cost();
    }
    get desc() {
        return super.desc + this.fastFood.desc;
    }
}
