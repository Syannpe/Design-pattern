/**
 * @version v1.0
 * @ClassNmae: Name
 * @Description: Desc
 * @Author: Syannpe
 */
import Cloneable from "./Cloneable";
export default class Realizetype extends Cloneable {
    constructor() {
        super();
        console.log("实例对象创建完毕");
    }
    clone() {
        console.log("开始克隆");
        return super.clone();
    }
}
