export default class Handler {
    static NUM_ONE = 1;
    static NUM_THREE = 3;
    static NUM_SEVEN = 7;
    //  该领导处理的请求关键区间
    numStart;
    numEnd;
    //     声明后继者（声明上级领导）
    _nextHandler;
    constructor(numStart, numEnd) {
        this.numStart = numStart;
        this.numEnd = numEnd;
    }
    // 设置上级领导对象
    set nextHandler(value) {
        this._nextHandler = value;
    }
    //     提交请假条
    submit(leave) {
        this.handleLeave(leave);
        if (this._nextHandler !== null && leave.num > this.numEnd) {
            //     提交上级领导
            this._nextHandler.submit(leave);
        }
        else {
            console.log("流程结束");
        }
    }
}
