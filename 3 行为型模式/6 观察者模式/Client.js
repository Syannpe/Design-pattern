/**
 * @version v1.0
 * @ClassNmae: Client
 * @Description: desc
 * @Author: SYANNPE
 */
import SubscriptionSubject from "./SubscriptionSubject";
import WeiXinUser from "./WeiXinUser";
export default class Client {
    static main(args) {
        let subject = new SubscriptionSubject();
        let weiXinUser1 = new WeiXinUser("张三");
        let weiXinUser2 = new WeiXinUser("李四");
        let weiXinUser3 = new WeiXinUser("王五");
        subject.attach(weiXinUser1);
        subject.attach(weiXinUser2);
        subject.attach(weiXinUser3);
        // 发出消息给观察者对象
        subject.notify("发送信息了");
    }
}
Client.main([]);
