/**
 * @version v1.0
 * @ClassNmae: IBox
 * @Description: L图形类：具体享元角色
 * @Author: SYANNPE
 */
import AbstractBox from "./AbstractBox";
export default class LBox extends AbstractBox {
    getShape() {
        return "L";
    }
}
