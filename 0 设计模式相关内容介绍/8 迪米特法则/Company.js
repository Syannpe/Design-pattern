/**
 * @version v1.0
 * @ClassNmae: Company
 * @Description: 公司类
 * @Author: Syannpe
 */
class Company {
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    constructor(name) {
        this.name = name;
    }
}
export default Company;
