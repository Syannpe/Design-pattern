import Builder from "./Builder";
export default class OfoBuilder extends Builder {
    buildFrame() {
        this.bike.frame = "铝合金车架";
    }
    buildSeat() {
        this.bike.seat = "橡胶车座";
    }
    createBike() {
        return this.bike;
    }
}
