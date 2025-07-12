/**
 * @version v1.0
 * @ClassNmae: LiftState
 * @Description: 抽象状态类
 * @Author: SYANNPE
 */
import Context from "./Context";

export default abstract class LiftState {
//     环境角色类变量
    protected context: Context;

    setContext(context: Context): void {
        this.context = context;
    }

//     电梯开启

    abstract open(): void;

//     电梯关闭
    abstract close(): void;

//     电梯运行
    abstract run(): void;

//     电梯停止
    abstract stop(): void;
}