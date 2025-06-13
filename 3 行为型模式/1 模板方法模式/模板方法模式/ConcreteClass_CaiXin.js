/**
 * @version v1.0
 * @ClassNmae: ConcreteClass
 * @Description: 炒菜心类
 * @Author: SYANNPE
 */
import AbstractClass from "./AbstractClass";
export default class ConcreteClass_CaiXin extends AbstractClass {
    pourVegetable() {
        console.log("下锅的蔬菜是菜心");
    }
    pourSauce() {
        console.log("下锅的酱料是蒜蓉");
    }
}
