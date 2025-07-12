/**
 * @version v1.0
 * @ClassNmae: Client
 * @Description: desc
 * @Author: SYANNPE
 */
import Context from "./Context";
import ClosingState from "./ClosingState";
export default class Client {
    static main(args) {
        //     创建环境角色对象
        const context = new Context();
        //     设置当前电梯状态
        context.setLiftState(new ClosingState());
        context.open();
        context.close();
        context.run();
        context.stop();
    }
}
Client.main([]);
