/**
 * @version v1.0
 * @ClassNmae: GeneralManager
 * @Description: 总经理类
 * @Author: SYANNPE
 */
import Handler from "./Handler";
import LeaveRequest from "./LeaveRequest";

export default class GeneralManager extends Handler {
    protected handleLeave(leave: LeaveRequest): void {
        console.log(`总经理审批 ${leave.name} 的请假条，请假天数为 ${leave.num} 天，请假原因为：${leave.content}`)
        console.log("总经理审批完毕");
    }

    public constructor() {
        super(Handler.NUM_THREE, Handler.NUM_SEVEN);
    }
}