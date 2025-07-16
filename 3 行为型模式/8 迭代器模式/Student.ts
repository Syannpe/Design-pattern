/**
 * @version v1.0
 * @ClassNmae: Student
 * @Description: desc
 * @Author: SYANNPE
 */

export default class Student {
    private _name: string;
    private _number: string;

    public toString(): string {
        return `Student{name=${this._name}, number=${this._number}}`;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get number(): string {
        return this._number;
    }

    set number(value: string) {
        this._number = value;
    }

    constructor(name: string, number: string) {
        this._name = name;
        this._number = number;
    }
}