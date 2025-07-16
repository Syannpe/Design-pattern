/**
 * @version v1.0
 * @ClassNmae: Home
 * @Description: 对象结构类
 * @Author: SYANNPE
 */
import Animal from "./Animal";
import Person from "./Person";

export default class Home {
//     声明一个集合对象用于存储元素对象
    private nodeList: Array<Animal> = [];

    // 添加元素功能
    add(node: Animal): void {
        this.nodeList.push(node);
    }


    action(person: Person): void {
        // 遍历集合获取每一个对象，让访问者访问每一个元素
        for (let node of this.nodeList) {
            node.accept(person);
        }
    }

}