/**
 * @version v1.0
 * @ClassNmae: Tenant
 * @Description: desc
 * @Author: SYANNPE
 */
import Person from "./Person";
import Mediator from "./Mediator";

export default class Tenant extends Person {
    public constructor(name: string, mediator: Mediator) {
        super(name, mediator);
    }

    public constact(msg: string): void {
        this.mediator.constact(msg, this);
    }

//     获取信息
    public getMessage(msg: string): void {
        console.log(`租客${this.name}获取信息：${msg}`);
    }
}