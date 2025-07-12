/**
 * @version v1.0
 * @ClassNmae: Opening
 * @Description: desc
 * @Author: SYANNPE
 */
import LiftState from "./LiftState";
import Context from "./Context";

export default class RunningState extends LiftState {
    open(): void {
        // 什么都不做
    }

    close(): void {
        // 什么都不做
    }

    run(): void {
        console.log("电梯正在运行。。。")
    }

    stop(): void {
        this.context.setLiftState(Context.STOPPING_STATE)
        this.context.stop();
    }
}