/**
 * @version v1.0
 * @ClassNmae: GameRole
 * @Description: 游戏角色类（属于发起人角色）
 * @Author: SYANNPE
 */
import RoleStateMemento from "./RoleStateMemento";

export default class GameRole {
    private _vit: number;     //生命值
    private _atk: number;     //攻击力
    private _def: number;     //防御力

    // 初始化内部状态方法
    public initState(): void {
        this._vit = 100;
        this._atk = 100;
        this._def = 100;
    }

    // 战斗
    public fight(): void {
        this._atk = 0;
        this._def = 0;
        this._vit = 0;
    }

    // 保存角色状态方法
    public saveState(): RoleStateMemento {
        return new RoleStateMemento(this._vit, this._atk, this._def);
    }

    // 恢复角色初始化状态
    public recoveryState(memento: RoleStateMemento): void {
        //     将备忘录对象中存储的状态值赋给当前对象
        this._vit = memento.vit;
        this._atk = memento.atk;
        this._def = memento.def;
    }

    // 展示状态功能
    public stateDisplay(): void {
        console.log(`\n 当前角色状态：\n 攻击力：${this._atk}\n 防御力：${this._def}\n 生命值：${this._vit}`);
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