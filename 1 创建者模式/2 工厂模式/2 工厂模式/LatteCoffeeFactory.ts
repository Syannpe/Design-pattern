/**
 * @version v1.0
 * @ClassNmae: Coffee
 * @Description: 咖啡基类
 * @Author: Syannpe
 */
import CoffeeFactory from "./CoffeeFactory";
import Coffee from "./Coffee";
import LatteCoffee from "./LatteCoffee";

export default class LatteCoffeeFactory implements CoffeeFactory {
    public createCoffee(): Coffee {
        const coffee = new LatteCoffee();
        coffee.addMilk();
        coffee.addSugar();
        return coffee;
    };

}