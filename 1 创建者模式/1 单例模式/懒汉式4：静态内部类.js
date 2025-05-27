/**
 * @version v1.0
 * @ClassNmae: Name
 * @Description: 静态内部类方式
 * @Author: Author
 */
class Singleton {
    //私有构造方法
    constructor() {
    }
    // 公有方法，返回本类对象
    static getInstance() {
        return Singleton.innerClass.getInstance();
    }
}
Singleton.innerClass = (function () {
    // 创建对象
    let instance;
    return {
        getInstance: function () {
            // 判断instance的值是否为null，为null则创建对象
            if (!instance) {
                instance = new Singleton();
            }
            // 返回对象
            return instance;
        }
    };
})();
//创建Singleton类的对象
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
// 盘对获取到的两个是否是同一个对象
console.log(instance1 === instance2);
