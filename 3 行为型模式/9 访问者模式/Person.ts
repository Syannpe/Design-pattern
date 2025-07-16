/**
 * @version v1.0
 * @ClassNmae: Person
 * @Description: 抽象访问者角色类
 * @Author: SYANNPE
 */
import Cat from "./Cat";
import Dog from "./Dog";

export default interface Person {
    //喂食宠物
    feed(cat: Cat): void;

    feed(dog: Dog): void;
}