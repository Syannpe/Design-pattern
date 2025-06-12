/**
 * @version v1.0
 * @ClassNmae: AbstractBoc
 * @Description: 抽象享元角色
 * @Author: SYANNPE
 */

export default abstract class AbstractBox {
//     获取图形的方法
    public abstract getShape(): string;

//     显示图形及颜色
    public display(color: string): void {
        console.log("颜色是：" + color + "，图形是：" + this.getShape());
    }
}