/**
 * @version v1.0
 * @ClassNmae: AbstractClass
 * @Description: 抽象类：定义模板方法和基本方法
 * @Author: SYANNPE
 */
export default class AbstractClass {
    // 模板方法定义
    cookProcess() {
        this.pourOil();
        this.heatOil();
        this.pourVegetable();
        this.pourSauce();
        this.fry();
    }
    pourOil() {
        console.log("倒油");
    }
    //第三步:热油是一样的，所以直接实现
    heatOil() {
        console.log("热油");
    }
    ;
    //第五步:翻炒是一样的，所以直接实现
    fry() {
        console.log("炒啊炒啊炒到熟啊");
    }
}
