/**
 * @version v1.0
 * @ClassNmae: CoffeeFactory
 * @Description: 咖啡工厂接口
 * @Author: Syannpe
 */
import Coffee from "./Coffee";
import Dessert from "./Dessert";

export default interface DessertFactory {
    createCoffee(): Coffee;
    createDessert(): Dessert;

}