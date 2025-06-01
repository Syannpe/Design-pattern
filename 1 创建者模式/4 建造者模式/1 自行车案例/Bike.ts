/**
 * @version v1.0
 * @ClassNmae: Name
 * @Description: Desc
 * @Author: Syannpe
 */

export default class Bike {
    private _frame: string;
    private _seat: string;

    get frame(): string {
        return this._frame;
    }

    set frame(value: string) {
        this._frame = value;
    }

    get seat(): string {
        return this._seat;
    }

    set seat(value: string) {
        this._seat = value;
    }


}