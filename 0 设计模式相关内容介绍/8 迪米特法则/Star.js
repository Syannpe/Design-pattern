/**
 * @version v1.0
 * @ClassNmae: Star
 * @Description: 明星类
 * @Author: Syannpe
 */
class Star {
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
export default Star;
