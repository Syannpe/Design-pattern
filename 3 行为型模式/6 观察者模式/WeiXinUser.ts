/**
 * @version v1.0
 * @ClassNmae: WeiXinUser
 * @Description: 具体的观察者角色类
 * @Author: SYANNPE
 */

export default class WeiXinUser {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    update(message: string): void {
        console.log(`${this.name} 收到微信推送消息：${message}`);
    }
}