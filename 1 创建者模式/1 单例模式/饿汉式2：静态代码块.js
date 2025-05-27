/**
 * @version v1.0
 * @ClassNmae: Name
 * @Description: 饿汉式：静态代码块的方式
 * @Author: Author
 */
class Singleton {
    //私有构造方法
    constructor() {
    }
    // 公有方法，返回本类对象
    static getInstance() {
        return Singleton.instance;
    }
}
// 在静态代码块中进行赋值
(() => {
    Singleton.instance = new Singleton();
})();
//创建Singleton类的对象
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
// 盘对获取到的两个是否是同一个对象
console.log(instance1 === instance2);
