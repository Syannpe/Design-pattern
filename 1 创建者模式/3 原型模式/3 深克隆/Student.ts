/**
 * @version v1.0
 * @ClassNmae: Name
 * @Description: Desc
 * @Author: Syannpe
 */

export default class Student {

    private _name: string;
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    public toString(): string {
        return JSON.stringify(this);
    }
}