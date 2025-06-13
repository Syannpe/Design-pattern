/**
 * @version v1.0
 * @ClassNmae: Name
 * @Description: Desc
 * @Author: Syannpe
 */
export default class Bike {
    _frame;
    _seat;
    get frame() {
        return this._frame;
    }
    set frame(value) {
        this._frame = value;
    }
    get seat() {
        return this._seat;
    }
    set seat(value) {
        this._seat = value;
    }
}
