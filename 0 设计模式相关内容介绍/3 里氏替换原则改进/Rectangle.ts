import {Quadrilateral} from "./Quadrilateral";

class Rectangle implements Quadrilateral{
    private _length: number;

    private _width: number;


    get length(): number {
        return this._length;
    }

    set length(value: number) {
        this._length = value;
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }
}

export {Rectangle}