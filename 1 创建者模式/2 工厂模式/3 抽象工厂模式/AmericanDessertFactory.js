import AmericanCoffee from "./AmericanCoffee";
import MotchaMousse from "./MotchaMousse";
export default class AmericanDessertFactory {
    createDessert() {
        return new MotchaMousse();
    }
    createCoffee() {
        const coffee = new AmericanCoffee();
        coffee.addMilk();
        coffee.addSugar();
        return coffee;
    }
    ;
}
