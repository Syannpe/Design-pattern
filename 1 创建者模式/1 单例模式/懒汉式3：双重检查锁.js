/**
 * @version v1.0
 * @ClassNmae: Name
 * @Description: 双重检查锁方式
 * @Author: Author
 */
class Singleton {
    //私有构造方法
    constructor() {
    }
    // 公有方法，返回本类对象
    static getInstance() {
        // 第一次判断，如果instance的值不为null，不需要抢占所，直接返回对象
        if (Singleton.instance) {
            //添加一个同步锁
            const lock = new Lock();
            if (Singleton.instance) {
                Singleton.instance = new Singleton();
            }
        }
        return Singleton.instance;
    }
}
//创建Singleton类的对象
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
// 盘对获取到的两个是否是同一个对象
console.log(instance1 === instance2);
/*双重检査锁模式是一种非常好的单例实现模式，解决了单例、性能、线程安全问题，
上面的双重检测锁模式看上书完美无缺，其实是存在问题，在多线程的情况下，
可能会出现空指针问题，出现问题的原因是在实例化对象的时候会进行优化和指令重排序操作。
要解决双重检查锁模式带来空指针异常的问题，只需要使用 volatile 关键字，
[volatile 关键字可以保证可见性和有序性。*/ 
