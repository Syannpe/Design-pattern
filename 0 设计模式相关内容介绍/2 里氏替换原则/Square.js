import { Rectangle } from "./Rectangle";
class Square extends Rectangle {
    set length(value) {
        super.width = value;
        super.length = value;
    }
    set width(value) {
        super.width = value;
        super.length = value;
    }
    get length() {
        return super.length;
    }
    get width() {
        return super.width;
    }
}
export { Square };
