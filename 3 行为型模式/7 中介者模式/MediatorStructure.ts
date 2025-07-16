/**
 * @version v1.0
 * @ClassNmae: MediatorStructure
 * @Description: 具体的终结者角色类
 * @Author: SYANNPE
 */
import Mediator from "./Mediator";
import Person from "./Person";
import HouseOwner from "./HouseOwner";
import Tenant from "./Tenant";

export default class MediatorStructure extends Mediator {
    // 聚合房住合租房者对象
    private _houseOwner: HouseOwner;
    private _tenant: Tenant;


    get houseOwner(): HouseOwner {
        return this._houseOwner;
    }

    set houseOwner(value: HouseOwner) {
        this._houseOwner = value;
    }

    get tenant(): Tenant {
        return this._tenant;
    }

    set tenant(value: Tenant) {
        this._tenant = value;
    }

    public constact(message: string, person: Person): void {
        if (person === this.houseOwner) {
            this.tenant.getMessage(message);
        } else {
            this.houseOwner.getMessage(message);
        }
    }

}