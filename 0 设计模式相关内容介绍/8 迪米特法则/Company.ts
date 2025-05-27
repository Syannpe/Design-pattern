/**
 * @version v1.0
 * @ClassNmae: Company
 * @Description: 公司类
 * @Author: Syannpe
 */

class Company {
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    private _name: string;

    constructor(name: string) {
        this.name = name;
    }
}

export default Company;