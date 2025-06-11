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
    tv = new TV();
    airCondition = new AirCondition();
    lighter = new Lighter();
    constructor() {
        this.lighter = new Lighter();
        this.tv = new TV();
        this.airCondition = new AirCondition();
    }
    // 通过语音控制
    say(message) {
        if (message.includes("打开")) {
            this.on();
        }
        else if (message.includes("关闭")) {
            this.off();
        }
        else {
            console.log("我还听不懂你说的");
        }
    }
    // 一件打开功能
    on() {
        this.lighter.on();
        this.tv.on();
        this.airCondition.on();
    }
    // 一键关闭功能
    off() {
        this.lighter.off();
        this.tv.off();
        this.airCondition.off();
    }
}
