/**
 * @version v1.0
 * @ClassNmae: Coffee
 * @Description: 咖啡基类
 * @Author: Syannpe
 */
import ItalianCoffeeFactory from "./ItalianCoffeeFactory";
import DessertFactory from "./DessertFactory";
import AmericanDessertFactory from "./AmericanDessertFactory";

export default abstract class Client {
    public static main(args: string[]): void {
        // 创建的是意大利风味甜品工厂对象
        // let factory: DessertFactory = new ItalianCoffeeFactory();
        let factory: DessertFactory = new AmericanDessertFactory();

        const coffee = factory.createCoffee();
        const dessert = factory.createDessert();

        console.log(coffee.getName());
        dessert.show();
    }
}

Client.main([])
