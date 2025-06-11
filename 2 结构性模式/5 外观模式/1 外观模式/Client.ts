/**
 * @version v1.0
 * @ClassNmae: Client
 * @Description: desc
 * @Author: SYANNPE
 */
import SmartAppliancesFacade from "./SmartAppliancesFacade";

export default class Client {
    public static main(args: string[]): void {
        let smartAppliancesFacade: SmartAppliancesFacade = new SmartAppliancesFacade();
        smartAppliancesFacade.say("打开");
        smartAppliancesFacade.say("关闭");
    }
}

Client.main([])