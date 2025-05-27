/**
 * @version v1.0
 * @ClassNmae: Star
 * @Description: 明星类
 * @Author: Syannpe
 */

class Star {
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

export default Star;