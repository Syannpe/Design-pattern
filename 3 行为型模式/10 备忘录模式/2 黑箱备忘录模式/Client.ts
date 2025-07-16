/**
 * @version v1.0
 * @ClassNmae: Client
 * @Description: desc
 * @Author: SYANNPE
 */
import GameRole from "./GameRole";
import RoleStateCaretaker from "./RoleStateCaretaker";

export default class Client {
    static main(args: string[]): void {
        console.log("-".repeat(10) + "大战boss前" + "-".repeat(10));
        const role = new GameRole();
        role.initState();
        role.stateDisplay();

        // 创建备份
        const roleStateCaretaker = new RoleStateCaretaker();
        roleStateCaretaker.memento = role.saveState();

        console.log("-".repeat(10) + "大战boss后" + "-".repeat(10));
        // 损耗严重
        role.fight();
        role.stateDisplay();

        console.log("-".repeat(10) + "恢复之前状态" + "-".repeat(10));
        role.recoveryState(roleStateCaretaker.memento);
        role.stateDisplay();

    }
}

Client.main([])