/**
 * @version v1.0
 * @ClassNmae: MenuItem
 * @Description: 菜单项类：叶子节点
 * @Author: SYANNPE
 */
import MenuComponent from "./MenuComponent";
export default class MenuItem extends MenuComponent {
    constructor(name, level) {
        super();
        this.name = name;
        this.level = level;
    }
    print() {
        console.log(`${"-".repeat(this.level)}${this.name}`);
    }
}
