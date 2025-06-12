/**
 * @version v1.0
 * @ClassNmae: AbstractBoc
 * @Description: 抽象享元角色
 * @Author: SYANNPE
 */
export default class AbstractBox {
    //     显示图形及颜色
    display(color) {
        console.log("颜色是：" + color + "，图形是：" + this.getShape());
    }
}
