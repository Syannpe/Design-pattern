export default class SubscriptionSubject {
    // 定义一个集合用来存储多个观察者对象
    weiXinUserList = [];
    attach(observer) {
        this.weiXinUserList.push(observer);
    }
    detach(observer) {
        this.weiXinUserList.splice(this.weiXinUserList.indexOf(observer), 1);
    }
    notify(message) {
        //     遍历集合
        for (const weiXinUserListElement of this.weiXinUserList) {
            weiXinUserListElement.update(message);
        }
    }
}
