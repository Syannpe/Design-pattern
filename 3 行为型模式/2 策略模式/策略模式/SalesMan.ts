/**
 * @version v1.0
 * @ClassNmae: SalesMan
 * @Description: 促销员 环境类
 * @Author: SYANNPE
 */
import Strategy from "./Strategy";

export default class SalesMan {
//     聚合策略类对象
    private _strategy: Strategy;

    constructor(strategy: Strategy) {
        this._strategy = strategy;
    }

//     有促销员展示促销活动给用户
    public salesManShow(): void {
        this._strategy.show();
    }


    get strategy(): Strategy {
        return this._strategy;
    }

    set strategy(value: Strategy) {
        this._strategy = value;
    }
}