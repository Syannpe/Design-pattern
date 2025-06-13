/**
 * @version v1.0
 * @ClassNmae: Client
 * @Description: desc
 * @Author: SYANNPE
 */
import SalesMan from "./SalesMan";
import StrategyA from "./StrategyA";
import StrategyB from "./StrategyB";
import StrategyC from "./StrategyC";

export default class Client {
    public static main(args: string[]): void {
        let salesMan: SalesMan = new SalesMan(new StrategyA());
        salesMan.salesManShow();
        console.log("-------------------------")

        salesMan.strategy = new StrategyB();
        salesMan.salesManShow();
        console.log("-------------------------")

        salesMan.strategy = new StrategyC();
        salesMan.salesManShow();
    }
}
Client.main([])