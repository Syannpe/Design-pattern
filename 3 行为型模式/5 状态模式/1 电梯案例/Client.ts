/**
 * @version v1.0
 * @ClassNmae: Client
 * @Description: 客户端类
 * @Author: SYANNPE
 */
import Lift from "./Lift";
import ILift from "./ILift";

export default class Client {
    public static main(args: string[]): void {
        const lift: Lift = new Lift();

        lift.setState(lift.RUNNING_STATE)

        // 分别调用四种方法
        lift.open();

        lift.close();

        lift.run();

        lift.stop();
    }
}

Client.main([])