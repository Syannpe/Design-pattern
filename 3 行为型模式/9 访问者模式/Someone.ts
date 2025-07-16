/**
 * @version v1.0
 * @ClassNmae: Owner
 * @Description: 具体访问者角色类（其他人）
 * @Author: SYANNPE
 */
import Person from "./Person";
import Cat from "./Cat";
import Dog from "./Dog";

export default class Someone implements Person {
    feed(cat: Cat): void;
    feed(dog: Dog): void;
    feed(cat: Cat | Dog): void {
        if (cat instanceof Cat) {
            console.log("其他人喂食猫")
        } else if (cat instanceof Dog) {
            console.log("其他人喂食狗")
        }
    }
}