export default class OrderCommand {
    // 持有接收者对象
    _receiver;
    _order;
    constructor(receiver, order) {
        this._receiver = receiver;
        this._order = order;
    }
    execute() {
        console.log(this._order.diningTable + "桌的订单：");
        this._order.foodDir.forEach((value, key) => {
            this._receiver.makeFood(key, value);
        });
        console.log(this._order.diningTable + "桌的饭准备完毕");
    }
}
