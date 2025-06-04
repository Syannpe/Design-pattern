import TrainStation from "./TrainStation";
export default class ProxyFactory {
    // 生命目标对象
    trainStation = new TrainStation();
    // 获取代理对象的方法
    getProxyObject() {
        return new Proxy(this.trainStation, {
            get(target, p, receiver) {
                console.log("代售点收取了一定费用（JDK动态代理）");
                return Reflect.get(target, p, receiver);
            }
        });
    }
}
