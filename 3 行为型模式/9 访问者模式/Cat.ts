/**
 * @version v1.0
 * @ClassNmae: Cat
 * @Description: 具体元素角色类（宠物猫）
 * @Author: SYANNPE
 */
import Animal from "./Animal";
import Person from "./Person";

export default class Cat implements Animal {
    accept(person: Person): void {
        person.feed(this);      //访问者给宠物猫喂食
        console.log("好好吃，喵喵喵");
    }

}