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
import LiftState from "./LiftState";

export default class Context {
//     定义对应状态的四个常量
    public static OPENING_STATE = new OpeningState();
    public static CLOSING_STATE = new ClosingState();
    public static RUNNING_STATE = new RunningState();
    public static STOPPING_STATE = new StoppingState();

//     定义一个当前状态变量
    private liftState: LiftState;

    public setLiftState(liftState: LiftState): void {
        this.liftState = liftState;
        this.liftState.setContext(this)
    }

    public open(): void {
        this.liftState.open();
    }

    public close(): void {
        this.liftState.close();
    }

    public run(): void {
        this.liftState.run();
    }

    public stop(): void {
        this.liftState.stop();
    }
}