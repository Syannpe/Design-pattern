/**
 * @version v1.0
 * @ClassNmae: FastFood
 * @Description: 快餐类，抽象构建角色
 * @Author: SYANNPE
 */
export default class FastFood {
    _price;
    _desc;
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get desc() {
        return this._desc;
    }
    set desc(value) {
        this._desc = value;
    }
    constructor(price, desc) {
        this._price = price;
        this._desc = desc;
    }
}
