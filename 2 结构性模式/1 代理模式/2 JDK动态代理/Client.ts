/**
 * @version v1.0
 * @ClassNmae: Client
 * @Description: desc
 * @Author: SYANNPE
 */
import ProxyFactory from "./ProxyFactory";

export default class Client {
    public static main(args: string[]): void {
        // 创建代理对象
    //     创建代理工厂对象
        const proxyFactory = new ProxyFactory();
    //     使用factory对象的方法获取代理对象
        const proxyObject = proxyFactory.getProxyObject();
        proxyObject.sell();
    }
}

Client.main([]);