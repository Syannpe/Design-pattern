/**
 * @version v1.0
 * @ClassNmae: Name
 * @Description: Desc
 * @Author: Syannpe
 */
import Bike from "./Bike";

export default abstract class Builder {
//     声明Bike类型的变量并进行赋值
    protected bike: Bike = new Bike();

    public abstract buildFrame();

    public abstract buildSeat();

    public abstract createBike(): Bike;
    public getBike(): Bike {
        return this.bike;
    }
}