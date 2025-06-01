/**
 * @version v1.0
 * @ClassNmae: Name
 * @Description: Desc
 * @Author: Syannpe
 */
import Cloneable from "./Cloneable";
import Student from "./Student";

export default class Citation extends Cloneable<Citation> {
    get student(): Student {
        return this._student;
    }

    set student(value: Student) {
        this._student = value;
    }

    private _student: Student;


    public clone(): Citation {
        return super.clone();
    }

    public show() {
        console.log(`${this._student.name}同学，在202年第一学期中表现优秀，所以发一个奖状`);
    }
}

``