/**
 * @version v1.0
 * @ClassNmae: Opening
 * @Description: desc
 * @Author: SYANNPE
 */
import LiftState from "./LiftState";
import Context from "./Context";

export default class OpeningState extends LiftState {
    open(): void {
        //     当前状态要执行的方法
        console.log("电梯开启。。。")
    }

    close(): void {
        // 修改状态
        this.context.setLiftState(Context.CLOSING_STATE);
        this.context.close();
    }

    run(): void {
        // 什么都不做
    }

    stop(): void {
        // 什么都不做
    }
}