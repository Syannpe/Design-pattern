/**
 * @version v1.0
 * @ClassNmae: Opening
 * @Description: desc
 * @Author: SYANNPE
 */
import LiftState from "./LiftState";
import Context from "./Context";
export default class ClosingState extends LiftState {
    open() {
        this.context.setLiftState(Context.OPENING_STATE);
        this.context.open();
    }
    close() {
        console.log("电梯门关闭了。。。");
    }
    run() {
        this.context.setLiftState(Context.RUNNING_STATE);
        this.context.run();
    }
    stop() {
        this.context.setLiftState(Context.STOPPING_STATE);
        this.context.stop();
    }
}
