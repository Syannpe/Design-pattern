/**
 * @version v1.0
 * @ClassNmae: SeniorChef
 * @Description: 厨师类
 * @Author: SYANNPE
 */
import Order from "./Order";

export default class SeniorChef {
    public makeFood(name: string, num: number): void {
        console.log(`${num}份${name}`);

    }
}