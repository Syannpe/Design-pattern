import {Rectangle} from "./Rectangle";
import {Quadrilateral} from "./Quadrilateral";


class Square implements Quadrilateral {
    private _side: number;

    public get side(): number {
        return this._side;
    }

    public set side(side: number) {
        this._side = side;
    }

    get length(): number {
        return this._side;
    }

    get width(): number {
        return this._side;
    }

}

export {Square}