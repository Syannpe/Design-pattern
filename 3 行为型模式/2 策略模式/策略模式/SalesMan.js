export default class SalesMan {
    //     聚合策略类对象
    _strategy;
    constructor(strategy) {
        this._strategy = strategy;
    }
    //     有促销员展示促销活动给用户
    salesManShow() {
        this._strategy.show();
    }
    get strategy() {
        return this._strategy;
    }
    set strategy(value) {
        this._strategy = value;
    }
}
