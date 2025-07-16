/**
 * @version v1.0
 * @ClassNmae: HouseOwner
 * @Description: desc
 * @Author: SYANNPE
 */
import Person from "./Person";
import Mediator from "./Mediator";

export default class HouseOwner extends Person {
    public constructor(name: string, mediator: Mediator) {
        super(name, mediator);
    }
    public constact(msg: string): void {
        this.mediator.constact(msg, this);
    }
    public getMessage(msg: string): void {
        console.log(`房主${this.name}收到信息：${msg}`);
    }
}