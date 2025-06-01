import Builder from "./Builder";
export default class MobileBuilder extends Builder {
    buildFrame() {
        this.bike.frame = "碳纤维车架";
    }
    buildSeat() {
        this.bike.seat = "真皮车座";
    }
    createBike() {
        return this.bike;
    }
}
