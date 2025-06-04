/**
 * @version v1.0
 * @ClassNmae: ProxyPoint
 * @Description: 代售点类
 * @Author: SYANNPE
 */
import SellTickets from "./SellTickets";
import TrainStation from "./TrainStation";

export default class ProxyPoint implements SellTickets {
    // 声明火车站类对象
    private trainStation: TrainStation = new TrainStation();

    sell(): void {
        console.log("代售点收取一些服务费用");
        this.trainStation.sell();
    }
}