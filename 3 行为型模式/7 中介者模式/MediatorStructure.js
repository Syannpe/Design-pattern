/**
 * @version v1.0
 * @ClassNmae: MediatorStructure
 * @Description: 具体的终结者角色类
 * @Author: SYANNPE
 */
import Mediator from "./Mediator";
export default class MediatorStructure extends Mediator {
    // 聚合房住合租房者对象
    _houseOwner;
    _tenant;
    get houseOwner() {
        return this._houseOwner;
    }
    set houseOwner(value) {
        this._houseOwner = value;
    }
    get tenant() {
        return this._tenant;
    }
    set tenant(value) {
        this._tenant = value;
    }
    constact(message, person) {
        if (person === this.houseOwner) {
            this.tenant.getMessage(message);
        }
        else {
            this.houseOwner.getMessage(message);
        }
    }
}
