/**
 * @version v1.0
 * @ClassNmae: RoleStateCaretaker
 * @Description: 备忘录对象管理角色
 * @Author: SYANNPE
 */
import RoleStateMemento from "./RoleStateMemento";

export default class RoleStateCaretaker {
    // 声明RoleStateMemento类型变量
    private _memento: RoleStateMemento; // 角色状态


    get memento(): RoleStateMemento {
        return this._memento;
    }

    set memento(value: RoleStateMemento) {
        this._memento = value;
    }
}