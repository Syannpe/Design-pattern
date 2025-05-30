/**
 * @version v1.0
 * @ClassNmae: Coffee
 * @Description: 咖啡基类
 * @Author: Syannpe
 */

export default abstract class Coffee {
    public abstract getName(): string;

    public addMilk(): void {
        console.log("加奶");
    }

    public addSugar(): void {
        console.log("加糖");
    }
}