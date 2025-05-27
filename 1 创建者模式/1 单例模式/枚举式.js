/**
 * @version v1.0
 * @ClassNmae: Name
 * @Description: 枚举方式：属于饿汉式的一种，比较好
 * @Author: Author
 */
var Singleton;
(function (Singleton) {
    Singleton[Singleton["INSTANCE"] = 0] = "INSTANCE";
})(Singleton || (Singleton = {}));
//创建Singleton类的对象
const instance1 = Singleton.INSTANCE;
const instance2 = Singleton.INSTANCE;
// 盘对获取到的两个是否是同一个对象
console.log(instance1 === instance2);
