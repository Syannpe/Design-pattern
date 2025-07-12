/**
 * @version v1.0
 * @ClassNmae: Opening
 * @Description: desc
 * @Author: SYANNPE
 */
import LiftState from "./LiftState";
import Context from "./Context";

export default class ClosingState extends LiftState {
    open(): void {
        this.context.setLiftState(Context.OPENING_STATE)
        this.context.open();
    }

    close(): void {
        console.log("电梯门关闭了。。。")
    }

    run(): void {
        this.context.setLiftState(Context.RUNNING_STATE)
        this.context.run();
    }

    stop(): void {
        this.context.setLiftState(Context.STOPPING_STATE)
        this.context.stop();
    }
}