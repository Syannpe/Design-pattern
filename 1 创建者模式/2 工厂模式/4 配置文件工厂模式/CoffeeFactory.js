var _a;
import config from "./config";
class CoffeeFactory {
    static createCoffee(name) {
        return this.map.get(name);
    }
}
_a = CoffeeFactory;
//加载配置文件，获取配置文件中配置的全类名，创建对象，进行存储
// 定义容器对象用于存储咖啡对象
CoffeeFactory.map = new Map();
// 加载配置文件，只需要加载一次
(() => {
    //     创建properties对象
    for (let className in config) {
        const clazz = config[className];
        let coffee = new clazz();
        _a.map.set(className, coffee);
    }
})();
export default CoffeeFactory;
