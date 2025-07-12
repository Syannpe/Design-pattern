/**
 * @version v1.0
 * @ClassNmae: Client
 * @Description: desc
 * @Author: SYANNPE
 */
import LeaveRequest from "./LeaveRequest";
import Handler from "./Handler";
import Manager from "./Manager";
import GroupLeader from "./GroupLeader";
import GeneralManager from "./GeneralManager";

export default class Client {
    public static main(args: string[]): void {
        const leave: LeaveRequest = new LeaveRequest("小李", 6, "身体不适");

        const groupLeader: Handler = new GroupLeader();
        const manager: Handler = new Manager();
        const generalManager: Handler = new GeneralManager();

        //     设置处理者链条
        groupLeader.nextHandler = manager;
        manager.nextHandler = generalManager;

    //     小明提交请假申请
        groupLeader.submit(leave);
    }
}

Client.main([])