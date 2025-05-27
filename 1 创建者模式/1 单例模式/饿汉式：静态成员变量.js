/**
 * @version v1.0
 * @ClassNmae: Name
 * @Description: 尽可能快的创造对象
 * @Author: Author
 */
var Singleton = /** @class */ (function () {
    //私有构造方法
    function Singleton() {
    }
    // 公有方法，返回本类对象
    Singleton.getInstance = function () {
        return Singleton.instance;
    };
    // 在本类中创建本类的对象
    Singleton.instance = new Singleton();
    return Singleton;
}());
//创建Singleton类的对象
var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();
// 盘对获取到的两个是否是同一个对象
console.log(instance1 === instance2);
