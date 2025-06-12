/**
* @version v1.0
* @ClassNmae: MenuComponent
* @Description: 菜单组件：抽象根节点
* @Author: SYANNPE
*/
export default class MenuComponent {
    // 菜单组件的名称
    name;
    // 菜单组建的层级
    level;
    // 添加子菜单
    add(menuComponent) {
        throw new Error("Method not implemented.");
    }
    // 移除子菜单
    remove(menuComponent) {
        throw new Error("Method not implemented.");
    }
    // 获取指定的子菜单
    getChild(index) {
        throw new Error("Method not implemented.");
    }
    // 获取菜单名称
    getName() {
        return this.name;
    }
}
