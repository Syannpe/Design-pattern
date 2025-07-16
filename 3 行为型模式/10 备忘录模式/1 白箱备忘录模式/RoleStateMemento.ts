/**
 * @version v1.0
 * @ClassNmae: RoleStateMemento
 * @Description: 备忘录角色类
 * @Author: SYANNPE
 */

export default class RoleStateMemento {
    private _vit: number;
    private _atk: number;
    private _def: number;

    constructor(vit?: number, atk?: number, def?: number) {
        this._vit = vit;
        this._atk = atk;
        this._def = def;
    }


    get vit(): number {
        return this._vit;
    }

    set vit(value: number) {
        this._vit = value;
    }

    get atk(): number {
        return this._atk;
    }

    set atk(value: number) {
        this._atk = value;
    }

    get def(): number {
        return this._def;
    }

    set def(value: number) {
        this._def = value;
    }
}