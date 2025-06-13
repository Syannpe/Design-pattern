/**
 * @version v1.0
 * @ClassNmae: Client
 * @Description: desc
 * @Author: SYANNPE
 */
import Order from "./Order";
import SeniorChef from "./SeniorChef";
import OrderCommand from "./OrderCommand";
import Waitor from "./Waitor";

export default class Client {
    public static main(args: string[]): void {
        //     创建订单对象
        const order1 = new Order();
        order1.diningTable = 1;
        order1.foodDir = ["西红柿鸡蛋面", 1];
        order1.foodDir = ["小杯可乐", 2];

        //     创建第二个订单对象
        const order2 = new Order();
        order2.diningTable = 2;
        order2.foodDir = ["尖椒肉丝盖饭", 1];
        order2.foodDir = ["小杯雪碧", 1];

        //     创建厨师对象
        const seniorChef = new SeniorChef();
        //     创建命令对象
        const orderCommand1 = new OrderCommand(seniorChef, order1);
        const orderCommand2 = new OrderCommand(seniorChef, order2);

        //     创建调用者：服务员对象
        const waitor = new Waitor();
        waitor.command = orderCommand1;
        waitor.command = orderCommand2;

        waitor.orderUp();

    }
}

Client.main(null);