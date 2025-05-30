import AmericanCoffee from "./AmericanCoffee";
import LatteCoffee from "./LatteCoffee";
export default class SimpleCoffeeFactory {
    createCoffee(type) {
        let res;
        switch (type) {
            case "american":
                res = new AmericanCoffee();
                break;
            case "latte":
                res = new LatteCoffee();
                break;
            default:
                res = new AmericanCoffee();
                break;
        }
        res.addSugar();
        res.addMilk();
        return res;
    }
    ;
}
