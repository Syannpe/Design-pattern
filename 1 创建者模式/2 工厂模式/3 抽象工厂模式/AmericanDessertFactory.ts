/**
 * @version v1.0
 * @ClassNmae: Coffee
 * @Description: 美式风味的甜品工厂，生产美式咖啡，抹茶慕斯
 * @Author: Syannpe
 */
import Coffee from "./Coffee";
import AmericanCoffee from "./AmericanCoffee";
import DessertFactory from "./DessertFactory";
import Dessert from "./Dessert";
import MotchaMousse from "./MotchaMousse";

export default class AmericanDessertFactory implements DessertFactory {
    createDessert(): Dessert {
        return new MotchaMousse();
    }
    public createCoffee(): Coffee {
        const coffee = new AmericanCoffee();
        coffee.addMilk();
        coffee.addSugar();
        return coffee;
    };

}