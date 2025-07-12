/**
 * @version v1.0
 * @ClassNmae: Opening
 * @Description: desc
 * @Author: SYANNPE
 */
import LiftState from "./LiftState";
import Context from "./Context";

export default class StoppingState extends LiftState{
    open(): void {
        this.context.setLiftState(Context.OPENING_STATE)
        this.context.open();
    }
    close(): void {
        this.context.setLiftState(Context.CLOSING_STATE)
        this.context.close();
    }
    run(): void {
        this.context.setLiftState(Context.RUNNING_STATE)
        this.context.run();
    }
    stop(): void {
        console.log("电梯停止了。。。")
    }
}