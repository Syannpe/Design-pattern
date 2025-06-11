import FriedRice from "./FriedRice";
import Egg from "./Egg";
import Bacon from "./Bacon";
export default class Client {
    static main(args) {
        let fastFood = new FriedRice();
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
