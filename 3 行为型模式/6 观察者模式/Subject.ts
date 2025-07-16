/**
 * @version v1.0
 * @ClassNmae: Subject
 * @Description: desc
 * @Author: SYANNPE
 */
import Observer from "./Observer";

export default interface Subject {
//     添加观察者对象
    attach(observer: Observer): void;

//     删除订阅者对象
    detach(observer: Observer): void;

    //     通知所有订阅者对象
    notify(message: string): void;
}