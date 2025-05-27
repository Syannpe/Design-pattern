/**
 * @version v1.0
 * @ClassNmae: Name
 * @Description: 尽可能慢的创造对象
 * @Author: Author
 */
class Singleton {
    //私有构造方法
    constructor() {
    }
    // 公有方法，返回本类对象
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
//创建Singleton类的对象
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
// 盘对获取到的两个是否是同一个对象
console.log(instance1 === instance2);
