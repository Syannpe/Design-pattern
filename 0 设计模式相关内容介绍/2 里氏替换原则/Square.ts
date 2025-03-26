import {Rectangle} from "./Rectangle";


class Square extends Rectangle {
    set length(value: number) {
        super.width = value;
        super.length = value;
    }

    set width(value: number) {
        super.width = value;
        super.length = value;
    }

    get length(): number {
        return super.length;
    }

    get width(): number {
        return super.width;
    }

}

export {Square}