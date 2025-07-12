/**
 * @version v1.0
 * @ClassNmae: Manager
 * @Description: 部门经理类
 * @Author: SYANNPE
 */
import Handler from "./Handler";
export default class Manager extends Handler {
    handleLeave(leave) {
        console.log(`部门经理审批 ${leave.name} 的请假条，请假天数为 ${leave.num} 天，请假原因为：${leave.content}`);
        console.log("部门经理审批完毕");
    }
    constructor() {
        super(Handler.NUM_ONE, Handler.NUM_THREE);
    }
}
