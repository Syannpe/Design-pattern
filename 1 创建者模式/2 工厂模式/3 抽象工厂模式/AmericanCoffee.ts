/**
 * @version v1.0
 * @ClassNmae: Coffee
 * @Description: 咖啡基类
 * @Author: Syannpe
 */
import Coffee from "./Coffee";

export default class AmericanCoffee extends Coffee {
    public getName(): string {
        return "美式咖啡";
    };

}