/**
 * @version v1.0
 * @ClassNmae: HouseOwner
 * @Description: desc
 * @Author: SYANNPE
 */
import Person from "./Person";
export default class HouseOwner extends Person {
    constructor(name, mediator) {
        super(name, mediator);
    }
    constact(msg) {
        this.mediator.constact(msg, this);
    }
    getMessage(msg) {
        console.log(`房主${this.name}收到信息：${msg}`);
    }
}
