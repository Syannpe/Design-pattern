/**
 * @version v1.0
 * @ClassNmae: Menu
 * @Description: 菜单类：属于树枝节点
 * @Author: SYANNPE
 */
import MenuComponent from "./MenuComponent";

export default class Menu extends MenuComponent {
    // 菜单可以有多个子菜单或者子菜单项
    private menuComponents: Array<MenuComponent> = [];

    // 构造方法
    constructor(name: string, level: number) {
        super();
        this.name = name;
        this.level = level;
    }

    public print(): void {
    //     打印菜单名称
    //     打印子菜单或者子菜单项名称
        console.log(`${"-".repeat(this.level)}${this.name}`)

        for (let menuComponent of this.menuComponents) {
            menuComponent.print();
        }
    }

    add(menuComponent: MenuComponent) {
        this.menuComponents.push(menuComponent);
    }

    remove(menuComponent: MenuComponent) {
        this.menuComponents.splice(this.menuComponents.indexOf(menuComponent), 1);
    }

    getChild(index: number): MenuComponent {
        return this.menuComponents[index];
    }
}