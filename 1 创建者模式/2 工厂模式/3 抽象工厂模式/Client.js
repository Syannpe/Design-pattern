import AmericanDessertFactory from "./AmericanDessertFactory";
export default class Client {
    static main(args) {
        // 创建的是意大利风味甜品工厂对象
        // let factory: DessertFactory = new ItalianCoffeeFactory();
        let factory = new AmericanDessertFactory();
        const coffee = factory.createCoffee();
        const dessert = factory.createDessert();
        console.log(coffee.getName());
        dessert.show();
    }
}
Client.main([]);
