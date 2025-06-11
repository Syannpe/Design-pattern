/**
 * @version v1.0
 * @ClassNmae: Client
 * @Description: desc
 * @Author: SYANNPE
 */
import FastFood from "./FastFood";
import FriedRice from "./FriedRice";
import Egg from "./Egg";
import Bacon from "./Bacon";

export default class Client {
    public static main(args: string[]): void {
        let fastFood: FastFood = new FriedRice();
        console.log(fastFood.desc + ": " + fastFood.cost() + "元");

        console.log("==".repeat(15));

        // 加一个鸡蛋
        fastFood = new Egg(fastFood);
        console.log(fastFood.desc + ": " + fastFood.cost() + "元");

        console.log("==".repeat(15));
        // 再加一个鸡蛋
        fastFood = new Egg(fastFood);
        console.log(fastFood.desc + ": " + fastFood.cost() + "元");

        console.log("==".repeat(15));
        // 再加一个培根
        fastFood = new Bacon(fastFood);
        console.log(fastFood.desc + ": " + fastFood.cost() + "元");

        /*       fastFood = new Egg(fastFood);
               console.log(fastFood.desc + ": " + fastFood.cost);
               fastFood = new Bacon(fastFood);
               console.log()*/
    }
}
Client.main([]);