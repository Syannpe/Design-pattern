/**
 * @version v1.0
 * @ClassNmae: SubscriptionSubject
 * @Description: desc
 * @Author: SYANNPE
 */
import Observer from "./Observer";
import Subject from "./Subject";

export default class SubscriptionSubject implements Subject {
    // 定义一个集合用来存储多个观察者对象
    private weiXinUserList: Observer[] = [];

    attach(observer: Observer): void {
        this.weiXinUserList.push(observer);
    }

    detach(observer: Observer): void {
        this.weiXinUserList.splice(this.weiXinUserList.indexOf(observer), 1);
    }

    notify(message: string): void {
        //     遍历集合
        for (const weiXinUserListElement of this.weiXinUserList) {
            weiXinUserListElement.update(message);
        }
    }

}