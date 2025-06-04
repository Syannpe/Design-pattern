/**
 * @version v1.0
 * @ClassNmae: TrainStation
 * @Description: 火车站类
 * @Author: SYANNPE
 */
import SellTickets from "./SellTickets";

export default class TrainStation implements SellTickets {
    sell(): void {
        console.log('火车站卖票');
    }
}