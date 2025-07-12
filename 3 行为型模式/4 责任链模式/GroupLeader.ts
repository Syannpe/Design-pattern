/**
 * @version v1.0
 * @ClassNmae: GroupLeader
 * @Description: 小组长类
 * @Author: SYANNPE
 */
import Handler from "./Handler";
import LeaveRequest from "./LeaveRequest";

export default class GroupLeader extends Handler {
    protected handleLeave(leave: LeaveRequest): void {
        console.log(`小组长审批 ${leave.name} 的请假条，请假天数为 ${leave.num} 天，请假原因为：${leave.content}`)
        console.log("小组长审批完毕");
    }

    public constructor() {
        super(0, Handler.NUM_ONE);
    }
}