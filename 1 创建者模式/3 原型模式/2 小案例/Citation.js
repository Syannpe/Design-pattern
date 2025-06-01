/**
 * @version v1.0
 * @ClassNmae: Name
 * @Description: Desc
 * @Author: Syannpe
 */
import Cloneable from "./Cloneable";
export default class Citation extends Cloneable {
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    constructor(name) {
        super();
        this._name = name;
    }
    clone() {
        return super.clone();
    }
    show() {
        console.log(`${this._name}同学，在202年第一学期中表现优秀，所以发一个奖状`);
    }
}
``;
