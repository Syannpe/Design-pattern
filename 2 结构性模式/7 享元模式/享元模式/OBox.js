/**
 * @version v1.0
 * @ClassNmae: IBox
 * @Description: O图形类：具体享元角色
 * @Author: SYANNPE
 */
import AbstractBox from "./AbstractBox";
export default class OBox extends AbstractBox {
    getShape() {
        return "O";
    }
}
