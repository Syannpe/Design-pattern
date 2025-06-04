/**
 * @version v1.0
 * @ClassNmae: Client
 * @Description: desc
 * @Author: SYANNPE
 */
import ProxyPoint from "./ProxyPoint";

export default class Client {
    public static main(args: string[]): void {
        // 创建代售点类对象
        const proxyPoint = new ProxyPoint();
        proxyPoint.sell();
    }
}

Client.main([]);