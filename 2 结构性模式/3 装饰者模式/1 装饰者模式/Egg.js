/**
 * @version v1.0
 * @ClassNmae: Egg
 * @Description: 鸡蛋类，具体的装饰着角色
 * @Author: SYANNPE
 */
import Garnish from "./Garnish";
export default class Egg extends Garnish {
    constructor(fastFood) {
        super(fastFood, 1, "鸡蛋");
    }
    cost() {
        return this.price + this.fastFood.cost();
    }
    get desc() {
        return super.desc + this.fastFood.desc;
    }
}
