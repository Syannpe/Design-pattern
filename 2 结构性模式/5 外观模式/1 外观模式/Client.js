/**
 * @version v1.0
 * @ClassNmae: Client
 * @Description: desc
 * @Author: SYANNPE
 */
import SmartAppliancesFacade from "./SmartAppliancesFacade";
export default class Client {
    static main(args) {
        let smartAppliancesFacade = new SmartAppliancesFacade();
        smartAppliancesFacade.say("打开");
        smartAppliancesFacade.say("关闭");
    }
}
Client.main([]);
