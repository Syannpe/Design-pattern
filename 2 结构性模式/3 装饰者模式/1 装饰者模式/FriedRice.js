/**
 * @version v1.0
 * @ClassNmae: FriedRice
 * @Description: 炒饭，具体构件角色
 * @Author: SYANNPE
 */
import FastFood from "./FastFood";
export default class FriedRice extends FastFood {
    constructor() {
        super(10, "炒饭");
    }
    cost() {
        return this.price;
    }
}
