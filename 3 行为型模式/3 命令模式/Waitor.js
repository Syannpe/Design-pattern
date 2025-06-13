export default class Waitor {
    //     持有多个命令对象
    _commands = new Array();
    set command(command) {
        this._commands.push(command);
    }
    //     发起命令的功能，喊订单来了
    orderUp() {
        console.log("服务员：订单来了...");
        this._commands.forEach(command => {
            if (!command)
                return false;
            command.execute();
        });
    }
}
