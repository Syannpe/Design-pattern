export default class GameRole {
    _vit; //生命值
    _atk; //攻击力
    _def; //防御力
    // 初始化内部状态方法
    initState() {
        this._vit = 100;
        this._atk = 100;
        this._def = 100;
    }
    // 战斗
    fight() {
        this._atk = 0;
        this._def = 0;
        this._vit = 0;
    }
    // 保存角色状态方法
    saveState() {
        return new GameRole.RoleStateMemento(this._vit, this._atk, this._def);
    }
    // 恢复角色初始化状态
    recoveryState(memento) {
        const roleStateMemento = memento;
        //     将备忘录对象中存储的状态值赋给当前对象
        this._vit = roleStateMemento.vit;
        this._atk = roleStateMemento.atk;
        this._def = roleStateMemento.def;
    }
    // 展示状态功能
    stateDisplay() {
        console.log(`\n 当前角色状态：\n 攻击力：${this._atk}\n 防御力：${this._def}\n 生命值：${this._vit}`);
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
    static RoleStateMemento;
}
class RoleStateMemento {
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
GameRole.RoleStateMemento = RoleStateMemento;
