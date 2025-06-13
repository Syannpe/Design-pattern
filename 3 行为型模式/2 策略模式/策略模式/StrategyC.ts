/**
 * @version v1.0
 * @ClassNmae: StrategyA
 * @Description: 具体策略类，封装算法
 * @Author: SYANNPE
 */
import Strategy from "./Strategy";

export default class StrategyC implements Strategy {
    show(): void {
        console.log("满1000元加医院换购任意200元以下商品");
    }
}