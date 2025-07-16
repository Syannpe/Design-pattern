/**
 * @version v1.0
 * @ClassNmae: RoleStateCaretaker
 * @Description: 备忘录对象管理角色
 * @Author: SYANNPE
 */
export default class RoleStateCaretaker {
    // 声明RoleStateMemento类型变量
    _memento; // 角色状态
    get memento() {
        return this._memento;
    }
    set memento(value) {
        this._memento = value;
    }
}
