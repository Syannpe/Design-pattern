/**
* @version v1.0
* @ClassNmae: MenuComponent
* @Description: 菜单组件：抽象根节点
* @Author: SYANNPE
*/

export default abstract class MenuComponent {
    // 菜单组件的名称
    protected name: string;
    // 菜单组建的层级
    protected level: number;


    // 添加子菜单
    public add(menuComponent: MenuComponent): void {
        throw new Error("Method not implemented.");
    }

    // 移除子菜单
    public remove(menuComponent: MenuComponent): void {
        throw new Error("Method not implemented.");
    }

    // 获取指定的子菜单
    public getChild(index: number): MenuComponent {
        throw new Error("Method not implemented.");
    }

    // 获取菜单名称
    public getName(): string {
        return this.name;
    }

    // 打印菜单名称方法（包含子菜单和子菜单项）
    public abstract print(): void;
}