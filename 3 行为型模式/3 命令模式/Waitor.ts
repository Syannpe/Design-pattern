/**
 * @version v1.0
 * @ClassNmae: Waitor
 * @Description: 服务员类：属于请求者角色
 * @Author: SYANNPE
 */
import Command from "./Command";

export default class Waitor {
//     持有多个命令对象
    private _commands: Array<Command> = new Array<Command>();

    public set command(command: Command) {
        this._commands.push(command);
    }

//     发起命令的功能，喊订单来了
    public orderUp(): void {
        console.log("服务员：订单来了...");

        this._commands.forEach(command => {
            if (!command) return false;

            command.execute();
        });
    }
}