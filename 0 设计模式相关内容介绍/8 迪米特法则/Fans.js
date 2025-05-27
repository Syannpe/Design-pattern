/**
 * @version v1.0
 * @ClassNmae: Fans
 * @Description: 粉丝类
 * @Author: Syannpe
 */
class Fans {
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
export default Fans;
