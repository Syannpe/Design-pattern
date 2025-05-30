/**
 * @version v1.0
 * @ClassNmae: Coffee
 * @Description: 咖啡基类
 * @Author: Syannpe
 */
import Coffee from "./Coffee";
import AmericanCoffee from "./AmericanCoffee";
import LatteCoffee from "./LatteCoffee";

export default class CoffeeStore {
    public orderCoffee(type: string): Coffee {
        let res: Coffee;
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
    };

}