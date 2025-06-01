/**
 * @version v1.0
 * @ClassNmae: Name
 * @Description: Desc
 * @Author: Syannpe
 */
import Bike from "./Bike";
import Builder from "./Builder";

export default class MobileBuilder extends Builder {
    public buildFrame() {
        this.bike.frame = "碳纤维车架";
    }

    public buildSeat() {
        this.bike.seat = "真皮车座";
    }

    public createBike(): Bike {
        return this.bike;
    }

}