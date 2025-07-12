/**
 * @version v1.0
 * @ClassNmae: GeneralManager
 * @Description: 总经理类
 * @Author: SYANNPE
 */
import Handler from "./Handler";
export default class GeneralManager extends Handler {
    handleLeave(leave) {
        console.log(`总经理审批 ${leave.name} 的请假条，请假天数为 ${leave.num} 天，请假原因为：${leave.content}`);
        console.log("总经理审批完毕");
    }
    constructor() {
        super(Handler.NUM_THREE, Handler.NUM_SEVEN);
    }
}
