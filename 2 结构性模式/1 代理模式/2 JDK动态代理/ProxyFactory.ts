/**
 * @version v1.0
 * @ClassNmae: ProxyFactory
 * @Description: 获取代理对象的工厂类，代理类也实现对应接口
 * @Author: SYANNPE
 */
import SellTickets from "./SellTickets";
import TrainStation from "./TrainStation";

export default class ProxyFactory {
    // 生命目标对象
    private trainStation: TrainStation = new TrainStation();

    // 获取代理对象的方法
    public getProxyObject(): SellTickets {
        return new Proxy(
            this.trainStation,
            {
                get(target: any, p: PropertyKey, receiver: any): any {
                    console.log("代售点收取了一定费用（JDK动态代理）");
                    return Reflect.get(target, p, receiver);
                }
            }
        )

    }
}