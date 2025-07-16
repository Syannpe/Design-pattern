/**
 * @version v1.0
 * @ClassNmae: Student
 * @Description: desc
 * @Author: SYANNPE
 */
export default class Student {
    _name;
    _number;
    toString() {
        return `Student{name=${this._name}, number=${this._number}}`;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get number() {
        return this._number;
    }
    set number(value) {
        this._number = value;
    }
    constructor(name, number) {
        this._name = name;
        this._number = number;
    }
}
