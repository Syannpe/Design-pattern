/**
 * @version v1.0
 * @ClassNmae: Animal
 * @Description: 抽象元素角色类
 * @Author: SYANNPE
 */
import Person from "./Person";

export default interface Animal {
//     接受访问这访问的功能
    accept(person:Person):void;

}