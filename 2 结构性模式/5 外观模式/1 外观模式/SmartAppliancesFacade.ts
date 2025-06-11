/**
 * @version v1.0
 * @ClassNmae: SmartAppliancesFacade
 * @Description: 外观类，用户主要和该类对象进行交互
 * @Author: SYANNPE
 */
import TV from "./TV";
import AirCondition from "./AirCondition";
import Lighter from "./Lighter";

export default class SmartAppliancesFacade {
    // 聚合电灯对象，电视机对象，空调对象
    private tv: TV = new TV();
    private airCondition: AirCondition = new AirCondition();
    private lighter: Lighter = new Lighter();

    public constructor() {
        this.lighter = new Lighter();
        this.tv = new TV();
        this.airCondition = new AirCondition();
    }

    // 通过语音控制
    public say(message: string): void {
        if (message.includes("打开")) {
            this.on();
        } else if (message.includes("关闭")) {
            this.off();
        } else {
            console.log("我还听不懂你说的");
        }
    }

    // 一件打开功能
    private on(): void {
        this.lighter.on();
        this.tv.on();
        this.airCondition.on();
    }

    // 一键关闭功能
    private off(): void {
        this.lighter.off();
        this.tv.off();
        this.airCondition.off();
    }
}