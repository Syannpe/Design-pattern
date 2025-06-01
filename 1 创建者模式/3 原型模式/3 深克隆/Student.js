/**
 * @version v1.0
 * @ClassNmae: Name
 * @Description: Desc
 * @Author: Syannpe
 */
export default class Student {
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    toString() {
        return JSON.stringify(this);
    }
}
