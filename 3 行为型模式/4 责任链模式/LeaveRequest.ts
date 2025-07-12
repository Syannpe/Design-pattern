/**
 * @version v1.0
 * @ClassNmae: LeaveRequest
 * @Description: 请假条
 * @Author: SYANNPE
 */

export default class LeaveRequest {
//     请假人姓名
    private _name: string;
    private _num: number;
    private _content: string;
    constructor(name: string, num: number, content: string) {
        this._name = name;
        this._num = num;
        this._content = content;
    }


    get name(): string {
        return this._name;
    }

    get num(): number {
        return this._num;
    }

    get content(): string {
        return this._content;
    }

//     请假天数
//     请假内容
}