/**
 * @version v1.0
 * @ClassNmae: Coffee
 * @Description: 咖啡基类
 * @Author: Syannpe
 */
import Coffee from "./Coffee";
import AmericanCoffee from "./AmericanCoffee";
import LatteCoffee from "./LatteCoffee";
import config from "./config";

export default class CoffeeFactory {
    //加载配置文件，获取配置文件中配置的全类名，创建对象，进行存储
    // 定义容器对象用于存储咖啡对象
    private static map: Map<string, Coffee> = new Map();

    // 加载配置文件，只需要加载一次
    static {
    //     创建properties对象
        for (let className in config){
            const clazz = config[className];
            let coffee: Coffee = new clazz();

            this.map.set(className, coffee);
        }
    }
    public static createCoffee(name: string): Coffee {
        return this.map.get(name);
    }
}