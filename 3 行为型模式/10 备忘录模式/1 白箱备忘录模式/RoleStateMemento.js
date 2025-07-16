/**
 * @version v1.0
 * @ClassNmae: RoleStateMemento
 * @Description: 备忘录角色类
 * @Author: SYANNPE
 */
export default class RoleStateMemento {
    _vit;
    _atk;
    _def;
    constructor(vit, atk, def) {
        this._vit = vit;
        this._atk = atk;
        this._def = def;
    }
    get vit() {
        return this._vit;
    }
    set vit(value) {
        this._vit = value;
    }
    get atk() {
        return this._atk;
    }
    set atk(value) {
        this._atk = value;
    }
    get def() {
        return this._def;
    }
    set def(value) {
        this._def = value;
    }
}
