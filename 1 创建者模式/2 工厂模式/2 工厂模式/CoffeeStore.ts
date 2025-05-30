/**
 * @version v1.0
 * @ClassNmae: Coffee
 * @Description: 咖啡基类
 * @Author: Syannpe
 */
import Coffee from "./Coffee";
import AmericanCoffee from "./AmericanCoffee";
import LatteCoffee from "./LatteCoffee";
import SimpleCoffeeFactory from "./SimpleCoffeeFactory";

export default class CoffeeStore {
    public orderCoffee(type: string): Coffee {
        const store = new SimpleCoffeeFactory();
        return store.createCoffee(type);
    };

}