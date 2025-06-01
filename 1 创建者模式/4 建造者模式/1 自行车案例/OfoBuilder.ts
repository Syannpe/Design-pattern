/**
 * @version v1.0
 * @ClassNmae: Name
 * @Description: 构建Ofo单车
 * @Author: Syannpe
 */
import Bike from "./Bike";
import Builder from "./Builder";

export default class OfoBuilder extends Builder {
    public buildFrame() {
        this.bike.frame = "铝合金车架";
    }

    public buildSeat() {
        this.bike.seat = "橡胶车座";
    }

    public createBike(): Bike {
        return this.bike;
    }

}