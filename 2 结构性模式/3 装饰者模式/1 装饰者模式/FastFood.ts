/**
 * @version v1.0
 * @ClassNmae: FastFood
 * @Description: 快餐类，抽象构建角色
 * @Author: SYANNPE
 */

export default abstract class FastFood {
    private _price: number;
    private _desc: string;

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get desc(): string {
        return this._desc;
    }

    set desc(value: string) {
        this._desc = value;
    }

    constructor();
    constructor(price?: number, desc?: string);
    constructor(price?: number, desc?: string) {
        this._price = price;
        this._desc = desc;
    }

    public abstract cost(): number;
}