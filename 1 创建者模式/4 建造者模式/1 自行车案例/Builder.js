/**
 * @version v1.0
 * @ClassNmae: Name
 * @Description: Desc
 * @Author: Syannpe
 */
import Bike from "./Bike";
export default class Builder {
    //     声明Bike类型的变量并进行赋值
    bike = new Bike();
    getBike() {
        return this.bike;
    }
}
