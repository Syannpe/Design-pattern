/**
 * @version v1.0
 * @ClassNmae: Name
 * @Description: Desc
 * @Author: Syannpe
 */
import Cloneable from "./Cloneable";

export default class Citation extends Cloneable<Citation> {
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    private _name: string;

    constructor(name?: string) {
        super();
        this._name = name;
    }

    public clone(): Citation {
        return super.clone();
    }

    public show() {
        console.log(`${this._name}同学，在202年第一学期中表现优秀，所以发一个奖状`);
    }
}

``