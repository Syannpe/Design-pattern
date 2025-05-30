import AmericanCoffee from "./AmericanCoffee";
export default class AmericanCoffeeFactory {
    createCoffee() {
        const coffee = new AmericanCoffee();
        coffee.addMilk();
        coffee.addSugar();
        return coffee;
    }
    ;
}
