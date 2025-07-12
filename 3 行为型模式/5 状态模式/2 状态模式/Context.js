/**
 * @version v1.0
 * @ClassNmae: Context
 * @Description: 环境角色类
 * @Author: SYANNPE
 */
import OpeningState from "./OpeningState";
import StoppingState from "./StoppingState";
import ClosingState from "./ClosingState";
import RunningState from "./RunningState";
export default class Context {
    //     定义对应状态的四个常量
    static OPENING_STATE = new OpeningState();
    static CLOSING_STATE = new ClosingState();
    static RUNNING_STATE = new RunningState();
    static STOPPING_STATE = new StoppingState();
    //     定义一个当前状态变量
    liftState;
    setLiftState(liftState) {
        this.liftState = liftState;
        this.liftState.setContext(this);
    }
    open() {
        this.liftState.open();
    }
    close() {
        this.liftState.close();
    }
    run() {
        this.liftState.run();
    }
    stop() {
        this.liftState.stop();
    }
}
