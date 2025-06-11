/**
 * @version v1.0
 * @ClassNmae: FriedRice
 * @Description: 炒面d，具体构件角色
 * @Author: SYANNPE
 */
import FastFood from "./FastFood";

export default class FriedRice extends FastFood {
    public constructor() {
        super(12, "炒面");
    }

    public cost(): number {
        return this.price;
    }
}