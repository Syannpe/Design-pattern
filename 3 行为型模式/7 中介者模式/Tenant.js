/**
 * @version v1.0
 * @ClassNmae: Tenant
 * @Description: desc
 * @Author: SYANNPE
 */
import Person from "./Person";
export default class Tenant extends Person {
    constructor(name, mediator) {
        super(name, mediator);
    }
    constact(msg) {
        this.mediator.constact(msg, this);
    }
    //     获取信息
    getMessage(msg) {
        console.log(`租客${this.name}获取信息：${msg}`);
    }
}
