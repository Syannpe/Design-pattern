/**
 * @version v1.0
 * @ClassNmae: Order
 * @Description: 订单类
 * @Author: SYANNPE
 */

export default class Order {
//     餐桌号码
    private _diningTable: number;

//     所下的餐品及份数
    private _foodDir: Map<string, number> = new Map<string, number>();


    get diningTable(): number {
        return this._diningTable;
    }

    set diningTable(value: number) {
        this._diningTable = value;
    }

    get foodDir(): Map<string, number> {
        return this._foodDir;
    }

    set foodDir(value: [string, number]) {
        this._foodDir.set(value[0], value[1]);
    }
}