/**
 * @version v1.0
 * @ClassNmae: ConcreteClass
 * @Description: 炒包菜类
 * @Author: SYANNPE
 */
import AbstractClass from "./AbstractClass";
export default class ConcreteClass_BaoCai extends AbstractClass {
    pourVegetable() {
        console.log("下锅的蔬菜是包菜");
    }
    pourSauce() {
        console.log("下锅的酱料是辣椒");
    }
}
