/**
 * @version v1.0
 * @ClassNmae: ILift
 * @Description: 电梯接口
 * @Author: SYANNPE
 */

export default abstract class ILift {
//     定义四个电梯状态常量
    public OPENING_STATE: number = 1;
    public CLOSING_STATE: number = 2;
    public RUNNING_STATE: number = 3;
    public STOPPING_STATE: number = 4;

//     设置电梯状态的功能
    abstract setState(state: number): void;

//     具体操作的功能
    abstract open(): void;

    abstract close(): void;

    abstract run(): void;

    abstract stop(): void;

}