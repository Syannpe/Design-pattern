/**
 * @version v1.0
 * @ClassNmae: Fans
 * @Description: 粉丝类
 * @Author: Syannpe
 */

class Fans {
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

export default Fans;