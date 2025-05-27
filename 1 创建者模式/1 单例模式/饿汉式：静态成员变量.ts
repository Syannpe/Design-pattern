/**
 * @version v1.0
 * @ClassNmae: Name
 * @Description: 尽可能快的创造对象
 * @Author: Author
 */

class Singleton {
    //私有构造方法

    private constructor() {
    }

    // 在本类中创建本类的对象
    private static instance: Singleton = new Singleton();

    // 公有方法，返回本类对象
    public static getInstance(): Singleton {
        return Singleton.instance;
    }
}

//创建Singleton类的对象
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

// 盘对获取到的两个是否是同一个对象
console.log(instance1 === instance2)
