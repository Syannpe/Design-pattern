/**
 * @version v1.0
 * @ClassNmae: AbstractClass
 * @Description: 抽象类：定义模板方法和基本方法
 * @Author: SYANNPE
 */

export default abstract class AbstractClass {
    // 模板方法定义
    public cookProcess(): void {
        this.pourOil();
        this.heatOil();
        this.pourVegetable();
        this.pourSauce();
        this.fry();
    }

    public pourOil(): void {
        console.log("倒油");
    }

//第三步:热油是一样的，所以直接实现
    public heatOil(): void {
        console.log("热油")
    };

//第三步:倒蔬菜是不一样的(一个下包菜，一个是下菜心)
    public abstract pourVegetable(): void;

//第四步:倒调味料是不一样
    public abstract pourSauce(): void;

//第五步:翻炒是一样的，所以直接实现
    public fry(): void {
        console.log("炒啊炒啊炒到熟啊");
    }
}