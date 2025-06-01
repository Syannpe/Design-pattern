/**
 * @version v1.0
 * @ClassNmae: Name
 * @Description: Desc
 * @Author: Syannpe
 */
import Cloneable from "./Cloneable";
export default class Citation extends Cloneable {
    get student() {
        return this._student;
    }
    set student(value) {
        this._student = value;
    }
    clone() {
        return super.clone();
    }
    show() {
        console.log(`${this._student.name}同学，在202年第一学期中表现优秀，所以发一个奖状`);
    }
}
``;
