/**
 * @version v1.0
 * @ClassNmae: LeaveRequest
 * @Description: 请假条
 * @Author: SYANNPE
 */
export default class LeaveRequest {
    //     请假人姓名
    _name;
    _num;
    _content;
    constructor(name, num, content) {
        this._name = name;
        this._num = num;
        this._content = content;
    }
    get name() {
        return this._name;
    }
    get num() {
        return this._num;
    }
    get content() {
        return this._content;
    }
}
