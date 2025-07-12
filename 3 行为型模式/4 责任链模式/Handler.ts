/**
 * @version v1.0
 * @ClassNmae: Handler
 * @Description: 抽象处理者
 * @Author: SYANNPE
 */
import LeaveRequest from "./LeaveRequest";

export default abstract class Handler {
    protected static NUM_ONE: number = 1;
    protected static NUM_THREE: number = 3;
    protected static NUM_SEVEN: number = 7;

//  该领导处理的请求关键区间
    private numStart: number;
    private numEnd: number;

//     声明后继者（声明上级领导）
    private _nextHandler: Handler;

    constructor(numStart: number, numEnd?: number) {
        this.numStart = numStart;
        this.numEnd = numEnd;
    }


    // 设置上级领导对象
    set nextHandler(value: Handler) {
        this._nextHandler = value;
    }

//     各级领导处理请求条的方法
    protected abstract handleLeave(leave: LeaveRequest): void;

//     提交请假条
    public submit(leave: LeaveRequest): void {
        this.handleLeave(leave);

        if (this._nextHandler !== null && leave.num > this.numEnd) {
            //     提交上级领导
            this._nextHandler.submit(leave);
        } else {
            console.log("流程结束");
        }
    }
}