/**
 * @version v1.0
 * @ClassNmae: Coffee
 * @Description: 咖啡基类
 * @Author: Syannpe
 */
import AmericanCoffeeFactory from "./AmericanCoffeeFactory";

export default abstract class Client {
    public static main(args: string[]): void {
        const store = new AmericanCoffeeFactory();
        const coffee = store.createCoffee();
        console.log(coffee.getName());

    }
}

Client.main([])
