/**
 * @version v1.0
 * @ClassNmae: StrategyA
 * @Description: 具体策略类，封装算法
 * @Author: SYANNPE
 */
import Strategy from "./Strategy";

export default class StrategyB implements Strategy {
    show(): void {
        console.log("买两百减五十");
    }
}