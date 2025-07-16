/**
 * @version v1.0
 * @ClassNmae: Client
 * @Description: desc
 * @Author: SYANNPE
 */
import SubscriptionSubject from "./SubscriptionSubject";
import WeiXinUser from "./WeiXinUser";
import Observer from "./Observer";
import Subject from "./Subject";

export default class Client {
    public static main(args: string[]): void {
        let subject: Subject = new SubscriptionSubject();
        let weiXinUser1: Observer = new WeiXinUser("张三");
        let weiXinUser2: Observer = new WeiXinUser("李四");
        let weiXinUser3: Observer = new WeiXinUser("王五");
        subject.attach(weiXinUser1);
        subject.attach(weiXinUser2);
        subject.attach(weiXinUser3);

        // 发出消息给观察者对象
        subject.notify("发送信息了");

     }
}

Client.main([])