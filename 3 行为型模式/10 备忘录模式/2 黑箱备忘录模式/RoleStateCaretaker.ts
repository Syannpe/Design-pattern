/**
 * @version v1.0
 * @ClassNmae: RoleStateCaretaker
 * @Description: 备忘录对象管理角色
 * @Author: SYANNPE
 */

import Memento from "./Memento";

export default class RoleStateCaretaker {
    // 声明RoleStateMemento类型变量
    private _memento: Memento; // 角色状态


    get memento(): Memento {
        return this._memento;
    }

    set memento(value: Memento) {
        this._memento = value;
    }
}