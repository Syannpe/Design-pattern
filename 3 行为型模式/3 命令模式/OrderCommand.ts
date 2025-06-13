/**
 * @version v1.0
 * @ClassNmae: OrderCommand
 * @Description: 具体命令类
 * @Author: SYANNPE
 */
import Command from "./Command";
import Order from "./Order";
import SeniorChef from "./SeniorChef";

export default class OrderCommand implements Command {
    // 持有接收者对象
    private _receiver: SeniorChef;
    private _order: Order;

    constructor(receiver: SeniorChef, order: Order) {
        this._receiver = receiver;
        this._order = order;
    }

    public execute(): void {
        console.log(this._order.diningTable + "桌的订单：")
        this._order.foodDir.forEach((value, key) => {
            this._receiver.makeFood(key, value);
        });

        console.log(this._order.diningTable + "桌的饭准备完毕")

    }
}