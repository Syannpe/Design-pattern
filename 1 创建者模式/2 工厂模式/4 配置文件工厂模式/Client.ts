/**
 * @version v1.0
 * @ClassNmae: Coffee
 * @Description: 咖啡基类
 * @Author: Syannpe
 */
import CoffeeFactory from "./CoffeeFactory";

export default abstract class Client {
    public static main(args: string[]): void {
        let coffee = CoffeeFactory.createCoffee("american");
        console.log(coffee.getName())

        console.log("-".repeat(20));

        coffee = CoffeeFactory.createCoffee("latte");
        console.log(coffee.getName())
    }
}

Client.main([])
