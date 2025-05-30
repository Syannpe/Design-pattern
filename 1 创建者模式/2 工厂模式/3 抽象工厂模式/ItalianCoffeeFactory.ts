/**
 * @version v1.0
 * @ClassNmae: Coffee
 * @Description: 咖啡基类
 * @Author: Syannpe
 */
import CoffeeFactory from "./CoffeeFactory";
import Coffee from "./Coffee";
import AmericanCoffee from "./AmericanCoffee";
import DessertFactory from "./DessertFactory";
import Dessert from "./Dessert";
import Trimisu from "./Trimisu";
import LatteCoffee from "./LatteCoffee";

export default class ItalianCoffeeFactory implements DessertFactory {
    createDessert(): Dessert {
        return new Trimisu();
    }

    public createCoffee(): Coffee {
        const coffee = new LatteCoffee();
        coffee.addMilk();
        coffee.addSugar();
        return coffee;
    };

}