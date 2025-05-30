/**
 * @version v1.0
 * @ClassNmae: Coffee
 * @Description: 提拉米苏
 * @Author: Syannpe
 */
import Coffee from "./Coffee";
import Dessert from "./Dessert";

export default class Trimisu extends Dessert {
    public show(): void {
        console.log("Trimisu");
    }

}