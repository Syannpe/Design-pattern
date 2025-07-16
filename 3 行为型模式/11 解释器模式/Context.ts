/**
 * @version v1.0
 * @ClassNmae: Context
 * @Description: 环境角色类
 * @Author: SYANNPE
 */
import Variable from "./Variable";

export default class Context {
//     定义一个map集合用于存储变量和对应的值
    private map: Map<Variable, number> = new Map<Variable, number>();

//     添加变量的功能
    public assign(variable: Variable, value: number): void {
        this.map.set(variable, value);
    }

    // 根据变量获取对应的值
    public getValue(variable: Variable): number {
        return this.map.get(variable);
    }


}