/**
 * @version v1.0
 * @ClassNmae: Coffee
 * @Description: 咖啡基类
 * @Author: Syannpe
 */
import CoffeeStore from "./CoffeeStore";

export default abstract class Client {
    public static main(args: string[]): void {
        const store = new CoffeeStore();
        const coffee = store.orderCoffee("american");
        console.log(coffee.getName());

    }
}

Client.main([])
