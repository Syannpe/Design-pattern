/**
 * @version v1.0
 * @ClassNmae: Coffee
 * @Description: 咖啡基类
 * @Author: Syannpe
 */
import CoffeeFactory from "./CoffeeFactory";
import Coffee from "./Coffee";
import AmericanCoffee from "./AmericanCoffee";

export default class AmericanCoffeeFactory implements CoffeeFactory {
    public createCoffee(): Coffee {
        const coffee = new AmericanCoffee();
        coffee.addMilk();
        coffee.addSugar();
        return coffee;
    };

}