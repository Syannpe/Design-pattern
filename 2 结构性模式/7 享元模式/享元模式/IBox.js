/**
 * @version v1.0
 * @ClassNmae: IBox
 * @Description: I图形类：具体享元角色
 * @Author: SYANNPE
 */
import AbstractBox from "./AbstractBox";
export default class IBox extends AbstractBox {
    getShape() {
        return "I";
    }
}
