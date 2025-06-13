/**
 * @version v1.0
 * @ClassNmae: Order
 * @Description: 订单类
 * @Author: SYANNPE
 */
export default class Order {
    //     餐桌号码
    _diningTable;
    //     所下的餐品及份数
    _foodDir = new Map();
    get diningTable() {
        return this._diningTable;
    }
    set diningTable(value) {
        this._diningTable = value;
    }
    get foodDir() {
        return this._foodDir;
    }
    set foodDir(value) {
        this._foodDir.set(value[0], value[1]);
    }
}
